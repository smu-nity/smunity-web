#!/bin/bash

ENV_FILE=".env"
VERSION_KEY="VITE_VERSION"
COMMIT_KEY="VITE_COMMIT_HASH"
YEAR_KEY="VITE_YEAR"

VERSION_VALUE=$(git describe --tags --abbrev=0)
COMMIT_VALUE=$(git rev-parse --short HEAD)
YEAR_VALUE=$(date +%Y)

# 기존 키 제거 및 나머지 보존
sed -E "/^(${VERSION_KEY}|${COMMIT_KEY}|${YEAR_KEY})=/d" "$ENV_FILE" 2>/dev/null > "$ENV_FILE.tmp"

# 새 값 추가
echo "$VERSION_KEY=$VERSION_VALUE" >> "$ENV_FILE.tmp"
echo "$COMMIT_KEY=$COMMIT_VALUE" >> "$ENV_FILE.tmp"
echo "$YEAR_KEY=$YEAR_VALUE" >> "$ENV_FILE.tmp"

# 덮어쓰기
mv "$ENV_FILE.tmp" "$ENV_FILE"
