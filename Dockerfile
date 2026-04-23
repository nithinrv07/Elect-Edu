FROM nginx:1.25-alpine

# Metadata
LABEL maintainer="ElectEdu Team"
LABEL description="ElectEdu - Interactive Indian Election Process Learning Platform"
LABEL version="2.0"

# Install curl for health checks
RUN apk add --no-cache curl

# Remove default config and copy custom one
RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/electedu.conf

# Copy application files
COPY . /usr/share/nginx/html/

# Fix permissions for nginx
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    mkdir -p /var/cache/nginx /var/log/nginx && \
    chown -R nginx:nginx /var/cache/nginx /var/log/nginx && \
    chmod 755 /var/log/nginx /var/cache/nginx && \
    chmod -R 755 /usr/share/nginx/html

# Expose port 8080
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:8080/health || exit 1

# Run nginx
CMD ["nginx", "-g", "daemon off;"]
