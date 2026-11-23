"""HomeTask 15.12.7: replace fictional Demo Mode photos only.

Run with: python3 refresh_demo_photos.py
This script DOES NOT touch the real hometask.sqlite3 database.
"""
import base64
import os
import sqlite3
from pathlib import Path

ROOT=Path(__file__).resolve().parent
DEMO_DB=(ROOT/'demo_data'/'hometask_demo.sqlite3').resolve()
ASSETS=ROOT/'demo_assets'


def choose(title,category):
    t=(title or '').lower()
    if 'desk' in t or 'office' in t and 'assemble' in t:return 'desk'
    if 'shelf' in t or 'shelves' in t or 'bookcase' in t:return 'shelves'
    if 'cabinet' in t or 'hinge' in t or 'door' in t or 'repair' in t:return 'repairs'
    if 'fence' in t:return 'fence'
    if 'floor' in t or category=='Flooring':return 'flooring'
    if 'painting' in t or 'paint' in t or 'touch up' in t or category=='Painting':return 'painting'
    if 'lawn' in t or 'mulch' in t or 'yard' in t or 'leaves' in t or 'garden' in t:return 'lawn'
    if 'move' in t or 'moving' in t or 'unload' in t or category=='Moving':return 'moving'
    if 'clean' in t or 'storage' in t:return 'moving'
    if category=='Repairs':return 'repairs'
    if category=='Lawn & Yard':return 'lawn'
    if category=='Furniture':return 'furniture'
    if category=='Cleaning':return 'moving'
    return 'furniture'


def main():
    env_db=os.getenv('HOMETASK_DB')
    if env_db and Path(env_db).resolve()!=DEMO_DB:
        raise SystemExit('STOPPED: HOMETASK_DB is not the dedicated demo database.')
    if not DEMO_DB.is_file():
        raise SystemExit('Demo database not found. Run RUN_DEMO.command first, then run this script.')
    data={}
    for name in ('furniture','desk','shelves','painting','repairs','fence','lawn','moving','flooring'):
        path=ASSETS/f'{name}.jpg'
        if not path.is_file():raise SystemExit(f'Missing bundled demo image: {path}')
        data[name]='data:image/jpeg;base64,'+base64.b64encode(path.read_bytes()).decode('ascii')
        if len(data[name])>=550000:raise SystemExit(f'Unexpected oversized image {path}')
    with sqlite3.connect(DEMO_DB) as conn:
        conn.row_factory=sqlite3.Row
        tables={r['name'] for r in conn.execute('SELECT name FROM sqlite_master WHERE type="table"')}
        if not {'users','jobs','job_photos'}<=tables:
            raise SystemExit('STOPPED: database is not a compatible HomeTask demo database.')
        marker=conn.execute("SELECT 1 FROM users WHERE email='worker01@demo.hometask.invalid'").fetchone()
        if not marker:
            raise SystemExit('STOPPED: demo account marker missing; no changes made.')
        # Replace every picture on every fictional job. Keep IDs, listings, offers, saves and data intact.
        rows=conn.execute('''SELECT p.id,j.title,j.category FROM job_photos p
            JOIN jobs j ON j.id=p.job_id ORDER BY p.job_id,p.id''').fetchall()
        for row in rows:
            conn.execute('UPDATE job_photos SET photo_data=? WHERE id=?',
                         (data[choose(row['title'],row['category'])],row['id']))
        portfolio=0
        if 'previous_work' in tables:
            items=conn.execute('SELECT id,title,category FROM previous_work').fetchall()
            for item in items:
                conn.execute('UPDATE previous_work SET photo_data=? WHERE id=?',
                             (data[choose(item['title'],item['category'])],item['id']))
            portfolio=len(items)
        reviews=0
        if 'reviews' in tables:
            columns={c['name'] for c in conn.execute('PRAGMA table_info(reviews)')}
            if 'photo_data' in columns:
                items=conn.execute('''SELECT r.id,j.title,j.category FROM reviews r
                    JOIN jobs j ON j.id=r.job_id WHERE r.photo_data IS NOT NULL AND r.photo_data!='' ''').fetchall()
                for item in items:
                    conn.execute('UPDATE reviews SET photo_data=? WHERE id=?',
                                 (data[choose(item['title'],item['category'])],item['id']))
                reviews=len(items)
    print(f'Demo-only update complete: {len(rows)} job photos, {portfolio} portfolio photos, {reviews} review photos.')
    print('Your real HomeTask database and customer uploads were not accessed.')
    print('Reload http://127.0.0.1:8001 with Cmd+Shift+R.')

if __name__=='__main__':main()
