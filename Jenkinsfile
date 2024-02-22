pipeline {
    agent any // Specifies that the pipeline can run on any available agent

    stages {
        stage('Checkout') {
            steps {
                // Checking out a specific branch from a Git repository
                checkout([$class: 'GitSCM', branches: [[name: 'HomePage_V0']],
                          userRemoteConfigs: [[url: 'https://github.com/Hsadikot95S/Bargain-Hunter.git']]])
            }
        }

        stage('Build') {
            steps {
                echo 'Building the project...'
                // Navigate to the project's directory before building
                dir('/home/ec2-user/Bargain-Hunters/Bargain-Hunter') {
                    // Ensure Node.js is installed correctly here
                    // It's assumed Node.js and npm are already installed as part of the environment setup
                    echo 'Ensure Node.js is installed correctly here'
                    // Install project dependencies and build the project
                    sh 'npm install'
                    sh 'npm run build'
                }
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                // Add your test commands here
                // Example: sh 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying the project...'
                // Commands from Deploy.sh are now directly included here
                script {
                    // Navigate to the deployment directory
                    if (sh (script: 'cd /home/ec2-user/Bargain-Hunters/Bargain-Hunter', returnStatus: true) == 0) {
                        // If the cd command is successful, proceed with the deployment steps
                        echo "Installing dependencies..."
                        sh 'npm install'
                        echo "Building the project..."
                        sh 'npm run build'
                        echo "Restarting the application..."
                        // Use the correct command to restart your application
                        // For Node.js applications using pm2:
                        sh 'pm2 restart app'
                        // For Docker-based applications, you might use:
                        // sh 'docker-compose down && docker-compose up -d'
                        echo "Deployment complete."
                    } else {
                        // If the cd command fails, exit the script with an error
                        error("Failed to navigate to the project directory")
                    }
                }
            }
        }
    }

    post {
        success {
            emailext (
                to: 'ryb1802@gmail.com',
                subject: 'Jenkins Pipeline Notification: Build Successful',
                body: 'The Jenkins pipeline build was successful.'
            )
        }

        failure {
            emailext (
                to: 'ryb1802@gmail.com',
                subject: 'Jenkins Pipeline Notification: Build Failed',
                body: 'The Jenkins pipeline build failed.'
            )
        }
    }
}

