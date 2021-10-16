#!/usr/bin/env bash

set -e

echo "[TEST] Eslint config is valid:"
npx eslint --print-config test/pass/hooks.tsx > /dev/null

# Allow 1 warning
echo "[TEST] All test/pass/* files have no eslint errors:"
eslint --max-warnings 1 test/pass/*

for t in test/fail/*; do
  echo "[TEST] $t has eslint errors:"
  if eslint --max-warnings 0 $t; then
    exit 1
  fi
done

echo "[TEST] Passed!"
