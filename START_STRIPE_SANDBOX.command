#!/bin/bash
# HomeTask local Stripe sandbox starter. Secrets are entered into this Terminal only.
set -e
cd "$(dirname "$0")"
echo 'HomeTask Stripe Sandbox • TEST ONLY'
echo 'If you use this patch in your existing HomeTask folder, run this file there.'
echo 'In a separate Terminal, run: stripe listen --forward-to localhost:8000/api/payments/stripe-webhook'
echo 'Copy the whsec_... printed by that listener. Never paste keys into chat.'
read -r -s -p 'Stripe sandbox secret key (sk_test_...): ' HOMETASK_STRIPE_TEST_SECRET; echo
read -r -s -p 'Stripe local webhook signing secret (whsec_...): ' HOMETASK_STRIPE_WEBHOOK_SECRET; echo
if [[ "$HOMETASK_STRIPE_TEST_SECRET" != sk_test_* || "$HOMETASK_STRIPE_WEBHOOK_SECRET" != whsec_* ]]; then
  echo 'ERROR: Expected sk_test_ and whsec_ secrets. Server not started.' >&2
  exit 1
fi
export HOMETASK_STRIPE_TEST_SECRET HOMETASK_STRIPE_WEBHOOK_SECRET
export HOMETASK_STRIPE_EXPECTED_ACCOUNT_ID='acct_1UYa2g6P6KwNH9wf'
export HOMETASK_CHECKOUT_RETURN_URL='http://127.0.0.1:8000'
echo 'Starting sandbox-only HomeTask. Account identity will be checked at checkout.'
python3 -m uvicorn server:app --host 0.0.0.0 --port 8000
