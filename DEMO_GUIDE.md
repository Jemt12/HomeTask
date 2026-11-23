# HomeTask Presentation Demo (15.7 demo pack)

This is a **fictional presentation environment**: invented people, listings, bids, conversations, ratings and portfolio items. The demo is intended to show product capability, **not** actual traction or customer testimonials.

## Run locally on macOS

1. In VS Code, stop any server already using port 8000 (`Ctrl+C` in its terminal).
2. From the HomeTask project folder, install existing dependencies if necessary: `python3 -m pip install -r requirements.txt`.
3. Run `bash RUN_DEMO.command` in the VS Code terminal.
4. Open http://127.0.0.1:8000 . The bottom disclosure should say **PRESENTATION DEMO**.
5. To return to your original local site, stop this demo server and start HomeTask the way you normally do, without `HOMETASK_DB` and `HOMETASK_DEMO_MODE` set.

**Never copy `demo_data/hometask_demo.sqlite3` to a production deployment or promote sample activity as real.** The demo database is separate from `hometask.sqlite3`, is recreated only when you explicitly delete its file, and should remain ignored by Git. Do not publish the demo password as a real authentication credential.

## Logins

- Customer: `customer01@demo.hometask.invalid`
- Worker: `worker01@demo.hometask.invalid`
- Password for all fictional accounts: `HomeTaskDemo2026!`

Other demo workers are `worker02` through `worker18`; other demo customers are `customer02` through `customer15` using the same `@demo.hometask.invalid` format and password.

## What you can show

- **43 open tasks** across Rochester-area neighborhoods, with map circles and working filters.
- **7 assigned tasks** showing booked work, offers and messages.
- **22 completed tasks**, **22 fictional customer reviews**, completion examples and worker reputation.
- **33 fictional accounts** (15 customers, 18 workers), worker profiles, skills, portfolios, and followers.
- Genuine underlying app functionality in a simulated marketplace; no test payments, bank transfers or external messages are seeded.

## Suggested live presentation flow

1. Start signed out, show the public homepage and the persistent *demo* disclosure.
2. Log in as the worker account; select **Find jobs**, then **Map** to show regional coverage.
3. Open a pin and inspect task details. Compare listing budgets and pending bids.
4. Open a worker profile to show completed work and illustrative reviews (try `worker06@demo.hometask.invalid` if worker01 has no review examples).
5. Log in as a customer to show posted tasks and customer dashboard, then discuss comparing offers and project lifecycle.
6. End by discussing fees as **hypothetical model mechanics**, not realized revenue.

## Safety and limitations

- Names, reviews, messages, postings and portfolios are fictional. They must remain disclosed in demos, pitch materials, screenshots and marketing.
- Neighborhood map coordinates are synthetic approximations, not home locations.
- This tool does not manufacture real validation, completed payments, real worker verification, or customer growth.
- The demo uses the existing prototype backend, not a production-ready service.
- For fresh data, stop the server and delete **only** `demo_data/hometask_demo.sqlite3` (and any SQLite `-wal` / `-shm` sidecars) before restarting. Never delete `hometask.sqlite3`.

## Showcase customer (enhanced demo)

Log in as **customer01@demo.hometask.invalid** (password **HomeTaskDemo2026!**). The fictional Sarah Mitchell demo account has posted open and completed tasks, follows workers who have review history (especially **worker10**, **worker13**, **worker01**, and **worker06**), and can explore offers, conversations and worker previous-work posts.

Running `bash RUN_DEMO.command` on an **existing** demo database automatically applies the additional photos and social examples via `enrich_demo.py`; it does not require deleting your existing demo data. Images are synthetic illustrative examples and must not be marketed as authentic completed projects.

The launcher defaults to port 8000; if another process uses that port, stop it first or change the last command's `--port 8000` to `--port 8001` and browse to http://127.0.0.1:8001 .
