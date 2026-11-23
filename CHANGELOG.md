# HomeTask 15.13.4 — Offer Comparison Redesign

- Rebuilt Compare Offers around the **worker's proposed price**, with posted budget secondary and a compact above/below-budget difference underneath.
- Added a **Best value** sticker to the strongest current proposal according to a transparent estimated ranking of price, review rating adjusted for review count, completed jobs, listed skills, and profile-review status. This is a heuristic, not a guarantee of worker quality.
- For 3+ offers: two cards visible at a time, horizontal swiping/side arrows, and Sort by Value (default), Price, or Rating.
- For 1–2 offers: no sorting controls, arrows, or forced horizontal rail.
- Preserved the existing Counteroffer, Hire, Decline, worker profile, messaging, and negotiation actions.
- No database or server modifications.

## Install
Unzip and replace app.js, styles.css, index.html in ~/HomeTask; hard refresh (Cmd+Shift+R).
