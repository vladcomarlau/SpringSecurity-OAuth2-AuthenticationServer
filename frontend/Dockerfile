# build static vite-react files
FROM node:23-alpine
LABEL authors="vladcomarlau"
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# server nginx
FROM nginx:alpine
RUN rm -rf /usr/share/nginx/html/* # delete nginx welcome page
COPY /dist /usr/share/nginx/html
#nginx are nginx.conf unde setezi portul
COPY nginxConfig/default /etc/nginx/sites-enabled
CMD ["/bin/sh", "-c", "sed -i 's/listen  .*/listen 8080;/g' /etc/nginx/conf.d/default.conf && exec nginx -g 'daemon off;'"]
EXPOSE 8080
# Expose port 3000 for NGINX
#CMD ["nginx", "-g", "daemon off;"]