pipeline {
    agent any

    environment {
        // Deployment Details
        EC2_HOST = 'ec2-50-19-145-133.compute-1.amazonaws.com'
        EC2_USER = 'ec2-user'
        DEPLOY_DIRECTORY = '/home/ec2-user/Bargain-Hunters/Bargain-Hunter' // Corrected directory path
        SSH_CREDENTIALS_ID = 'ae5822f1-5933-46c1-a39f-5e6074e45e78'
        NODE_ENV = 'production'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Validate HTML/CSS') {
            steps {
                echo 'Validating HTML/CSS...'
                // Placeholders for validation commands
                sh 'html-validator --file index.html || true'
                sh 'stylelint "**/*.css" || true'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying to server...'
                sshagent(['${SSH_CREDENTIALS_ID}']) {
                    // Corrected rsync command with explicit SSH command to include known_hosts check and strict host key checking
                    sh "rsync -avz --delete --exclude '.git/' --exclude 'node_modules/' -e 'ssh -o StrictHostKeyChecking=accept-new -i \$(ssh-agent -l | head -n 1 | cut -d ' ' -f3)' ./ ${EC2_USER}@${EC2_HOST}:${DEPLOY_DIRECTORY}"
                }
            }
        }
    }

    post {
        always {
            echo 'Cleaning up workspace...'
            cleanWs()
        }
        success {
            echo 'Build and deployment succeeded.'
        }
        failure {
            echo 'Build or deployment failed.'
        }
    }
}
