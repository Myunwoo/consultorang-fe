pipeline {
  agent any

  environment {
    APP_NAME = "consultaurant-frontend"
    IMAGE_NAME = "consultaurant/frontend"
    HOST_PORT = "3000"
    CONTAINER_PORT = "3000"
  }

  stages {
    stage('Checkout') {
      steps {
        git url: 'https://github.com/Myunwoo/consultorang-fe', branch: 'main'
      }
    }

    stage('Build Docker Image') {
      steps {
        script {
          sh "docker build -t ${IMAGE_NAME}:latest ."
        }
      }
    }

    stage('Stop & Remove Existing Container') {
      steps {
        script {
          sh """
            if docker ps -a --format '{{.Names}}' | grep -q "^${APP_NAME}\$"; then
              echo "Stopping & Removing existing container: ${APP_NAME}"
              docker rm -f ${APP_NAME}
            else
              echo "No existing container named ${APP_NAME}"
            fi
          """
        }
      }
    }

    stage('Run Container') {
      steps {
        script {
          sh """
            docker run -d --name ${APP_NAME} -p ${HOST_PORT}:${CONTAINER_PORT} ${IMAGE_NAME}:latest
          """
        }
      }
    }
  }

  post {
    success {
      echo "Frontend successfully deployed!"
    }
    failure {
      echo "Deployment failed!"
    }
  }
}
