FROM nginx:alpine

# Install curl for health checks
RUN apk add --no-cache curl

# Remove default nginx config
RUN rm -f /etc/nginx/conf.d/default.conf

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy project files to nginx document root
COPY . /usr/share/nginx/html/

# Create nginx cache directory
RUN mkdir -p /var/cache/nginx /var/run/nginx

# Expose port 8080 (Google Cloud Run default)
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
    CMD curl -f http://localhost:8080/ || exit 1

# Start nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
