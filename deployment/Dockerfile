FROM nginx:1.14.2-alpine

COPY ./nginx.conf /etc/nginx/nginx.conf

COPY dist /usr/share/nginx/html

RUN chown root /usr/share/nginx/html/*
RUN chmod 755 /usr/share/nginx/html/*

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]