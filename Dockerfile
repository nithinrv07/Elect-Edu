FROM nginx:1.25-alpine

LABEL maintainer="ElectEdu Team"
LABEL version="2.4"

# Install curl and gettext
RUN apk add --no-cache curl gettext

# Copy application files
COPY . /usr/share/nginx/html/

# Copy the template
COPY default.conf.template /etc/nginx/templates/default.conf.template

# Copy the debug entrypoint
COPY debug-entrypoint.sh /debug-entrypoint.sh
RUN chmod +x /debug-entrypoint.sh

# Create required directories and set permissions
# Cloud Run sometimes runs as a non-root user (even if root is allowed)
# so we make these directories writable for everyone just in case.
RUN mkdir -p /var/cache/nginx /var/log/nginx /var/run /tmp && \
    chmod -R 777 /var/cache/nginx /var/log/nginx /var/run /tmp && \
    chown -R nginx:nginx /usr/share/nginx/html

# Set permissions for nginx user
RUN chmod -R 755 /usr/share/nginx/html

# Set default port
ENV PORT=8080

# Use the debug entrypoint
ENTRYPOINT ["/debug-entrypoint.sh"]
