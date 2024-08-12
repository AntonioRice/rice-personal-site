#!/bin/bash

SITEMAP_URL="https://www.antoniorice.com/sitemap.xml"

# Notify Google
echo "Submitting sitemap to Google..."
curl -s "http://www.google.com/ping?sitemap=${SITEMAP_URL}" > /dev/null

# Notify Bing
echo "Submitting sitemap to Bing..."
curl -s "http://www.bing.com/ping?sitemap=${SITEMAP_URL}" > /dev/null

echo "Sitemap submission completed."