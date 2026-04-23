FROM nginx:alpine

# Install curl for health checks
RUN apk add --no-cache curl

# Remove default nginx config
RUN rm -f /etc/nginx/conf.d/default.conf

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy project files to nginx document root
COPY . /usr/share/nginx/html/

# Create necessary directories and fix permissions
RUN mkdir -p /var/cache/nginx /var/run/nginx /var/log/nginx && \
    touch /var/log/nginx/access.log /var/log/nginx/error.log && \
    chmod -R 777 /var/cache/nginx /var/run/nginx /var/log/nginx

# Expose port 8080 (Google Cloud Run default)
EXPOSE 8080

# Start nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
