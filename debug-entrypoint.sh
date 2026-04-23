#!/bin/sh
# Ultimate Universal Entrypoint
export PORT=${PORT:-8080}

echo "--- ElectEdu Deployment v2.5 ---"
echo "Port: ${PORT}"

# Generate full config in /tmp
envsubst '${PORT}' < /tmp/nginx.conf.template > /tmp/nginx.conf

echo "Starting Nginx..."
exec nginx -c /tmp/nginx.conf -g 'daemon off;'
