FROM nginx:1.25-alpine

LABEL maintainer="ElectEdu Team"
LABEL version="2.2"

# Install curl for health checks and envsubst (gettext)
RUN apk add --no-cache curl gettext

# Create required directories with proper permissions
# We ensure /tmp is wide open for the nginx user
RUN mkdir -p /var/cache/nginx /var/log/nginx /var/run /tmp && \
    chmod -R 777 /var/cache/nginx /var/log/nginx /var/run /tmp

# Copy configuration template and entrypoint to /tmp
COPY nginx.conf.template /tmp/nginx.conf.template
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Copy application files
COPY . /usr/share/nginx/html/

# Set proper permissions for nginx user
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# Expose port (Cloud Run uses $PORT)
EXPOSE 8080

# We remove the Docker HEALTHCHECK to allow Cloud Run's native health check 
# to manage the lifecycle, avoiding port mismatch issues during startup.

# Run entrypoint script
ENTRYPOINT ["/entrypoint.sh"]
