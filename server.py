"""HomeTask classroom MVP: FastAPI + SQLite, no third-party auth/payment services."""
import hashlib
import hmac
import os
import re
import secrets
import sqlite3
import time
import json
import base64
import math
from collections import defaultdict
from datetime import datetime, timezone, timedelta
from zoneinfo import ZoneInfo
from urllib import request as urlrequest, parse as urlparse, error as urlerror
from fastapi.responses import RedirectResponse, Response
from contextlib import contextmanager
from pathlib import Path
from typing import Optional

from fastapi import FastAPI, Request, HTTPException
from fastapi.responses import FileResponse, JSONResponse
from pydantic import BaseModel, Field

HERE = Path(__file__).resolve().parent
DB = Path(os.getenv('HOMETASK_DB', str(HERE / 'hometask.sqlite3')))
SITE_TZ = ZoneInfo('America/New_York')
SESSION_DAYS = 7
CATEGORIES = ('Lawn & Yard','Painting','Furniture','Repairs','Cleaning','Moving','Flooring','Other')
DIFFICULTIES = ('Easy','Medium','Hard')
app = FastAPI(title='HomeTask MVP')
@app.middleware('http')
async def origin_protection(request:Request,call_next):
    # Reject browser-originated cross-site POST/PUT/PATCH/DELETE requests.
    # An absent Origin is normal for non-browser test clients, same-origin scripts,
    # and server clients; sensitive actions still require session authorization.
    if request.method in ('POST','PUT','PATCH','DELETE'):
        origin=request.headers.get('origin','')
        if origin:
            from urllib.parse import urlsplit
            parsed=urlsplit(origin)
            # The Host comparison also works with a local reverse proxy and ports.
            host=request.headers.get('host','')
            if parsed.scheme not in ('http','https') or parsed.netloc.lower()!=host.lower():
                return JSONResponse({'detail':'Cross-site form requests are not allowed.'},status_code=403)
    return await call_next(request)

@app.get('/assets/styles.css')
def css(): return FileResponse(HERE/'styles.css',media_type='text/css')

@app.get('/assets/app.js')
def js(): return FileResponse(HERE/'app.js',media_type='text/javascript')

# Only these bundled brand assets are publicly served, never uploaded/private files.
BRAND_ASSETS = {
    'logo-1-icon.png', 'logo-1-wordmark.png', 'logo-1-stacked.png', 'logo-horizontal.png',
    'logo-2-icon.png', 'logo-2-wordmark.png', 'logo-2-stacked.png',
    'favicon-32.png', 'favicon-180.png', 'verified-house.png'
}
@app.get('/assets/{asset_name}')
def brand_asset(asset_name: str):
    if asset_name not in BRAND_ASSETS: fail(404, 'Asset not found.')
    return FileResponse(HERE/'brand'/asset_name, media_type='image/png')


@contextmanager
def conn():
    DB.parent.mkdir(parents=True, exist_ok=True)
    c = sqlite3.connect(DB, timeout=10)
    c.row_factory = sqlite3.Row
    c.execute('PRAGMA foreign_keys=ON')
    try:
        yield c
        c.commit()
    except:
        c.rollback()
        raise
    finally:
        c.close()

def private_map_center(lat, lon):
    """Random private center within 0.20 mi of a job, inside a 0.25-mi map circle.

    Stable once saved in SQLite. The exact center offset is never included
    in any link between the public circle and the full address.
    """
    bearing = secrets.randbelow(360000) / 1000 * math.pi / 180
    # Radius 0.11-0.20mi means the actual address is somewhere inside the drawn disk.
    distance = 0.11 + secrets.randbelow(9000) / 100000
    dy = distance * math.cos(bearing) / 69.0
    dx = distance * math.sin(bearing) / max(1,69.172 * math.cos(float(lat) * math.pi / 180))
    return round(float(lat) + dy,7), round(float(lon) + dx,7)


def public_map_fields(job):
    """Public area is a half-mile diameter, not an exact pin or address."""
    lat, lon = job.get('map_latitude'), job.get('map_longitude')
    if lat is None or lon is None:
        return {'map_latitude': None, 'map_longitude': None, 'map_radius_m': None}
    return {'map_latitude': float(lat), 'map_longitude': float(lon), 'map_radius_m': 402.336}


def init_db():
    with conn() as c:
        c.executescript('''
            PRAGMA journal_mode=WAL;
            CREATE TABLE IF NOT EXISTS users (
              id INTEGER PRIMARY KEY, name TEXT NOT NULL, email TEXT NOT NULL UNIQUE,
              password_hash TEXT NOT NULL, bio TEXT NOT NULL DEFAULT '',
              skills TEXT NOT NULL DEFAULT '', location TEXT NOT NULL DEFAULT '',
              role TEXT NOT NULL DEFAULT 'customer', created_at INTEGER NOT NULL);
            CREATE TABLE IF NOT EXISTS sessions (
              token_hash TEXT PRIMARY KEY, user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
              expires INTEGER NOT NULL);
            CREATE TABLE IF NOT EXISTS jobs (
              id INTEGER PRIMARY KEY, owner_id INTEGER NOT NULL REFERENCES users(id),
              title TEXT NOT NULL, category TEXT NOT NULL, description TEXT NOT NULL,
              location TEXT NOT NULL, difficulty TEXT NOT NULL, budget INTEGER NOT NULL,
              status TEXT NOT NULL DEFAULT 'open', accepted_offer_id INTEGER,
              created_at INTEGER NOT NULL);
            CREATE TABLE IF NOT EXISTS offers (
              id INTEGER PRIMARY KEY, job_id INTEGER NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
              worker_id INTEGER NOT NULL REFERENCES users(id), price INTEGER NOT NULL,
              note TEXT NOT NULL DEFAULT '', created_at INTEGER NOT NULL,
              UNIQUE(job_id,worker_id));
            CREATE TABLE IF NOT EXISTS messages (
              id INTEGER PRIMARY KEY, job_id INTEGER NOT NULL REFERENCES jobs(id),
              sender_id INTEGER NOT NULL REFERENCES users(id),
              recipient_id INTEGER NOT NULL REFERENCES users(id),
              body TEXT NOT NULL, created_at INTEGER NOT NULL);
            CREATE INDEX IF NOT EXISTS idx_jobs_status ON jobs(status);
            CREATE INDEX IF NOT EXISTS idx_messages_lookup ON messages(job_id,sender_id,recipient_id);
        ''')
        columns={row['name'] for row in c.execute('PRAGMA table_info(jobs)')}
        if 'latitude' not in columns: c.execute('ALTER TABLE jobs ADD COLUMN latitude REAL')
        if 'longitude' not in columns: c.execute('ALTER TABLE jobs ADD COLUMN longitude REAL')
        for col,typ in [('duration_minutes','INTEGER NOT NULL DEFAULT 120'),('flexible_schedule','INTEGER NOT NULL DEFAULT 1'),('scheduled_start','TEXT'),('scheduled_end','TEXT'),('scheduled_offer_id','INTEGER')]:
            if col not in columns: c.execute(f'ALTER TABLE jobs ADD COLUMN {col} {typ}')
        offer_cols={row['name'] for row in c.execute('PRAGMA table_info(offers)')}
        for col in ['proposed_start','proposed_end']:
            if col not in offer_cols: c.execute(f'ALTER TABLE offers ADD COLUMN {col} TEXT')
        usercols={row['name'] for row in c.execute('PRAGMA table_info(users)')}
        if 'avatar_data' not in usercols: c.execute("ALTER TABLE users ADD COLUMN avatar_data TEXT NOT NULL DEFAULT ''")
        if 'banner_data' not in usercols: c.execute("ALTER TABLE users ADD COLUMN banner_data TEXT NOT NULL DEFAULT ''")
        # One stable, randomly offset map-area center per job. Never return the true
        # address point through the public map fields.
        for field in ('map_latitude', 'map_longitude'):
            if field not in columns: c.execute(f'ALTER TABLE jobs ADD COLUMN {field} REAL')
        c.execute("CREATE INDEX IF NOT EXISTS idx_jobs_map_area ON jobs(map_latitude,map_longitude)")
        for j in c.execute('SELECT id,latitude,longitude,map_latitude,map_longitude FROM jobs WHERE latitude IS NOT NULL AND longitude IS NOT NULL AND (map_latitude IS NULL OR map_longitude IS NULL)').fetchall():
            lat, lon = private_map_center(j['latitude'], j['longitude'])
            c.execute('UPDATE jobs SET map_latitude=?,map_longitude=? WHERE id=?',(lat,lon,j['id']))
        offercols={row['name'] for row in c.execute('PRAGMA table_info(offers)')}
        if 'decision' not in offercols: c.execute("ALTER TABLE offers ADD COLUMN decision TEXT NOT NULL DEFAULT 'pending'")
        c.executescript('''
          CREATE TABLE IF NOT EXISTS job_slots (
            id INTEGER PRIMARY KEY,job_id INTEGER NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
            start_time TEXT NOT NULL,end_time TEXT NOT NULL);
          CREATE TABLE IF NOT EXISTS google_connections (
            user_id INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
            refresh_token TEXT NOT NULL,access_token TEXT NOT NULL DEFAULT '',expires_at INTEGER NOT NULL DEFAULT 0);
          CREATE TABLE IF NOT EXISTS calendar_event_links (
            job_id INTEGER NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
            user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            google_event_id TEXT NOT NULL, PRIMARY KEY(job_id,user_id));
          CREATE INDEX IF NOT EXISTS idx_job_slots_job ON job_slots(job_id);
          CREATE TABLE IF NOT EXISTS notifications (
            id INTEGER PRIMARY KEY,
            user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            job_id INTEGER NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
            kind TEXT NOT NULL,
            title TEXT NOT NULL,
            body TEXT NOT NULL,
            created_at INTEGER NOT NULL,
            read_at INTEGER
          );
          CREATE INDEX IF NOT EXISTS idx_notifications_user ON notifications(user_id,read_at,id DESC);
          CREATE TABLE IF NOT EXISTS reviews (
            id INTEGER PRIMARY KEY,
            job_id INTEGER NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
            author_id INTEGER NOT NULL REFERENCES users(id),
            recipient_id INTEGER NOT NULL REFERENCES users(id),
            rating INTEGER NOT NULL CHECK(rating BETWEEN 1 AND 5),
            comment TEXT NOT NULL DEFAULT '',
            created_at INTEGER NOT NULL,
            UNIQUE(job_id,author_id)
          );
          CREATE INDEX IF NOT EXISTS idx_reviews_recipient ON reviews(recipient_id);
        ''')
# Version 10 migrations. These are additive and keep existing accounts, offers, and jobs.
def init_v10():
    with conn() as c:
        migrations=[('jobs','completed_at','INTEGER'),('offers','counter_price','INTEGER'),
                    ('offers','counter_note',"TEXT NOT NULL DEFAULT ''"),
                    ('offers','counter_status',"TEXT NOT NULL DEFAULT 'none'"),
                    ('messages','read_at','INTEGER')]
        for table,col,typ in migrations:
            existing={x['name'] for x in c.execute(f'PRAGMA table_info({table})')}
            if col not in existing:c.execute(f'ALTER TABLE {table} ADD COLUMN {col} {typ}')
        c.executescript('''
            CREATE TABLE IF NOT EXISTS job_photos (
              id INTEGER PRIMARY KEY, job_id INTEGER NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
              photo_data TEXT NOT NULL, created_at INTEGER NOT NULL);
            CREATE INDEX IF NOT EXISTS idx_job_photos_job ON job_photos(job_id);
            CREATE TABLE IF NOT EXISTS invitations (
              id INTEGER PRIMARY KEY,job_id INTEGER NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
              worker_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
              created_at INTEGER NOT NULL, UNIQUE(job_id,worker_id));
            CREATE INDEX IF NOT EXISTS idx_invites_worker ON invitations(worker_id,created_at);
            CREATE TABLE IF NOT EXISTS deleted_reviews (
              job_id INTEGER NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
              author_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
              deleted_at INTEGER NOT NULL, PRIMARY KEY(job_id,author_id));
        ''')
        # Older completed jobs did not have an explicit completion date.
        c.execute("UPDATE jobs SET completed_at=created_at WHERE status='completed' AND completed_at IS NULL")
init_db()
init_v10()

def init_v11():
    # Hiding messages and conversations is per-account and never deletes another person's copy.
    with conn() as c:
        c.executescript("""
          CREATE TABLE IF NOT EXISTS hidden_messages (
            user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            message_id INTEGER NOT NULL REFERENCES messages(id) ON DELETE CASCADE,
            PRIMARY KEY(user_id,message_id));
          CREATE TABLE IF NOT EXISTS hidden_conversations (
            user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            job_id INTEGER NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
            partner_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            through_message_id INTEGER NOT NULL DEFAULT 0,
            PRIMARY KEY(user_id,job_id,partner_id));
        """)
init_v11()

def init_v13():
    # Additive migration; never drops an existing job, offer or user.
    with conn() as c:
        existing={row['name'] for row in c.execute('PRAGMA table_info(jobs)')}
        for name,sql_type in [('cancel_reason',"TEXT"),('cancel_note',"TEXT"),
                              ('cancelled_by',"INTEGER"),('cancelled_at',"INTEGER")]:
            if name not in existing:
                c.execute(f'ALTER TABLE jobs ADD COLUMN {name} {sql_type}')
init_v13()

# Version 13.3: additive tables and columns. Existing HomeTask data is preserved.
def init_v13_3():
    with conn() as c:
        job_cols={r['name'] for r in c.execute('PRAGMA table_info(jobs)')}
        for col,typ in [('completion_requested_at','INTEGER'),('completion_note','TEXT'),('completion_rejected_at','INTEGER')]:
            if col not in job_cols:c.execute(f'ALTER TABLE jobs ADD COLUMN {col} {typ}')
        review_cols={r['name'] for r in c.execute('PRAGMA table_info(reviews)')}
        if 'photo_data' not in review_cols:c.execute("ALTER TABLE reviews ADD COLUMN photo_data TEXT NOT NULL DEFAULT ''")
        c.executescript("""CREATE TABLE IF NOT EXISTS saved_jobs (
          worker_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
          job_id INTEGER NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
          created_at INTEGER NOT NULL, PRIMARY KEY(worker_id,job_id));
        CREATE TABLE IF NOT EXISTS worker_follows (
          follower_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
          worker_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
          created_at INTEGER NOT NULL, PRIMARY KEY(follower_id,worker_id));
        CREATE INDEX IF NOT EXISTS idx_worker_follows ON worker_follows(worker_id);
        CREATE TABLE IF NOT EXISTS previous_work (
          id INTEGER PRIMARY KEY, worker_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
          title TEXT NOT NULL, description TEXT NOT NULL DEFAULT '',category TEXT NOT NULL,
          photo_data TEXT NOT NULL,created_at INTEGER NOT NULL);
        CREATE INDEX IF NOT EXISTS idx_previous_work ON previous_work(worker_id,id DESC);
        CREATE TABLE IF NOT EXISTS weekly_availability (
          id INTEGER PRIMARY KEY,worker_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
          weekday INTEGER NOT NULL CHECK(weekday BETWEEN 0 AND 6),
          start_time TEXT NOT NULL,end_time TEXT NOT NULL);
        CREATE INDEX IF NOT EXISTS idx_weekly_availability ON weekly_availability(worker_id,weekday);
        CREATE TABLE IF NOT EXISTS worker_verifications (
          worker_id INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
          statement TEXT NOT NULL,status TEXT NOT NULL DEFAULT 'pending',
          submitted_at INTEGER NOT NULL,reviewed_at INTEGER,reviewer_id INTEGER REFERENCES users(id));
        """)
init_v13_3()

# Version 13.4: verification alerts are account events, not job events.
# Keep old notifications intact while making job_id nullable for account alerts.
def init_v13_4():
    with conn() as c:
        columns={col['name']:col for col in c.execute('PRAGMA table_info(notifications)')}
        if columns.get('job_id') and columns['job_id']['notnull']:
            c.execute('''CREATE TABLE notifications_v134 (
              id INTEGER PRIMARY KEY,
              user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
              job_id INTEGER REFERENCES jobs(id) ON DELETE CASCADE,
              kind TEXT NOT NULL,
              title TEXT NOT NULL,
              body TEXT NOT NULL,
              created_at INTEGER NOT NULL,
              read_at INTEGER)''')
            c.execute('''INSERT INTO notifications_v134
                (id,user_id,job_id,kind,title,body,created_at,read_at)
                SELECT id,user_id,job_id,kind,title,body,created_at,read_at FROM notifications''')
            c.execute('DROP TABLE notifications')
            c.execute('ALTER TABLE notifications_v134 RENAME TO notifications')
            c.execute('CREATE INDEX IF NOT EXISTS idx_notifications_user ON notifications(user_id,read_at,id DESC)')
init_v13_4()

# HomeTask 13.8: additive administration, reports and notification history.
def init_v13_8():
    with conn() as c:
        ucols={r['name'] for r in c.execute('PRAGMA table_info(users)')}
        if 'is_admin' not in ucols:
            c.execute('ALTER TABLE users ADD COLUMN is_admin INTEGER NOT NULL DEFAULT 0')
            # One-time migration from the 13.7 environment-based administrator.
            # Never use this environment variable for authorization afterwards.
            original=os.getenv('HOMETASK_ADMIN_EMAIL','').strip().lower()
            if original:c.execute('UPDATE users SET is_admin=1 WHERE lower(email)=?',(original,))
        if 'account_status' not in ucols:
            c.execute("ALTER TABLE users ADD COLUMN account_status TEXT NOT NULL DEFAULT 'active'")
        jcols={r['name'] for r in c.execute('PRAGMA table_info(jobs)')}
        if 'moderation_status' not in jcols:
            c.execute("ALTER TABLE jobs ADD COLUMN moderation_status TEXT NOT NULL DEFAULT 'visible'")
        ncols={r['name'] for r in c.execute('PRAGMA table_info(notifications)')}
        if 'dismissed_at' not in ncols:
            c.execute('ALTER TABLE notifications ADD COLUMN dismissed_at INTEGER')
        vcols={r['name'] for r in c.execute('PRAGMA table_info(worker_verifications)')}
        if 'admin_note' not in vcols:
            c.execute("ALTER TABLE worker_verifications ADD COLUMN admin_note TEXT NOT NULL DEFAULT ''")
        c.executescript("""
          CREATE TABLE IF NOT EXISTS marketplace_reports (
             id INTEGER PRIMARY KEY, reporter_id INTEGER NOT NULL REFERENCES users(id),
             target_type TEXT NOT NULL CHECK(target_type IN ('job','user')),
             target_id INTEGER NOT NULL,
             category TEXT NOT NULL CHECK(category IN ('spam','fraud','harassment','safety','dispute','other')),
             details TEXT NOT NULL, status TEXT NOT NULL DEFAULT 'open'
               CHECK(status IN ('open','reviewing','resolved','dismissed')),
             admin_note TEXT NOT NULL DEFAULT '', created_at INTEGER NOT NULL,
             updated_at INTEGER NOT NULL, reviewer_id INTEGER REFERENCES users(id));
          CREATE INDEX IF NOT EXISTS idx_marketplace_reports_status ON marketplace_reports(status,created_at DESC);
          CREATE INDEX IF NOT EXISTS idx_marketplace_reports_target ON marketplace_reports(target_type,target_id);
          CREATE TABLE IF NOT EXISTS admin_audit (
             id INTEGER PRIMARY KEY, actor_id INTEGER NOT NULL REFERENCES users(id),
             action TEXT NOT NULL, target_type TEXT NOT NULL,
             target_id INTEGER, note TEXT NOT NULL DEFAULT '', created_at INTEGER NOT NULL);
          CREATE INDEX IF NOT EXISTS idx_admin_audit_time ON admin_audit(id DESC);
          CREATE TABLE IF NOT EXISTS verification_events (
             id INTEGER PRIMARY KEY, worker_id INTEGER NOT NULL REFERENCES users(id),
             admin_id INTEGER REFERENCES users(id), status TEXT NOT NULL,
             note TEXT NOT NULL DEFAULT '', created_at INTEGER NOT NULL);
          CREATE TABLE IF NOT EXISTS platform_settings (
             key TEXT PRIMARY KEY,value TEXT NOT NULL DEFAULT '');
        """)
init_v13_8()

# 13.9: final pre-mobile account, safety, matching, and payment-readiness schema.
def init_v13_9():
    with conn() as c:
        fields={x['name'] for x in c.execute('PRAGMA table_info(users)')}
        if 'email_verified' not in fields:
            c.execute('ALTER TABLE users ADD COLUMN email_verified INTEGER NOT NULL DEFAULT 1')
        jobs_cols={x['name'] for x in c.execute('PRAGMA table_info(jobs)')}
        if 'offer_deadline' not in jobs_cols:c.execute('ALTER TABLE jobs ADD COLUMN offer_deadline TEXT')
        c.executescript("""
          CREATE TABLE IF NOT EXISTS user_blocks (
            blocker_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            blocked_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            created_at INTEGER NOT NULL,
            PRIMARY KEY(blocker_id,blocked_id),CHECK(blocker_id<>blocked_id));
          CREATE INDEX IF NOT EXISTS idx_user_blocks_target ON user_blocks(blocked_id,blocker_id);
          CREATE TABLE IF NOT EXISTS auth_tokens (
            token_hash TEXT PRIMARY KEY,
            user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            purpose TEXT NOT NULL CHECK(purpose IN ('verify_email','reset_password')),
            expires INTEGER NOT NULL,created_at INTEGER NOT NULL);
          CREATE INDEX IF NOT EXISTS idx_auth_tokens_lookup ON auth_tokens(user_id,purpose);
          CREATE TABLE IF NOT EXISTS login_attempts (
            email_hash TEXT PRIMARY KEY,failures INTEGER NOT NULL DEFAULT 0,
            first_failure INTEGER NOT NULL,last_failure INTEGER NOT NULL);
          CREATE TABLE IF NOT EXISTS worker_preferences (
            user_id INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
            categories_json TEXT NOT NULL DEFAULT '[]',radius_miles INTEGER NOT NULL DEFAULT 25);
          CREATE TABLE IF NOT EXISTS payment_plans (
            job_id INTEGER PRIMARY KEY REFERENCES jobs(id) ON DELETE CASCADE,
            accepted_value INTEGER NOT NULL DEFAULT 0,
            platform_fee_bps INTEGER NOT NULL DEFAULT 0,
            status TEXT NOT NULL DEFAULT 'not_enabled',created_at INTEGER NOT NULL,
            CHECK(status='not_enabled'));
        """)
init_v13_9()

# 14.1 additive upgrades: preserve existing jobs and all uploaded images.
def init_v14_1():
    with conn() as c:
        cols={x['name'] for x in c.execute('PRAGMA table_info(jobs)')}
        if 'main_photo_id' not in cols:
            c.execute('ALTER TABLE jobs ADD COLUMN main_photo_id INTEGER')
            # Backfill once only; thereafter respect a customer's choice to hide a preview.
            c.execute('''UPDATE jobs SET main_photo_id=(SELECT MIN(p.id) FROM job_photos p WHERE p.job_id=jobs.id)
                         WHERE EXISTS(SELECT 1 FROM job_photos p WHERE p.job_id=jobs.id)''')
        c.execute('''CREATE TABLE IF NOT EXISTS user_image_framing (
            user_id INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
            banner_x INTEGER NOT NULL DEFAULT 50,
            banner_y INTEGER NOT NULL DEFAULT 50,
            banner_zoom INTEGER NOT NULL DEFAULT 100,
            avatar_x INTEGER NOT NULL DEFAULT 50,
            avatar_y INTEGER NOT NULL DEFAULT 50,
            avatar_zoom INTEGER NOT NULL DEFAULT 100
        )''')
init_v14_1()

# 14.2: additive marketplace UX data. No existing accounts, offers or images are replaced.
def init_v14_2():
    with conn() as c:
        c.executescript("""
          CREATE TABLE IF NOT EXISTS job_drafts (
            user_id INTEGER PRIMARY KEY REFERENCES users(id) ON DELETE CASCADE,
            draft_json TEXT NOT NULL, updated_at INTEGER NOT NULL);
          CREATE TABLE IF NOT EXISTS job_result_photos (
            job_id INTEGER NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
            kind TEXT NOT NULL CHECK(kind IN ('before','after')),
            worker_id INTEGER NOT NULL REFERENCES users(id),
            photo_data TEXT NOT NULL, uploaded_at INTEGER NOT NULL,
            PRIMARY KEY(job_id,kind));
          CREATE TABLE IF NOT EXISTS job_showcase_consent (
            job_id INTEGER PRIMARY KEY REFERENCES jobs(id) ON DELETE CASCADE,
            allowed INTEGER NOT NULL DEFAULT 0, updated_at INTEGER NOT NULL);
          CREATE TABLE IF NOT EXISTS job_reminder_log (
            job_id INTEGER NOT NULL REFERENCES jobs(id) ON DELETE CASCADE,
            user_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
            window TEXT NOT NULL CHECK(window IN ('24h','2h')),
            sent_at INTEGER NOT NULL, PRIMARY KEY(job_id,user_id,window));
          CREATE INDEX IF NOT EXISTS idx_result_worker ON job_result_photos(worker_id,job_id);
        """)
init_v14_2()

# 14.2.1: a worker may highlight their own customer-confirmed, completed jobs.
# Public cards never include customer name, job title, description, location or unapproved images.
def init_v14_2_1():
    with conn() as c:
        c.executescript("""CREATE TABLE IF NOT EXISTS completed_work_highlights (
          job_id INTEGER PRIMARY KEY REFERENCES jobs(id) ON DELETE CASCADE,
          worker_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
          created_at INTEGER NOT NULL);
          CREATE INDEX IF NOT EXISTS idx_completed_work_highlights ON completed_work_highlights(worker_id,created_at DESC);""")
init_v14_2_1()

# 14.3: immutable fee snapshot and external checkout ledger. Older demo bookings
# remain unfunded and are never represented as collected payments.
HOMETASK_COMMISSION_BPS = 1000  # 10% deducted from worker's agreed offer
HOMETASK_CUSTOMER_FEE_BPS = 500  # 5% added to the customer's agreed task price
def payment_mode():
    key=os.getenv('HOMETASK_STRIPE_TEST_SECRET','').strip()
    webhook=os.getenv('HOMETASK_STRIPE_WEBHOOK_SECRET','').strip()
    if key or webhook:
        if key.startswith('sk_test_') and webhook.startswith('whsec_'):
            return 'stripe_test'
        return 'configuration_error'  # Never silently downgrade a partial/invalid setup to unfunded hiring.
    return 'demo_unfunded'

def commission_breakdown(price):
    amount=int(price)*100  # Existing HomeTask offer prices are whole USD.
    fee=(amount*HOMETASK_COMMISSION_BPS+5000)//10000
    service_fee=(amount*HOMETASK_CUSTOMER_FEE_BPS+5000)//10000
    return {'agreed_price_cents':amount,'commission_cents':fee,
            'worker_net_cents':amount-fee,'commission_bps':HOMETASK_COMMISSION_BPS,
             'service_fee_cents':service_fee,'checkout_total_cents':amount+service_fee,
             'customer_fee_bps':HOMETASK_CUSTOMER_FEE_BPS}

def init_v14_3():
    with conn() as c:
        c.executescript("""
        CREATE TABLE IF NOT EXISTS payment_transactions (
          job_id INTEGER PRIMARY KEY REFERENCES jobs(id) ON DELETE CASCADE,
          offer_id INTEGER NOT NULL REFERENCES offers(id),
          customer_id INTEGER NOT NULL REFERENCES users(id),
          worker_id INTEGER NOT NULL REFERENCES users(id),
          agreed_price_cents INTEGER NOT NULL,
          commission_cents INTEGER NOT NULL,
          worker_net_cents INTEGER NOT NULL,
          service_fee_cents INTEGER NOT NULL DEFAULT 0,
          checkout_total_cents INTEGER,
          mode TEXT NOT NULL CHECK(mode IN ('stripe_test','demo_unfunded')),
          status TEXT NOT NULL CHECK(status IN ('checkout_pending','paid_test','unfunded_demo','expired','failed')),
          checkout_session_id TEXT UNIQUE,
          payment_intent_id TEXT,
          created_at INTEGER NOT NULL,
          checkout_expires_at INTEGER,
          paid_at INTEGER,
          transfer_status TEXT NOT NULL DEFAULT 'not_started'
        );
        CREATE TABLE IF NOT EXISTS payment_webhook_events (
          event_id TEXT PRIMARY KEY, received_at INTEGER NOT NULL
        );
        CREATE INDEX IF NOT EXISTS idx_payment_tx_customer ON payment_transactions(customer_id,created_at DESC);
        CREATE INDEX IF NOT EXISTS idx_payment_tx_worker ON payment_transactions(worker_id,created_at DESC);
        """)
        # 14.4 additive migration: preserve exact historic payment totals and fee agreements.
        columns={r['name'] for r in c.execute('PRAGMA table_info(payment_transactions)')}
        if 'service_fee_cents' not in columns:
            c.execute('ALTER TABLE payment_transactions ADD COLUMN service_fee_cents INTEGER NOT NULL DEFAULT 0')
        if 'checkout_total_cents' not in columns:
            c.execute('ALTER TABLE payment_transactions ADD COLUMN checkout_total_cents INTEGER')
        # Historic checkouts had no customer fee: they must remain at the original price.
        c.execute('UPDATE payment_transactions SET checkout_total_cents=agreed_price_cents WHERE checkout_total_cents IS NULL')
init_v14_3()

# Images are resized client-side and checked again server-side for safety.
def validate_image_data(data:str,max_bytes:int=300000)->str:
    if not data:return ''
    match=re.fullmatch(r'data:image/(jpeg|png|webp);base64,([A-Za-z0-9+/=]+)',data)
    if not match:fail(400,'Use a JPEG, PNG or WebP image.')
    try:raw=base64.b64decode(match.group(2),validate=True)
    except Exception:fail(400,'Invalid image encoding.')
    if len(raw)>max_bytes:fail(400,f'Image must be smaller than {max_bytes//1000} KB after compression.')
    if not (raw.startswith(b'\xff\xd8\xff') or raw.startswith(b'\x89PNG\r\n\x1a\n') or (raw[:4]==b'RIFF' and raw[8:12]==b'WEBP')):
        fail(400,'Image contents are invalid.')
    return data

def admin_user(u):
    return bool(u.get('is_admin'))

def public_job(job,user_id=None):
    # Full job address and exact coordinates are only shared with the owner and hired worker.
    if user_id is not None and user_id in (job['owner_id'],job.get('assigned_worker_id')):return {**job,**public_map_fields(job)}
    item=job.copy()
    parts=[p.strip() for p in str(item.get('location') or '').split(',') if p.strip()]
    # Address autocomplete sometimes includes ZIP after city/state; never use ZIP as the public area.
    if parts and re.fullmatch(r'\d{5}(?:-\d{4})?',parts[-1]):parts=parts[:-1]
    if len(parts)>=3:
        area=', '.join(parts[-2:])
    elif len(parts)==2 and re.search(r'\d|\b(street|st|road|rd|avenue|ave|drive|dr|lane|ln|blvd)\b',parts[0],re.I):
        area=parts[-1]+' area'
    elif parts and re.search(r'\d',parts[0]):
        area='Location shared after hiring'
    else:
        area=', '.join(parts) or 'Location shared after hiring'
    item['location']=area
    # Do not expose the exact coordinates in public job data.
    item['latitude']=None
    item['longitude']=None
    item.update(public_map_fields(job))
    item['address_approximate']=True
    return item

def conflicting_jobs(c,worker_id,start,end,ignore_job_id=None):
    if not start or not end:return []
    sql="""SELECT j.id,j.title,j.scheduled_start,j.scheduled_end FROM jobs j
      JOIN offers o ON o.id=j.accepted_offer_id
      WHERE j.status='accepted' AND o.worker_id=? AND j.scheduled_start < ? AND j.scheduled_end > ?"""
    params=[worker_id,end,start]
    if ignore_job_id:
        sql+=' AND j.id<>?';params.append(ignore_job_id)
    return [dictrow(r) for r in c.execute(sql,params)]

def weekly_available(c,worker_id,start,end):
    rows=c.execute('SELECT weekday,start_time,end_time FROM weekly_availability WHERE worker_id=?',(worker_id,)).fetchall()
    if not rows:return None  # no stated routine: do not infer unavailability
    if not start or not end:return None
    first=datetime.strptime(start,'%Y-%m-%dT%H:%M')
    last=datetime.strptime(end,'%Y-%m-%dT%H:%M')
    # Routine is a preference, not a ban; overnight and multi-day slots are flagged.
    if first.date()!=last.date():return False
    return any(r['weekday']==first.weekday() and r['start_time']<=first.strftime('%H:%M') and r['end_time']>=last.strftime('%H:%M') for r in rows)

class AvailabilityIn(BaseModel):
    slots:list[dict]=Field(default_factory=list,max_length=21)

class CompletionIn(BaseModel):
    note:str=Field(default='',max_length=400)

class VerificationIn(BaseModel):
    statement:str=Field(min_length=30,max_length=800)

class VerificationDecision(BaseModel):
    approve:bool

class PortfolioIn(BaseModel):
    title:str=Field(min_length=3,max_length=90)
    description:str=Field(default='',max_length=500)
    category:str
    photo_data:str=Field(min_length=30,max_length=550000)

# Saved work (separate from applied jobs).
@app.get('/api/saved-jobs')
def saved_jobs(req:Request):
    with conn() as c:
        u=current_user(req,c)
        rows=c.execute('SELECT job_id FROM saved_jobs WHERE worker_id=? ORDER BY created_at DESC',(u['id'],)).fetchall()
        return {'job_ids':[r['job_id'] for r in rows]}

@app.post('/api/saved-jobs/{job_id}')
def save_job(job_id:int,req:Request):
    with conn() as c:
        u=current_user(req,c);j=get_job(c,job_id)
        if u['role']!='worker':fail(403,'Switch to the worker workspace to save jobs.')
        if j['owner_id']==u['id'] or j['status']!='open':fail(409,'Only open jobs posted by other users may be saved.')
        c.execute('INSERT OR IGNORE INTO saved_jobs(worker_id,job_id,created_at) VALUES(?,?,?)',(u['id'],job_id,now()))
        return {'ok':True}

@app.delete('/api/saved-jobs/{job_id}')
def unsave_job(job_id:int,req:Request):
    with conn() as c:
        u=current_user(req,c)
        c.execute('DELETE FROM saved_jobs WHERE worker_id=? AND job_id=?',(u['id'],job_id))
        return {'ok':True}

# Followers: a count means following, NOT verified skills or workmanship.
@app.get('/api/following')
def following(req:Request):
    with conn() as c:
        u=current_user(req,c)
        ids=[r['worker_id'] for r in c.execute('SELECT worker_id FROM worker_follows WHERE follower_id=? ORDER BY created_at DESC',(u['id'],))]
        return {'workers':[dictrow(c.execute('SELECT id,name,bio,skills,location FROM users WHERE id=?',(id,)).fetchone()) for id in ids]}

@app.post('/api/workers/{worker_id}/follow')
def follow_worker(worker_id:int,req:Request):
    with conn() as c:
        u=current_user(req,c)
        require_verified_email(u)
        if u['role']!='customer':fail(403,'Switch to the customer workspace to follow workers.')
        if u['id']==worker_id:fail(400,'You cannot follow your own profile.')
        if users_block_each_other(c,u['id'],worker_id):fail(403,'This account is blocked.')
        if not c.execute('SELECT 1 FROM users WHERE id=?',(worker_id,)).fetchone():fail(404,'Worker not found.')
        c.execute('INSERT OR IGNORE INTO worker_follows(follower_id,worker_id,created_at) VALUES(?,?,?)',(u['id'],worker_id,now()))
        return {'ok':True}

@app.delete('/api/workers/{worker_id}/follow')
def unfollow_worker(worker_id:int,req:Request):
    with conn() as c:
        u=current_user(req,c)
        c.execute('DELETE FROM worker_follows WHERE follower_id=? AND worker_id=?',(u['id'],worker_id))
        return {'ok':True}

@app.get('/api/previous-work/mine')
def my_previous_work(req:Request):
    with conn() as c:
        u=current_user(req,c)
        return {'items':[dictrow(r) for r in c.execute('SELECT * FROM previous_work WHERE worker_id=? ORDER BY id DESC',(u['id'],))]}

@app.post('/api/previous-work')
def add_previous_work(data:PortfolioIn,req:Request):
    if data.category not in CATEGORIES:fail(400,'Invalid work category.')
    validate_image_data(data.photo_data)
    with conn() as c:
        u=current_user(req,c)
        if u['role']!='worker':fail(403,'Switch to the worker workspace to add projects.')
        count=c.execute('SELECT COUNT(*) n FROM previous_work WHERE worker_id=?',(u['id'],)).fetchone()['n']
        if count>=20:fail(409,'A maximum of 20 previous-work projects is supported.')
        cur=c.execute('INSERT INTO previous_work(worker_id,title,description,category,photo_data,created_at) VALUES(?,?,?,?,?,?)',(u['id'],data.title.strip(),data.description.strip(),data.category,data.photo_data,now()))
        return {'id':cur.lastrowid}

@app.get('/api/previous-work/completed-eligible')
def eligible_completed_work(req:Request):
    with conn() as c:
        u=current_user(req,c)
        if u['role']!='worker':fail(403,'Switch to Worker Portal to manage completed work.')
        rows=c.execute("""SELECT j.id,j.title,j.category,j.completed_at,
           CASE WHEN h.job_id IS NOT NULL THEN 1 ELSE 0 END AS added
           FROM jobs j JOIN offers o ON o.id=j.accepted_offer_id
           LEFT JOIN completed_work_highlights h ON h.job_id=j.id AND h.worker_id=?
           WHERE j.status='completed' AND j.moderation_status='visible' AND o.worker_id=?
           ORDER BY j.completed_at DESC,j.id DESC LIMIT 100""", (u['id'],u['id'])).fetchall()
        return {'jobs':[dictrow(x) for x in rows]}

@app.post('/api/previous-work/completed/{job_id}')
def highlight_completed_work(job_id:int,req:Request):
    with conn() as c:
        u=current_user(req,c)
        if u['role']!='worker':fail(403,'Only workers can add completed work.')
        job=get_job(c,job_id)
        if job['status']!='completed' or job.get('moderation_status')=='removed':
            fail(409,'Only completed, visible HomeTask assignments may be added.')
        if job.get('assigned_worker_id')!=u['id']:
            fail(403,'This is not your completed assignment.')
        c.execute('INSERT OR IGNORE INTO completed_work_highlights(job_id,worker_id,created_at) VALUES(?,?,?)',
                  (job_id,u['id'],now()))
        return {'ok':True}

@app.delete('/api/previous-work/completed/{job_id}')
def unhighlight_completed_work(job_id:int,req:Request):
    with conn() as c:
        u=current_user(req,c)
        if not c.execute('DELETE FROM completed_work_highlights WHERE job_id=? AND worker_id=?',
                         (job_id,u['id'])).rowcount:fail(404,'Completed work highlight not found.')
        return {'ok':True}

@app.delete('/api/previous-work/{item_id}')
def delete_previous_work(item_id:int,req:Request):
    with conn() as c:
        u=current_user(req,c)
        if not c.execute('DELETE FROM previous_work WHERE id=? AND worker_id=?',(item_id,u['id'])).rowcount:fail(404,'Work sample not found.')
        return {'ok':True}

@app.get('/api/worker-availability/me')
def get_weekly_availability(req:Request):
    with conn() as c:
        u=current_user(req,c)
        return {'slots':[dictrow(r) for r in c.execute('SELECT weekday,start_time AS start,end_time AS end FROM weekly_availability WHERE worker_id=? ORDER BY weekday,start_time',(u['id'],))]}

@app.put('/api/worker-availability/me')
def put_weekly_availability(data:AvailabilityIn,req:Request):
    if len(data.slots)>21:fail(400,'Up to 21 weekly windows are supported.')
    normalized=[]
    for slot in data.slots:
        try:weekday=int(slot['weekday']);start=str(slot['start']);end=str(slot['end'])
        except (ValueError,KeyError,TypeError):fail(400,'Invalid weekly time slot.')
        if weekday not in range(7) or not re.fullmatch(r'(?:[01]\d|2[0-3]):[0-5]\d',start) or not re.fullmatch(r'(?:[01]\d|2[0-3]):[0-5]\d',end) or start>=end:
            fail(400,'Weekly availability must have valid days and increasing times.')
        normalized.append((weekday,start,end))
    for i,a in enumerate(normalized):
        if any(a[0]==b[0] and a[1]<b[2] and a[2]>b[1] for b in normalized[i+1:]):fail(400,'Weekly windows may not overlap.')
    with conn() as c:
        u=current_user(req,c)
        if u['role']!='worker':fail(403,'Switch to the worker workspace to set availability.')
        c.execute('DELETE FROM weekly_availability WHERE worker_id=?',(u['id'],))
        c.executemany('INSERT INTO weekly_availability(worker_id,weekday,start_time,end_time) VALUES(?,?,?,?)',[(u['id'],*row) for row in normalized])
        return {'ok':True}

@app.get('/api/worker-availability/check')
def check_availability(start:str,end:str,req:Request,job_id:int=0):
    valid_window(start,end)
    with conn() as c:
        u=current_user(req,c)
        conflicts=conflicting_jobs(c,u['id'],start,end,job_id)
        return {'conflicts':conflicts,'within_preferred_hours':weekly_available(c,u['id'],start,end)}

# Manual review of self-reported profile information, not ID or background verification.
@app.get('/api/verification/me')
def verification_me(req:Request):
    with conn() as c:
        u=current_user(req,c)
        row=c.execute('SELECT statement,status,submitted_at,reviewed_at FROM worker_verifications WHERE worker_id=?',(u['id'],)).fetchone()
        return {'request':dictrow(row),'admin_enabled':admin_user(u)}

@app.post('/api/verification/request')
def request_verification(data:VerificationIn,req:Request):
    with conn() as c:
        u=current_user(req,c)
        if u['role']!='worker':fail(403,'Switch to the worker workspace to request verification.')
        existing=c.execute('SELECT status FROM worker_verifications WHERE worker_id=?',(u['id'],)).fetchone()
        if existing and existing['status']=='approved':fail(409,'Your profile is already verified.')
        if existing and existing['status']=='pending':fail(409,'Your verification request is already pending.')
        c.execute("""INSERT INTO worker_verifications(worker_id,statement,status,submitted_at,reviewed_at,reviewer_id)
          VALUES(?,?,'pending',?,NULL,NULL) ON CONFLICT(worker_id) DO UPDATE SET
          statement=excluded.statement,status='pending',submitted_at=excluded.submitted_at,reviewed_at=NULL,reviewer_id=NULL""",
          (u['id'],data.statement.strip(),now()))
        notify(c,u['id'],None,'verification_submitted','Verification request submitted',
               'Your HomeTask profile verification request was submitted. We will notify you when an administrator makes a decision.')
        c.execute('INSERT INTO verification_events(worker_id,status,created_at) VALUES(?,?,?)',(u['id'],'pending',now()))
        for admin in c.execute('SELECT id FROM users WHERE is_admin=1 AND account_status=\'active\' AND id<>?',(u['id'],)).fetchall():
            notify(c,admin['id'],None,'admin_verification','Verification waiting for review',f'{u["name"]} requested profile verification.')
        return {'ok':True}

@app.get('/api/verification/requests')
def verification_requests(req:Request):
    with conn() as c:
        u=current_user(req,c)
        if not admin_user(u):fail(403,'Administrator access required.')
        return {'requests':[dictrow(r) for r in c.execute("""SELECT v.worker_id,v.statement,v.status,v.submitted_at,u.name,u.skills,u.bio
          FROM worker_verifications v JOIN users u ON u.id=v.worker_id WHERE v.status='pending' ORDER BY v.submitted_at DESC""")]}

@app.post('/api/verification/{worker_id}/decision')
def verification_decision(worker_id:int,data:VerificationDecision,req:Request):
    with conn() as c:
        u=current_user(req,c)
        if not admin_user(u):fail(403,'Administrator access required.')
        row=c.execute('SELECT worker_id FROM worker_verifications WHERE worker_id=? AND status=?',(worker_id,'pending')).fetchone()
        if not row:fail(404,'Pending review not found.')
        c.execute('UPDATE worker_verifications SET status=?,reviewed_at=?,reviewer_id=? WHERE worker_id=?',('approved' if data.approve else 'rejected',now(),u['id'],worker_id))
        if data.approve:
            notify(c,worker_id,None,'verification_approved','You’re verified!',
                   'Your HomeTask profile verification request has been approved. Your profile now displays the Verified badge.')
        else:
            notify(c,worker_id,None,'verification_denied','Verification request denied',
                   'Your HomeTask profile verification request was denied. Open Verification to review the status and submit again.')
        c.execute('INSERT INTO verification_events(worker_id,admin_id,status,created_at) VALUES(?,?,?,?)',(worker_id,u['id'],'approved' if data.approve else 'rejected',now()))
        audit(c,u['id'],'verification_approved' if data.approve else 'verification_denied','user',worker_id,'Legacy verification review')
        return {'ok':True}

@app.post('/api/jobs/{job_id}/work-finished')
def work_finished(job_id:int,data:CompletionIn,req:Request):
    with conn() as c:
        u=current_user(req,c);job=get_job(c,job_id)
        if job['status']!='accepted':fail(409,'Only active assignments can be marked finished.')
        if job['assigned_worker_id']!=u['id']:fail(403,'Only the assigned worker can mark work finished.')
        if job['completion_requested_at']:fail(409,'Completion confirmation is already pending.')
        c.execute('UPDATE jobs SET completion_requested_at=?,completion_note=?,completion_rejected_at=NULL WHERE id=?',(now(),data.note.strip(),job_id))
        notify(c,job['owner_id'],job_id,'completion_requested',f'Confirm completed work: {job["title"]}',f'{u["name"]} marked the job finished. Review the results and confirm or request changes.')
        return {'job':get_job(c,job_id)}

@app.post('/api/jobs/{job_id}/work-needs-changes')
def work_needs_changes(job_id:int,data:CompletionIn,req:Request):
    if not data.note.strip():fail(400,'Explain what still needs to be completed.')
    with conn() as c:
        u=current_user(req,c);job=get_job(c,job_id)
        if job['owner_id']!=u['id']:fail(403,'Only the customer can request changes.')
        if job['status']!='accepted' or not job['completion_requested_at']:fail(409,'No completion request is pending.')
        c.execute('UPDATE jobs SET completion_requested_at=NULL,completion_note=?,completion_rejected_at=? WHERE id=?',(data.note.strip(),now(),job_id))
        notify(c,job['assigned_worker_id'],job_id,'completion_changes',f'Changes requested: {job["title"]}',f'{u["name"]} requested changes: {data.note.strip()}')
        return {'job':get_job(c,job_id)}

def fail(status, detail): raise HTTPException(status_code=status, detail=detail)
def now(): return int(time.time())
def dictrow(row): return dict(row) if row else None

def notify(c, user_id, job_id, kind, title, body):
    c.execute('''INSERT INTO notifications(user_id,job_id,kind,title,body,created_at)
                 VALUES(?,?,?,?,?,?)''', (user_id,job_id,kind,title,body,now()))

@app.get('/api/notifications')
def list_notifications(req:Request):
    with conn() as c:
        u=current_user(req,c)
        upcoming_for_user(c,u,True)
        rows=c.execute('SELECT * FROM notifications WHERE user_id=? AND dismissed_at IS NULL ORDER BY id DESC LIMIT 50',(u['id'],)).fetchall()
        return {'notifications':[dictrow(x) for x in rows],
                'unread':c.execute('SELECT COUNT(*) n FROM notifications WHERE user_id=? AND read_at IS NULL AND dismissed_at IS NULL',(u['id'],)).fetchone()['n']}

@app.post('/api/notifications/{notification_id}/read')
def read_notification(notification_id:int,req:Request):
    with conn() as c:
        u=current_user(req,c)
        cur=c.execute('UPDATE notifications SET read_at=COALESCE(read_at,?) WHERE id=? AND user_id=?',(now(),notification_id,u['id']))
        if not cur.rowcount:fail(404,'Notification not found.')
        return {'ok':True}

@app.post('/api/notifications/{notification_id}/dismiss')
def dismiss_notification(notification_id:int,req:Request):
    with conn() as c:
        u=current_user(req,c)
        cur=c.execute('UPDATE notifications SET dismissed_at=COALESCE(dismissed_at,?),read_at=COALESCE(read_at,?) WHERE id=? AND user_id=?',(now(),now(),notification_id,u['id']))
        if not cur.rowcount:fail(404,'Notification not found.')
        return {'ok':True}

def password_hash(password):
    salt = os.urandom(16)
    value = hashlib.pbkdf2_hmac('sha256', password.encode(), salt, 260000)
    return f'{salt.hex()}:{value.hex()}'

def password_ok(password, stored):
    try:
        salt, hashed=stored.split(':')
        value=hashlib.pbkdf2_hmac('sha256', password.encode(), bytes.fromhex(salt), 260000)
        return hmac.compare_digest(value, bytes.fromhex(hashed))
    except (ValueError, TypeError): return False

def current_user(req, c):
    token=req.cookies.get('hometask_session', '')
    if not token: fail(401,'Log in to continue.')
    row=c.execute('''SELECT u.id,u.name,u.email,u.role,u.bio,u.skills,u.location,u.avatar_data,u.banner_data,u.is_admin,u.account_status,u.email_verified,
             EXISTS(SELECT 1 FROM worker_verifications v WHERE v.worker_id=u.id AND v.status='approved') AS profile_verified
      FROM sessions s JOIN users u ON s.user_id=u.id
      WHERE s.token_hash=? AND s.expires>?''',(hashlib.sha256(token.encode()).hexdigest(),now())).fetchone()
    if not row: fail(401,'Session expired. Please log in again.')
    if row['account_status']!='active':fail(403,'This HomeTask account has been restricted. Contact the marketplace administrator.')
    return dictrow(row)

def require_verified_email(user):
    # Keep local capstone accounts usable until an email provider is configured;
    # after configuration, posting and contacting workers requires confirmation.
    if os.getenv('HOMETASK_SMTP_HOST') and not user.get('email_verified'):
        fail(403,'Verify your email address in Settings before posting jobs or contacting workers.')

def users_block_each_other(c,a,b):
    if not a or not b:return False
    return bool(c.execute("""SELECT 1 FROM user_blocks
      WHERE (blocker_id=? AND blocked_id=?) OR (blocker_id=? AND blocked_id=?)""",
      (a,b,b,a)).fetchone())

# Sensitive password-reset and email-verification links require SMTP configuration.
# Development links are never returned to the browser by default.
def send_account_mail(destination,subject,body):
    host=os.getenv('HOMETASK_SMTP_HOST','')
    sender=os.getenv('HOMETASK_SMTP_FROM','')
    if not host or not sender:return False
    import smtplib,ssl
    from email.message import EmailMessage
    msg=EmailMessage();msg['From']=sender;msg['To']=destination;msg['Subject']=subject
    msg.set_content(body)
    port=int(os.getenv('HOMETASK_SMTP_PORT','587'))
    if port==465:
        smtp=smtplib.SMTP_SSL(host,port,timeout=10,context=ssl.create_default_context())
    else:
        smtp=smtplib.SMTP(host,port,timeout=10)
    try:
        if port!=465:smtp.starttls(context=ssl.create_default_context())
        username=os.getenv('HOMETASK_SMTP_USER','')
        if username:smtp.login(username,os.getenv('HOMETASK_SMTP_PASSWORD',''))
        smtp.send_message(msg)
    finally:smtp.quit()
    return True

def deliver_auth_link(c,user_id,email,purpose):
    token=secrets.token_urlsafe(32)
    c.execute('DELETE FROM auth_tokens WHERE user_id=? AND purpose=?',(user_id,purpose))
    c.execute('INSERT INTO auth_tokens(token_hash,user_id,purpose,expires,created_at) VALUES(?,?,?,?,?)',
              (hashlib.sha256(token.encode()).hexdigest(),user_id,purpose,now()+1800,now()))
    base=os.getenv('HOMETASK_PUBLIC_URL','http://127.0.0.1:8000').rstrip('/')
    link=f'{base}/?{purpose}={urlparse.quote(token)}'
    subject='Verify your HomeTask email' if purpose=='verify_email' else 'Reset your HomeTask password'
    body=('This link expires in 30 minutes. If you did not request it, ignore this message.\n\n'+link)
    try:
        if send_account_mail(email,subject,body):return True
    except Exception:
        # Do not expose token or server internals in a public API response.
        pass
    return False

def auth_response(user): return {'user': user}

def set_session(response, c, user_id):
    token=secrets.token_urlsafe(40)
    c.execute('INSERT INTO sessions(token_hash,user_id,expires) VALUES(?,?,?)',
      (hashlib.sha256(token.encode()).hexdigest(), user_id, now()+SESSION_DAYS*86400))
    response.set_cookie('hometask_session',token,max_age=SESSION_DAYS*86400,
      httponly=True,samesite='lax',secure=os.getenv('HOMETASK_HTTPS')=='1',path='/')

class Register(BaseModel):
    name: str=Field(min_length=2,max_length=80)
    email: str=Field(min_length=5,max_length=254)
    password: str=Field(min_length=8,max_length=128)
    role: str='customer'

class Login(BaseModel):
    email: str
    password: str

class Profile(BaseModel):
    name: str=Field(min_length=2,max_length=80)
    role: str
    bio: str=Field(default='',max_length=600)
    skills: str=Field(default='',max_length=200)
    location: str=Field(default='',max_length=120)

class JobIn(BaseModel):
    title: str=Field(min_length=4,max_length=100)
    category: str
    description: str=Field(min_length=10,max_length=2000)
    location: str=Field(min_length=2,max_length=120)
    difficulty: str
    budget: int=Field(ge=1,le=1000000)
    latitude: Optional[float]=Field(default=None,ge=-90,le=90)
    longitude: Optional[float]=Field(default=None,ge=-180,le=180)
    duration_minutes: int=Field(default=120,ge=15,le=1440)
    flexible_schedule: bool=True
    offer_deadline: Optional[str]=None
    slots: list[dict]=Field(default_factory=list)

class OfferIn(BaseModel):
    price: int=Field(ge=1,le=1000000)
    note: str=Field(default='',max_length=400)
    proposed_start: Optional[str]=None
    proposed_end: Optional[str]=None

class ReviewIn(BaseModel):
    rating: int=Field(ge=1,le=5)
    comment: str=Field(default='',max_length=600)
    photo_data: str=Field(default='',max_length=550000)

class AvatarIn(BaseModel):
    data: str=Field(max_length=400000)

class ScheduleIn(BaseModel):
    start: str
    end: str

class JobDraftIn(BaseModel):
    fields: dict=Field(default_factory=dict)

class ShowcaseConsentIn(BaseModel):
    allowed: bool

class ResultPhotoIn(BaseModel):
    data: str=Field(min_length=50,max_length=550000)

class PhotoIn(BaseModel):
    data: str=Field(min_length=50,max_length=550000)

class CounterIn(BaseModel):
    price: int=Field(ge=1,le=1000000)
    note: str=Field(default='',max_length=400)

CANCELLATION_REASONS = (
    'Plans changed','Scheduling conflict','No longer need the service',
    'Unable to agree on terms','Hired someone elsewhere','Personal emergency','Other'
)

class CancelIn(BaseModel):
    reason: str = Field(min_length=2, max_length=80)
    note: str = Field(default='', max_length=300)

class MessageIn(BaseModel):
    body: str=Field(min_length=1,max_length=2000)


def valid_window(start,end,allow_past=False):
    try:
        a=datetime.strptime(start,'%Y-%m-%dT%H:%M').replace(tzinfo=SITE_TZ)
        b=datetime.strptime(end,'%Y-%m-%dT%H:%M').replace(tzinfo=SITE_TZ)
    except (ValueError,TypeError,AttributeError): fail(400,'Enter a valid date and time.')
    if a.utcoffset() is None or b<=a or (b-a)>timedelta(hours=24): fail(400,'Time window must be positive and no longer than 24 hours.')
    if not allow_past and a<datetime.now(SITE_TZ)-timedelta(minutes=1): fail(400,'Scheduling times must be in the future.')
    return a,b

def validate_slots(data):
    if len(data.slots)>8: fail(400,'Choose up to 8 availability windows.')
    if not data.flexible_schedule and not data.slots: fail(400,'Add at least one available time or choose flexible scheduling.')
    parsed=[]
    for slot in data.slots:
        if not isinstance(slot,dict): fail(400,'Invalid time slot.')
        start,end=slot.get('start'),slot.get('end')
        valid_window(start,end)
        parsed.append((start,end))
    if len(set(parsed))!=len(parsed): fail(400,'Duplicate time slots are not allowed.')
    return parsed

def job_slots(c,job_id):
    return [dict(r) for r in c.execute('SELECT id,start_time AS start,end_time AS end FROM job_slots WHERE job_id=? ORDER BY start_time',(job_id,)).fetchall()]

def appointment_participants(c,job):
    if not job['accepted_offer_id']: return []
    row=c.execute('SELECT worker_id FROM offers WHERE id=?',(job['accepted_offer_id'],)).fetchone()
    return [job['owner_id'],row['worker_id']] if row else []

def calendar_payload(job):
    return {'summary':'HomeTask: '+job['title'],'description':'HomeTask appointment for job #'+str(job['id'])+'. Confirm any changes in HomeTask.',
       'location':job['location'],'start':{'dateTime':job['scheduled_start']+':00','timeZone':'America/New_York'},
       'end':{'dateTime':job['scheduled_end']+':00','timeZone':'America/New_York'}}

def google_request(url,method='GET',data=None,token=None):
    headers={'Accept':'application/json'}
    if token:headers['Authorization']='Bearer '+token
    if data is not None:headers['Content-Type']='application/json; charset=utf-8'
    req=urlrequest.Request(url,data=json.dumps(data).encode() if data is not None else None,headers=headers,method=method)
    try:
        with urlrequest.urlopen(req,timeout=8) as resp:return json.loads(resp.read())
    except Exception as exc: raise RuntimeError('Google Calendar request failed') from exc

def google_access(c,user_id):
    row=c.execute('SELECT * FROM google_connections WHERE user_id=?',(user_id,)).fetchone()
    if not row:return None
    if row['expires_at']>now()+90:return row['access_token']
    secret=os.getenv('GOOGLE_CLIENT_SECRET','');client=os.getenv('GOOGLE_CLIENT_ID','')
    if not secret or not client:return None
    params=urlparse.urlencode({'client_id':client,'client_secret':secret,'refresh_token':row['refresh_token'],'grant_type':'refresh_token'}).encode()
    try:
        req=urlrequest.Request('https://oauth2.googleapis.com/token',data=params,method='POST')
        with urlrequest.urlopen(req,timeout=8) as resp:token=json.loads(resp.read())
        c.execute('UPDATE google_connections SET access_token=?,expires_at=? WHERE user_id=?',(token['access_token'],now()+token.get('expires_in',3600),user_id))
        return token['access_token']
    except Exception:return None

def sync_appointment(c,job_id):
    # Best effort: never roll back a successful hire/reschedule because Google's service is offline.
    job=get_job(c,job_id)
    if not job.get('scheduled_start') or not job.get('scheduled_end'):return
    for uid in appointment_participants(c,job):
        access=google_access(c,uid)
        if not access:continue
        previous=c.execute('SELECT google_event_id FROM calendar_event_links WHERE job_id=? AND user_id=?',(job_id,uid)).fetchone()
        try:
            if previous:
                google_request('https://www.googleapis.com/calendar/v3/calendars/primary/events/'+urlparse.quote(previous['google_event_id']), 'PATCH',calendar_payload(job),access)
            else:
                result=google_request('https://www.googleapis.com/calendar/v3/calendars/primary/events','POST',calendar_payload(job),access)
                c.execute('INSERT INTO calendar_event_links(job_id,user_id,google_event_id) VALUES(?,?,?)',(job_id,uid,result['id']))
        except Exception:pass

@app.get('/')
def index(): return FileResponse(HERE/'index.html')

@app.get('/api/me')
def me(req:Request):
    with conn() as c: return auth_response(current_user(req,c))

@app.post('/api/register')
def register(data:Register):
    name=data.name.strip();email=data.email.strip().lower()
    if len(name)<2 or not re.fullmatch(r'[^\s@]+@[^\s@]+\.[^\s@]+',email): fail(400,'Enter a valid name and email.')
    if data.role not in ('customer','worker'): fail(400,'Invalid account role.')
    with conn() as c:
        try:
            cur=c.execute('INSERT INTO users(name,email,password_hash,role,created_at) VALUES(?,?,?,?,?)',
              (name,email,password_hash(data.password),data.role,now()))
            c.execute('UPDATE users SET email_verified=0 WHERE id=?',(cur.lastrowid,))
            if os.getenv('HOMETASK_SMTP_HOST'):deliver_auth_link(c,cur.lastrowid,email,'verify_email')
        except sqlite3.IntegrityError: fail(409,'An account with that email already exists.')
        user=dictrow(c.execute('SELECT id,name,email,role,bio,skills,location,avatar_data,banner_data,is_admin,account_status,email_verified,EXISTS(SELECT 1 FROM worker_verifications v WHERE v.worker_id=users.id AND v.status=\'approved\') AS profile_verified FROM users WHERE id=?',(cur.lastrowid,)).fetchone())
        response=JSONResponse(auth_response(user));set_session(response,c,user['id'])
        return response

@app.post('/api/login')
def login(data:Login):
    with conn() as c:
        email=data.email.strip().lower()
        key=hashlib.sha256(email.encode()).hexdigest()
        attempt=c.execute('SELECT failures,first_failure,last_failure FROM login_attempts WHERE email_hash=?',(key,)).fetchone()
        if attempt and attempt['failures']>=8 and now()-attempt['first_failure']<900:
            fail(429,'Too many login attempts. Try again in 15 minutes.')
        row=c.execute('SELECT * FROM users WHERE email=?',(email,)).fetchone()
        if not row or not password_ok(data.password,row['password_hash']):
            if not attempt or now()-attempt['first_failure']>900:
                c.execute('INSERT INTO login_attempts(email_hash,failures,first_failure,last_failure) VALUES(?,1,?,?) ON CONFLICT(email_hash) DO UPDATE SET failures=1,first_failure=excluded.first_failure,last_failure=excluded.last_failure',(key,now(),now()))
            else:c.execute('UPDATE login_attempts SET failures=failures+1,last_failure=? WHERE email_hash=?',(now(),key))
            # The failed-attempt counter must survive this request, not roll back.
            # Commit it before raising HTTPException.
            c.commit()
            fail(401,'Invalid email or password.')
        c.execute('DELETE FROM login_attempts WHERE email_hash=?',(key,))
        if row['account_status']!='active': fail(403,'Account restricted. Contact the HomeTask administrator.')
        user={k:row[k] for k in ('id','name','email','role','bio','skills','location','avatar_data','banner_data','is_admin','account_status','email_verified')}
        user['profile_verified']=bool(c.execute("SELECT 1 FROM worker_verifications WHERE worker_id=? AND status='approved'",(user['id'],)).fetchone())
        response=JSONResponse(auth_response(user));set_session(response,c,user['id'])
        return response

@app.post('/api/logout')
def logout(req:Request):
    token=req.cookies.get('hometask_session','')
    with conn() as c:
        if token: c.execute('DELETE FROM sessions WHERE token_hash=?',(hashlib.sha256(token.encode()).hexdigest(),))
    response=JSONResponse({'ok':True});response.delete_cookie('hometask_session',path='/')
    return response

class ChangePasswordIn(BaseModel):
    current_password:str
    new_password:str=Field(min_length=8,max_length=128)

class ResetRequestIn(BaseModel):
    email:str

class TokenActionIn(BaseModel):
    token:str
    new_password:Optional[str]=None

class PreferencesIn(BaseModel):
    categories:list[str]=Field(default_factory=list,max_length=8)
    radius_miles:int=Field(default=25,ge=1,le=100)

@app.post('/api/account/password')
def account_change_password(data:ChangePasswordIn,req:Request):
    with conn() as c:
        u=current_user(req,c)
        pwd=c.execute('SELECT password_hash FROM users WHERE id=?',(u['id'],)).fetchone()
        if not password_ok(data.current_password,pwd['password_hash']):fail(403,'Current password is incorrect.')
        if data.current_password==data.new_password:fail(400,'Choose a new password.')
        c.execute('UPDATE users SET password_hash=? WHERE id=?',(password_hash(data.new_password),u['id']))
        c.execute('DELETE FROM login_attempts WHERE email_hash=?',(hashlib.sha256(u['email'].encode()).hexdigest(),))
        c.execute('DELETE FROM sessions WHERE user_id=?',(u['id'],))
        return {'ok':True,'signed_out':True}

@app.post('/api/account/password-reset-request')
def account_password_reset_request(data:ResetRequestIn):
    # Do not reveal whether the email exists; the mail operation is opt-in.
    email=data.email.strip().lower()
    with conn() as c:
        row=c.execute("SELECT id,email FROM users WHERE email=? AND account_status='active'",(email,)).fetchone()
        if row and os.getenv('HOMETASK_SMTP_HOST'):
            recently=c.execute("SELECT 1 FROM auth_tokens WHERE user_id=? AND purpose='reset_password' AND created_at>?",(row['id'],now()-90)).fetchone()
            if not recently:deliver_auth_link(c,row['id'],email,'reset_password')
    return {'ok':True,'configured':bool(os.getenv('HOMETASK_SMTP_HOST')),
            'message':'If this account exists, password-reset instructions have been requested.'}

@app.post('/api/account/reset-password')
def account_reset_password(data:TokenActionIn):
    if not data.new_password or len(data.new_password)<8:fail(400,'Choose a password with at least 8 characters.')
    token_hash=hashlib.sha256(data.token.encode()).hexdigest()
    with conn() as c:
        row=c.execute("SELECT user_id FROM auth_tokens WHERE token_hash=? AND purpose='reset_password' AND expires>?",(token_hash,now())).fetchone()
        if not row:fail(400,'Reset link is expired or invalid.')
        c.execute('UPDATE users SET password_hash=? WHERE id=?',(password_hash(data.new_password),row['user_id']))
        email=c.execute('SELECT email FROM users WHERE id=?',(row['user_id'],)).fetchone()['email']
        c.execute('DELETE FROM login_attempts WHERE email_hash=?',(hashlib.sha256(email.encode()).hexdigest(),))
        c.execute('DELETE FROM auth_tokens WHERE user_id=?',(row['user_id'],))
        c.execute('DELETE FROM sessions WHERE user_id=?',(row['user_id'],))
    return {'ok':True}

@app.post('/api/account/verify-email')
def account_verify_email(data:TokenActionIn):
    token_hash=hashlib.sha256(data.token.encode()).hexdigest()
    with conn() as c:
        row=c.execute("SELECT user_id FROM auth_tokens WHERE token_hash=? AND purpose='verify_email' AND expires>?",(token_hash,now())).fetchone()
        if not row:fail(400,'Verification link is expired or invalid.')
        c.execute('UPDATE users SET email_verified=1 WHERE id=?',(row['user_id'],))
        c.execute("DELETE FROM auth_tokens WHERE user_id=? AND purpose='verify_email'",(row['user_id'],))
    return {'ok':True}

@app.post('/api/account/resend-verification')
def resend_verification(req:Request):
    with conn() as c:
        u=current_user(req,c)
        if u['email_verified']:return {'ok':True,'already_verified':True}
        prior=c.execute("SELECT 1 FROM auth_tokens WHERE user_id=? AND purpose='verify_email' AND created_at>?",(u['id'],now()-90)).fetchone()
        if prior:fail(429,'Wait before requesting another verification email.')
        if not os.getenv('HOMETASK_SMTP_HOST'):fail(503,'Email sending has not been configured for this local HomeTask server.')
        sent=deliver_auth_link(c,u['id'],u['email'],'verify_email')
        if not sent:fail(503,'Verification email could not be delivered.')
        return {'ok':True}

@app.get('/api/account/export')
def export_account(req:Request):
    with conn() as c:
        u=current_user(req,c);uid=u['id']
        def get(query,args):return [dictrow(r) for r in c.execute(query,args).fetchall()]
        return {'exported_at':now(),'account':{key:u.get(key) for key in ('id','name','email','role','bio','skills','location','email_verified')},
          'my_jobs':get('SELECT id,title,category,description,location,status,budget,created_at FROM jobs WHERE owner_id=?',(uid,)),
          'my_offers':get('SELECT job_id,price,note,decision,created_at FROM offers WHERE worker_id=?',(uid,)),
          'my_messages':get('SELECT job_id,sender_id,recipient_id,body,created_at FROM messages WHERE sender_id=? OR recipient_id=?',(uid,uid)),
          'my_reviews':get('SELECT job_id,rating,comment,created_at FROM reviews WHERE author_id=?',(uid,)),
          'my_reports':get('SELECT target_type,target_id,category,details,status,created_at FROM marketplace_reports WHERE reporter_id=?',(uid,))}

@app.delete('/api/account')
def delete_account(req:Request):
    with conn() as c:
        u=current_user(req,c);uid=u['id']
        active=c.execute("SELECT COUNT(*) n FROM jobs j LEFT JOIN offers o ON j.accepted_offer_id=o.id WHERE j.status='accepted' AND (j.owner_id=? OR o.worker_id=?)",(uid,uid)).fetchone()['n']
        if active:fail(409,'Finish or cancel your active bookings before deleting your account.')
        c.execute("UPDATE jobs SET status='closed',moderation_status='removed' WHERE owner_id=? AND status='open'",(uid,))
        c.execute('DELETE FROM sessions WHERE user_id=?',(uid,))
        c.execute('DELETE FROM auth_tokens WHERE user_id=?',(uid,))
        c.execute('DELETE FROM user_blocks WHERE blocker_id=? OR blocked_id=?',(uid,uid))
        c.execute('DELETE FROM worker_follows WHERE follower_id=? OR worker_id=?',(uid,uid))
        c.execute('DELETE FROM previous_work WHERE worker_id=?',(uid,))
        c.execute('DELETE FROM completed_work_highlights WHERE worker_id=?',(uid,))
        c.execute('DELETE FROM worker_preferences WHERE user_id=?',(uid,))
        c.execute("UPDATE users SET name='Deleted account',email=?,bio='',skills='',location='',avatar_data='',banner_data='',account_status='deleted',is_admin=0 WHERE id=?",(f'deleted-{uid}-{secrets.token_hex(8)}@invalid.local',uid))
        # Historical job records and messages are kept for marketplace records.
        return {'ok':True,'historical_records_retained':True}

@app.get('/api/worker-preferences')
def get_worker_preferences(req:Request):
    with conn() as c:
        u=current_user(req,c)
        row=c.execute('SELECT categories_json,radius_miles FROM worker_preferences WHERE user_id=?',(u['id'],)).fetchone()
        return {'categories':json.loads(row['categories_json']) if row else [],'radius_miles':row['radius_miles'] if row else 25}

@app.put('/api/worker-preferences')
def put_worker_preferences(data:PreferencesIn,req:Request):
    if len(data.categories)!=len(set(data.categories)) or any(x not in CATEGORIES for x in data.categories):fail(400,'Choose valid job categories.')
    with conn() as c:
        u=current_user(req,c)
        if u['role']!='worker':fail(403,'Worker workspace required.')
        c.execute('INSERT INTO worker_preferences(user_id,categories_json,radius_miles) VALUES(?,?,?) ON CONFLICT(user_id) DO UPDATE SET categories_json=excluded.categories_json,radius_miles=excluded.radius_miles',(u['id'],json.dumps(data.categories),data.radius_miles))
    return {'ok':True}

@app.get('/api/blocks')
def list_user_blocks(req:Request):
    with conn() as c:
        u=current_user(req,c)
        return {'users':[dictrow(r) for r in c.execute('SELECT us.id,us.name,us.location FROM user_blocks b JOIN users us ON us.id=b.blocked_id WHERE b.blocker_id=? ORDER BY b.created_at DESC',(u['id'],))]}

@app.post('/api/users/{user_id}/block')
def block_user(user_id:int,req:Request):
    with conn() as c:
        u=current_user(req,c)
        if user_id==u['id']:fail(400,'You cannot block yourself.')
        row=c.execute("SELECT id FROM users WHERE id=? AND account_status='active'",(user_id,)).fetchone()
        if not row:fail(404,'User not found.')
        c.execute('INSERT OR IGNORE INTO user_blocks(blocker_id,blocked_id,created_at) VALUES(?,?,?)',(u['id'],user_id,now()))
        c.execute('DELETE FROM worker_follows WHERE (follower_id=? AND worker_id=?) OR (follower_id=? AND worker_id=?)',(u['id'],user_id,user_id,u['id']))
        return {'ok':True,'blocked':True}

@app.delete('/api/users/{user_id}/block')
def unblock_user(user_id:int,req:Request):
    with conn() as c:
        u=current_user(req,c)
        c.execute('DELETE FROM user_blocks WHERE blocker_id=? AND blocked_id=?',(u['id'],user_id))
        return {'ok':True,'blocked':False}

def stripe_test_request(path, params, idem_key=None):
    """Server-only Stripe test API call: never use a live secret in this prototype."""
    secret=os.getenv('HOMETASK_STRIPE_TEST_SECRET','')
    if not secret.startswith('sk_test_'):fail(503,'Stripe test mode is not configured.')
    body=urlparse.urlencode(params).encode('utf-8')
    import urllib.request
    auth=base64.b64encode((secret+':').encode()).decode()
    headers={'Authorization':'Basic '+auth,'Content-Type':'application/x-www-form-urlencoded'}
    if idem_key:headers['Idempotency-Key']=idem_key
    req=urlrequest.Request('https://api.stripe.com/v1/'+path.lstrip('/'),data=body,headers=headers)
    try:
        with urlrequest.urlopen(req,timeout=20) as r:
            return json.loads(r.read().decode())
    except urlerror.HTTPError as exc:
        # Never show provider response containing potential customer/private details.
        fail(502,f'Stripe test checkout could not be started (HTTP {exc.code}).')
    except (OSError,ValueError):fail(502,'Stripe test checkout is temporarily unavailable.')


def validate_offer_for_hire(c,job,offer,user):
    if job['owner_id']!=user['id']:fail(403,'Only the customer can hire a worker.')
    if job['status']!='open':fail(409,'This task is no longer open.')
    if not offer or offer['job_id']!=job['id']:fail(404,'Offer not found.')
    if offer['decision']=='rejected':fail(409,'This offer was rejected.')
    if users_block_each_other(c,user['id'],offer['worker_id']):fail(403,'Cannot hire a blocked account.')
    if offer['counter_status']=='pending':fail(409,'Wait for the worker to respond to the counteroffer.')
    if offer['proposed_start']:
        valid_window(offer['proposed_start'],offer['proposed_end'])
        if conflicting_jobs(c,offer['worker_id'],offer['proposed_start'],offer['proposed_end'],job['id']):
            fail(409,'Worker has an overlapping confirmed appointment.')
    elif job_slots(c,job['id']):fail(409,'Worker must choose or propose an appointment time.')


def hire_after_payment(c,job,offer):
    """Called ONLY for legacy-unfunded demos or after a verified paid test webhook."""
    minutes=job['duration_minutes']
    if offer['proposed_start'] and offer['proposed_end']:
        minutes=int((datetime.strptime(offer['proposed_end'],'%Y-%m-%dT%H:%M')-
                     datetime.strptime(offer['proposed_start'],'%Y-%m-%dT%H:%M')).total_seconds()/60)
        if not 15<=minutes<=1440:fail(409,'Offer duration is no longer valid.')
    updated=c.execute("""UPDATE jobs SET status='accepted',accepted_offer_id=?,scheduled_start=?,
       scheduled_end=?,scheduled_offer_id=?,duration_minutes=? WHERE id=? AND status='open'""",
       (offer['id'],offer['proposed_start'],offer['proposed_end'],offer['id'],minutes,job['id']))
    if updated.rowcount!=1:fail(409,'Another hire already completed for this task.')
    c.execute("UPDATE offers SET decision='accepted' WHERE id=?",(offer['id'],))
    notify(c,offer['worker_id'],job['id'],'hired',f'You were hired: {job["title"]}',
           f'The customer selected your ${offer["price"]:,} offer. Review the payment status and schedule in the task details.')
    sync_appointment(c,job['id'])


def has_active_checkout(c,job_id):
    row=c.execute('SELECT status,checkout_expires_at FROM payment_transactions WHERE job_id=?',(job_id,)).fetchone()
    return bool(row and row['status']=='checkout_pending' and (row['checkout_expires_at'] or 0)>now())

@app.get('/api/payments/quote/{job_id}/{offer_id}')
def payment_quote(job_id:int,offer_id:int,req:Request):
    with conn() as c:
        u=current_user(req,c);job=get_job(c,job_id)
        offer=c.execute('SELECT * FROM offers WHERE id=? AND job_id=?',(offer_id,job_id)).fetchone()
        if not offer:fail(404,'Offer not found.')
        if u['id'] not in (job['owner_id'],offer['worker_id']):fail(403,'Not your offer.')
        b=commission_breakdown(offer['price'])
        return {'job_id':job_id,'offer_id':offer_id,'mode':payment_mode(),**b,
                'checkout_total_cents':b['checkout_total_cents'] if u['id']==job['owner_id'] else None,
                'service_fee_cents':b['service_fee_cents'] if u['id']==job['owner_id'] else None,
                'customer_fee_bps':HOMETASK_CUSTOMER_FEE_BPS if u['id']==job['owner_id'] else None,
                'is_customer':u['id']==job['owner_id'],
                'real_money_collected':False}

@app.post('/api/payments/checkout/{job_id}/{offer_id}')
def start_checkout(job_id:int,offer_id:int,req:Request):
    if payment_mode()!='stripe_test':fail(503,'Stripe test checkout is not configured. This installation is in unfunded demo mode.')
    with conn() as c:
        u=current_user(req,c);require_verified_email(u);job=get_job(c,job_id)
        offer=c.execute('SELECT * FROM offers WHERE id=? AND job_id=?',(offer_id,job_id)).fetchone()
        validate_offer_for_hire(c,job,offer,u)
        if has_active_checkout(c,job_id):fail(409,'Checkout already started for this task. Try again after it expires.')
        b=commission_breakdown(offer['price'])
        creation=now();expires=creation+1800
        c.execute("""INSERT INTO payment_transactions(job_id,offer_id,customer_id,worker_id,
          agreed_price_cents,commission_cents,worker_net_cents,service_fee_cents,checkout_total_cents,mode,status,created_at,checkout_expires_at)
          VALUES(?,?,?,?,?,?,?,?,?,?,'checkout_pending',?,?)
          ON CONFLICT(job_id) DO UPDATE SET offer_id=excluded.offer_id,customer_id=excluded.customer_id,
          worker_id=excluded.worker_id,agreed_price_cents=excluded.agreed_price_cents,
          commission_cents=excluded.commission_cents,worker_net_cents=excluded.worker_net_cents,
          service_fee_cents=excluded.service_fee_cents,checkout_total_cents=excluded.checkout_total_cents,
          mode=excluded.mode,status='checkout_pending',created_at=excluded.created_at,
          checkout_expires_at=excluded.checkout_expires_at,checkout_session_id=NULL,
          payment_intent_id=NULL,paid_at=NULL,transfer_status='not_started' """,
          (job_id,offer_id,u['id'],offer['worker_id'],b['agreed_price_cents'],b['commission_cents'],
           b['worker_net_cents'],b['service_fee_cents'],b['checkout_total_cents'],'stripe_test',creation,expires))
        checkout_owner_email=u['email']
    # No SQLite lock is held across an external network request.
    base=os.getenv('HOMETASK_CHECKOUT_RETURN_URL','').strip().rstrip('/')
    if not base:base=str(req.base_url).rstrip('/')
    if not (base.startswith('https://') or base.startswith('http://127.0.0.1') or
            base.startswith('http://localhost') or re.match(r'^http://192\.168\.\d+\.\d+:\d+$',base)):
        fail(400,'Set HOMETASK_CHECKOUT_RETURN_URL to the local development address or an HTTPS site.')
    params={
      'mode':'payment','payment_method_types[0]':'card',
      'line_items[0][price_data][currency]':'usd',
      'line_items[0][price_data][unit_amount]':str(b['agreed_price_cents']),
      'line_items[1][price_data][currency]':'usd',
      'line_items[1][price_data][unit_amount]':str(b['service_fee_cents']),
      'line_items[1][price_data][product_data][name]':'HomeTask customer service fee (5%)',
      'line_items[1][quantity]':'1',
      'line_items[0][price_data][product_data][name]':f'HomeTask task #{job_id}',
      'line_items[0][quantity]':'1',
      'client_reference_id':f'{job_id}:{offer_id}',
      'customer_email':checkout_owner_email,
      'success_url':base+'/?checkout=success&session_id={CHECKOUT_SESSION_ID}',
      'cancel_url':base+'/?checkout=cancelled',
      'expires_at':str(expires),
      'metadata[job_id]':str(job_id),'metadata[offer_id]':str(offer_id),
      'payment_intent_data[transfer_group]':f'hometask_job_{job_id}'
    }
    try:
        result=stripe_test_request('checkout/sessions',params,f'ht_test_checkout_{job_id}_{offer_id}_{creation}')
        if not result.get('id','').startswith('cs_test_') or not result.get('url','').startswith('https://'):
            fail(502,'Stripe did not return a valid test checkout session.')
    except Exception:
        # Don't reserve the listing for 30 minutes when Stripe's API failed before checkout.
        with conn() as c:
            c.execute("UPDATE payment_transactions SET status='failed' WHERE job_id=? AND offer_id=? AND created_at=? AND status='checkout_pending' AND checkout_session_id IS NULL",
                      (job_id,offer_id,creation))
        raise
    with conn() as c:
        c.execute('UPDATE payment_transactions SET checkout_session_id=? WHERE job_id=? AND offer_id=? AND status=?',
                  (result['id'],job_id,offer_id,'checkout_pending'))
    return {'checkout_url':result['url'],'mode':'stripe_test','payment_status':'checkout_pending'}


def verify_stripe_event(body,signature,secret):
    # Stripe signs the exact raw request body. Never trust a redirect as payment proof.
    try:
        fields=dict(part.split('=',1) for part in signature.split(',') if '=' in part)
        ts=int(fields['t']);provided=[x.split('=',1)[1] for x in signature.split(',') if x.startswith('v1=')]
        if abs(now()-ts)>300 or not provided:fail(400,'Invalid webhook timestamp/signature.')
        expect=hmac.new(secret.encode(),str(ts).encode()+b'.'+body,hashlib.sha256).hexdigest()
        if not any(hmac.compare_digest(expect,x) for x in provided):fail(400,'Invalid webhook signature.')
        return json.loads(body)
    except (ValueError,KeyError,UnicodeDecodeError):fail(400,'Malformed webhook event.')

@app.post('/api/payments/stripe-webhook')
async def stripe_webhook(req:Request):
    if payment_mode()!='stripe_test':fail(503,'Test webhooks are not enabled.')
    event=verify_stripe_event(await req.body(),req.headers.get('stripe-signature',''),
                              os.getenv('HOMETASK_STRIPE_WEBHOOK_SECRET',''))
    event_id=event.get('id','');kind=event.get('type','')
    if not event_id.startswith('evt_'):fail(400,'Invalid webhook event ID.')
    session=event.get('data',{}).get('object',{})
    with conn() as c:
        if c.execute('SELECT 1 FROM payment_webhook_events WHERE event_id=?',(event_id,)).fetchone():return {'ok':True,'duplicate':True}
        if kind in ('checkout.session.completed','checkout.session.expired','checkout.session.async_payment_failed'):
            row=c.execute('SELECT * FROM payment_transactions WHERE checkout_session_id=?',(session.get('id'),)).fetchone()
            if not row:fail(409,'Unknown payment session. Requires administrator reconciliation.')
            if row['status']=='checkout_pending':
                if kind=='checkout.session.completed':
                    if session.get('payment_status')!='paid':fail(409,'Payment not yet paid.')
                    if session.get('currency')!='usd' or session.get('mode')!='payment' or int(session.get('amount_total') or -1)!=row['checkout_total_cents']:
                        fail(409,'Payment amount mismatch; manual reconciliation required.')
                    job=get_job(c,row['job_id'])
                    offer=c.execute('SELECT * FROM offers WHERE id=? AND job_id=?',(row['offer_id'],row['job_id'])).fetchone()
                    customer=c.execute('SELECT * FROM users WHERE id=?',(row['customer_id'],)).fetchone()
                    validate_offer_for_hire(c,job,offer,customer)
                    if not offer or offer['worker_id']!=row['worker_id']:fail(409,'Worker mismatch.')
                    intent=session.get('payment_intent')
                    if not isinstance(intent,str):fail(409,'Missing payment intent.')
                    c.execute("""UPDATE payment_transactions SET status='paid_test',paid_at=?,payment_intent_id=?
                                 WHERE job_id=? AND status='checkout_pending' """,(now(),intent,row['job_id']))
                    hire_after_payment(c,job,offer)
                    notify(c,row['customer_id'],row['job_id'],'payment_test_paid',
                           'Stripe test payment completed','Test-mode checkout succeeded. No actual money was charged.')
                else:
                    c.execute('UPDATE payment_transactions SET status=? WHERE job_id=?',
                              ('expired' if kind=='checkout.session.expired' else 'failed',row['job_id']))
        c.execute('INSERT INTO payment_webhook_events(event_id,received_at) VALUES(?,?)',(event_id,now()))
    return {'ok':True}

@app.get('/api/payments/overview')
def payment_readiness(req:Request):
    with conn() as c:
        u=current_user(req,c)
        rows=c.execute("""SELECT j.id,j.title,j.status job_status,o.price agreed_price,j.owner_id,o.worker_id,
           t.status payment_status,t.mode payment_mode,t.transfer_status,t.agreed_price_cents,t.commission_cents,t.worker_net_cents,t.service_fee_cents,t.checkout_total_cents
           FROM jobs j JOIN offers o ON o.id=j.accepted_offer_id
           LEFT JOIN payment_transactions t ON t.job_id=j.id
           WHERE j.owner_id=? OR o.worker_id=? ORDER BY j.id DESC LIMIT 100""",(u['id'],u['id'])).fetchall()
        transactions=[]
        for r in rows:
            worker=u['id']==r['worker_id'] and u['id']!=r['owner_id']
            b=commission_breakdown(r['agreed_price'])
            item={'job_id':r['id'],'title':r['title'],'job_status':r['job_status'],
                  'agreed_job_value':r['agreed_price'],'payment_status':r['payment_status'] or 'not_processed',
                  'payment_mode':r['payment_mode'] or 'none','real_money_collected':False,
                  'transfer_status':r['transfer_status'] or 'not_started'}
            if worker:
                item.update({'commission_cents':r['commission_cents'] if r['commission_cents'] is not None else b['commission_cents'],
                             'net_payout_cents':r['worker_net_cents'] if r['worker_net_cents'] is not None else b['worker_net_cents']})
            else:
                item.update({'checkout_total_cents':r['checkout_total_cents'] if r['checkout_total_cents'] is not None else b['agreed_price_cents'],
                             'service_fee_cents':r['service_fee_cents'] if r['service_fee_cents'] is not None else 0,
                             'agreed_price_cents':r['agreed_price_cents'] if r['agreed_price_cents'] is not None else b['agreed_price_cents']})
            transactions.append(item)
        return {'payments_enabled':payment_mode()=='stripe_test','provider_connected':payment_mode()=='stripe_test',
                'provider_mode':payment_mode(),'live_payments_enabled':False,
                'marketplace_fee_bps':HOMETASK_COMMISSION_BPS,'customer_fee_bps':HOMETASK_CUSTOMER_FEE_BPS,'transactions':transactions}

@app.put('/api/profile')
def update_profile(data:Profile, req:Request):
    if data.role not in ('customer','worker'): fail(400,'Invalid role.')
    if len(data.name.strip())<2: fail(400,'Name is too short.')
    location=data.location.strip()
    # Profile locations are public city/area descriptions. Job addresses remain separate.
    # Reject common full-address patterns, street names and ZIP codes; never store home
    # addresses in the public profile location field.
    street_words=r'(?:street|road|avenue|drive|lane|boulevard|court|highway|apartment|suite|unit|ave|rd|dr|ln|blvd|ct)'
    if location and (re.search(r'\d',location) or re.search(r'\b'+street_words+r'\b',location,re.I)
                     or len(location.split(','))>3 or not re.fullmatch(r"[A-Za-zÀ-ÿ .,'’\-]+",location)):
        fail(400,'Profile location must be a city and state/region only, not a street address or ZIP code.')
    with conn() as c:
        user=current_user(req,c)
        c.execute('UPDATE users SET name=?,role=?,bio=?,skills=?,location=? WHERE id=?',
          (data.name.strip(),data.role,data.bio.strip(),data.skills.strip(),data.location.strip(),user['id']))
        return auth_response(dictrow(c.execute('SELECT id,name,email,role,bio,skills,location,avatar_data,banner_data,is_admin,account_status,email_verified,EXISTS(SELECT 1 FROM worker_verifications v WHERE v.worker_id=users.id AND v.status=\'approved\') AS profile_verified FROM users WHERE id=?',(user['id'],)).fetchone()))


@app.get('/api/profile/reviews')
def own_reviews(req:Request):
    with conn() as c:
        u=current_user(req,c)
        summary=c.execute('SELECT COUNT(*) n,ROUND(AVG(rating),1) avg FROM reviews WHERE recipient_id=?',(u['id'],)).fetchone()
        reviews=[dictrow(x) for x in c.execute('''SELECT r.rating,r.comment,r.photo_data,r.created_at,us.name author_name,j.title job_title
          FROM reviews r JOIN users us ON us.id=r.author_id JOIN jobs j ON j.id=r.job_id
          WHERE r.recipient_id=? ORDER BY r.id DESC''',(u['id'],))]
        return {'rating':summary['avg'],'count':summary['n'],'reviews':reviews}

@app.put('/api/profile/avatar')
def save_avatar(data:AvatarIn,req:Request):
    import base64
    raw=data.data
    if raw:
        match=re.fullmatch(r'data:image/(png|jpeg|webp);base64,([A-Za-z0-9+/=]+)',raw)
        if not match: fail(400,'Use a PNG, JPG, or WebP photo.')
        try: content=base64.b64decode(match.group(2),validate=True)
        except Exception: fail(400,'Invalid image data.')
        if len(content)>220000: fail(400,'Please choose a smaller photo (under 220 KB).')
        valid=content.startswith(b'\x89PNG\r\n\x1a\n') or content.startswith(b'\xff\xd8\xff') or (content[:4]==b'RIFF' and content[8:12]==b'WEBP')
        if not valid: fail(400,'Invalid image type.')
    with conn() as c:
        user=current_user(req,c)
        c.execute('UPDATE users SET avatar_data=? WHERE id=?',(raw,user['id']))
        return {'ok':True}

def framing_for(c,user_id):
    row=c.execute('SELECT banner_x,banner_y,banner_zoom,avatar_x,avatar_y,avatar_zoom FROM user_image_framing WHERE user_id=?',(user_id,)).fetchone()
    return dictrow(row) if row else {'banner_x':50,'banner_y':50,'banner_zoom':100,'avatar_x':50,'avatar_y':50,'avatar_zoom':100}

class ImageFraming(BaseModel):
    banner_x:int=Field(default=50,ge=0,le=100)
    banner_y:int=Field(default=50,ge=0,le=100)
    banner_zoom:int=Field(default=100,ge=100,le=180)
    avatar_x:int=Field(default=50,ge=0,le=100)
    avatar_y:int=Field(default=50,ge=0,le=100)
    avatar_zoom:int=Field(default=100,ge=100,le=180)

@app.get('/api/profile/image-framing')
def my_image_framing(req:Request):
    with conn() as c:
        user=current_user(req,c)
        return framing_for(c,user['id'])

@app.put('/api/profile/image-framing')
def update_image_framing(data:ImageFraming,req:Request):
    with conn() as c:
        user=current_user(req,c)
        c.execute('''INSERT INTO user_image_framing(user_id,banner_x,banner_y,banner_zoom,avatar_x,avatar_y,avatar_zoom)
          VALUES(?,?,?,?,?,?,?) ON CONFLICT(user_id) DO UPDATE SET
          banner_x=excluded.banner_x,banner_y=excluded.banner_y,banner_zoom=excluded.banner_zoom,
          avatar_x=excluded.avatar_x,avatar_y=excluded.avatar_y,avatar_zoom=excluded.avatar_zoom''',
          (user['id'],data.banner_x,data.banner_y,data.banner_zoom,data.avatar_x,data.avatar_y,data.avatar_zoom))
        return framing_for(c,user['id'])

class BannerIn(BaseModel):
    data: str=Field(default='', max_length=550000)


@app.put('/api/profile/banner')
def save_profile_banner(data: BannerIn, req: Request):
    validate_image_data(data.data, max_bytes=300000)
    with conn() as c:
        user=current_user(req,c)
        c.execute('UPDATE users SET banner_data=? WHERE id=?',(data.data,user['id']))
        return {'ok': True}


@app.post('/api/jobs/{job_id}/offers/{offer_id}/reject')
def reject_offer(job_id:int,offer_id:int,req:Request):
    with conn() as c:
        user=current_user(req,c);job=get_job(c,job_id)
        if job['owner_id']!=user['id']:fail(403,'Only the customer can reject offers.')
        if job['status']!='open':fail(409,'This job is no longer open.')
        if has_active_checkout(c,job_id):fail(409,'A checkout is in progress; pricing and offers are locked until it finishes.')
        o=c.execute('SELECT * FROM offers WHERE id=? AND job_id=?',(offer_id,job_id)).fetchone()
        if not o:fail(404,'Offer not found.')
        if o['decision']=='rejected':fail(409,'Offer already rejected.')
        c.execute("UPDATE offers SET decision='rejected',counter_price=NULL,counter_status='none' WHERE id=?",(offer_id,))
        notify(c,o['worker_id'],job_id,'offer_rejected',f'Offer declined: {job["title"]}',
               'The customer declined your offer. You can still submit a new offer at the original posted budget.')
        return {'ok':True}

@app.post('/api/jobs/{job_id}/reviews')
def submit_review(job_id:int,data:ReviewIn,req:Request):
    validate_image_data(data.photo_data)
    with conn() as c:
        user=current_user(req,c);job=get_job(c,job_id)
        if job['status']!='completed' or not job['assigned_worker_id']:fail(409,'Reviews open only after a job is completed.')
        recipient=(job['assigned_worker_id'] if user['id']==job['owner_id'] else
                   job['owner_id'] if user['id']==job['assigned_worker_id'] else None)
        if not recipient:fail(403,'Only the customer and hired worker may review.')
        if c.execute('SELECT 1 FROM deleted_reviews WHERE job_id=? AND author_id=?',(job_id,user['id'])).fetchone():
            fail(409,'You already submitted and deleted a review for this job. You cannot submit another.')
        try:
            c.execute('INSERT INTO reviews(job_id,author_id,recipient_id,rating,comment,photo_data,created_at) VALUES(?,?,?,?,?,?,?)',
              (job_id,user['id'],recipient,data.rating,data.comment.strip(),data.photo_data,now()))
        except sqlite3.IntegrityError:fail(409,'You already reviewed this job.')
        notify(c,recipient,job_id,'review',f'New review: {job["title"]}',
               f'{user["name"]} left you a {data.rating}-star review.')
        return {'ok':True}

@app.get('/api/workers/{worker_id}')
def public_worker(worker_id:int,req:Request):
    with conn() as c:
        row=c.execute("SELECT id,name,role,bio,skills,location,avatar_data,banner_data,account_status FROM users WHERE id=?",(worker_id,)).fetchone()
        if not row or row['account_status']!='active': fail(404,'Worker not found.')
        try:viewer=current_user(req,c)
        except HTTPException:viewer=None
        completed=c.execute('''SELECT COUNT(*) n FROM jobs j JOIN offers o ON j.accepted_offer_id=o.id
          WHERE j.status='completed' AND o.worker_id=?''',(worker_id,)).fetchone()['n']
        rating=c.execute('SELECT COUNT(*) n,ROUND(AVG(rating),1) avg FROM reviews WHERE recipient_id=?',(worker_id,)).fetchone()
        recent=[dictrow(x) for x in c.execute('''SELECT r.rating,r.comment,r.photo_data,r.created_at,u.name author_name FROM reviews r
          JOIN users u ON u.id=r.author_id WHERE r.recipient_id=? ORDER BY r.id DESC LIMIT 8''',(worker_id,))]
        portfolio=[dictrow(r) for r in c.execute('SELECT id,title,description,category,photo_data,created_at FROM previous_work WHERE worker_id=? ORDER BY id DESC LIMIT 20',(worker_id,))]
        confirmed_highlights=[dictrow(r) for r in c.execute("""SELECT j.category,j.completed_at FROM completed_work_highlights h JOIN jobs j ON j.id=h.job_id JOIN offers o ON o.id=j.accepted_offer_id WHERE h.worker_id=? AND o.worker_id=? AND j.status='completed' AND j.moderation_status='visible' ORDER BY j.completed_at DESC LIMIT 20""",(worker_id,worker_id))]
        followers=c.execute('SELECT COUNT(*) n FROM worker_follows WHERE worker_id=?',(worker_id,)).fetchone()['n']
        postings=c.execute('SELECT COUNT(*) n FROM jobs WHERE owner_id=?',(worker_id,)).fetchone()['n']
        is_blocked=bool(viewer and c.execute('SELECT 1 FROM user_blocks WHERE blocker_id=? AND blocked_id=?',(viewer['id'],worker_id)).fetchone())
        following=bool(viewer and c.execute('SELECT 1 FROM worker_follows WHERE follower_id=? AND worker_id=?',(viewer['id'],worker_id)).fetchone())
        v=c.execute('SELECT status FROM worker_verifications WHERE worker_id=?',(worker_id,)).fetchone()
        verified=bool(v and v['status']=='approved')
        linked=[]
        for r in c.execute('''SELECT j.id,j.title,j.category,j.completed_at,
            p1.photo_data AS before_photo,p2.photo_data AS after_photo
            FROM jobs j JOIN offers o ON j.accepted_offer_id=o.id
            JOIN job_showcase_consent consent ON consent.job_id=j.id AND consent.allowed=1
            JOIN job_result_photos p1 ON p1.job_id=j.id AND p1.kind='before'
            JOIN job_result_photos p2 ON p2.job_id=j.id AND p2.kind='after'
            WHERE j.status='completed' AND j.moderation_status='visible' AND o.worker_id=?
            ORDER BY j.completed_at DESC,j.id DESC LIMIT 6''',(worker_id,)):
            linked.append(dictrow(r))
        return {**{k:row[k] for k in ('id','name','role','bio','skills','location','avatar_data','banner_data')},'verified_results':linked,'completed_jobs':completed,'review_count':rating['n'],'rating':rating['avg'],
          'reviews':recent,'portfolio':portfolio,'completed_highlights':confirmed_highlights,'follower_count':followers,'posted_jobs':postings,'is_following':following,'is_blocked':is_blocked,
          'verification':'Verified' if verified else 'Not verified',
          'profile_verified':verified,'profile_reviewed':verified,'image_framing':framing_for(c,worker_id)}

def get_job(c,id):
    row=c.execute('''SELECT j.*,u.name AS owner_name,
      (SELECT COUNT(*) FROM offers WHERE job_id=j.id AND decision='pending') AS offer_count,
      aw.worker_id AS assigned_worker_id,wu.name AS assigned_worker_name,aw.price AS accepted_price,
      EXISTS(SELECT 1 FROM job_photos pic WHERE pic.id=j.main_photo_id AND pic.job_id=j.id) AS has_main_photo
      FROM jobs j JOIN users u ON j.owner_id=u.id
      LEFT JOIN offers aw ON j.accepted_offer_id=aw.id
      LEFT JOIN users wu ON aw.worker_id=wu.id WHERE j.id=?''',(id,)).fetchone()
    if not row: fail(404,'Job not found.')
    result=dictrow(row)
    result['slots']=job_slots(c,id)
    tx=c.execute('SELECT status,mode,transfer_status FROM payment_transactions WHERE job_id=?',(id,)).fetchone()
    result['payment_status']=tx['status'] if tx else 'not_processed'
    result['payment_mode']=tx['mode'] if tx else 'none'
    result['payout_status']=tx['transfer_status'] if tx else 'not_started'
    return result

@app.get('/api/jobs')
def list_jobs(req:Request):
    with conn() as c:
        try:u=current_user(req,c)
        except HTTPException:u=None
        rows=c.execute("""SELECT j.id FROM jobs j JOIN users owner ON owner.id=j.owner_id WHERE ((j.moderation_status='visible' AND owner.account_status='active') OR j.owner_id=?) AND NOT EXISTS (SELECT 1 FROM user_blocks b WHERE (b.blocker_id=? AND b.blocked_id=j.owner_id) OR (b.blocker_id=j.owner_id AND b.blocked_id=?)) ORDER BY j.created_at DESC,j.id DESC""",(u['id'] if u else -1,u['id'] if u else -1,u['id'] if u else -1,)).fetchall()
        return {'jobs':[public_job(get_job(c,row['id']),u['id'] if u else None) for row in rows]}

@app.get('/api/my-offers')
def my_offers(req:Request):
    with conn() as c:
        user=current_user(req,c)
        rows=c.execute('''SELECT o.id,o.job_id,o.price,o.note,o.created_at,o.decision,o.counter_price,o.counter_note,o.counter_status,
          j.title,j.location,j.status,j.budget,j.owner_id,j.accepted_offer_id,
          u.name AS customer_name FROM offers o
          JOIN jobs j ON o.job_id=j.id JOIN users u ON j.owner_id=u.id
          WHERE o.worker_id=? ORDER BY o.created_at DESC,o.id DESC''',(user['id'],)).fetchall()
        items=[]
        for row in rows:
            item=dictrow(row)
            item['location']=public_job(get_job(c,item['job_id']),user['id'])['location']
            items.append(item)
        return {'offers':items}


@app.get('/api/conversations')
def conversations(req:Request):
    with conn() as c:
        user=current_user(req,c)
        rows=c.execute('''SELECT o.job_id,o.worker_id,w.name worker_name,j.owner_id,
          ow.name owner_name,j.title,j.status
          FROM offers o JOIN jobs j ON j.id=o.job_id
          JOIN users w ON w.id=o.worker_id JOIN users ow ON ow.id=j.owner_id
          WHERE j.owner_id=? OR o.worker_id=?
          ORDER BY o.created_at DESC,o.id DESC''',(user['id'],user['id'])).fetchall()
        result=[]
        for row in rows:
            item=dictrow(row)
            partner=item['worker_id'] if item['owner_id']==user['id'] else item['owner_id']
            item['partner_id']=partner
            item['partner_name']=item['worker_name'] if item['owner_id']==user['id'] else item['owner_name']
            hidden=c.execute('SELECT through_message_id FROM hidden_conversations WHERE user_id=? AND job_id=? AND partner_id=?',
                             (user['id'],item['job_id'],partner)).fetchone()
            cutoff=hidden['through_message_id'] if hidden else 0
            last=c.execute('''SELECT m.id,m.body,m.created_at,m.sender_id,m.read_at FROM messages m
              WHERE m.job_id=? AND m.id>? AND ((m.sender_id=? AND m.recipient_id=?) OR (m.sender_id=? AND m.recipient_id=?))
              AND NOT EXISTS (SELECT 1 FROM hidden_messages h WHERE h.user_id=? AND h.message_id=m.id)
              ORDER BY m.id DESC LIMIT 1''',
              (item['job_id'],cutoff,user['id'],partner,partner,user['id'],user['id'])).fetchone()
            # An offer alone is not a chat invitation. Only hired worker/customer
            # threads appear, except legacy threads with pre-existing messages.
            accepted_worker=c.execute('SELECT worker_id FROM offers WHERE id=?',(c.execute('SELECT accepted_offer_id FROM jobs WHERE id=?',(item['job_id'],)).fetchone()['accepted_offer_id'],)).fetchone() if item['status']!='open' else None
            is_hired_pair=bool(accepted_worker and accepted_worker['worker_id']==item['worker_id'])
            if not is_hired_pair and not last: continue
            if hidden and not last: continue
            item['can_message']=item['status']=='accepted' and is_hired_pair
            item['last_message']=dictrow(last)
            item['unread']=c.execute('''SELECT COUNT(*) n FROM messages m WHERE m.job_id=?
              AND m.sender_id=? AND m.recipient_id=? AND m.read_at IS NULL AND m.id>?
              AND NOT EXISTS (SELECT 1 FROM hidden_messages h WHERE h.user_id=? AND h.message_id=m.id)''',
              (item['job_id'],partner,user['id'],cutoff,user['id'])).fetchone()['n']
            result.append(item)
        result.sort(key=lambda x:(x['last_message']['created_at'] if x['last_message'] else 0,x['job_id']),reverse=True)
        return {'conversations':result}

@app.get('/api/reviews/mine')
def reviews_authored(req:Request):
    with conn() as c:
        u=current_user(req,c)
        rows=c.execute('''SELECT r.*,j.title job_title,p.name recipient_name
          FROM reviews r JOIN jobs j ON j.id=r.job_id JOIN users p ON p.id=r.recipient_id
          WHERE r.author_id=? ORDER BY r.created_at DESC,r.id DESC''',(u['id'],)).fetchall()
        deleted=c.execute('''SELECT dr.job_id,dr.deleted_at,j.title job_title
          FROM deleted_reviews dr JOIN jobs j ON j.id=dr.job_id WHERE dr.author_id=?''',(u['id'],)).fetchall()
        return {'reviews':[dictrow(r) for r in rows], 'deleted':[dictrow(d) for d in deleted]}

@app.delete('/api/reviews/{review_id}')
def delete_authored_review(review_id:int,req:Request):
    with conn() as c:
        u=current_user(req,c)
        row=c.execute('SELECT job_id FROM reviews WHERE id=? AND author_id=?',(review_id,u['id'])).fetchone()
        if not row:fail(404,'Your review was not found.')
        c.execute('INSERT OR IGNORE INTO deleted_reviews(job_id,author_id,deleted_at) VALUES(?,?,?)',
                  (row['job_id'],u['id'],now()))
        c.execute('DELETE FROM reviews WHERE id=? AND author_id=?',(review_id,u['id']))
        return {'ok':True}

class MainPhotoChoice(BaseModel):
    photo_id: Optional[int]=None

@app.put('/api/jobs/{job_id}/main-photo')
def choose_main_photo(job_id:int,data:MainPhotoChoice,req:Request):
    with conn() as c:
        user=current_user(req,c);job=get_job(c,job_id)
        if job['owner_id']!=user['id']:fail(403,'Only the job owner can choose the main image.')
        if job['status']!='open':fail(409,'Only open listings may change their main image.')
        if data.photo_id is not None and not c.execute('SELECT 1 FROM job_photos WHERE job_id=? AND id=?',(job_id,data.photo_id)).fetchone():
            fail(404,'Photo does not belong to this job.')
        c.execute('UPDATE jobs SET main_photo_id=? WHERE id=?',(data.photo_id,job_id))
        return {'ok':True,'main_photo_id':data.photo_id}

@app.get('/api/jobs/{job_id}/main-photo')
def public_main_photo(job_id:int,req:Request):
    with conn() as c:
        job=get_job(c,job_id)
        owner=c.execute('SELECT account_status FROM users WHERE id=?',(job['owner_id'],)).fetchone()
        try:viewer=current_user(req,c)
        except HTTPException:viewer=None
        permitted=viewer and (viewer['id'] in (job['owner_id'],job.get('assigned_worker_id')) or admin_user(viewer))
        if (job.get('moderation_status')=='removed' or not owner or owner['account_status']!='active') and not permitted:
            fail(404,'Job image unavailable.')
        if viewer and c.execute('SELECT 1 FROM user_blocks WHERE (blocker_id=? AND blocked_id=?) OR (blocked_id=? AND blocker_id=?)',
              (viewer['id'],job['owner_id'],viewer['id'],job['owner_id'])).fetchone() and not permitted:
            fail(404,'Job image unavailable.')
        pic=c.execute('SELECT photo_data FROM job_photos WHERE id=? AND job_id=?',(job.get('main_photo_id'),job_id)).fetchone()
        if not pic:fail(404,'This job has no main image.')
        m=re.fullmatch(r'data:image/(jpeg|png|webp);base64,([A-Za-z0-9+/=]+)',pic['photo_data'])
        if not m:fail(404,'Image unavailable.')
        return Response(content=base64.b64decode(m.group(2)),media_type='image/'+m.group(1),headers={'Cache-Control':'private, max-age=60'})

@app.get('/api/jobs/{job_id}/photos')
def job_photos(job_id:int, req:Request):
    with conn() as c:
        j=get_job(c,job_id)
        owner_status=c.execute('SELECT account_status FROM users WHERE id=?',(j['owner_id'],)).fetchone()['account_status']
        if j.get('moderation_status')=='removed' or owner_status!='active':
            try: viewer=current_user(req,c)
            except HTTPException: viewer=None
            if not viewer or viewer['id'] not in (j['owner_id'],j.get('assigned_worker_id')) and not admin_user(viewer):
                fail(404,'Job not found.')
        return {'photos':[dictrow(x) for x in c.execute('SELECT id,photo_data FROM job_photos WHERE job_id=? ORDER BY id',(job_id,))]}

@app.post('/api/jobs/{job_id}/photos')
def add_job_photo(job_id:int,data:PhotoIn,req:Request):
    with conn() as c:
        u=current_user(req,c);job=get_job(c,job_id)
        if job['owner_id']!=u['id']:fail(403,'Only the job owner can upload photos.')
        if job['status']!='open':fail(409,'Job photos can only be changed while open.')
        count=c.execute('SELECT COUNT(*) n FROM job_photos WHERE job_id=?',(job_id,)).fetchone()['n']
        if count>=5:fail(409,'Maximum five photos per job.')
        match=re.fullmatch(r'data:image/(jpeg|png|webp);base64,([A-Za-z0-9+/=]+)',data.data)
        if not match:fail(400,'Upload a JPEG, PNG, or WebP photo.')
        try: raw=base64.b64decode(match.group(2),validate=True)
        except Exception:fail(400,'Invalid image data.')
        if len(raw)>300000:fail(400,'Please upload a photo under 300 KB after compression.')
        valid=raw.startswith(b'\xff\xd8\xff') or raw.startswith(b'\x89PNG\r\n\x1a\n') or (raw[:4]==b'RIFF' and raw[8:12]==b'WEBP')
        if not valid:fail(400,'Invalid image content.')
        cur=c.execute('INSERT INTO job_photos(job_id,photo_data,created_at) VALUES(?,?,?)',(job_id,data.data,now()))
        if count==0:c.execute('UPDATE jobs SET main_photo_id=? WHERE id=?',(cur.lastrowid,job_id))
        return {'id':cur.lastrowid}

@app.delete('/api/jobs/{job_id}/photos/{photo_id}')
def delete_job_photo(job_id:int,photo_id:int,req:Request):
    with conn() as c:
        u=current_user(req,c);j=get_job(c,job_id)
        if j['owner_id']!=u['id']:fail(403,'Only the customer can delete photos.')
        if j['status']!='open':fail(409,'Job is no longer editable.')
        if not c.execute('DELETE FROM job_photos WHERE id=? AND job_id=?',(photo_id,job_id)).rowcount:fail(404,'Photo not found.')
        if j['main_photo_id']==photo_id:
            next_id=c.execute('SELECT MIN(id) AS id FROM job_photos WHERE job_id=?',(job_id,)).fetchone()['id']
            c.execute('UPDATE jobs SET main_photo_id=? WHERE id=?',(next_id,job_id))
        return {'ok':True}

@app.get('/api/avatars/{user_id}')
def public_avatar(user_id:int):
    with conn() as c:
        row=c.execute('SELECT avatar_data FROM users WHERE id=?',(user_id,)).fetchone()
        if not row or not row['avatar_data']:fail(404,'No profile photo.')
        match=re.fullmatch(r'data:image/(jpeg|png|webp);base64,([A-Za-z0-9+/=]+)',row['avatar_data'])
        if not match:fail(404,'No valid profile photo.')
        return Response(content=base64.b64decode(match.group(2)),media_type='image/'+match.group(1),headers={'Cache-Control':'private, max-age=60'})

@app.get('/api/invitations')
def my_invitations(req:Request):
    with conn() as c:
        u=current_user(req,c)
        rows=c.execute('''SELECT i.id,i.created_at,i.job_id,j.title,j.budget,j.location,j.status,
          j.owner_id,ou.name customer_name FROM invitations i JOIN jobs j ON i.job_id=j.id
          JOIN users ou ON j.owner_id=ou.id WHERE i.worker_id=? ORDER BY i.id DESC''',(u['id'],)).fetchall()
        items=[]
        for row in rows:
            item=dictrow(row)
            item['location']=public_job(get_job(c,item['job_id']),u['id'])['location']
            items.append(item)
        return {'invitations':items}

@app.post('/api/jobs/{job_id}/invite/{worker_id}')
def invite_worker(job_id:int,worker_id:int,req:Request):
    with conn() as c:
        u=current_user(req,c);job=get_job(c,job_id)
        if job['owner_id']!=u['id']:fail(403,'Only the job owner can invite workers.')
        if job['status']!='open':fail(409,'Invitations require an open job.')
        require_verified_email(u)
        if worker_id==u['id']:fail(400,'You cannot invite yourself.')
        if users_block_each_other(c,u['id'],worker_id):fail(403,'This account is blocked.')
        w=c.execute('SELECT id FROM users WHERE id=?',(worker_id,)).fetchone()
        if not w:fail(404,'User not found.')
        exists=c.execute('SELECT 1 FROM invitations WHERE job_id=? AND worker_id=?',(job_id,worker_id)).fetchone()
        if exists:fail(409,'Worker was already invited to this job.')
        c.execute('INSERT INTO invitations(job_id,worker_id,created_at) VALUES(?,?,?)',(job_id,worker_id,now()))
        notify(c,worker_id,job_id,'invitation',f'Job request: {job["title"]}',
               f'{u["name"]} invited you to review and offer on a job. No obligation to accept.')
        return {'ok':True}

@app.post('/api/jobs/{job_id}/offers/{offer_id}/counter')
def counter_worker_offer(job_id:int,offer_id:int,data:CounterIn,req:Request):
    with conn() as c:
        u=current_user(req,c);job=get_job(c,job_id)
        if u['id']!=job['owner_id']:fail(403,'Only the customer can counter an offer.')
        if job['status']!='open':fail(409,'Job must still be open.')
        if has_active_checkout(c,job_id):fail(409,'A checkout is in progress; pricing and offers are locked until it finishes.')
        off=c.execute('SELECT * FROM offers WHERE id=? AND job_id=?',(offer_id,job_id)).fetchone()
        if not off:fail(404,'Offer not found.')
        if off['decision']!='pending':fail(409,'Only pending offers can be countered.')
        if off['counter_status']=='pending':fail(409,'Wait for the worker to respond first.')
        c.execute("UPDATE offers SET counter_price=?,counter_note=?,counter_status='pending' WHERE id=?",
                  (data.price,data.note.strip(),offer_id))
        notify(c,off['worker_id'],job_id,'customer_counter',f'Customer counteroffer: {job["title"]}',
               f'{u["name"]} proposes ${data.price:,} for this job. Review and accept or decline.')
        return {'ok':True}

@app.post('/api/jobs/{job_id}/offers/mine/respond-counter')
def respond_to_counter(job_id:int,accept:bool,req:Request):
    with conn() as c:
        u=current_user(req,c);job=get_job(c,job_id)
        if job['status']!='open':fail(409,'Job must be open.')
        if has_active_checkout(c,job_id):fail(409,'A checkout is in progress; pricing and offers are locked until it finishes.')
        off=c.execute('SELECT * FROM offers WHERE job_id=? AND worker_id=?',(job_id,u['id'])).fetchone()
        if not off or off['counter_status']!='pending' or off['decision']!='pending':
            fail(409,'No customer counteroffer is awaiting a decision.')
        if accept:
            c.execute("UPDATE offers SET price=counter_price,counter_price=NULL,counter_note='',counter_status='accepted' WHERE id=?",(off['id'],))
        else:
            c.execute("UPDATE offers SET counter_price=NULL,counter_note='',counter_status='declined' WHERE id=?",(off['id'],))
        notify(c,job['owner_id'],job_id,'counter_response',f'Counteroffer {"accepted" if accept else "declined"}: {job["title"]}',
               f'{u["name"]} {"accepted your proposed price" if accept else "declined your proposed price; the original worker offer remains pending"}.')
        return {'ok':True}

@app.get('/api/analytics/earnings')
def worker_earnings(req:Request,granularity:str='month',range:str='all',start:Optional[str]=None,end:Optional[str]=None):
    if granularity not in ('day','week','month','year'):fail(400,'Invalid time grouping.')
    if range not in ('7','30','90','365','all','custom','period'):fail(400,'Invalid date range.')
    start_boundary=end_boundary=None
    if range=='custom':
        if not start or not end:fail(400,'Choose both start and end dates.')
        try:
            start_boundary=datetime.strptime(start,'%Y-%m-%d').replace(tzinfo=SITE_TZ)
            end_boundary=datetime.strptime(end,'%Y-%m-%d').replace(tzinfo=SITE_TZ)+timedelta(days=1)
        except ValueError:fail(400,'Use dates formatted YYYY-MM-DD.')
        if start_boundary>=end_boundary or (end_boundary-start_boundary).days>3653:
            fail(400,'Choose a date range of ten years or less.')
    with conn() as c:
        u=current_user(req,c)
        rows=c.execute('''SELECT j.status,j.created_at,j.completed_at,j.scheduled_start,o.price
          FROM jobs j JOIN offers o ON o.id=j.accepted_offer_id
          WHERE o.worker_id=? AND j.status IN ('accepted','completed')''',(u['id'],)).fetchall()
        bucket=defaultdict(lambda:{'earned':0,'projected':0})
        today=datetime.now(SITE_TZ)
        cutoff=today-timedelta(days=int(range)) if range not in ('all','custom','period') else None
        period_start=period_end=None
        if range=='period':
            if granularity=='day':
                period_start=today.replace(hour=0,minute=0,second=0,microsecond=0)
                period_end=period_start+timedelta(days=1)
            elif granularity=='week':
                period_start=(today-timedelta(days=today.weekday())).replace(hour=0,minute=0,second=0,microsecond=0)
                period_end=period_start+timedelta(days=7)
            elif granularity=='month':
                period_start=today.replace(day=1,hour=0,minute=0,second=0,microsecond=0)
                period_end=period_start.replace(year=period_start.year+1,month=1) if period_start.month==12 else period_start.replace(month=period_start.month+1)
            else:
                period_start=today.replace(month=1,day=1,hour=0,minute=0,second=0,microsecond=0)
                period_end=period_start.replace(year=period_start.year+1)
        earned=projected=completed_jobs=accepted_jobs=0
        net_earned=net_projected=0
        for r in rows:
            if r['status']=='completed':
                dt=datetime.fromtimestamp(r['completed_at'] or r['created_at'],SITE_TZ)
            else:
                try:dt=datetime.strptime(r['scheduled_start'],'%Y-%m-%dT%H:%M').replace(tzinfo=SITE_TZ) if r['scheduled_start'] else datetime.fromtimestamp(r['created_at'],SITE_TZ)
                except ValueError:dt=datetime.fromtimestamp(r['created_at'],SITE_TZ)
            if cutoff and dt<cutoff:continue
            if period_start and not (period_start<=dt<period_end):continue
            if start_boundary and not (start_boundary<=dt<end_boundary):continue
            if granularity=='day': key=dt.strftime('%Y-%m-%d')
            elif granularity=='week': key=f'{dt.isocalendar().year}-W{dt.isocalendar().week:02d}'
            elif granularity=='month':key=dt.strftime('%Y-%m')
            else:key=str(dt.year)
            kind='earned' if r['status']=='completed' else 'projected'
            bucket[key][kind]+=r['price']
            net_value=commission_breakdown(r['price'])['worker_net_cents']/100
            bucket[key]['net_'+kind]=bucket[key].get('net_'+kind,0)+net_value
            if kind=='earned':earned+=r['price'];net_earned+=net_value;completed_jobs+=1
            else:projected+=r['price'];net_projected+=net_value;accepted_jobs+=1
        # Fill empty calendar buckets on bounded views, so the x-axis reflects real dates
        # rather than jumping between only days with booked/completed work.
        axis_start=period_start or start_boundary or cutoff
        axis_end=period_end or end_boundary or today
        if axis_start and axis_end and axis_start<axis_end:
            point=axis_start
            dates=[]
            while point<axis_end and len(dates)<121:
                if granularity=='day':
                    key=point.strftime('%Y-%m-%d')
                    next_point=point+timedelta(days=1)
                elif granularity=='week':
                    key=f'{point.isocalendar().year}-W{point.isocalendar().week:02d}'
                    next_point=point+timedelta(days=7-point.weekday())
                elif granularity=='month':
                    key=point.strftime('%Y-%m')
                    next_point=(point.replace(day=1,month=1,year=point.year+1) if point.month==12
                                else point.replace(day=1,month=point.month+1))
                else:
                    key=str(point.year)
                    next_point=point.replace(month=1,day=1,year=point.year+1)
                dates.append(key)
                point=next_point
            if point>=axis_end:
                for key in dates:bucket[key]
        return {'earned':earned,'projected':projected,'combined':earned+projected,
                'net_earned':net_earned,'net_projected':net_projected,
                'net_combined':net_earned+net_projected,
                'completed_jobs':completed_jobs,'accepted_jobs':accepted_jobs,
                'granularity':granularity,'range':range,
                'period_label':({'day':'Today','week':'This week','month':'This month','year':'This year'}[granularity]
                                if range=='period' else 'All time' if range=='all' else f'Last {range} days' if range!='custom' else f'{start} to {end}'),
                'series':[{'period':k,**v} for k,v in sorted(bucket.items())],
                'net_series':[{'period':k,'earned':v.get('net_earned',0),'projected':v.get('net_projected',0)}
                              for k,v in sorted(bucket.items())],
                'commission_bps':HOMETASK_COMMISSION_BPS,
                'payouts_are_real':False}

# 14.2: a single server-side autosaved, private posting draft per account.
DRAFT_FIELDS = ('title','category','description','location','difficulty','budget','latitude','longitude','duration_minutes','flexible_schedule','offer_deadline','slots')
@app.get('/api/job-draft')
def get_posting_draft(req:Request):
    with conn() as c:
        u=current_user(req,c)
        r=c.execute('SELECT draft_json,updated_at FROM job_drafts WHERE user_id=?',(u['id'],)).fetchone()
        return {'draft':json.loads(r['draft_json']) if r else None,'updated_at':r['updated_at'] if r else None}

@app.put('/api/job-draft')
def save_posting_draft(data:JobDraftIn,req:Request):
    if len(json.dumps(data.fields))>12000:fail(400,'Draft is too large.')
    clean={k:data.fields.get(k) for k in DRAFT_FIELDS if k in data.fields}
    for key in ('title','category','description','location','difficulty','offer_deadline'):
        if key in clean and len(str(clean[key] or ''))>2200:fail(400,'Draft text is too long.')
    if 'slots' in clean and (not isinstance(clean['slots'],list) or len(clean['slots'])>8):fail(400,'Invalid draft schedule.')
    with conn() as c:
        u=current_user(req,c)
        if u['role']!='customer':fail(403,'Only HomeTask users can save posting drafts.')
        c.execute('''INSERT INTO job_drafts(user_id,draft_json,updated_at) VALUES(?,?,?)
          ON CONFLICT(user_id) DO UPDATE SET draft_json=excluded.draft_json,updated_at=excluded.updated_at''',
          (u['id'],json.dumps(clean),now()))
        return {'ok':True}

@app.delete('/api/job-draft')
def discard_posting_draft(req:Request):
    with conn() as c:
        u=current_user(req,c)
        c.execute('DELETE FROM job_drafts WHERE user_id=?',(u['id'],))
        return {'ok':True}

def result_participants(c,job,user):
    return user['id'] in (job['owner_id'],job.get('assigned_worker_id'))

@app.get('/api/jobs/{job_id}/result-photos')
def get_result_photos(job_id:int,req:Request):
    with conn() as c:
        u=current_user(req,c);j=get_job(c,job_id)
        if not result_participants(c,j,u):fail(403,'Only job participants can view work photos.')
        photos={r['kind']:r['photo_data'] for r in c.execute('SELECT kind,photo_data FROM job_result_photos WHERE job_id=?',(job_id,))}
        consent=c.execute('SELECT allowed FROM job_showcase_consent WHERE job_id=?',(job_id,)).fetchone()
        return {'photos':photos,'share_publicly':bool(consent and consent['allowed']),
                'can_upload':u['id']==j.get('assigned_worker_id') and j['status'] in ('accepted','completed'),
                'can_approve':u['id']==j['owner_id'] and j['status']=='completed'}

@app.put('/api/jobs/{job_id}/result-photos/{kind}')
def upload_result_photo(job_id:int,kind:str,data:ResultPhotoIn,req:Request):
    if kind not in ('before','after'):fail(400,'Choose a before or after image.')
    validate_image_data(data.data)
    with conn() as c:
        u=current_user(req,c);j=get_job(c,job_id)
        if u['id']!=j.get('assigned_worker_id') or j['status'] not in ('accepted','completed'):
            fail(403,'Only the hired worker can upload result photos for active or completed jobs.')
        c.execute('''INSERT INTO job_result_photos(job_id,kind,worker_id,photo_data,uploaded_at) VALUES(?,?,?,?,?)
          ON CONFLICT(job_id,kind) DO UPDATE SET photo_data=excluded.photo_data,uploaded_at=excluded.uploaded_at''',
          (job_id,kind,u['id'],data.data,now()))
        # A new or replaced photo must be reapproved; old public approval cannot carry over.
        c.execute('UPDATE job_showcase_consent SET allowed=0,updated_at=? WHERE job_id=?',(now(),job_id))
        return {'ok':True}

@app.delete('/api/jobs/{job_id}/result-photos/{kind}')
def remove_result_photo(job_id:int,kind:str,req:Request):
    if kind not in ('before','after'):fail(400,'Invalid image type.')
    with conn() as c:
        u=current_user(req,c);j=get_job(c,job_id)
        if u['id']!=j.get('assigned_worker_id'):fail(403,'Only the hired worker can remove these images.')
        c.execute('DELETE FROM job_result_photos WHERE job_id=? AND kind=?',(job_id,kind))
        c.execute('UPDATE job_showcase_consent SET allowed=0,updated_at=? WHERE job_id=?',(now(),job_id))
        return {'ok':True}

@app.put('/api/jobs/{job_id}/showcase-consent')
def consent_work_showcase(job_id:int,data:ShowcaseConsentIn,req:Request):
    with conn() as c:
        u=current_user(req,c);j=get_job(c,job_id)
        if u['id']!=j['owner_id']:fail(403,'Only the customer can approve public photos.')
        if j['status']!='completed':fail(409,'Public portfolios require a completed HomeTask job.')
        if data.allowed:
            have={r['kind'] for r in c.execute('SELECT kind FROM job_result_photos WHERE job_id=?',(job_id,))}
            if have!={'before','after'}:fail(409,'Upload both before and after photos before approval.')
        c.execute('''INSERT INTO job_showcase_consent(job_id,allowed,updated_at) VALUES(?,?,?)
          ON CONFLICT(job_id) DO UPDATE SET allowed=excluded.allowed,updated_at=excluded.updated_at''',
          (job_id,int(data.allowed),now()))
        if data.allowed and j.get('assigned_worker_id'):
            notify(c,j['assigned_worker_id'],job_id,'work_showcase',f'Portfolio approved: {j["title"]}',
                   'The customer approved the before-and-after photos for your public Previous Work section.')
        return {'ok':True}

@app.get('/api/jobs/{job_id}/offer-comparison')
def compare_job_offers(job_id:int,req:Request):
    with conn() as c:
        u=current_user(req,c);j=get_job(c,job_id)
        if j['owner_id']!=u['id']:fail(403,'Only the job owner can compare offers.')
        rows=c.execute('''SELECT o.*,w.name worker_name,w.skills worker_skills,
          (SELECT ROUND(AVG(r.rating),1) FROM reviews r WHERE r.recipient_id=o.worker_id) rating,
          (SELECT COUNT(*) FROM reviews r WHERE r.recipient_id=o.worker_id) review_count,
          (SELECT COUNT(*) FROM jobs done JOIN offers hire ON done.accepted_offer_id=hire.id
            WHERE done.status='completed' AND hire.worker_id=o.worker_id) completed_jobs,
          EXISTS(SELECT 1 FROM worker_verifications v WHERE v.worker_id=o.worker_id AND v.status='approved') verified
          FROM offers o JOIN users w ON w.id=o.worker_id
          WHERE o.job_id=? ORDER BY (o.decision='rejected'),o.price,o.id''',(job_id,)).fetchall()
        return {'offers':[dictrow(row) for row in rows],'job_id':job_id}

def upcoming_for_user(c,u,create_reminders=False):
    rows=c.execute('''SELECT j.id,j.title,j.owner_id,j.scheduled_start,j.scheduled_end,
       j.duration_minutes,o.worker_id FROM jobs j JOIN offers o ON o.id=j.accepted_offer_id
       WHERE j.status='accepted' AND j.scheduled_start IS NOT NULL
       AND (j.owner_id=? OR o.worker_id=?) ORDER BY j.scheduled_start''',(u['id'],u['id'])).fetchall()
    current=datetime.now(SITE_TZ)
    upcoming=[]
    for r in rows:
        try:start=datetime.strptime(r['scheduled_start'],'%Y-%m-%dT%H:%M').replace(tzinfo=SITE_TZ)
        except (TypeError,ValueError):continue
        hours=(start-current).total_seconds()/3600
        if hours<-1/6 or hours>168:continue
        item={'id':r['id'],'title':r['title'],'start':r['scheduled_start'],'end':r['scheduled_end'],
              'duration_minutes':r['duration_minutes'],'my_role':'customer' if u['id']==r['owner_id'] else 'worker',
              'hours_away':round(hours,1)}
        upcoming.append(item)
        if create_reminders and hours>=0 and hours<=24:
            window='2h' if hours<=2 else '24h'
            cur=c.execute('INSERT OR IGNORE INTO job_reminder_log(job_id,user_id,window,sent_at) VALUES(?,?,?,?)',
                          (r['id'],u['id'],window,now()))
            if cur.rowcount:
                title=('Job starts within 2 hours' if window=='2h' else 'Job coming up within 24 hours')
                notify(c,u['id'],r['id'],'appointment_reminder',f'{title}: {r["title"]}',
                       f'Your confirmed appointment is at {r["scheduled_start"].replace("T"," ")} Eastern. Open the job to review the details and schedule.')
    return upcoming

@app.get('/api/upcoming-jobs')
def upcoming_jobs(req:Request):
    with conn() as c:
        u=current_user(req,c)
        return {'jobs':upcoming_for_user(c,u,True)}

@app.get('/api/jobs/{job_id}')
def job_detail(job_id:int,req:Request):
    with conn() as c:
        job=get_job(c,job_id)
        owner_status=c.execute('SELECT account_status FROM users WHERE id=?',(job['owner_id'],)).fetchone()['account_status']
        if job.get('moderation_status')=='removed' or owner_status!='active':
            try: viewer=current_user(req,c)
            except HTTPException: viewer=None
            if not viewer or (viewer['id']!=job['owner_id'] and not admin_user(viewer) and viewer['id']!=job.get('assigned_worker_id')):fail(404,'Job not found.')
        offer_rows=c.execute('''SELECT o.*,u.name worker_name,u.skills worker_skills FROM offers o
          JOIN users u ON o.worker_id=u.id WHERE o.job_id=? ORDER BY o.price ASC''',(job_id,)).fetchall()
        # Prices are visible to the owner and to the worker who submitted each offer.
        try: user=current_user(req,c)
        except HTTPException: user=None
        if user and user['id']==job['owner_id']:
            job['offers']=[dictrow(row) for row in offer_rows]
        elif user:
            job['offers']=[dictrow(row) for row in offer_rows if row['worker_id']==user['id']]
        else: job['offers']=[]
        return public_job(job,user['id'] if user else None)

@app.post('/api/jobs')
def create_job(data:JobIn,req:Request):
    validate_job(data)
    slots=validate_slots(data)
    with conn() as c:
        user=current_user(req,c)
        require_verified_email(user)
        cur=c.execute('''INSERT INTO jobs(owner_id,title,category,description,location,difficulty,budget,latitude,longitude,duration_minutes,flexible_schedule,offer_deadline,status,created_at)
          VALUES(?,?,?,?,?,?,?,?,?,?,?,?,'open',?)''',(user['id'],data.title.strip(),data.category,data.description.strip(),data.location.strip(),data.difficulty,data.budget,data.latitude,data.longitude,data.duration_minutes,int(data.flexible_schedule),data.offer_deadline or None,now()))
        if data.latitude is not None and data.longitude is not None:
            map_lat,map_lon=private_map_center(data.latitude,data.longitude)
            c.execute('UPDATE jobs SET map_latitude=?,map_longitude=? WHERE id=?',(map_lat,map_lon,cur.lastrowid))
        for start,end in slots:c.execute('INSERT INTO job_slots(job_id,start_time,end_time) VALUES(?,?,?)',(cur.lastrowid,start,end))
        c.execute('DELETE FROM job_drafts WHERE user_id=?',(user['id'],))
        return {'job':get_job(c,cur.lastrowid)}

def validate_job(data):
    if data.category not in CATEGORIES or data.difficulty not in DIFFICULTIES: fail(400,'Invalid category or difficulty.')
    if (data.latitude is None)!=(data.longitude is None): fail(400,'Both location coordinates are required.')
    if min(len(data.title.strip()),len(data.location.strip()))<2 or len(data.description.strip())<10: fail(400,'Please provide more job details.')
    if data.offer_deadline:
        try:deadline=datetime.strptime(data.offer_deadline,'%Y-%m-%d').date()
        except (ValueError,TypeError):fail(400,'Choose a valid offer deadline.')
        if deadline<datetime.now(SITE_TZ).date():fail(400,'Offer deadline must be today or later.')
        if deadline>datetime.now(SITE_TZ).date()+timedelta(days=365):fail(400,'Offer deadline must be within one year.')

@app.put('/api/jobs/{job_id}')
def edit_job(job_id:int,data:JobIn,req:Request):
    validate_job(data)
    slots=validate_slots(data)
    with conn() as c:
        user=current_user(req,c);job=get_job(c,job_id)
        require_verified_email(user)
        if job.get('moderation_status')=='removed':fail(403,'This listing was removed by an administrator.')
        if job['owner_id']!=user['id']: fail(403,'Only the customer can edit this job.')
        if job['status']!='open': fail(409,'Only open jobs can be edited.')
        if has_active_checkout(c,job_id):fail(409,'A checkout is in progress; pricing and offers are locked until it finishes.')
        c.execute('''UPDATE jobs SET title=?,category=?,description=?,location=?,difficulty=?,budget=?,latitude=?,longitude=?,duration_minutes=?,flexible_schedule=?,offer_deadline=? WHERE id=?''',
          (data.title.strip(),data.category,data.description.strip(),data.location.strip(),data.difficulty,data.budget,data.latitude,data.longitude,data.duration_minutes,int(data.flexible_schedule),data.offer_deadline or None,job_id))
        if data.latitude is None or data.longitude is None:
            c.execute('UPDATE jobs SET map_latitude=NULL,map_longitude=NULL WHERE id=?',(job_id,))
        elif job['latitude']!=data.latitude or job['longitude']!=data.longitude or job['map_latitude'] is None:
            map_lat,map_lon=private_map_center(data.latitude,data.longitude)
            c.execute('UPDATE jobs SET map_latitude=?,map_longitude=? WHERE id=?',(map_lat,map_lon,job_id))
        c.execute('DELETE FROM job_slots WHERE job_id=?',(job_id,))
        for start,end in slots:c.execute('INSERT INTO job_slots(job_id,start_time,end_time) VALUES(?,?,?)',(job_id,start,end))
        return {'job':get_job(c,job_id)}

def remove_google_calendar_events(c, job_id):
    # Best-effort cancellation of synced events; local cancellation always succeeds.
    rows=c.execute('SELECT user_id,google_event_id FROM calendar_event_links WHERE job_id=?',(job_id,)).fetchall()
    for row in rows:
        access=google_access(c,row['user_id'])
        if not access:continue
        url=('https://www.googleapis.com/calendar/v3/calendars/primary/events/'
             +urlparse.quote(row['google_event_id'],safe=''))
        try:
            request=urlrequest.Request(url,method='DELETE',headers={'Authorization':'Bearer '+access})
            with urlrequest.urlopen(request,timeout=8) as response:response.read()
            c.execute('DELETE FROM calendar_event_links WHERE job_id=? AND user_id=?',(job_id,row['user_id']))
        except Exception: pass

@app.post('/api/jobs/{job_id}/cancel')
def cancel_job(job_id:int, data:CancelIn, req:Request):
    if data.reason not in CANCELLATION_REASONS:
        fail(400,'Choose a cancellation reason from the list.')
    with conn() as c:
        u=current_user(req,c)
        job=get_job(c,job_id)
        if has_active_checkout(c,job_id):fail(409,'Checkout is in progress. Wait until it expires to cancel.')
        if job['payment_status']=='paid_test':fail(409,'A funded booking requires an administrator-reviewed cancellation or dispute.')
        if job['status'] not in ('open','accepted'):
            fail(409,'Only open or accepted jobs can be cancelled.')
        if job['status']=='accepted' and (job.get('completion_requested_at') or job.get('completion_rejected_at')):
            fail(409,'Work was already submitted for completion. This booking cannot be cancelled unilaterally. Use Open job dispute if there is a disagreement.')
        owner=u['id']==job['owner_id']
        worker=job['status']=='accepted' and u['id']==job['assigned_worker_id']
        if not (owner or worker):
            fail(403,'Only the customer or assigned worker may cancel a job.')
        c.execute('''UPDATE jobs SET status='cancelled',cancel_reason=?,cancel_note=?,
          cancelled_by=?,cancelled_at=? WHERE id=?''',
          (data.reason,data.note.strip(),u['id'],now(),job_id))
        c.execute('DELETE FROM reschedule_requests WHERE job_id=?',(job_id,)) if c.execute(
            "SELECT name FROM sqlite_master WHERE type='table' AND name='reschedule_requests'").fetchone() else None
        if job['status']=='accepted':
            other=(job['assigned_worker_id'] if owner else job['owner_id'])
            detail=f'{u["name"]} cancelled the job. Reason: {data.reason}.'
            if data.note.strip():detail+=' Note: '+data.note.strip()
            notify(c,other,job_id,'cancellation',f'Job cancelled: {job["title"]}',detail)
            remove_google_calendar_events(c,job_id)
        return {'job':get_job(c,job_id)}

@app.post('/api/jobs/{job_id}/close')
def close_job(job_id:int,req:Request):
    fail(410,'Use the cancellation form to provide a reason.')

@app.post('/api/jobs/{job_id}/complete')
def complete_job(job_id:int,req:Request):
    with conn() as c:
        user=current_user(req,c);job=get_job(c,job_id)
        if job['owner_id']!=user['id']: fail(403,'Not your job.')
        if job['status']!='accepted': fail(409,'Only accepted jobs can be completed.')
        if not job['completion_requested_at']:fail(409,'The worker must mark the work finished before you can confirm completion.')
        c.execute("UPDATE jobs SET status='completed',completed_at=? WHERE id=?",(now(),job_id))
        c.execute("UPDATE payment_transactions SET transfer_status='awaiting_connect_transfer' WHERE job_id=? AND status='paid_test'",(job_id,))
        notify(c,job['assigned_worker_id'],job_id,'completion_confirmed',f'Job completed: {job["title"]}',
               'The customer confirmed your completed work. The job is now in History.')
        return {'job':get_job(c,job_id)}

@app.post('/api/jobs/{job_id}/offers')
def offer_job(job_id:int,data:OfferIn,req:Request):
    with conn() as c:
        user=current_user(req,c);job=get_job(c,job_id)
        if job.get('moderation_status')=='removed':fail(403,'This listing was removed by an administrator.')
        require_verified_email(user)
        if job['owner_id']==user['id']: fail(403,'You cannot offer on your own job.')
        if users_block_each_other(c,user['id'],job['owner_id']):fail(403,'You cannot offer on a job from a blocked account.')
        if job['status']!='open': fail(409,'This job is not accepting offers.')
        if has_active_checkout(c,job_id):fail(409,'Checkout pending. Wait for payment confirmation or expiry.')
        if job.get('offer_deadline') and job['offer_deadline']<datetime.now(SITE_TZ).date().isoformat():fail(409,'The offer deadline has passed. This job is no longer accepting offers.')
        if (data.proposed_start is None)!=(data.proposed_end is None):fail(400,'Choose both start and end times.')
        if data.proposed_start:
            valid_window(data.proposed_start,data.proposed_end)
            if conflicting_jobs(c,user['id'],data.proposed_start,data.proposed_end,job_id):
                fail(409,'This time overlaps with one of your accepted HomeTask assignments.')
            if job_slots(c,job_id) and not any(x['start']==data.proposed_start and x['end']==data.proposed_end for x in job_slots(c,job_id)) and not job['flexible_schedule']:
                # Counterproposals are allowed even for specific-slot jobs.
                pass
        elif job_slots(c,job_id):fail(400,'Please choose a proposed appointment time.')
        prior=c.execute('SELECT price,note,proposed_start,proposed_end,decision FROM offers WHERE job_id=? AND worker_id=?',(job_id,user['id'])).fetchone()
        if prior and prior['decision']=='rejected' and data.price!=job['budget']:
            fail(409,'After a decline, you can resubmit at the original posted budget.')
        c.execute('''INSERT INTO offers(job_id,worker_id,price,note,created_at,proposed_start,proposed_end) VALUES(?,?,?,?,?,?,?)
          ON CONFLICT(job_id,worker_id) DO UPDATE SET price=excluded.price,note=excluded.note,
          proposed_start=excluded.proposed_start,proposed_end=excluded.proposed_end,
          decision='pending',counter_price=NULL,counter_note='',counter_status='none' ''',
          (job_id,user['id'],data.price,data.note.strip(),now(),data.proposed_start,data.proposed_end))
        changed=not prior or any([prior['price']!=data.price,prior['note']!=data.note.strip(),
                                  prior['proposed_start']!=data.proposed_start,prior['proposed_end']!=data.proposed_end])
        if changed:
            is_counter=data.price!=job['budget']
            off_slots=job_slots(c,job_id)
            proposed_alt=bool(data.proposed_start and off_slots and not any(
                x['start']==data.proposed_start and x['end']==data.proposed_end for x in off_slots))
            bits=[f'Offer: ${data.price:,} (listed budget ${job["budget"]:,})']
            if data.proposed_start:
                bits.append(f'Requested time: {data.proposed_start.replace("T"," ")} – {data.proposed_end.replace("T"," ")} Eastern')
            if proposed_alt: bits.append('Different from your listed availability — review before hiring.')
            notify(c,job['owner_id'],job_id,'counteroffer' if is_counter or proposed_alt else 'offer',
                   f'{"Updated " if prior else "New "}{"counteroffer" if is_counter else "worker offer"} for {job["title"]}',
                   f'{user["name"]}: '+'. '.join(bits))
        return {'ok':True}

@app.delete('/api/jobs/{job_id}/offers/mine')
def withdraw_offer(job_id:int,req:Request):
    with conn() as c:
        user=current_user(req,c);job=get_job(c,job_id)
        if job['status']!='open': fail(409,'Cannot withdraw from a job that is no longer open.')
        if has_active_checkout(c,job_id):fail(409,'Checkout pending. An offer cannot be withdrawn while payment is underway.')
        cur=c.execute('DELETE FROM offers WHERE job_id=? AND worker_id=?',(job_id,user['id']))
        if cur.rowcount==0: fail(404,'You have no offer on this job.')
        return {'ok':True}

@app.post('/api/jobs/{job_id}/accept/{offer_id}')
def accept_offer(job_id:int,offer_id:int,req:Request):
    # Legacy demo mode remains usable locally, but it is NEVER funded.
    if payment_mode()!='demo_unfunded':
        fail(409,'Payments are enabled or partially configured. Use verified checkout or fix the Stripe test configuration before hiring.')
    with conn() as c:
        user=current_user(req,c);job=get_job(c,job_id)
        offer=c.execute('SELECT * FROM offers WHERE id=? AND job_id=?',(offer_id,job_id)).fetchone()
        validate_offer_for_hire(c,job,offer,user)
        if has_active_checkout(c,job_id):fail(409,'Payment checkout is underway. Hiring is locked.')
        old_payment=c.execute('SELECT status FROM payment_transactions WHERE job_id=?',(job_id,)).fetchone()
        if old_payment and old_payment['status'] not in ('expired','failed'):
            fail(409,'A previous payment attempt requires review before an unfunded demo hire.')
        b=commission_breakdown(offer['price'])
        c.execute("""INSERT INTO payment_transactions(job_id,offer_id,customer_id,worker_id,
          agreed_price_cents,commission_cents,worker_net_cents,service_fee_cents,checkout_total_cents,mode,status,created_at)
          VALUES(?,?,?,?,?,?,?,?,?,'demo_unfunded','unfunded_demo',?)""",
          (job_id,offer_id,user['id'],offer['worker_id'],b['agreed_price_cents'],b['commission_cents'],b['worker_net_cents'],b['service_fee_cents'],b['checkout_total_cents'],now()))
        hire_after_payment(c,job,offer)
        return {'job':get_job(c,job_id),'payment_status':'unfunded_demo'}

def conversation_participants(c,job,uid,partner):
    if not partner or partner==uid: fail(400,'Select another user to message.')
    offer=c.execute('SELECT id FROM offers WHERE job_id=? AND worker_id=?',(job['id'], partner if uid==job['owner_id'] else uid)).fetchone()
    if uid==job['owner_id']:
        if not offer: fail(403,'You can only message workers who offered on this job.')
    else:
        if partner!=job['owner_id'] or not offer: fail(403,'You can only message the customer after offering on their job.')

@app.get('/api/jobs/{job_id}/messages/{partner_id}')
def get_messages(job_id:int,partner_id:int,req:Request):
    with conn() as c:
        user=current_user(req,c);job=get_job(c,job_id)
        conversation_participants(c,job,user['id'],partner_id)
        hidden=c.execute('SELECT through_message_id FROM hidden_conversations WHERE user_id=? AND job_id=? AND partner_id=?',
                         (user['id'],job_id,partner_id)).fetchone()
        cutoff=hidden['through_message_id'] if hidden else 0
        c.execute('''UPDATE messages SET read_at=? WHERE job_id=? AND sender_id=? AND recipient_id=?
          AND read_at IS NULL AND id>? AND NOT EXISTS (SELECT 1 FROM hidden_messages h WHERE h.user_id=? AND h.message_id=messages.id)''',
          (now(),job_id,partner_id,user['id'],cutoff,user['id']))
        rows=c.execute('''SELECT m.*,u.name sender_name FROM messages m JOIN users u ON m.sender_id=u.id
          WHERE m.job_id=? AND m.id>? AND ((m.sender_id=? AND m.recipient_id=?) OR (m.sender_id=? AND m.recipient_id=?))
          AND NOT EXISTS (SELECT 1 FROM hidden_messages h WHERE h.user_id=? AND h.message_id=m.id)
          ORDER BY m.created_at,m.id''',
          (job_id,cutoff,user['id'],partner_id,partner_id,user['id'],user['id'])).fetchall()
        return {'messages':[dictrow(r) for r in rows]}

@app.post('/api/jobs/{job_id}/messages/{partner_id}')
def send_message(job_id:int,partner_id:int,data:MessageIn,req:Request):
    if not data.body.strip(): fail(400,'Message cannot be empty.')
    with conn() as c:
        user=current_user(req,c);job=get_job(c,job_id)
        require_verified_email(user)
        conversation_participants(c,job,user['id'],partner_id)
        if users_block_each_other(c,user['id'],partner_id):fail(403,'Messaging is disabled between blocked accounts.')
        if job['status']!='accepted' or not job.get('accepted_offer_id') or not job.get('assigned_worker_id'):
            fail(409,'Messaging opens after a worker is hired and closes when the job finishes or is cancelled.')
        expected_partner=job['assigned_worker_id'] if user['id']==job['owner_id'] else job['owner_id']
        if partner_id!=expected_partner or user['id'] not in (job['owner_id'],job['assigned_worker_id']):
            fail(403,'Only the customer and hired worker can message about this job.')
        c.execute('INSERT INTO messages(job_id,sender_id,recipient_id,body,created_at) VALUES(?,?,?,?,?)',
          (job_id,user['id'],partner_id,data.body.strip(),now()))
        notify(c,partner_id,job_id,'message',f'Message about {job["title"]}',f'{user["name"]} sent you a message.')
        return {'ok':True}

@app.delete('/api/messages/{message_id}')
def hide_message(message_id:int,req:Request):
    with conn() as c:
        user=current_user(req,c)
        msg=c.execute('SELECT id,sender_id,recipient_id FROM messages WHERE id=?',(message_id,)).fetchone()
        if not msg: fail(404,'Message not found.')
        if user['id'] not in (msg['sender_id'],msg['recipient_id']): fail(403,'Not your message.')
        c.execute('INSERT OR IGNORE INTO hidden_messages(user_id,message_id) VALUES(?,?)',
                  (user['id'],message_id))
        return {'ok':True}

@app.delete('/api/jobs/{job_id}/conversations/{partner_id}')
def hide_conversation(job_id:int,partner_id:int,req:Request):
    with conn() as c:
        user=current_user(req,c);job=get_job(c,job_id)
        conversation_participants(c,job,user['id'],partner_id)
        last=c.execute('''SELECT COALESCE(MAX(id),0) AS last_id FROM messages
          WHERE job_id=? AND ((sender_id=? AND recipient_id=?) OR (sender_id=? AND recipient_id=?))''',
          (job_id,user['id'],partner_id,partner_id,user['id'])).fetchone()['last_id']
        c.execute('''INSERT INTO hidden_conversations(user_id,job_id,partner_id,through_message_id)
          VALUES(?,?,?,?) ON CONFLICT(user_id,job_id,partner_id)
          DO UPDATE SET through_message_id=excluded.through_message_id''',
          (user['id'],job_id,partner_id,last))
        return {'ok':True}

# Optional OAuth configuration: set GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET and
# GOOGLE_REDIRECT_URI (e.g. http://127.0.0.1:8000/api/google/callback).
# Google requires HTTPS for public deployment; loopback HTTP works for development.
@app.get('/api/google/status')
def google_status(req:Request):
    with conn() as c:
        u=current_user(req,c)
        connected=c.execute('SELECT 1 FROM google_connections WHERE user_id=?',(u['id'],)).fetchone() is not None
        return {'configured':bool(os.getenv('GOOGLE_CLIENT_ID') and os.getenv('GOOGLE_CLIENT_SECRET') and os.getenv('GOOGLE_REDIRECT_URI')),'connected':connected}

@app.get('/api/google/connect')
def google_connect(req:Request):
    client=os.getenv('GOOGLE_CLIENT_ID')
    redirect=os.getenv('GOOGLE_REDIRECT_URI')
    if not client or not redirect or not os.getenv('GOOGLE_CLIENT_SECRET'):fail(503,'Google Calendar OAuth is not configured on this server.')
    with conn() as c:
        u=current_user(req,c)
        csrf=secrets.token_urlsafe(24)
        c.execute('CREATE TABLE IF NOT EXISTS oauth_states (state TEXT PRIMARY KEY,user_id INTEGER, expires INTEGER)')
        c.execute('INSERT INTO oauth_states(state,user_id,expires) VALUES(?,?,?)',(csrf,u['id'],now()+600))
    params=urlparse.urlencode({'client_id':client,'redirect_uri':redirect,'response_type':'code','access_type':'offline','prompt':'consent','scope':'https://www.googleapis.com/auth/calendar.events','state':csrf})
    return RedirectResponse('https://accounts.google.com/o/oauth2/v2/auth?'+params)

@app.get('/api/google/callback')
def google_callback(code:str='',state:str='',error:str=''):
    if error or not code or not state:fail(400,'Google authorization canceled or incomplete.')
    with conn() as c:
        record=c.execute('SELECT user_id FROM oauth_states WHERE state=? AND expires>?',(state,now())).fetchone()
        if not record:fail(400,'Authorization expired. Try connecting again.')
        c.execute('DELETE FROM oauth_states WHERE state=?',(state,))
        values=urlparse.urlencode({'code':code,'client_id':os.getenv('GOOGLE_CLIENT_ID',''),'client_secret':os.getenv('GOOGLE_CLIENT_SECRET',''),'redirect_uri':os.getenv('GOOGLE_REDIRECT_URI',''),'grant_type':'authorization_code'}).encode()
        try:
            req=urlrequest.Request('https://oauth2.googleapis.com/token',data=values,method='POST')
            with urlrequest.urlopen(req,timeout=10) as resp:tokens=json.loads(resp.read())
        except Exception:fail(502,'Google token exchange failed. Check OAuth configuration.')
        previous=c.execute('SELECT refresh_token FROM google_connections WHERE user_id=?',(record['user_id'],)).fetchone()
        refresh=tokens.get('refresh_token') or (previous['refresh_token'] if previous else '')
        if not refresh:fail(400,'Google did not supply offline access. Disconnect the app in Google settings and retry.')
        c.execute('''INSERT INTO google_connections(user_id,refresh_token,access_token,expires_at) VALUES(?,?,?,?)
          ON CONFLICT(user_id) DO UPDATE SET refresh_token=excluded.refresh_token,access_token=excluded.access_token,expires_at=excluded.expires_at''',
          (record['user_id'],refresh,tokens['access_token'],now()+tokens.get('expires_in',3600)))
        for row in c.execute("SELECT id FROM jobs WHERE status='accepted' AND scheduled_start IS NOT NULL AND (owner_id=? OR accepted_offer_id IN (SELECT id FROM offers WHERE worker_id=?))",(record['user_id'],record['user_id'])).fetchall():
            sync_appointment(c,row['id'])
    return RedirectResponse('/?calendar=connected')

@app.delete('/api/google/disconnect')
def google_disconnect(req:Request):
    with conn() as c:
        u=current_user(req,c)
        c.execute('DELETE FROM google_connections WHERE user_id=?',(u['id'],))
        # Existing events remain in Google Calendar unless manually removed.
        return {'ok':True}

@app.put('/api/jobs/{job_id}/schedule')
def reschedule(job_id:int,data:ScheduleIn,req:Request):
    # Either participant can request a change; only the other can approve.
    valid_window(data.start,data.end)
    with conn() as c:
        u=current_user(req,c);j=get_job(c,job_id)
        if j['status']!='accepted':fail(409,'Only hired jobs can be rescheduled.')
        members=appointment_participants(c,j)
        if u['id'] not in members:fail(403,'Not a participant in this job.')
        c.execute('''CREATE TABLE IF NOT EXISTS reschedule_requests (
           job_id INTEGER PRIMARY KEY REFERENCES jobs(id) ON DELETE CASCADE,
           requester_id INTEGER NOT NULL, start_time TEXT NOT NULL,end_time TEXT NOT NULL)''')
        other=next(member for member in members if member!=u['id'])
        c.execute('''INSERT INTO reschedule_requests(job_id,requester_id,start_time,end_time) VALUES(?,?,?,?)
           ON CONFLICT(job_id) DO UPDATE SET requester_id=excluded.requester_id,start_time=excluded.start_time,end_time=excluded.end_time''',
           (job_id,u['id'],data.start,data.end))
        notify(c,other,job_id,'reschedule',f'Time change requested: {j["title"]}',
               f'{u["name"]} requests {data.start.replace("T"," ")} – {data.end.replace("T"," ")} Eastern. Your approval is required; the existing booking stays unchanged.')
        return {'ok':True}

@app.get('/api/jobs/{job_id}/reschedule')
def reschedule_status(job_id:int,req:Request):
    with conn() as c:
        u=current_user(req,c);j=get_job(c,job_id)
        if u['id'] not in appointment_participants(c,j):fail(403,'Not a job participant.')
        c.execute('''CREATE TABLE IF NOT EXISTS reschedule_requests (
           job_id INTEGER PRIMARY KEY REFERENCES jobs(id) ON DELETE CASCADE,
           requester_id INTEGER NOT NULL,start_time TEXT NOT NULL,end_time TEXT NOT NULL)''')
        row=c.execute('SELECT * FROM reschedule_requests WHERE job_id=?',(job_id,)).fetchone()
        return {'request':dictrow(row)}

@app.post('/api/jobs/{job_id}/reschedule/approve')
def approve_reschedule(job_id:int,req:Request):
    with conn() as c:
        u=current_user(req,c);j=get_job(c,job_id)
        if j['status']!='accepted' or u['id'] not in appointment_participants(c,j):fail(403,'Not an assigned participant.')
        c.execute('''CREATE TABLE IF NOT EXISTS reschedule_requests (
           job_id INTEGER PRIMARY KEY REFERENCES jobs(id) ON DELETE CASCADE,
           requester_id INTEGER NOT NULL,start_time TEXT NOT NULL,end_time TEXT NOT NULL)''')
        row=c.execute('SELECT * FROM reschedule_requests WHERE job_id=?',(job_id,)).fetchone()
        if not row:fail(404,'No pending request.')
        if row['requester_id']==u['id']:fail(403,'The other participant must approve.')
        valid_window(row['start_time'],row['end_time'])
        if conflicting_jobs(c,j['assigned_worker_id'],row['start_time'],row['end_time'],job_id):
            fail(409,'The worker has another confirmed HomeTask job at the proposed time.')
        # The accepted proposal updates both the appointment and the agreed expected duration.
        changed_minutes=int((datetime.strptime(row['end_time'],'%Y-%m-%dT%H:%M')-datetime.strptime(row['start_time'],'%Y-%m-%dT%H:%M')).total_seconds()/60)
        if not 15<=changed_minutes<=1440:fail(400,'Requested duration must be between 15 minutes and 24 hours.')
        c.execute('UPDATE jobs SET scheduled_start=?,scheduled_end=?,duration_minutes=? WHERE id=?',(row['start_time'],row['end_time'],changed_minutes,job_id))
        c.execute('DELETE FROM reschedule_requests WHERE job_id=?',(job_id,))
        notify(c,row['requester_id'],job_id,'reschedule_approved',f'New time approved: {j["title"]}',
               f'The new appointment at {row["start_time"].replace("T"," ")} Eastern is now confirmed.')
        sync_appointment(c,job_id)
        return {'job':get_job(c,job_id)}

@app.get('/api/jobs/{job_id}/calendar.ics')
def download_calendar(job_id:int,req:Request):
    with conn() as c:
        u=current_user(req,c);j=get_job(c,job_id)
        if u['id'] not in appointment_participants(c,j):fail(403,'Only job participants may export appointments.')
        if not j.get('scheduled_start'):fail(404,'No confirmed appointment yet.')
        def dt(value):return datetime.strptime(value,'%Y-%m-%dT%H:%M').replace(tzinfo=SITE_TZ).astimezone(timezone.utc).strftime('%Y%m%dT%H%M%SZ')
        def clean(value):return str(value).replace(chr(92),chr(92)*2).replace(';',chr(92)+';').replace(',',chr(92)+',').replace(chr(10),chr(92)+'n')
        lines=['BEGIN:VCALENDAR','VERSION:2.0','PRODID:-//HomeTask//Scheduling//EN','BEGIN:VEVENT',f'UID:hometask-{job_id}@local',f'DTSTAMP:{datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")}',f'DTSTART:{dt(j["scheduled_start"])}',f'DTEND:{dt(j["scheduled_end"])}',f'SUMMARY:{clean("HomeTask: "+j["title"])}',f'LOCATION:{clean(j["location"])}','END:VEVENT','END:VCALENDAR','']
        return Response(chr(13).join([line+chr(10) for line in lines]),media_type='text/calendar',headers={'Content-Disposition':f'attachment; filename="hometask-{job_id}.ics"'})

# --- HomeTask 13.8: persistently authorized marketplace administration ---
def audit(c,actor,action,target_type,target_id,note=''):
    c.execute('INSERT INTO admin_audit(actor_id,action,target_type,target_id,note,created_at) VALUES(?,?,?,?,?,?)',
              (actor,action,target_type,target_id,str(note)[:1000],now()))

def require_admin(req,c):
    user=current_user(req,c)
    if not admin_user(user):fail(403,'Administrator access required.')
    return user

class ReportIn(BaseModel):
    target_type:str
    target_id:int
    category:str
    details:str=Field(min_length=12,max_length=1500)

class AdminReviewIn(BaseModel):
    action:str
    note:str=Field(default='',max_length=1000)

class AccountAction(BaseModel):
    status:str
    reason:str=Field(min_length=5,max_length=600)

class JobModeration(BaseModel):
    remove:bool
    reason:str=Field(min_length=5,max_length=600)

class ReportReview(BaseModel):
    status:str
    note:str=Field(default='',max_length=1000)

class PlatformSettingsIn(BaseModel):
    announcement:str=Field(default='',max_length=300)
    community_guidelines:str=Field(default='',max_length=2500)

@app.post('/api/reports')
def submit_marketplace_report(data:ReportIn,req:Request):
    if data.target_type not in ('job','user'):fail(400,'Choose a job or account to report.')
    if data.category not in ('spam','fraud','harassment','safety','dispute','other'):fail(400,'Choose a valid reason.')
    if data.target_id<=0 or len(data.details.strip())<12:fail(400,'Please explain your concern.')
    with conn() as c:
        reporter=current_user(req,c)
        if data.target_type=='user':
            target=c.execute('SELECT id FROM users WHERE id=?',(data.target_id,)).fetchone()
            if not target:fail(404,'User not found.')
            if data.target_id==reporter['id']:fail(400,'You cannot report your own account.')
        else:
            target=c.execute('SELECT id,owner_id FROM jobs WHERE id=?',(data.target_id,)).fetchone()
            if not target:fail(404,'Job not found.')
            if target['owner_id']==reporter['id'] and data.category!='dispute':fail(400,'You cannot report your own job.')
            if data.category=='dispute':
                j=get_job(c,data.target_id)
                if reporter['id'] not in (j['owner_id'],j.get('assigned_worker_id')):fail(403,'Only hired participants can open a job dispute.')
        count=c.execute('SELECT COUNT(*) n FROM marketplace_reports WHERE reporter_id=? AND created_at>?',
                        (reporter['id'],now()-24*3600)).fetchone()['n']
        if count>=5:fail(429,'Maximum five reports per 24 hours. Contact an administrator for urgent safety concerns.')
        existing=c.execute("SELECT id FROM marketplace_reports WHERE reporter_id=? AND target_type=? AND target_id=? AND status IN ('open','reviewing')",
                           (reporter['id'],data.target_type,data.target_id)).fetchone()
        if existing:fail(409,'You already have an open report for this item.')
        cur=c.execute('INSERT INTO marketplace_reports(reporter_id,target_type,target_id,category,details,created_at,updated_at) VALUES(?,?,?,?,?,?,?)',
                      (reporter['id'],data.target_type,data.target_id,data.category,data.details.strip(),now(),now()))
        for admin in c.execute("SELECT id FROM users WHERE is_admin=1 AND account_status='active'").fetchall():
            notify(c,admin['id'],None,'admin_report','New marketplace report',
                   f'{reporter["name"]} reported a {data.target_type}. Reason: {data.category}.')
        notify(c,reporter['id'],None,'report_submitted','Report received',
               'Your report has been submitted to HomeTask administrators.')
        return {'ok':True,'report_id':cur.lastrowid}

@app.get('/api/site-settings')
def site_settings():
    with conn() as c:
        values={r['key']:r['value'] for r in c.execute('SELECT key,value FROM platform_settings')}
        return {'announcement':values.get('announcement',''),
                'community_guidelines':values.get('community_guidelines','')}

@app.get('/api/admin/overview')
def admin_overview(req:Request):
    with conn() as c:
        require_admin(req,c)
        def count(query):return c.execute(query).fetchone()[0]
        stats={'users':count('SELECT COUNT(*) FROM users'),
               'active_users':count("SELECT COUNT(*) FROM users WHERE account_status='active'"),
               'active_jobs':count("SELECT COUNT(*) FROM jobs WHERE status IN ('open','accepted') AND moderation_status='visible'"),
               'completed_jobs':count("SELECT COUNT(*) FROM jobs WHERE status='completed'"),
               'pending_verifications':count("SELECT COUNT(*) FROM worker_verifications WHERE status='pending'"),
               'open_reports':count("SELECT COUNT(*) FROM marketplace_reports WHERE status IN ('open','reviewing')"),
               'removed_jobs':count("SELECT COUNT(*) FROM jobs WHERE moderation_status='removed'"),
               'restricted_users':count("SELECT COUNT(*) FROM users WHERE account_status<>'active'")}
        recent_reports=[dictrow(r) for r in c.execute('''SELECT r.id,r.category,r.target_type,r.target_id,r.created_at,r.status,u.name reporter_name
            FROM marketplace_reports r JOIN users u ON u.id=r.reporter_id ORDER BY r.id DESC LIMIT 6''')]
        recent_requests=[dictrow(r) for r in c.execute("SELECT v.worker_id,u.name,v.submitted_at FROM worker_verifications v JOIN users u ON u.id=v.worker_id WHERE v.status='pending' ORDER BY v.submitted_at DESC LIMIT 6")]
        return {'stats':stats,'reports':recent_reports,'verification_requests':recent_requests}

@app.get('/api/admin/verifications')
def admin_verifications(req:Request,status:str='all'):
    with conn() as c:
        require_admin(req,c)
        if status not in ('all','pending','approved','rejected','revoked'):fail(400,'Invalid verification status.')
        query='''SELECT v.worker_id,v.statement,v.status,v.submitted_at,v.reviewed_at,v.admin_note,
           u.name,u.email,u.skills,u.bio,u.location,ru.name reviewer_name
           FROM worker_verifications v JOIN users u ON u.id=v.worker_id
           LEFT JOIN users ru ON ru.id=v.reviewer_id'''
        params=[]
        if status!='all':query+=' WHERE v.status=?';params.append(status)
        query+=' ORDER BY CASE WHEN v.status=\'pending\' THEN 0 ELSE 1 END,v.submitted_at DESC LIMIT 100'
        return {'requests':[dictrow(r) for r in c.execute(query,params)]}

@app.post('/api/admin/verifications/{worker_id}')
def admin_review_verification(worker_id:int,data:AdminReviewIn,req:Request):
    if data.action not in ('approve','deny','revoke'):fail(400,'Unknown verification action.')
    with conn() as c:
        admin=require_admin(req,c)
        row=c.execute('SELECT * FROM worker_verifications WHERE worker_id=?',(worker_id,)).fetchone()
        if not row:fail(404,'Verification not found.')
        if data.action=='revoke':
            if row['status']!='approved':fail(409,'Only approved verifications can be revoked.')
            result='revoked'
        else:
            if row['status']!='pending':fail(409,'Only pending requests can be approved or denied.')
            result='approved' if data.action=='approve' else 'rejected'
        c.execute('UPDATE worker_verifications SET status=?,reviewed_at=?,reviewer_id=?,admin_note=? WHERE worker_id=?',
                  (result,now(),admin['id'],data.note.strip(),worker_id))
        c.execute('INSERT INTO verification_events(worker_id,admin_id,status,note,created_at) VALUES(?,?,?,?,?)',
                  (worker_id,admin['id'],result,data.note.strip(),now()))
        titles={'approved':'You’re verified!','rejected':'Verification request denied','revoked':'Verification status revoked'}
        bodies={'approved':'Your HomeTask profile information review was approved. Your profile now displays the Verified badge.',
                'rejected':'Your verification request was not approved. You can submit a new request.',
                'revoked':'Your HomeTask Verified badge has been removed. Contact support if you have questions.'}
        notify(c,worker_id,None,'verification_'+('denied' if result=='rejected' else result),titles[result],bodies[result])
        audit(c,admin['id'],'verification_'+result,'user',worker_id,data.note)
        return {'ok':True,'status':result}

@app.get('/api/admin/users')
def admin_users(req:Request,q:str='',status:str='all'):
    with conn() as c:
        require_admin(req,c)
        if status not in ('all','active','suspended','banned'):fail(400,'Invalid account filter.')
        sql='''SELECT u.id,u.name,u.email,u.role,u.location,u.is_admin,u.account_status,u.email_verified,u.created_at,
            (SELECT COUNT(*) FROM jobs j WHERE j.owner_id=u.id) job_count,
            (SELECT COUNT(*) FROM offers o WHERE o.worker_id=u.id) offer_count,
            EXISTS(SELECT 1 FROM worker_verifications v WHERE v.worker_id=u.id AND v.status='approved') profile_verified
            FROM users u WHERE (u.name LIKE ? OR u.email LIKE ?)'''
        term='%'+q.strip()[:80]+'%';args=[term,term]
        if status!='all':sql+=' AND u.account_status=?';args.append(status)
        sql+=' ORDER BY u.id DESC LIMIT 100'
        return {'users':[dictrow(r) for r in c.execute(sql,args)]}

@app.post('/api/admin/users/{user_id}/status')
def admin_user_action(user_id:int,data:AccountAction,req:Request):
    if data.status not in ('active','suspended','banned'):fail(400,'Invalid account status.')
    with conn() as c:
        admin=require_admin(req,c)
        target=c.execute('SELECT id,is_admin,account_status FROM users WHERE id=?',(user_id,)).fetchone()
        if not target:fail(404,'Account not found.')
        if user_id==admin['id']:fail(403,'You cannot restrict your own admin account.')
        if target['is_admin']:fail(403,'Another administrator account cannot be restricted from this dashboard.')
        if target['account_status']==data.status:fail(409,'Account already has that status.')
        c.execute('UPDATE users SET account_status=? WHERE id=?',(data.status,user_id))
        if data.status!='active':c.execute('DELETE FROM sessions WHERE user_id=?',(user_id,))
        notify(c,user_id,None,'account_status','Account status updated',
               'Your HomeTask account is now '+data.status+'. Please contact HomeTask administration if you need assistance.')
        audit(c,admin['id'],'account_'+data.status,'user',user_id,data.reason.strip())
        return {'ok':True}

@app.get('/api/admin/jobs')
def admin_jobs(req:Request,q:str='',status:str='all',location:str='',category:str='',difficulty:str=''):
    with conn() as c:
        require_admin(req,c)
        if status not in ('all','open','accepted','completed','cancelled','closed','removed'):fail(400,'Invalid job status.')
        sql='''SELECT j.id,j.title,j.category,j.description,j.location,j.difficulty,j.budget,j.status,j.moderation_status,j.created_at,
           j.owner_id,u.name owner_name,(SELECT COUNT(*) FROM offers o WHERE o.job_id=j.id) offer_count
           FROM jobs j JOIN users u ON u.id=j.owner_id WHERE
           (j.title LIKE ? OR j.description LIKE ? OR j.category LIKE ? OR j.location LIKE ?
            OR j.difficulty LIKE ? OR CAST(j.budget AS TEXT) LIKE ? OR u.name LIKE ?)'''
        term='%'+q.strip()[:80]+'%';args=[term]*7
        if location.strip():sql+=' AND j.location LIKE ?';args.append('%'+location.strip()[:80]+'%')
        if category.strip():
            if category not in CATEGORIES:fail(400,'Invalid job category.')
            sql+=' AND j.category=?';args.append(category)
        if difficulty.strip():
            if difficulty not in DIFFICULTIES:fail(400,'Invalid difficulty.')
            sql+=' AND j.difficulty=?';args.append(difficulty)
        if status=='removed':sql+=' AND j.moderation_status=?';args.append('removed')
        elif status!='all':sql+=' AND j.status=?';args.append(status)
        sql+=' ORDER BY j.id DESC LIMIT 100'
        return {'jobs':[dictrow(r) for r in c.execute(sql,args)]}

@app.get('/api/admin/jobs/{job_id}')
def admin_job_details(job_id:int, req:Request):
    """Private read-only job details for resolving reports and disputes.

    This route also works for removed and closed listings. It never exposes
    full job details to non-admin accounts.
    """
    with conn() as c:
        require_admin(req,c)
        job=get_job(c,job_id)
        return {key:job.get(key) for key in (
            'id','title','description','category','difficulty','location','budget',
            'status','moderation_status','owner_id','owner_name','created_at',
            'offer_count','assigned_worker_name','accepted_price','duration_minutes',
            'offer_deadline')}

@app.post('/api/admin/jobs/{job_id}/moderation')
def admin_moderate_job(job_id:int,data:JobModeration,req:Request):
    with conn() as c:
        admin=require_admin(req,c)
        job=c.execute('SELECT id,title,owner_id,moderation_status FROM jobs WHERE id=?',(job_id,)).fetchone()
        if not job:fail(404,'Job not found.')
        desired='removed' if data.remove else 'visible'
        if job['moderation_status']==desired:fail(409,'Listing already has this status.')
        c.execute('UPDATE jobs SET moderation_status=? WHERE id=?',(desired,job_id))
        notify(c,job['owner_id'],job_id,'job_moderation',
               'Listing removed by administration' if data.remove else 'Listing restored',
               f'Your listing "{job["title"]}" was '+('hidden from job discovery.' if data.remove else 'restored to job discovery.'))
        audit(c,admin['id'],'job_removed' if data.remove else 'job_restored','job',job_id,data.reason.strip())
        return {'ok':True}

@app.get('/api/admin/reports')
def admin_reports(req:Request,status:str='all'):
    with conn() as c:
        require_admin(req,c)
        if status not in ('all','open','reviewing','resolved','dismissed'):fail(400,'Invalid report status.')
        sql='''SELECT r.*,u.name reporter_name,u.email reporter_email,a.name reviewer_name
            FROM marketplace_reports r JOIN users u ON u.id=r.reporter_id
            LEFT JOIN users a ON a.id=r.reviewer_id''';args=[]
        if status!='all':sql+=' WHERE r.status=?';args.append(status)
        sql+=' ORDER BY CASE WHEN r.status IN (\'open\',\'reviewing\') THEN 0 ELSE 1 END,r.id DESC LIMIT 100'
        return {'reports':[dictrow(r) for r in c.execute(sql,args)]}

@app.post('/api/admin/reports/{report_id}/review')
def admin_review_report(report_id:int,data:ReportReview,req:Request):
    if data.status not in ('reviewing','resolved','dismissed'):fail(400,'Invalid report decision.')
    with conn() as c:
        admin=require_admin(req,c)
        report=c.execute('SELECT * FROM marketplace_reports WHERE id=?',(report_id,)).fetchone()
        if not report:fail(404,'Report not found.')
        c.execute('UPDATE marketplace_reports SET status=?,admin_note=?,reviewer_id=?,updated_at=? WHERE id=?',
                  (data.status,data.note.strip(),admin['id'],now(),report_id))
        if data.status in ('resolved','dismissed'):
            notify(c,report['reporter_id'],None,'report_resolved' if data.status=='resolved' else 'report_dismissed',
                   'Report reviewed','An administrator has reviewed your report. Status: '+data.status+'.')
        audit(c,admin['id'],'report_'+data.status,'report',report_id,data.note.strip())
        return {'ok':True}

@app.get('/api/admin/activity')
def admin_activity(req:Request):
    with conn() as c:
        require_admin(req,c)
        return {'events':[dictrow(r) for r in c.execute('''SELECT a.*,u.name actor_name
          FROM admin_audit a JOIN users u ON u.id=a.actor_id ORDER BY a.id DESC LIMIT 100''')]}

@app.get('/api/admin/analytics')
def admin_analytics(req:Request,days:int=30):
    with conn() as c:
        require_admin(req,c)
        if days not in (7,30,90,365):fail(400,'Choose 7, 30, 90 or 365 days.')
        start=now()-days*86400
        stats={}
        stats['new_users']=c.execute('SELECT COUNT(*) FROM users WHERE created_at>=?',(start,)).fetchone()[0]
        stats['posted_jobs']=c.execute('SELECT COUNT(*) FROM jobs WHERE created_at>=?',(start,)).fetchone()[0]
        stats['completed_jobs']=c.execute('SELECT COUNT(*) FROM jobs WHERE status=? AND completed_at>=?',('completed',start)).fetchone()[0]
        stats['agreed_job_value']=c.execute('''SELECT COALESCE(SUM(o.price),0) FROM jobs j JOIN offers o ON o.id=j.accepted_offer_id
                                           WHERE j.status IN ('accepted','completed') AND j.created_at>=?''',(start,)).fetchone()[0]
        stats['total_users']=c.execute('SELECT COUNT(*) FROM users').fetchone()[0]
        stats['all_jobs']=c.execute('SELECT COUNT(*) FROM jobs').fetchone()[0]
        categories=[dictrow(r) for r in c.execute('''SELECT category,COUNT(*) count FROM jobs WHERE created_at>=?
                          GROUP BY category ORDER BY count DESC LIMIT 12''',(start,))]
        def daily(query):return {r['day']:r['n'] for r in c.execute(query,(start,))}
        users=daily("SELECT date(created_at,'unixepoch') day,COUNT(*) n FROM users WHERE created_at>=? GROUP BY day")
        jobs=daily("SELECT date(created_at,'unixepoch') day,COUNT(*) n FROM jobs WHERE created_at>=? GROUP BY day")
        points=[]
        for offset in range(days-1,-1,-1):
            day=datetime.fromtimestamp(now()-offset*86400,timezone.utc).strftime('%Y-%m-%d')
            points.append({'date':day,'users':users.get(day,0),'jobs':jobs.get(day,0)})
        return {'stats':stats,'categories':categories,'trend':points}

@app.get('/api/admin/settings')
def admin_settings(req:Request):
    with conn() as c:
        require_admin(req,c)
        vals={r['key']:r['value'] for r in c.execute('SELECT key,value FROM platform_settings')}
        return {'announcement':vals.get('announcement',''),'community_guidelines':vals.get('community_guidelines','')}

@app.put('/api/admin/settings')
def update_admin_settings(data:PlatformSettingsIn,req:Request):
    with conn() as c:
        admin=require_admin(req,c)
        for k,v in [('announcement',data.announcement.strip()),('community_guidelines',data.community_guidelines.strip())]:
            c.execute('INSERT INTO platform_settings(key,value) VALUES(?,?) ON CONFLICT(key) DO UPDATE SET value=excluded.value',(k,v))
        audit(c,admin['id'],'platform_settings_updated','settings',None,'Updated public announcement or guidelines')
        return {'ok':True}

if __name__=='__main__':
    import uvicorn
    uvicorn.run(app,host='127.0.0.1',port=int(os.getenv('PORT','8000')))
