#!/bin/bash

# Deployment script for Human Body Physiology Website
# This script helps automate the deployment process

echo "🚀 Human Body Physiology Website Deployment Script"
echo "=================================================="

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "Initializing git repository..."
    git init
fi

# Add all files
echo "📁 Adding files to git..."
git add .

# Get commit message from user or use default
if [ -z "$1" ]; then
    COMMIT_MSG="Update Human Body Physiology Website"
else
    COMMIT_MSG="$1"
fi

echo "💾 Committing changes: $COMMIT_MSG"
git commit -m "$COMMIT_MSG"

# Check if remote origin exists
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "❌ No git remote 'origin' found."
    echo "Please set up your GitHub repository first:"
    echo "1. Create a repository on GitHub"
    echo "2. Run: git remote add origin https://github.com/YOURUSERNAME/human-body-physiology.git"
    echo "3. Run this script again"
    exit 1
fi

# Push to GitHub
echo "🌐 Pushing to GitHub..."
git push origin main

echo "✅ Deployment complete!"
echo ""
echo "📍 Your website should be available at:"
echo "   https://YOURUSERNAME.github.io/human-body-physiology"
echo ""
echo "🔧 If this is your first deployment:"
echo "   1. Go to your GitHub repository"
echo "   2. Click 'Settings' tab"
echo "   3. Scroll to 'Pages' section"
echo "   4. Select 'Deploy from a branch'"
echo "   5. Choose 'main' branch"
echo "   6. Click 'Save'"
echo ""
echo "⏱️  It may take a few minutes for the site to go live."
