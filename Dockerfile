FROM nginx:1.25-alpine

LABEL maintainer="ElectEdu Team"
LABEL version="2.0"

# Install curl for health checks
RUN apk add --no-cache curl

# Create required directories with proper permissions
RUN mkdir -p /var/cache/nginx /var/log/nginx /var/run && \
    touch /var/log/nginx/access.log /var/log/nginx/error.log && \
    chown -R nginx:nginx /var/cache/nginx /var/log/nginx /var/run && \
    chmod 755 /var/log/nginx /var/cache/nginx /var/run

# Remove default configs
RUN rm -rf /etc/nginx/conf.d/* /etc/nginx/nginx.conf

# Copy main nginx config
COPY nginx.conf /etc/nginx/nginx.conf

# Copy application files
COPY . /usr/share/nginx/html/

# Set proper permissions for nginx user
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# Expose port 8080
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
    CMD curl -f http://localhost:8080/health 2>/dev/null || exit 1

# Run nginx
CMD ["nginx", "-g", "daemon off;"]

