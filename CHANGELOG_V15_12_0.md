# HomeTask 15.12.0 — Simpler Task Cards

Based on 15.11.9, with all existing 15.11.8 worker homepage improvements retained.

## Changes
- Removed task difficulty from the customer posting form, job discovery filters, job cards, map popups, task detail views, previews, and admin job screens.
- New tasks continue to send an internal `difficulty: 'Medium'` compatibility field to satisfy the current server schema; the value is no longer collected from or shown to users. No database migration is necessary. Existing records are unaffected.
- Improved task description placeholder and helper text to encourage information about requirements, tools, and relevant experience.
- Removed redundant "View task details" / "View job details" text from clickable job cards.
- Replaced Save Job buttons with top-left bookmark icons on worker job cards, including Featured Jobs, Find Jobs and Saved Jobs.
- The bookmark becomes golden yellow and extends slightly downward when saved, supports keyboard access and exposes its saved state to assistive technologies.
- Job detail save action is now an icon-only bookmark, too.

## Not changed
- Server, database, existing saved-job API, payment flows, customer/worker role switch, Demo Mode, or public homepage.
