[200~#!/bin/bash

# Navigate to the deployment directory
cd /home/ec2-user/Bargain-Hunters/Bargain-Hunter || exit
#
# # Example for a Node.js application
# # Install dependencies
echo "Installing dependencies..."
npm install
#
# # Build the project (if necessary)
echo "Building the project..."
npm run build
#
# # Restart the application
# # This command varies greatly depending on how your application is run
# # For a simple Node.js application using pm2:
echo "Restarting the application..."
pm2 restart app
#
# # For applications using Docker, you might restart a Docker container
#docker-compose down && docker-compose up -d
#
# # For other types of applications, adjust the restart command accordingly
# # For example, for a Python Flask application running under Gunicorn:
# # systemctl restart myapp
#
echo "Deployment complete."
#
