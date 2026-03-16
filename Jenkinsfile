pipeline {
    agent any

    environment {
        IMAGE_NAME = 'brahma01/maya-app:latest'
        DEPLOYMENT_NAME = 'maya-app'
        CONTAINER_NAME = 'maya-app'
        NAMESPACE = 'default'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Debug') {
            steps {
                sh '''
                    whoami
                    pwd
                    docker --version
                    docker version
                    docker ps
                    kubectl version --client
                    kubectl get nodes
                    kubectl get deployments
                '''
            }
        }

        stage('Build Docker Image') {
            steps {
                sh 'docker build -t $IMAGE_NAME .'
            }
        }

        stage('Push Docker Image') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub-creds', usernameVariable: 'DOCKER_USER', passwordVariable: 'DOCKER_PASS')]) {
    sh '''
        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
        docker push $IMAGE_NAME
    '''
}
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                    kubectl set image deployment/$DEPLOYMENT_NAME $CONTAINER_NAME=$IMAGE_NAME -n $NAMESPACE
                    kubectl rollout status deployment/$DEPLOYMENT_NAME -n $NAMESPACE
                '''
            }
        }
    }

    post {
        always {
            sh 'docker logout || true'
        }
    }
}