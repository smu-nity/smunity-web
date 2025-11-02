# 1단계: 빌드 단계 (Node.js 사용)
FROM node:20 AS builder

WORKDIR /app

COPY . .

RUN npm install && npm run build

# 2단계: 실제 배포용 (Nginx 사용)
FROM nginx:latest

# Nginx 설정 복사
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/conf.d /etc/nginx/conf.d

# 환경 변수를 로드하여 Nginx 설정에 적용
ARG BACKEND_HOST
ENV BACKEND_HOST=${BACKEND_HOST}
RUN sed "s|\${BACKEND_HOST}|${BACKEND_HOST}|g" /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf

# 빌드된 정적 파일을 Nginx 기본 경로로 복사
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
