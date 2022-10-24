# Select base image
FROM nginx:1.14.2-alpine

# Remove nginx default config files
RUN rm -rf /usr/share/nginx/html/* && \
    rm -rf /etc/nginx/nginx.conf && \
    rm -rf /etc/nginx/conf.d/default.conf

# Copy nginx config to image
COPY ./nginx.conf /etc/nginx/nginx.conf

# Copy app to image
COPY dist/contacts-manager-ui/ /usr/share/nginx/html

# Give permission to files
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod 755 /usr/share/nginx/html

# Open port 8080
EXPOSE 80

# Turn off nginx daemon
ENTRYPOINT ["nginx", "-g", "daemon off;"]