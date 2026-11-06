# HomeTask 14.4 — 5% Customer Service Fee

This update builds on the **14.3 restored design and payment backend**, not the 14.5 experimental redesign.

## Pricing example

- Worker offer / task price: $100.00
- Customer service fee (5% of agreed task price): $5.00
- Total customer checkout: $105.00
- Worker commission (10% of agreed task price): $10.00
- Expected worker payout: $90.00
- HomeTask gross fee revenue: $15.00, **before** payment processing costs, taxes, refunds, disputes and expenses.

## Implementation

- Customer price review shows the agreed task price, 5% fee, and **single** checkout total.
- Stripe TEST Checkout creates separate line items for the task and 5% fee.
- Webhook checks the signed paid checkout total, including the service fee, before accepting the job.
- Database saves service fee and total as snapshots alongside existing commission fields. Existing transactions retain their previously agreed customer totals and zero customer fee.
- Customer payment history shows the task price and customer fee. Workers continue seeing the agreed price, 10% HomeTask deduction, and net payout only, never the customer fee or checkout total.
- Demo mode displays the fee estimate, but **collects no money**. Stripe TEST mode does not charge actual cards or transfer funds. No Stripe Connect transfers are implemented.

## Tests

- `python test_v14_3.py` — PASS for demo/fee ledger.
- `python test_v14_3.py stripe` — PASS for signed mocked Stripe TEST checkout.
- `python test_browser_v14_3.py` — PASS for mobile and desktop fee breakdown and privacy presentation (test requires original `brand/` image assets).
- Python compilation and JavaScript syntax check — PASS.
