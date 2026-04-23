#!/bin/sh
# Default to 8080 if PORT is not set
export PORT=${PORT:-8080}

echo "Generating Nginx config for port ${PORT}..."
envsubst '${PORT}' < /etc/nginx/nginx.conf.template > /etc/nginx/nginx.conf

echo "Starting Nginx..."
exec nginx -g 'daemon off;'
