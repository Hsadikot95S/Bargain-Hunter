pipeline {
    agent any
    
    environment {
        PATH = "/home/ec2-user/Bargain-Hunters/Bargain-Hunter" stage('Test') {
            steps {
                echo 'Running tests...'
                // Add your test commands here
            }
        }

        
        stage('Deploy') {
            steps {
                echo 'Deploying the project...'
                // Add your deployment commands here
                // Example: sh 'deploy-script.sh'
            }
        }
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'HomePage_V0', url: 'https://github.com/Hsadikot95S/Bargain-Hunter.git'
            }
        }
        
        stage('Build') {
            steps {
                echo 'Building the project...'
                sh '/home/ec2-user/Bargain-Hunters/Bargain-Hunter install node' // Use the full path to Homebrew
                sh 'npm install' // Install project dependencies
                sh 'npm run build' // Build the React project
            }
        }
        
        stage('Test') {
            steps {
                echo 'Running tests...'
                // Add your test commands here
            }
        }
        
        stage('Deploy') {
            steps {
                echo 'Deploying the project...'
                // Add your deployment commands here
            }
        }
    }
    
    post {
        success {
            emailext (
                to: 'ryb1802@gmail.com',
                subject: 'Jenkins Pipeline Notification: Build Successful',
                body: 'The Jenkins pipeline has been successfully executed.'
            )
        }
        failure {
            emailext (
                to: 'ryb1802@gmail.com',
                subject: 'Jenkins Pipeline Notification: Build Failed',
                body: 'The Jenkins pipeline has failed. Please check the build logs for details.'
            )
        }
    }
}
