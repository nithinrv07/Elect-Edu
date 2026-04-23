#!/bin/sh
# Default to 8080 if PORT is not set
export PORT=${PORT:-8080}

echo "Universal Entrypoint: Configuring Nginx to listen on port ${PORT}"

# Perform substitution into /tmp to avoid permission issues with /etc/nginx
envsubst '${PORT}' < /tmp/nginx.conf.template > /tmp/nginx.conf

echo "Starting Nginx with custom config from /tmp/nginx.conf"
exec nginx -c /tmp/nginx.conf -g 'daemon off;'
