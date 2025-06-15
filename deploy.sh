APP_NAME=consultaurant-frontend
IMAGE_NAME=consultaurant/frontend
PORT=3000

echo "[1] 기존 컨테이너 정리"
docker rm -f $APP_NAME || true

echo "[2] Docker 이미지 빌드"
docker build -t $IMAGE_NAME:latest .

echo "[3] 새 컨테이너 실행"
docker run -d --name $APP_NAME -p $PORT:3000 $IMAGE_NAME:latest
