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
    
    # Enable gzip compression
    gzip on;
    gzip_vary on;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml text/javascript application/json application/javascript application/xml+rss application/rss+xml font/truetype font/opentype application/vnd.ms-fontobject image/svg+xml;
    gzip_min_length 1000;
    
    server {
        listen 8080 default_server;
        server_name _;
        
        root /usr/share/nginx/html;
        index index.html index.htm;
        
        # Security Headers
        add_header X-Frame-Options "SAMEORIGIN" always;
        add_header X-Content-Type-Options "nosniff" always;
        add_header X-XSS-Protection "1; mode=block" always;
        add_header Referrer-Policy "strict-origin-when-cross-origin" always;
        add_header Permissions-Policy "geolocation=(), microphone=(), camera=()" always;
        add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
        
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
