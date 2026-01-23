#!/bin/bash

# DigitalOcean Deployment Helper Script
# This script helps prepare and deploy your Next.js static site to DigitalOcean

echo "🚀 DigitalOcean Deployment Helper"
echo "=================================="
echo ""

# Check if out directory exists
if [ ! -d "out" ]; then
    echo "📦 Building project..."
    npm run build
    
    if [ $? -ne 0 ]; then
        echo "❌ Build failed! Please fix errors and try again."
        exit 1
    fi
    echo "✅ Build successful!"
else
    echo "✅ Build directory exists"
fi

echo ""
echo "📋 Next steps:"
echo ""
echo "Option 1: DigitalOcean App Platform (Recommended)"
echo "  1. Go to https://cloud.digitalocean.com/apps"
echo "  2. Click 'Create App'"
echo "  3. Connect your GitHub repository"
echo "  4. Select branch: main"
echo "  5. Build command: npm ci && npm run build"
echo "  6. Output directory: out"
echo "  7. Deploy!"
echo ""
echo "Option 2: DigitalOcean Spaces"
echo "  1. Create a Space at https://cloud.digitalocean.com/spaces"
echo "  2. Enable static website hosting"
echo "  3. Upload the 'out' directory contents"
echo ""
echo "Option 3: Manual Upload"
echo "  The 'out' directory is ready for upload"
echo ""
echo "✨ Happy deploying!"
