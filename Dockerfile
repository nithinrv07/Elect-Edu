FROM nginx:1.25-alpine

LABEL maintainer="ElectEdu Team"
LABEL version="2.3"

# Install curl for health checks
RUN apk add --no-cache curl

# Copy the template to the standard Nginx templates directory
# Standard Nginx entrypoint (>1.19) automatically runs envsubst on these
COPY default.conf.template /etc/nginx/templates/default.conf.template

# Copy application files
COPY . /usr/share/nginx/html/

# Set proper permissions
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# Set default PORT for envsubst (Cloud Run will override this)
ENV PORT=8080

# Documentation only
EXPOSE 8080

# The standard Nginx entrypoint will handle the startup and port substitution
