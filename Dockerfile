# Builder + Runtime 하나로 구성
FROM node:22-alpine

# 작업 디렉토리 생성
WORKDIR /app

# 의존성 및 소스 복사
COPY . .

# pnpm 설정
RUN corepack enable && corepack prepare pnpm@latest --activate

# 의존성 설치
RUN pnpm install

# 빌드
RUN pnpm build

# 포트 지정
EXPOSE 3000

# 앱 실행
CMD ["pnpm", "start"]
