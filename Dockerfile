# 1단계: 빌드
FROM node:20 AS builder
WORKDIR /app

# 캐시 효율을 위해 의존성 먼저
COPY package*.json ./
RUN npm ci

# 나머지 소스
COPY . .
RUN npm run build

# 2단계: Caddy로 정적 서빙
FROM caddy:2
WORKDIR /srv

# Caddy 유저가 읽을 수 있게 권한 지정
COPY --from=builder --chown=caddy:caddy /app/dist /srv

# 운영용 Caddyfile (개발은 compose에서 dev 파일 마운트 권장)
COPY ./caddy/Caddyfile /etc/caddy/Caddyfile

# 문서화용
EXPOSE 80 443
