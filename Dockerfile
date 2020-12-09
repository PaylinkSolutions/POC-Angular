FROM nginx:alpine

RUN rm -f /usr/share/nginx/html/*
COPY dist/poc /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]