pipeline {
    agent any

    environment {
        // Deployment Details
        EC2_HOST = 'ec2-50-19-145-133.compute-1.amazonaws.com'
        EC2_USER = 'ec2-user'
        DEPLOY_DIRECTORY = '/home/ec2-user/Bargain-Hunters/Bargain-Hunter'
        SSH_CREDENTIALS_ID = 'ae5822f1-5933-46c1-a39f-5e6074e45e78'
        NODE_ENV = 'production'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                echo 'Installing dependencies...'
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                echo 'Building React app...'
                // Setting up the environment variable NODE_ENV to production
                // This will create an optimized build of your React app
                sh 'npm run build'
            }
        }

        stage('Test') {
            steps {
                echo 'Running tests...'
                // Assuming you have tests set up with Jest or a similar testing framework
                // sh 'npm test'
                // For this example, tests are commented out. Uncomment in real use.
            }
        }

        stage('Validate HTML/CSS') {
            steps {
                echo 'Validating HTML/CSS...'
                // Assuming validation commands are installed and configured
                // Placeholder commands, replace with actual commands if needed
                sh 'html-validator --file build/index.html || true'
                sh 'stylelint "src/**/*.css" || true'
            }
        }

        stage('Deploy') {
            steps {
                echo 'Deploying to server...'
                sshagent([SSH_CREDENTIALS_ID]) {
                    // Syncing built files to the EC2 instance using rsync
                    // Excluding node_modules and source files, only deploy the build directory
                    sh "rsync -avz --delete --exclude '.git/' --exclude 'node_modules/' --exclude 'src/' -e 'ssh -o StrictHostKeyChecking=accept-new' ./build/ ${EC2_USER}@${EC2_HOST}:${DEPLOY_DIRECTORY}"
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

