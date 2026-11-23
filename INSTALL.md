# HomeTask 15.13.42 — Marketplace Filtering & Navigation

Contents: app.js and styles.css, ONLY. Based on v15.13.39 app.js + v15.13.41 styles.css (v15.13.40 and v15.13.41 were CSS-only updates).

## Installation (Mac / VS Code)
1. Make a backup copy of `/Users/jemt/HomeTask/app.js` and `/Users/jemt/HomeTask/styles.css`.
2. Copy these two replacement files into `/Users/jemt/HomeTask`, selecting Replace.
3. Stop the running HomeTask demo server in VS Code (Control+C) and rerun `RUN_DEMO.command`.
4. Hard-refresh Chrome (Command+Shift+R) at http://127.0.0.1:8001.

## Changes
- Default Find Jobs order is Best Match with skills/category/proximity/scheduling ranking. Remember a manual sort choice.
- Replace preset Budget filter with a single two-handle min/max range track, numeric inputs, Any Budget reset, and direct filtering.
- Category menu is custom anchored beneath its trigger with a light animation.
- Short rotating search hint when search input is empty and not focused; corrected sidebar select text layout.
- Remove redundant My Location sidebar button; continue automatic browser-based location when authorized, with manual search available.
- Featured Jobs dashboard stat opens featured-only listings. Explicit Open/Explore Job Map links activate Map. View All Jobs opens List.
- Bookmarks appear in worker My Offers/My Assignments and map mini-cards; they use shared saved-job state and do not open the job on click.
- Ellipsis is grouped next to X in Task Details on the worker side.

## Tests performed
- `node --check app.js` passed.
- tinycss2 stylesheet parse passed.
- Browser DOM smoke test at 1500x920 (mock data): sidebar geometry 270px, five job cards, default sort Best Match, budget filter changes results, custom category menu opens, map mini-card and My Offers ribbon render, Open Job Map navigates to Map.

## Known caveats
- Tests used mocked HomeTask data rather than the authenticated live server. Confirm signed-in API flows, geolocation permission behavior, saved-job persistence, and map tiles/markers in your demo browser.
- Current dual-handle slider drag track covers $0–$2,000; numeric entry permits higher budgets.
- User location is requested using the browser's geolocation API where the browser permits it. A manual location entry remains available when permission is denied.
