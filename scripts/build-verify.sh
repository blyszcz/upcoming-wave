#!/usr/bin/env bash
# Production build in a throwaway copy of the repo, so a running `npm run dev` here is never touched
# (next build rewrites next-env.d.ts / tsconfig.json, which makes the dev server restart).
# Output: $VERIFY_DIR/out (default /tmp/upcoming-wave-verify/out).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
VERIFY_DIR="${VERIFY_DIR:-/tmp/upcoming-wave-verify}"
mkdir -p "$VERIFY_DIR"
rsync -a --delete --exclude node_modules --exclude .next --exclude .next-verify --exclude out --exclude .git --exclude docs --exclude output "$ROOT/" "$VERIFY_DIR/"
ln -sfn "$ROOT/node_modules" "$VERIFY_DIR/node_modules"
cd "$VERIFY_DIR"
rm -rf .next out
npx next build
