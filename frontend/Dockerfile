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

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]