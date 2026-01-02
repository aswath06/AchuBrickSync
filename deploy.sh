#!/bin/bash

echo "=============================="
echo "Starting Deployment"
echo "=============================="

# Exit immediately if any command fails
set -e

# Go to project directory
cd /home/server/BricksSync

echo "Pulling latest code from GitHub..."
git pull origin main

echo "Stopping existing containers..."
docker compose down

echo "Building fresh Docker images..."
docker compose build --no-cache

echo "Starting containers..."
docker compose up -d

echo "Removing unused Docker images..."
docker image prune -f

echo "=============================="
echo "Deployment Completed Successfully"
echo "=============================="
