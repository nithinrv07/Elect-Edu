FROM nginx:1.25-alpine

LABEL maintainer="ElectEdu Team"
LABEL version="2.6"

# Install bash for better script compatibility
RUN apk add --no-cache bash

# Copy application files
COPY . /usr/share/nginx/html/

# Copy and set up the bulletproof entrypoint
COPY debug-entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Remove default nginx config to prevent conflicts
RUN rm -f /etc/nginx/conf.d/default.conf

# Ensure all runtime paths are writable
RUN chmod -R 777 /tmp /var/cache/nginx /var/log/nginx /var/run /usr/share/nginx/html

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget --no-verbose --tries=1 --spider http://localhost:8080/ || exit 1

# Use 8080 as default (Cloud Run requires this)
ENV PORT=8080
EXPOSE 8080

ENTRYPOINT ["/entrypoint.sh"]
