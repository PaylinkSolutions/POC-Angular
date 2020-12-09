FROM nginx:alpine

RUN rm -f /usr/share/nginx/html/*

COPY dist/poc /usr/share/nginx/html
COPY ./docker/default.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]