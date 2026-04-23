#!/bin/sh
# v2.6 Bulletproof Entrypoint
export PORT=${PORT:-8080}
echo "Starting ElectEdu v2.6 on Port: ${PORT}"

# Create the most minimal config possible
printf "events { worker_connections 1024; } \
http { \
    include /etc/nginx/mime.types; \
    server { \
        listen ${PORT}; \
        root /usr/share/nginx/html; \
        index index.html; \
        location / { \
            try_files \$uri \$uri/ /index.html; \
        } \
    } \
}" > /tmp/nginx.conf

echo "Starting Nginx..."
exec nginx -c /tmp/nginx.conf -g 'daemon off;'
