"""Seed a standalone, fictional HomeTask presentation database. Never touches production data."""
import os
from pathlib import Path
import random
import sys
import time
from datetime import datetime, timedelta

ROOT = Path(__file__).resolve().parent
DEMO_DB = (ROOT / 'demo_data' / 'hometask_demo.sqlite3').resolve()
if os.environ.get('HOMETASK_DB') and Path(os.environ['HOMETASK_DB']).resolve() != DEMO_DB:
    sys.exit('Refusing to seed: HOMETASK_DB points outside the dedicated demo database.')
os.environ['HOMETASK_DB'] = str(DEMO_DB)
os.environ['HOMETASK_DEMO_MODE'] = '1'
os.environ.pop('HOMETASK_STRIPE_TEST_SECRET', None)
os.environ.pop('HOMETASK_STRIPE_WEBHOOK_SECRET', None)
import server

rng = random.Random(157)
now = int(time.time())
customers = [
    ('Sarah Mitchell','Rochester, NY'), ('Daniel Brooks','Brighton, NY'),
    ('Olivia Parker','Henrietta, NY'), ('James Wilson','Greece, NY'),
    ('Emily Carter','Irondequoit, NY'), ('Michael Turner','Pittsford, NY'),
    ('Rachel Evans','Penfield, NY'), ('Anthony Reed','Fairport, NY'),
    ('Hannah Foster','Webster, NY'), ('Chris Bennett','Rochester, NY'),
    ('Lauren Collins','Chili, NY'), ('David Ramirez','Rochester, NY'),
    ('Megan Walsh','Gates, NY'), ('Tyler Cooper','Rochester, NY'),
    ('Nicole Harris','Spencerport, NY'),
]
workers = [
    ('Alex Rivera','Repairs,Furniture,Painting','Rochester, NY'),
    ('Jordan Lee','Lawn & Yard,Moving','Brighton, NY'),
    ('Taylor Morgan','Cleaning,Moving','Henrietta, NY'),
    ('Casey Thompson','Furniture,Repairs','Greece, NY'),
    ('Morgan Davis','Painting,Flooring','Irondequoit, NY'),
    ('Sam Patel','Repairs,Furniture','Pittsford, NY'),
    ('Avery Johnson','Lawn & Yard,Cleaning','Penfield, NY'),
    ('Cameron Brooks','Moving,Furniture','Fairport, NY'),
    ('Jamie Chen','Cleaning,Painting','Webster, NY'),
    ('Riley Garcia','Flooring,Repairs','Rochester, NY'),
    ('Drew Robinson','Lawn & Yard,Moving','Chili, NY'),
    ('Parker Kim','Repairs,Painting','Rochester, NY'),
    ('Quinn Stewart','Furniture,Moving','Gates, NY'),
    ('Skyler Brown','Cleaning,Lawn & Yard','Rochester, NY'),
    ('Blake Nguyen','Painting,Repairs','Spencerport, NY'),
    ('Reese Campbell','Cleaning,Furniture','Henrietta, NY'),
    ('Logan Price','Moving,Lawn & Yard','Rochester, NY'),
    ('Charlie Adams','Flooring,Repairs','Webster, NY'),
]
# Approximate *public neighborhood centers*, never individual homes or exact house addresses.
locations = [
    ('Rochester, NY', 43.1566, -77.6088), ('Brighton, NY',43.1197,-77.5703),
    ('Henrietta, NY',43.0593,-77.6122), ('Greece, NY',43.2098,-77.6931),
    ('Irondequoit, NY',43.2134,-77.5797), ('Pittsford, NY',43.0906,-77.5156),
    ('Penfield, NY',43.1326,-77.4484), ('Fairport, NY',43.0987,-77.4419),
    ('Webster, NY',43.2123,-77.4299), ('Chili, NY',43.1006,-77.7459),
    ('Gates, NY',43.1515,-77.7131), ('Spencerport, NY',43.1865,-77.8039),
]
tasks = [
    ('Assemble a new standing desk','Furniture',95,'Easy','Need help putting together a standing desk and moving it into my office.'),
    ('Fix a loose kitchen cabinet door','Repairs',85,'Easy','Two hinges are loose and the cabinet door no longer closes evenly.'),
    ('Weekend leaf cleanup','Lawn & Yard',145,'Medium','Rake leaves from the front and back yard, bag them, and tidy the walkway.'),
    ('Paint an accent wall','Painting',180,'Medium','Looking for someone to prep and paint one living room accent wall.'),
    ('Move boxes into a new apartment','Moving',170,'Medium','About 20 boxes and a small bookshelf need to be carried upstairs.'),
    ('Deep clean kitchen and bathroom','Cleaning',155,'Medium','Detail cleaning for kitchen counters, sink, shower, and floors.'),
    ('Repair squeaky bedroom door','Repairs',65,'Easy','Bedroom door squeaks and the latch sticks when closing.'),
    ('Install peel-and-stick floor tiles','Flooring',235,'Medium','Small laundry room floor needs peel-and-stick tile installation.'),
    ('Mount two floating shelves','Furniture',110,'Easy','Install two shelves level and securely in a home office.'),
    ('Help unload a moving truck','Moving',205,'Hard','Need an extra set of hands unloading furniture and boxes.'),
    ('Mow lawn and trim edges','Lawn & Yard',90,'Easy','Front and back lawn mowing with edge trimming around the driveway.'),
    ('Paint a small bedroom','Painting',290,'Medium','Prep walls and apply two coats in one standard bedroom.'),
    ('Clean windows before guests arrive','Cleaning',120,'Easy','Wash interior first-floor windows and wipe the window tracks.'),
    ('Repair a wobbly dining chair','Furniture',70,'Easy','One dining chair is unstable and needs the joints tightened.'),
    ('Replace a damaged baseboard','Repairs',125,'Medium','One section of baseboard needs to be measured, cut and replaced.'),
    ('Move couch to another room','Moving',75,'Easy','Need two people to carefully move a heavy couch downstairs.'),
    ('Refresh a small entryway','Painting',160,'Medium','Patch a few nail holes and paint the entryway walls.'),
    ('Clean out garage storage area','Cleaning',145,'Medium','Sort and organize boxes and sweep a two-car garage.'),
    ('Spread mulch in garden beds','Lawn & Yard',165,'Medium','Spread bagged mulch across front garden beds and clean up.'),
    ('Fix loose laminate flooring','Flooring',190,'Medium','A small section of laminate flooring is lifting near a doorway.'),
    ('Assemble a dresser','Furniture',115,'Medium','New flat-pack dresser needs assembly and placement in bedroom.'),
    ('Touch up scuffed hallway walls','Painting',125,'Easy','Fill small dents and touch up matching paint in the hallway.'),
    ('Prepare patio for winter','Lawn & Yard',130,'Medium','Sweep patio, move lightweight furniture and clear garden debris.'),
    ('Help organize basement','Cleaning',180,'Medium','Move bins onto shelves and organize a basement storage area.'),
]
reviews = [
    'Arrived right on time and was careful with everything. Great experience.',
    'Very friendly, communicated clearly, and finished the task as expected.',
    'The work looks great. Would definitely book again.',
    'Really helpful and professional throughout the job.',
    'Quick response and easy to schedule. Everything was left tidy.',
    'Good attention to detail and kept me updated.',
    'Helped get a project done that I had been putting off for weeks.',
    'Solid work and a smooth experience from start to finish.',
    'A couple of minor delays, but the final result was good.',
]
worker_bios = [
    'Local helper who enjoys solving everyday home projects. I show up prepared and keep customers updated.',
    'Available for small household jobs, weekend projects, and flexible scheduling.',
    'Reliable help for practical projects around the home. Careful with furniture and shared spaces.',
]
DEMO_PASSWORD = 'HomeTaskDemo2026!'

def main():
    DEMO_DB.parent.mkdir(parents=True, exist_ok=True)
    with server.conn() as c:
        existing = c.execute('SELECT COUNT(*) FROM users').fetchone()[0]
        if existing:
            print(f'Demo database already has {existing} accounts. Leaving everything unchanged.')
            return
        password = server.password_hash(DEMO_PASSWORD)
        ids_customers=[]
        ids_workers=[]
        for i,(name,place) in enumerate(customers):
            email=f'customer{i+1:02d}@demo.hometask.invalid'
            cur=c.execute('INSERT INTO users(name,email,password_hash,bio,skills,location,role,created_at,email_verified) VALUES(?,?,?,?,?,?,?,?,1)',
                          (name,email,password,'HomeTask demo customer profile.','',place,'customer',now-rng.randint(15,150)*86400))
            ids_customers.append(cur.lastrowid)
        for i,(name,skills,place) in enumerate(workers):
            email=f'worker{i+1:02d}@demo.hometask.invalid'
            cur=c.execute('INSERT INTO users(name,email,password_hash,bio,skills,location,role,created_at,email_verified) VALUES(?,?,?,?,?,?,?,?,1)',
                          (name,email,password,worker_bios[i%len(worker_bios)],skills,place,'worker',now-rng.randint(30,270)*86400))
            ids_workers.append(cur.lastrowid)
        # Open listings, booked work, and completed examples for each dashboard.
        counts={'open':0,'accepted':0,'completed':0}
        for n in range(72):
            title,category,budget,difficulty,description=tasks[n%len(tasks)]
            place,lat,lon=locations[(n*7+n//12)%len(locations)]
            # Distinct approximate neighborhood positions; no real residential addresses.
            lat+=rng.uniform(-0.018,0.018)
            lon+=rng.uniform(-0.02,0.02)
            public_lat,public_lon=server.private_map_center(lat,lon)
            status='open' if n<43 else 'completed' if n<65 else 'accepted'
            counts[status]+=1
            posted=now-rng.randint(1,21)*86400 if status=='open' else now-rng.randint(26,100)*86400
            owner=ids_customers[n%len(ids_customers)]
            title=title if n<len(tasks) else title + (' - this week' if n%3==0 else ' - help needed' if n%3==1 else '')
            cur=c.execute('''INSERT INTO jobs(owner_id,title,category,description,location,difficulty,budget,status,
                   created_at,latitude,longitude,map_latitude,map_longitude,duration_minutes,flexible_schedule,
                   completed_at,moderation_status)
                   VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)''',
                   (owner,title,category,description,place,difficulty,budget,status,posted,lat,lon,public_lat,public_lon,
                    rng.choice([60,90,120,180]),1,posted+5*86400 if status=='completed' else None,'visible'))
            job_id=cur.lastrowid
            if status=='open':
                # Two or three realistic pending offers from distinct sample workers.
                for worker in rng.sample(ids_workers,rng.randint(1,3)):
                    c.execute('INSERT INTO offers(job_id,worker_id,price,note,created_at) VALUES(?,?,?,?,?)',
                              (job_id,worker,max(35,budget+rng.randint(-25,35)),
                               'Happy to help. I have experience with similar jobs and flexible availability.',posted+rng.randint(1,12)*3600))
            else:
                worker=ids_workers[(n*5)%len(ids_workers)]
                price=max(35,budget+rng.randint(-20,20))
                cur_offer=c.execute('''INSERT INTO offers(job_id,worker_id,price,note,created_at,decision)
                                       VALUES(?,?,?,?,?,?)''',
                                    (job_id,worker,price,'Thanks for booking. Looking forward to helping!',posted+7200,'accepted'))
                c.execute('UPDATE jobs SET accepted_offer_id=? WHERE id=?',(cur_offer.lastrowid,job_id))
                c.execute('INSERT INTO messages(job_id,sender_id,recipient_id,body,created_at) VALUES(?,?,?,?,?)',
                          (job_id,owner,worker,'Thanks for taking this on! The timing works for me.',posted+9800))
                c.execute('INSERT INTO messages(job_id,sender_id,recipient_id,body,created_at) VALUES(?,?,?,?,?)',
                          (job_id,worker,owner,'Sounds good. I will bring the supplies and see you then.',posted+10100))
                if status=='completed':
                    rating=4 if n%6==0 else 5
                    c.execute('INSERT INTO reviews(job_id,author_id,recipient_id,rating,comment,created_at) VALUES(?,?,?,?,?,?)',
                              (job_id,owner,worker,rating,reviews[n%len(reviews)],posted+6*86400))
                    c.execute('INSERT INTO completed_work_highlights(job_id,worker_id,created_at) VALUES(?,?,?)',
                              (job_id,worker,posted+7*86400))
        for i,worker in enumerate(ids_workers):
            c.execute('INSERT INTO previous_work(worker_id,title,description,category,photo_data,created_at,featured) VALUES(?,?,?,?,?,?,?)',
                      (worker,['Furniture assembly','Backyard cleanup','Home refresh','Moving assistance'][i%4],
                       'Illustrative sample project for the HomeTask presentation. No real client or completed work is implied.',
                       ['Furniture','Lawn & Yard','Painting','Moving'][i%4],'',now-rng.randint(5,80)*86400,1))
            for customer in rng.sample(ids_customers,3):
                c.execute('INSERT OR IGNORE INTO worker_follows(follower_id,worker_id,created_at) VALUES(?,?,?)',
                          (customer,worker,now-rng.randint(1,60)*86400))
        print(f'Seeded {len(customers)} fictional customers, {len(workers)} fictional workers, 72 sample jobs {counts}, 22 demo reviews.')
        print('Customer login: customer01@demo.hometask.invalid')
        print('Worker login:   worker01@demo.hometask.invalid')
        print('Password (both):',DEMO_PASSWORD)
        print('All users and activity are fictional. This is a separate local demo database.')

if __name__ == '__main__':
    main()
