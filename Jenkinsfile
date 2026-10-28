pipeline {
    agent any

    options {
        skipDefaultCheckout(true)
        timestamps()
        disableConcurrentBuilds()
    }

    environment {
        APP_DIR = 'portfolio-nextjs'
        API_DIR = 'api'
        TEST_DB_NAME = 'portfolio-test-db'
        TEST_DB_URL = 'postgresql://portfolio_user:test_only_password@127.0.0.1:5433/portfolio_test?schema=public'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
                script {
                    env.GIT_SHA = sh(
                        script: 'git rev-parse --short=7 HEAD',
                        returnStdout: true
                    ).trim()
                    echo "Building commit: ${env.GIT_SHA}"
                }
            }
        }

        
        stage('Gitleaks Secret Scan') {
            steps {
                sh '''
                    docker run --rm \
                      -v "$WORKSPACE:/repo:ro" \
                      -v "$WORKSPACE:/config-source:ro" \
                      zricethezav/gitleaks:v8.30.1 \
                      dir /repo \
                      --config /config-source/.gitleaks.toml \
                      --redact \
                      --exit-code 1
                '''
            }
        }

        
        stage('Semgrep SAST') {
            steps {
                sh '''
                    docker run --rm \
                      -v "$WORKSPACE:/src:ro" \
                      semgrep/semgrep \
                      semgrep scan \
                      --config auto \
                      --severity ERROR \
                      --error \
                      /src/portfolio-nextjs /src/api
                '''
            }
        }


        stage('npm Audit') {
    steps {
        dir("${API_DIR}") {
            sh '''
                npm ci
                npm audit --audit-level=high
            '''
              }
            }
        }



        
        stage('OWASP Dependency-Check') {
            steps {
                withCredentials([string(
                    credentialsId: 'nvd-api-key',
                    variable: 'NVD_API_KEY'
                )]) {
                    sh '''
                        mkdir -p dependency-check-report

                        docker run --rm \
                          -e NVD_API_KEY="$NVD_API_KEY" \
                          -v "$WORKSPACE:/src" \
                          -v dependency-check-data:/usr/share/dependency-check/data \
                          owasp/dependency-check:latest \
                          --nvdApiKey "$NVD_API_KEY" \
                          --scan /src/api /src/portfolio-nextjs \
                          --format HTML \
                          --out /src/dependency-check-report \
                          --prettyPrint
                    '''
                }
            }
        }




        stage('Start Test Database') {
            steps {
                sh '''
                    docker rm -f "$TEST_DB_NAME" >/dev/null 2>&1 || true

                    docker run -d \
                      --name "$TEST_DB_NAME" \
                      -e POSTGRES_DB=portfolio_test \
                      -e POSTGRES_USER=portfolio_user \
                      -e POSTGRES_PASSWORD=test_only_password \
                      -p 127.0.0.1:5433:5432 \
                      postgres:17-alpine

                    for i in $(seq 1 30); do
                      if docker exec "$TEST_DB_NAME" \
                        pg_isready -U portfolio_user -d portfolio_test; then
                        exit 0
                      fi
                      sleep 2
                    done

                    echo "Test database failed to start."
                    docker logs "$TEST_DB_NAME"
                    exit 1
                '''
            }
        }

        stage('Frontend Tests') {
            steps {
                dir("${APP_DIR}") {
                    sh 'npm ci'
                    sh 'npm test'
                }
            }
        }

        stage('API Tests') {
            steps {
                dir("${API_DIR}") {
                    withEnv(["DATABASE_URL=${TEST_DB_URL}"]) {
                        sh 'npm ci'
                        sh 'npx prisma generate'
                        sh 'npx prisma migrate deploy'
                        sh 'npm test'
                    }
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

        stage('Build Docker Images') {
            steps {
                sh '''
                    docker build \
                      -t "devsecops-portfolio:${GIT_SHA}" \
                      -t devsecops-portfolio:latest \
                      ./portfolio-nextjs

                    docker build \
                      -t "devsecops-api:${GIT_SHA}" \
                      -t devsecops-api:latest \
                      ./api
                '''
            }
        }

        stage('Show Image Tags') {
            steps {
                sh '''
                    docker image ls devsecops-portfolio
                    docker image ls devsecops-api
                '''
                echo "Images built with Git SHA: ${env.GIT_SHA}"
            }
        }
    }

    post {
        always {
            sh 'docker rm -f "$TEST_DB_NAME" >/dev/null 2>&1 || true'
        }
        success {
            echo 'Tests passed and both Docker images were built successfully.'
        }
        failure {
            echo 'Pipeline failed. Check the stage logs to identify the problem.'
        }
    }
}
