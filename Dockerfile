FROM nginx:latest

# Remove default nginx config
RUN rm -f /etc/nginx/conf.d/default.conf

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy project files to nginx document root
COPY . /usr/share/nginx/html/

# Create necessary log directories and files with proper permissions
RUN mkdir -p /var/log/nginx && \
    touch /var/log/nginx/access.log /var/log/nginx/error.log && \
    chown -R www-data:www-data /var/log/nginx && \
    chmod 755 /var/log/nginx

# Expose port 8080 (Google Cloud Run default)
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
    CMD curl -f http://localhost:8080/health || exit 1

# Start nginx in foreground
CMD ["nginx", "-g", "daemon off;"]
