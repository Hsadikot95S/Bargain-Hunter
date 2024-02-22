pipeline {

    agent any
 
    environment {

        // Deployment Details

        EC2_HOST = 'ec2-3-82-164-101.compute-1.amazonaws.com'

        EC2_USER = 'ubuntu'

        DEPLOY_DIRECTORY = '/home/ubuntu/Bargain-Hunter'

        SSH_CREDENTIALS_ID = 'ae5822f1-5933-46c1-a39f-5e6074e45e78'

        NODE_ENV = 'production'

    }
 
    stages {

        stage('Checkout') {

            steps {

                checkout scm

            }

        }
 
        stage('Build React') {

            steps {

                echo 'Building React project...'

                sh 'npm install' // Install project dependencies

                sh 'npm run build' // Build the React project

            }

        }
 
        stage('Deploy') {

            steps {

                echo 'Deploying to server...'

                sshagent([SSH_CREDENTIALS_ID]) {

                    // Syncing files to the EC2 instance using rsync

                    // The path to the private key will be managed by Jenkins SSH Agent

                    sh "rsync -avz --delete --exclude '.git/' --exclude 'node_modules/' -e 'ssh -o StrictHostKeyChecking=accept-new' ./ ${EC2_USER}@${EC2_HOST}:${DEPLOY_DIRECTORY}"

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



