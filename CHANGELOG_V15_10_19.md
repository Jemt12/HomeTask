# HomeTask 15.10.19 — Private, smooth map clusters

- Maximum zoom: 13 for both OpenStreetMap/Leaflet and Google Maps. No street-level zoom to precisely isolate a job marker.
- Preserves server-side randomized approximate job centers; exact addresses stay private.
- Semi-transparent blue/teal cluster bubbles, with soft halo and clear counts.
- Leaflet groups cross-fade on zoom and filter changes; Google cluster markers fade into place.
- Respects reduced-motion preferences.
- Keeps horizontal cards and existing job filtering intact.
- This is a client-side zoom limit, not a replacement for server-side private location handling.

Install: replace app.js, styles.css, index.html only. No backend/database change.
