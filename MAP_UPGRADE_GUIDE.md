# HomeTask 15.10.18 — Clustered Maps

## What's new
- Numbered map circles merge as you zoom out, and split when you zoom in.
- Click/tap any circle to show a horizontal carousel of matching jobs.
- Click a multi-job cluster to expand the carousel with larger job cards.
- Next/previous arrows, touch swipe and View job controls.
- Existing search, distance, category filters, and privacy-safe approximate job locations stay in place.

## Google Maps setup
HomeTask uses Google Maps when configured, and automatically falls back to the enhanced OpenStreetMap map without a key. Google Maps will not activate from a download alone.

1. Create a Google Cloud Maps JavaScript API key (and configure billing if required by your Google Cloud account).
2. Restrict it to the Maps JavaScript API and your website's HTTP referrers. For local testing, allow `http://127.0.0.1:8001/*` (plus any other actual port/domain you use).
3. In the VS Code terminal, **before starting HomeTask**, run:

   `export HOMETASK_GOOGLE_MAPS_API_KEY='YOUR_BROWSER_API_KEY'`

4. Start HomeTask using `bash RUN_DEMO.command`, open `http://127.0.0.1:8001`, and navigate to Find Jobs > Map.

You can confirm configuration with `http://127.0.0.1:8001/api/map-config`. The key exposed there is a **browser key**, not a secret; restrict it in Google Cloud. Do not commit personal key values to Git.

Note: Google Maps platform pricing and billing terms may apply. Review your Maps JavaScript API usage and quotas in Google Cloud. The Google option uses Google's `MarkerClusterer` library. The fallback also groups jobs dynamically, but uses OpenStreetMap tiles.

## Install
Replace `app.js`, `styles.css`, `index.html`, and `server.py` in your existing HomeTask folder. Back up your local `server.py` if you've modified it since 15.8. No database migration is needed. If server is running, stop it with Control+C, start again, and hard-refresh the browser.

## Privacy
Job pins use approximate coordinates already provided to workers by HomeTask. Do not substitute exact street-address coordinates when drawing or clustering.
