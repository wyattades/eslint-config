#!/usr/bin/env bash

set -e

cd ./test

echo "[TEST] Eslint config is valid:"
npx eslint --config ../index.js --print-config ./pass/hooks.tsx > /dev/null
echo "[TEST] Passed"

echo "[TEST] All test/pass/* files have no eslint errors:"
# Allow 1 warning
eslint --config ../index.js --max-warnings 1 ./pass/*
echo "[TEST] Passed"

for t in ./fail/*; do
  echo "[TEST] $t has eslint errors:"
  if eslint --max-warnings 0 $t; then
    exit 1
  fi
  echo "[TEST] Passed"
done

echo "[TEST] All passed!"
