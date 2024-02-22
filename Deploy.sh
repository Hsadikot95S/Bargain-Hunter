#!/bin/bash

# Navigate to the deployment directory
cd /home/ec2-user/Bargain-Hunters/Bargain-Hunter || exit

# Installing dependencies
echo "Installing dependencies..."
npm install

# Building the project
echo "Building the project..."
npm run build

# Restarting the application with pm2
echo "Restarting the application..."
pm2 restart app || {
    echo "pm2 command failed. Is pm2 installed?"
    exit 1
}

echo "Deployment complete."

