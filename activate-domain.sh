#!/usr/bin/env bash
# Monitor is-a-dev PR #40529 and auto-add domain to Vercel once merged.
# Usage: ./activate-domain.sh
set -e

PR="is-a-dev/register/pull/40529"
DOMAIN="alfan-januar.is-a.dev"
VERCEL_BIN="$HOME/.local/bin/vercel"

echo "Monitoring PR $PR for merge..."
echo "Target domain: $DOMAIN"
echo "Press Ctrl+C to stop"
echo ""

while true; do
  STATUS=$(curl -s "https://api.github.com/repos/is-a-dev/register/pulls/40529" | grep -o '"merged":[a-z]*' | head -1 | cut -d: -f2)

  if [ "$STATUS" = "true" ]; then
    echo ""
    echo "✅ PR MERGED! Waiting 2 minutes for DNS propagation..."
    sleep 120

    echo "Adding $DOMAIN to Vercel..."
    cd "$(dirname "$0")"
    $VERCEL_BIN domains add "$DOMAIN" 2>&1
    EXIT_CODE=$?

    if [ $EXIT_CODE -eq 0 ]; then
      echo ""
      echo "✅ Domain added! Final URL (after 5-15 min DNS propagation):"
      echo "   https://$DOMAIN"
    else
      echo ""
      echo "⚠️  Failed to add domain. DNS may still be propagating."
      echo "   Retry in 15 min: ./activate-domain.sh --retry"
    fi
    exit $EXIT_CODE
  fi

  printf "⏳ PR not yet merged. Checking again in 5 minutes... (%s)\n" "$(date +%H:%M:%S)"
  sleep 300
done
