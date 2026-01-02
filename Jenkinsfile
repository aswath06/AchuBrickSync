pipeline {
    agent any

    stages {
        stage('Install Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm install'
                }
            }
        }

        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'npm run build' // creates production-ready 'dist/' folder
                }
            }
        }

        stage('Install Backend') {
            steps {
                dir('backend') {
                    sh 'npm install'
                }
            }
        }

        stage('Start Backend & Serve Frontend') {
            steps {
                dir('backend') {
                    // Move built frontend into backend if needed
                    sh 'cp -r ../frontend/dist ./public'
                    // Start backend in background (for testing)
                    sh 'nohup node server.js > backend.log 2>&1 &'
                }
            }
        }
    }

    post {
        success {
            echo 'Build and deployment succeeded!'
        }
        failure {
            echo 'Build failed!'
        }
    }
}
