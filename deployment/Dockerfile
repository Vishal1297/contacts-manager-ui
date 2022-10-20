FROM nginx:1.14.2-alpine

RUN rm -rf /usr/share/nginx/html/* && \
    rm -rf /etc/nginx/nginx.conf && \
    rm -rf /etc/nginx/conf.d/default.conf

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY dist/contacts-manager-ui/ /usr/share/nginx/html

RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod 755 /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]