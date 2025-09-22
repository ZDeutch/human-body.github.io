#!/bin/bash

# Human Body Physiology - GitHub Deployment Script
# This script helps you deploy your website to GitHub Pages

echo "🚀 Deploying Human Body Physiology to GitHub..."
echo ""

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "📁 Initializing Git repository..."
    git init
    git branch -M main
fi

# Add all files
echo "📝 Adding files to Git..."
git add .

# Commit changes
echo "💾 Committing changes..."
git commit -m "Deploy Human Body Physiology website

- Interactive physiological visualization
- Homeostasis and marathon running states
- Responsive design with animations
- Educational content and scientific accuracy"

# Add remote origin (if not already added)
echo "🔗 Setting up remote repository..."
git remote add origin https://github.com/ZDeutch/human-body-physiology.git 2>/dev/null || echo "Remote already exists"

# Push to GitHub
echo "⬆️  Pushing to GitHub..."
git push -u origin main

echo ""
echo "✅ Deployment complete!"
echo ""
echo "📋 Next steps:"
echo "1. Go to https://github.com/ZDeutch/human-body-physiology"
echo "2. Click 'Settings' tab"
echo "3. Scroll to 'Pages' section"
echo "4. Select 'Deploy from a branch'"
echo "5. Choose 'main' branch and '/ (root)' folder"
echo "6. Click 'Save'"
echo ""
echo "🌐 Your website will be available at:"
echo "https://ZDeutch.github.io/human-body-physiology"
echo ""
echo "⏰ It may take 5-10 minutes for the site to become available."
