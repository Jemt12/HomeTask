# HomeTask 15.10.16 — Make custom display lettering load

**Root cause:** The FastAPI backend has an explicit `/assets/app.js` endpoint, but its generic `/assets/{asset_name}` endpoint only permits a small whitelist of PNG images. Consequently, the previous `<script src="/assets/hometask-display.js">` returned 404, and the greeting remained ordinary text.

**Fix:** Embedded the custom HomeTask Display lettering code in `app.js`, an asset already served by the backend, and removed the unavailable script reference from `index.html`. Incremented the browser asset version to 151016.

**Install:** Replace `app.js` and `index.html` (and optionally `styles.css` if not already on 15.10.15), then hard refresh. No backend or database changes.
