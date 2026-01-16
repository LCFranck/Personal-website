#!/bin/bash

# frontend/build_step.sh
# This script installs dependencies and builds the Next.js frontend

echo "Starting frontend build..."

# Install dependencies
npm install

# Build the Next.js app
npm run build

echo "Frontend build complete."
