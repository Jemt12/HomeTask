HomeTask on Local
==================

Build and Start Local Project
------
1. pip install -r requirements.txt
2. py -m uvicorn server:app --host 127.0.0.1 --port 8000



HomeTask on Render
==================

Deploy
------
1. Push this repository to GitHub.
2. In Render, choose New > Blueprint and connect the repository.
3. Review render.yaml and apply the blueprint. Render installs the Python
   dependencies and starts the FastAPI app with the command in that file.

The blueprint uses Render's free web-service plan. SQLite data is stored in
hometask.sqlite3 on the service's temporary filesystem, so accounts, jobs, and
other database changes are not durable and may be lost when the service is
restarted or redeployed. Do not use this setup for production data.

For durable data, switch to a paid web-service plan and attach a persistent
disk mounted at /var/data. Set HOMETASK_DB to /var/data/hometask.sqlite3 in
Render's environment settings. The app creates the database and its parent
directory automatically. SQLite is intended for a single service instance;
do not scale this app to multiple instances while using this database.

Database note
-------------
The repository currently includes hometask.sqlite3. It will be included in the
deployment as the initial database. Review it before publishing the service,
and do not deploy it if it contains data that should not be public. The free
service's later changes are not preserved on redeploy.