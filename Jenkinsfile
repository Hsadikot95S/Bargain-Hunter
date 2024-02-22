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
                // Assuming the command intended was to navigate to the project's directory before building
                dir('/home/ec2-user/Bargain-Hunters/Bargain-Hunter') {
                    // Assuming 'install node' was meant to ensure Node.js is installed, which typically isn't done via a script like this
                    // It's better to ensure Node.js is installed as part of the environment setup outside of the Jenkinsfile
                    // However, for demonstration, I'll leave a placeholder echo command
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
                // Execute your deployment script here
                sh './Deploy.sh'
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

