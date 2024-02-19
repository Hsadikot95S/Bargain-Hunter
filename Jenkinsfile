pipeline {
    agent any

    environment {
        // Deployment Details
        EC2_HOST = 'ec2-50-19-145-133.compute-1.amazonaws.com'
        EC2_USER = 'ec2-user'
        DEPLOY_DIRECTORY = '/home/BargainHunters/BargainHunter'
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
                // Replace the following commands with the actual validation commands.
                // The `|| true` is used to prevent the pipeline from failing for demonstration.
                // Remove `|| true` for actual use to enforce validation.
                sh 'html-validator --file index.html || true' // Placeholder for HTML validation
                sh 'stylelint "**/*.css" || true' // Placeholder for CSS linting
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying to server...'
                sshagent(credentials: [SSH_CREDENTIALS_ID]) {
                    // Syncing files to the EC2 instance using rsync
                    sh "rsync -avz --delete --exclude '.git/' --exclude 'node_modules/' ./ ${EC2_USER}@${EC2_HOST}:${DEPLOY_DIRECTORY}"
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
