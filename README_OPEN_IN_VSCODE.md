# HomeTask-Latest — VS Code workspace

**Frontend:** Version 15.6.2, based on the confirmed working 15.6 baseline.
**Backend:** The newest full backend snapshot available here, Version 15.4.
**Launcher:** An older available sandbox launcher; verify against your current working file before running it.

## Important: Not a fully verified copy of your local HomeTask

This ZIP provides the most up-to-date frontend available in this chat and the newest complete backend source snapshot I could retrieve, but it lacks your current logo assets, local SQLite data, uploaded images, and any locally updated backend or launcher. **Do not replace your working website with this assembled folder.** It is for opening a clean source project in VS Code and completing from your own known-good folder.

## How to use

1. Unzip `HomeTask-Latest_VSCode_Source.zip`.
2. Open VS Code → File → Open Folder → `HomeTask-Latest`.
3. For an exact copy of your working project, copy the `brand/` folder, local uploaded assets, current `server.py`, and current sandbox launcher from your existing working HomeTask folder. Copy `hometask.sqlite3` locally only if you need the actual local task/account data. Avoid committing any of those private records to GitHub.
4. If needed, install Python dependencies with `python3 -m pip install -r requirements.txt` inside a virtual environment.
5. Verify the launcher before running payment tests: the included one is a historical version, and may reference an older sandbox account ID. Do not use real payment credentials.

## Files

- `app.js`, `styles.css`, `index.html`: Version 15.6.2 frontend.
- `server.py`: Version 15.4 backend snapshot (may not match your installed version).
- `START_STRIPE_SANDBOX.command`: historical available launcher, not guaranteed current.
- `.gitignore`, `.env.example`, `requirements.txt`.
- `brand/`: placeholder instructions only, **not** brand images.

This ZIP intentionally does not include secrets, database, uploaded photos, or logos.
