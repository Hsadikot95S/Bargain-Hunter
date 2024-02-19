pipeline {
    agent any

    // Define all your environment variables
    environment {
        // Environment variables for deployment
        EC2_HOST = 'ec2-52-3-6-131.compute-1.amazonaws.com'
        EC2_USER = 'ec2-user'
        DEPLOY_DIRECTORY = '/home/ec2-user/Bargain-Hunters/Bargain-Hunter'
        SSH_CREDENTIALS_ID = 'ae5822f1-5933-46c1-a39f-5e6074e45e78' // Your Jenkins SSH credential ID

        // Environment variables for build and test
        NODE_ENV = 'production'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checks out the SCM code into the workspace
                checkout scm
            }
        }

        stage('Build') {
            steps {
                // Install dependencies and build the project
                echo 'Installing dependencies...'
                sh 'npm install'
                echo 'Building the project...'
                sh 'npm run build' // Assumes a 'build' script is defined in your package.json
            }
        }

        stage('Test') {
            steps {
                // Run tests
                echo 'Testing the project...'
                sh 'npm test' // Assumes tests are configured to run with 'npm test'
            }
        }

        stage('Deploy') {
            steps {
                sshagent([SSH_CREDENTIALS_ID]) {
                    // Using SCP to copy files to the EC2 instance
                    sh "scp -o StrictHostKeyChecking=no -r ./* ${EC2_USER}@${EC2_HOST}:${DEPLOY_DIRECTORY}"
                    
                    // SSH into the EC2 instance to execute deployment commands
                    sh "ssh -o StrictHostKeyChecking=no ${EC2_USER}@${EC2_HOST} 'cd ${DEPLOY_DIRECTORY} && ./deploy_script.sh'"
                }
            }
        }
    }

    post {
        always {
            // Clean up workspace after the pipeline is complete
            echo 'Cleaning up workspace...'
            cleanWs()
        }
        success {
            // If the pipeline succeeds, print this message
            echo 'The build, test, and deployment stages have completed successfully.'
        }
        failure {
            // If the pipeline fails, print this message
            echo 'The pipeline failed at some stage.'
        }
    }
}
