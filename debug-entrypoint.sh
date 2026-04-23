#!/bin/bash
# v2.6 Bulletproof Entrypoint
set -e

export PORT=${PORT:-8080}
echo "Starting ElectEdu v2.6 on Port: ${PORT}"

# Create a bulletproof nginx config
cat > /tmp/nginx.conf <<'EOF'
events {
    worker_connections 1024;
}
http {
    include /etc/nginx/mime.types;
    default_type application/octet-stream;
    sendfile on;
    keepalive_timeout 65;
    
    server {
        listen 8080 default_server;
        server_name _;
        
        root /usr/share/nginx/html;
        index index.html index.htm;
        
        # SPA routing
        location / {
            try_files $uri $uri/ /index.html =404;
        }
        
        # Cache static assets
        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
            expires 30d;
            add_header Cache-Control "public, immutable";
        }
        
        # Disable caching for HTML
        location ~* \.html$ {
            expires -1;
            add_header Cache-Control "no-store, no-cache, must-revalidate, max-age=0";
        }
    }
}
EOF

# Verify files exist
if [ ! -f /usr/share/nginx/html/index.html ]; then
    echo "ERROR: index.html not found!"
    ls -la /usr/share/nginx/html/
    exit 1
fi

echo "Nginx config created successfully"
echo "Starting Nginx..."

# Start Nginx in foreground
exec nginx -c /tmp/nginx.conf -g 'daemon off;'
