#!/bin/bash
# Sync downloaded Instagram content to the Next.js site's public folder
# Run this after download_content.py has finished

CONTENT_DIR="./content"
SITE_PUBLIC="./site/public/content"

if [ ! -d "$CONTENT_DIR/pictures" ] || [ ! -d "$CONTENT_DIR/videos" ]; then
  echo "Error: Content not found. Run download_content.py first."
  exit 1
fi

echo "Syncing content to Next.js site..."

# Copy pictures
mkdir -p "$SITE_PUBLIC/pictures"
cp -v "$CONTENT_DIR/pictures/"*.{jpg,jpeg,png,webp} "$SITE_PUBLIC/pictures/" 2>/dev/null
echo "Pictures synced."

# Copy videos
mkdir -p "$SITE_PUBLIC/videos"
cp -v "$CONTENT_DIR/videos/"*.{mp4,mov} "$SITE_PUBLIC/videos/" 2>/dev/null
echo "Videos synced."

# Copy metadata
cp -v "$CONTENT_DIR/profile.json" "$SITE_PUBLIC/" 2>/dev/null
cp -v "$CONTENT_DIR/posts.json" "$SITE_PUBLIC/" 2>/dev/null

echo ""
echo "Done! Content synced to $SITE_PUBLIC"
echo "Now update the Gallery and VideoShowcase components with actual filenames."
