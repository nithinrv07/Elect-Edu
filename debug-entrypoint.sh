#!/bin/sh
# Debug entrypoint for Cloud Run
echo "--- Container Starting ---"
echo "Current User: $(id)"
echo "Target Port (PORT env): ${PORT}"

# Use 8080 as a fallback if PORT is missing
export PORT=${PORT:-8080}

# Replace ${PORT} in the template
echo "Substituting PORT into Nginx config..."
envsubst '${PORT}' < /etc/nginx/templates/default.conf.template > /etc/nginx/conf.d/default.conf

echo "Final Nginx Config (first 10 lines):"
head -n 10 /etc/nginx/conf.d/default.conf

echo "Starting Nginx..."
exec nginx -g 'daemon off;'
