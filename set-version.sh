#!/bin/bash

ENV_FILE=".env"
VERSION_KEY="VITE_VERSION"
COMMIT_KEY="VITE_COMMIT_HASH"
YEAR_KEY="VITE_YEAR"

VERSION_VALUE=$(git describe --tags --abbrev=0)
COMMIT_VALUE=$(git rev-parse --short HEAD)
YEAR_VALUE=$(date +%Y)

touch "$ENV_FILE.tmp"
echo "$VERSION_KEY=$VERSION_VALUE" >> "$ENV_FILE.tmp"
echo "$COMMIT_KEY=$COMMIT_VALUE" >> "$ENV_FILE.tmp"
echo "$YEAR_KEY=$YEAR_VALUE" >> "$ENV_FILE.tmp"

mv "$ENV_FILE.tmp" "$ENV_FILE"
