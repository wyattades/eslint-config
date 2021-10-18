#!/usr/bin/env bash

set -e

cd ./test

echo "[TEST] Eslint config is valid:"
npx eslint --config ../index.js --print-config ./pass/hooks.tsx > /dev/null

# Allow 1 warning
echo "[TEST] All test/pass/* files have no eslint errors:"
eslint --config ../index.js --max-warnings 1 ./pass/*

for t in ./fail/*; do
  echo "[TEST] $t has eslint errors:"
  if eslint --max-warnings 0 $t; then
    exit 1
  fi
done

echo "[TEST] Passed!"
