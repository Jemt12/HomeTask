# HomeTask 15.11 — Signed-out homepage redesign

This update replaces **only the signed-out homepage** with the approved people-free design direction.

## Install
1. Stop your local HomeTask server (Ctrl+C in its terminal).
2. Back up your existing `app.js`, `styles.css`, and `index.html` if you want a rollback point.
3. Unzip this archive. Copy `app.js`, `styles.css`, `index.html`, **and the entire `marketing` folder** into `/Users/jent/HomeTask`, merging the folder and replacing matching files.
4. Restart the *real-mode* local server the same way you have been running it, on port 8000. Do not launch `RUN_DEMO.command` to preview the real-site homepage.
5. Visit http://127.0.0.1:8000 while signed out. Press Command+Shift+R if needed.

The two marketing images must be inside `HomeTask/marketing/` (not next to the `HomeTask` folder). The backend already allows those exact filenames.

## Changes
- New photo-led hero with HomeTask headline and guest actions, without people.
- Three-step flow, category tiles, project spotlights, worker CTA, transparent FAQ section, footer CTA.
- No fictional customer testimonials, inflated usage statistics, or unverified security/payment claims.
- Photo assets included to avoid prior broken marketing images.
- No edits to backend, databases, Demo Mode, sign-in logic, or signed-in dashboards.

## Validation
- JavaScript passed `node --check`.
- With the existing FastAPI route, the new photo returned HTTP 200 locally.
- Automated Chromium browser preview was blocked by the execution environment, so the full visual and interactive behavior still needs checking in your local browser.
