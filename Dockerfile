FROM nginx:1.25-alpine

# Set metadata labels
LABEL maintainer="ElectEdu Team"
LABEL description="ElectEdu - Interactive Indian Election Process Learning Platform"
LABEL version="2.0"

# Install curl for health checks
RUN apk add --no-cache curl

# Remove default nginx config
RUN rm -f /etc/nginx/conf.d/default.conf

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy project files to nginx document root
COPY . /usr/share/nginx/html/

# Create necessary log directories with proper permissions (as root)
RUN mkdir -p /var/log/nginx && \
    touch /var/log/nginx/access.log /var/log/nginx/error.log && \
    chown -R nginx:nginx /var/log/nginx /usr/share/nginx/html && \
    chmod 755 /var/log/nginx && \
    chmod -R 755 /usr/share/nginx/html

# Create a script to handle startup with proper permissions
RUN mkdir -p /var/cache/nginx && \
    chown -R nginx:nginx /var/cache/nginx && \
    chmod -R 755 /var/cache/nginx

# Expose port 8080 (Google Cloud Run default)
EXPOSE 8080

# Health check with proper configuration
HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
    CMD curl -f http://localhost:8080/health || exit 1

# Start nginx in foreground (runs as nginx user by default in alpine image)
CMD ["nginx", "-g", "daemon off;"]
