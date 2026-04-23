FROM nginx:1.25-alpine

LABEL maintainer="ElectEdu Team"
LABEL version="2.5"

# Install curl and gettext
RUN apk add --no-cache curl gettext

# Copy application files
COPY . /usr/share/nginx/html/

# Copy the template to /tmp
COPY nginx.conf.template /tmp/nginx.conf.template

# Copy the debug entrypoint
COPY debug-entrypoint.sh /debug-entrypoint.sh
RUN chmod +x /debug-entrypoint.sh

# Ensure /tmp and web root are writable for any user
RUN chmod -R 777 /tmp /var/cache/nginx /var/log/nginx /var/run && \
    chown -R nginx:nginx /usr/share/nginx/html

# Use the debug entrypoint
ENTRYPOINT ["/debug-entrypoint.sh"]
