# Stage 1: Build stage (if needed for any preprocessing)
FROM node:18-alpine AS builder

WORKDIR /app

# Copy project files
COPY . .

# Install dependencies (if any Python scripts need to be run)
# Note: remove_bg.py would need Python, uncomment if needed
# RUN apt-get update && apt-get install -y python3 python3-pip

# You can add build steps here if needed
# For this static site, no build step is required

# Stage 2: Runtime stage
FROM nginx:alpine

# Install curl for health checks
RUN apk add --no-cache curl

# Remove default nginx config
RUN rm -rf /etc/nginx/conf.d/*

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy project files to nginx document root
COPY --from=builder /app /usr/share/nginx/html

# Create a non-root user for better security
RUN addgroup -g 101 -S nginx && \
    adduser -S -D -H -u 101 -h /var/cache/nginx -s /sbin/nologin -c "Nginx web server" -G nginx nginx

# Set proper permissions
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chown -R nginx:nginx /var/cache/nginx && \
    chmod -R 755 /usr/share/nginx/html

# Switch to non-root user
USER nginx

# Expose port 8080 (Google Cloud Run default)
EXPOSE 8080

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost:8080/ || exit 1

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
