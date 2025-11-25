# 1단계: 빌드
FROM node:20 AS builder
WORKDIR /app

# 빌드 타임 인자
ARG VITE_VERSION VITE_COMMIT_HASH VITE_YEAR VITE_GA_ID
ENV VITE_VERSION=$VITE_VERSION \
    VITE_COMMIT_HASH=$VITE_COMMIT_HASH \
    VITE_YEAR=$VITE_YEAR \
    VITE_GA_ID=$VITE_GA_ID

# 캐시 효율을 위해 의존성 먼저
COPY package*.json ./
RUN npm ci

# 나머지 소스
COPY . .
RUN npm run build

# 2단계: nginx로 정적 파일 서빙
FROM nginx:stable-alpine

# dist 결과물 복사
COPY --from=builder /app/dist /usr/share/nginx/html

# nginx 설정 템플릿 복사
COPY ./nginx/nginx.conf.template /etc/nginx/templates/nginx.conf.template

# 실행 시 환경변수 치환
CMD ["sh", "-c", "envsubst '$BACKEND_HOST $GRAFANA_HOST' < /etc/nginx/templates/nginx.conf.template > /etc/nginx/nginx.conf && nginx -g 'daemon off;'"]

# HTTP만 사용 (Cloudflare가 HTTPS 처리)
EXPOSE 80
