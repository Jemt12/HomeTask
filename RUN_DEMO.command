#!/bin/bash
set -e
cd "$(dirname "$0")"
export HOMETASK_DB="$PWD/demo_data/hometask_demo.sqlite3"
export HOMETASK_DEMO_MODE=1
unset HOMETASK_STRIPE_TEST_SECRET HOMETASK_STRIPE_WEBHOOK_SECRET HOMETASK_ADMIN_EMAIL
python3 seed_demo.py
python3 enrich_demo.py
printf '\nOpen http://127.0.0.1:8001 in your browser. Press Ctrl+C to stop.\n\n'
python3 -m uvicorn server:app --host 127.0.0.1 --port 8001
