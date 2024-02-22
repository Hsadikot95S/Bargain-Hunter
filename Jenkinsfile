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
                // Correctly execute your deployment script from its directory
                sh '/home/ec2-user/Bargain-Hunters/Bargain-Hunter/Deploy.sh'
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

