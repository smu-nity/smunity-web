#!/bin/bash

ENV_FILE=".env"
VERSION_KEY="VITE_VERSION"
COMMIT_KEY="VITE_COMMIT_HASH"

VERSION_VALUE=$(git describe --tags --abbrev=0)
COMMIT_VALUE=$(git rev-parse --short HEAD)

# 기존 키 제거 및 나머지 보존
grep -v "^$VERSION_KEY=" "$ENV_FILE" 2>/dev/null | \
grep -v "^$COMMIT_KEY=" > "$ENV_FILE.tmp" || touch "$ENV_FILE.tmp"

# 새 값 추가
echo "$VERSION_KEY=$VERSION_VALUE" >> "$ENV_FILE.tmp"
echo "$COMMIT_KEY=$COMMIT_VALUE" >> "$ENV_FILE.tmp"

# 덮어쓰기
mv "$ENV_FILE.tmp" "$ENV_FILE"
