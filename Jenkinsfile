pipeline {
    agent any

    environment {
        // Environment variables based on provided details
        EC2_HOST = 'ec2-52-3-6-131.compute-1.amazonaws.com'
        EC2_USER = 'ec2-user'
        DEPLOY_DIRECTORY = '/home/ec2-user/Bargain-Hunters/Bargain-Hunter'
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
                // Add your build commands here
                // This is a placeholder; replace with actual build commands for your project
                echo 'Building the project...'
            }
        }

        stage('Test') {
            steps {
                // Run your test commands here
                // This is a placeholder; replace with actual test commands for your project
                echo 'Testing the project...'
            }
        }

        stage('Deploy') {
            steps {
                script {
                    // Using SCP to copy files to the EC2 instance
                    sh "scp -o StrictHostKeyChecking=no -r ./* ${EC2_USER}@${EC2_HOST}:${DEPLOY_DIRECTORY}"
                    
                    // SSH into the EC2 instance to execute deployment commands
                    // This assumes you have a deploy_script.sh in your DEPLOY_DIRECTORY that handles deployment
                    sh "ssh -o StrictHostKeyChecking=no ${EC2_USER}@${EC2_HOST} 'cd ${DEPLOY_DIRECTORY} && ./deploy_script.sh'"
                }
            }
        }
    }

    post {
        always {
            // Actions to take after the pipeline has finished
            echo 'The pipeline is complete.'
        }
    }
}

