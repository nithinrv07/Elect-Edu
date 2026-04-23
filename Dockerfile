FROM nginx:1.25-alpine

LABEL maintainer="ElectEdu Team"
LABEL version="2.1"

# Install curl for health checks and envsubst (gettext)
RUN apk add --no-cache curl gettext

# Create required directories with proper permissions
RUN mkdir -p /var/cache/nginx /var/log/nginx /var/run /tmp && \
    touch /var/log/nginx/access.log /var/log/nginx/error.log && \
    chown -R nginx:nginx /var/cache/nginx /var/log/nginx /var/run /tmp && \
    chmod 777 /tmp && \
    chmod 755 /var/log/nginx /var/cache/nginx /var/run

# Copy configuration template and entrypoint
COPY nginx.conf.template /etc/nginx/nginx.conf.template
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Copy application files
COPY . /usr/share/nginx/html/

# Set proper permissions for nginx user
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# Expose port (Documentation only, Cloud Run uses $PORT)
EXPOSE 8080

# Health check (Uses internal localhost check)
HEALTHCHECK --interval=30s --timeout=3s --start-period=10s --retries=3 \
    CMD curl -f http://localhost:${PORT:-8080}/health 2>/dev/null || exit 1

# Run entrypoint script
ENTRYPOINT ["/entrypoint.sh"]
