FROM nginx:1.25-alpine

LABEL maintainer="ElectEdu Team"
LABEL version="2.6"

# Copy application files
COPY . /usr/share/nginx/html/

# Copy and set up the bulletproof entrypoint
COPY debug-entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# Ensure all runtime paths are writable
RUN chmod -R 777 /tmp /var/cache/nginx /var/log/nginx /var/run /usr/share/nginx/html

# Use 8080 as default (Cloud Run will override)
ENV PORT=8080
EXPOSE 8080

ENTRYPOINT ["/entrypoint.sh"]
