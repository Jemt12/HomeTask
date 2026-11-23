"""Idempotently add showcase accounts, illustrative task photography and portfolios to DEMO DB ONLY."""
import os, base64, time
from pathlib import Path
ROOT=Path(__file__).resolve().parent
DB=(ROOT/'demo_data'/'hometask_demo.sqlite3').resolve()
if os.environ.get('HOMETASK_DB') and Path(os.environ['HOMETASK_DB']).resolve()!=DB:
    raise SystemExit('REFUSED: demo enrichment cannot target another database.')
os.environ['HOMETASK_DB']=str(DB)
os.environ['HOMETASK_DEMO_MODE']='1'
os.environ.pop('HOMETASK_STRIPE_TEST_SECRET',None)
import server
ASSETS=ROOT/'demo_assets'

def data_uri(name):
    file=ASSETS/name
    if not file.is_file():raise RuntimeError('Missing bundled demo asset: '+str(file))
    return 'data:image/jpeg;base64,'+base64.b64encode(file.read_bytes()).decode('ascii')

CATEGORY_PHOTO={
    'Furniture':'furniture.jpg','Repairs':'repairs.jpg','Lawn & Yard':'lawn.jpg',
    'Painting':'painting.jpg','Moving':'moving.jpg','Cleaning':'cleaning.jpg','Flooring':'flooring.jpg'
}

def main():
    now=int(time.time())
    with server.conn() as c:
        c.execute('CREATE TABLE IF NOT EXISTS demo_enrichment (key TEXT PRIMARY KEY,created_at INTEGER NOT NULL)')
        if c.execute("SELECT 1 FROM demo_enrichment WHERE key='showcase-v2'").fetchone():
            print('Showcase photos and social connections are already installed. No duplicate data.')
            return
        customer=c.execute("SELECT id FROM users WHERE email='customer01@demo.hometask.invalid'").fetchone()
        if not customer:raise SystemExit('Run seed_demo.py first; demo customer is missing.')
        owner=customer['id']
        # This is a fictional persona meant for the presentation, not a real signup.
        c.execute("UPDATE users SET name=?,bio=?,location=? WHERE id=?",(
            'Sarah Mitchell (Demo)','Presentation-only sample customer. Explore posted tasks, followed workers, completed work, reviews and offers.',
            'Rochester, NY',owner))
        featured=[]
        for email in ['worker10@demo.hometask.invalid','worker13@demo.hometask.invalid',
                      'worker01@demo.hometask.invalid','worker06@demo.hometask.invalid',
                      'worker05@demo.hometask.invalid','worker09@demo.hometask.invalid']:
            worker=c.execute('SELECT id FROM users WHERE email=?',(email,)).fetchone()
            if worker:
                featured.append(worker['id'])
                c.execute('INSERT OR IGNORE INTO worker_follows(follower_id,worker_id,created_at) VALUES(?,?,?)',
                          (owner,worker['id'],now-86400))
        # Populate the existing showcase customer's real app-backed postings.
        owner_jobs=c.execute('SELECT id,title,category FROM jobs WHERE owner_id=? ORDER BY created_at DESC',(owner,)).fetchall()
        # Populate 43 open task cards plus historical task details with category-appropriate samples.
        listings=c.execute('SELECT id,title,category FROM jobs ORDER BY id').fetchall()
        photos=0
        for job in listings:
            if c.execute('SELECT 1 FROM job_photos WHERE job_id=? LIMIT 1',(job['id'],)).fetchone():continue
            category=job['category']; name=CATEGORY_PHOTO.get(category,'furniture.jpg')
            if 'standing desk' in job['title'].lower():name='desk01.jpg'
            cur=c.execute('INSERT INTO job_photos(job_id,photo_data,created_at) VALUES(?,?,?)',
                          (job['id'],data_uri(name),now))
            c.execute('UPDATE jobs SET main_photo_id=? WHERE id=?',(cur.lastrowid,job['id']))
            photos+=1
        # Add extra task photos to the showcase customer's standing desk listing to demonstrate galleries.
        desk=c.execute("SELECT id FROM jobs WHERE owner_id=? AND lower(title) LIKE '%standing desk%' LIMIT 1",(owner,)).fetchone()
        if desk:
            for name in ('desk02.jpg','desk03.jpg','desk04.jpg'):
                c.execute('INSERT INTO job_photos(job_id,photo_data,created_at) VALUES(?,?,?)',
                          (desk['id'],data_uri(name),now))
        # Every worker now has portfolio photos. Only place furniture photos on furniture-oriented samples.
        worker_rows=c.execute("SELECT id,skills FROM users WHERE role='worker' ORDER BY id").fetchall()
        updated=0
        for w in worker_rows:
            samples=c.execute('SELECT id,category FROM previous_work WHERE worker_id=? ORDER BY id',(w['id'],)).fetchall()
            for sample in samples:
                name=CATEGORY_PHOTO.get(sample['category'],'furniture.jpg')
                c.execute('UPDATE previous_work SET photo_data=?,description=? WHERE id=?',(
                    data_uri(name),
                    'Fictional demonstration portfolio item, shown to illustrate how previous work appears on HomeTask.',
                    sample['id']))
                updated+=1
            # Give highlighted workers an additional previous-work post that suits their skills.
            if w['id'] in featured:
                skills=w['skills'].split(',')
                category=next((s for s in skills if s in CATEGORY_PHOTO),'Furniture')
                c.execute('INSERT INTO previous_work(worker_id,title,description,category,photo_data,created_at,featured) VALUES(?,?,?,?,?,?,?)',(
                    w['id'],f'{category} project showcase',
                    'Illustrative sample project for the presentation. Fictional project, not a verified real booking.',
                    category,data_uri(CATEGORY_PHOTO[category]),now-12*86400,0))
        # Attach example progress photos to written reviews connected to completed bookings.
        review_rows=c.execute('SELECT r.id,j.category FROM reviews r JOIN jobs j ON j.id=r.job_id').fetchall()
        for r in review_rows:
            c.execute('UPDATE reviews SET photo_data=? WHERE id=?',
                      (data_uri(CATEGORY_PHOTO.get(r['category'],'furniture.jpg')),r['id']))
        # Demonstrate customer bookmarks on active tasks, if the app has the supported table.
        tables={r['name'] for r in c.execute("SELECT name FROM sqlite_master WHERE type='table'")}
        if 'saved_jobs' in tables:
            cols={r['name'] for r in c.execute('PRAGMA table_info(saved_jobs)')}
            if {'user_id','job_id'}<=cols:
                for j in c.execute("SELECT id FROM jobs WHERE status='open' AND owner_id!=? LIMIT 4",(owner,)).fetchall():
                    try:c.execute('INSERT OR IGNORE INTO saved_jobs(user_id,job_id) VALUES(?,?)',(owner,j['id']))
                    except Exception:pass
        c.execute('INSERT INTO demo_enrichment(key,created_at) VALUES(?,?)',('showcase-v2',now))
        print(f'Enhanced existing demo: {photos} task main photos, 3 gallery extras, {updated} portfolio photos, {len(review_rows)} review photos, {len(featured)} showcased follows.')
        print('Showcase customer: customer01@demo.hometask.invalid / HomeTaskDemo2026!')
        print('Featured workers: worker10, worker13, worker01 and worker06 @demo.hometask.invalid')
        print('All personas, reviews, job postings and images are fictional demonstration content.')

if __name__=='__main__':main()
