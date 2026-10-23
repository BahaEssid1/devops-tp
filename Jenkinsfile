
pipeline {
    agent any

    options {
        skipDefaultCheckout(true)
        timestamps()
    }

    environment {
        APP_DIR = 'portfolio-nextjs'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                dir("${APP_DIR}") {
                    sh 'npm ci'
                }
            }
        }

        stage('Build Next.js') {
            steps {
                dir("${APP_DIR}") {
                    sh 'npm run build'
                }
            }
        }
    }

    post {
        success {
            echo 'Portfolio checkout, dependency installation, and Next.js build completed successfully.'
        }
        failure {
            echo 'Pipeline failed. Check the stage logs above for details.'
        }
    }
}
