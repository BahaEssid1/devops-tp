FROM nginx:alpine

COPY cv/ /usr/share/nginx/html/

EXPOSE 80
