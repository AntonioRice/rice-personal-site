# Build stage
FROM node:17-alpine as build

#Declare Args
ARG VITE_MONGO_PASSWORD
ARG VITE_SERVER_URL
ARG VITE_GOOGLE_ANALYTICS_TAG

ENV VITE_MONGO_PASSWORD=$VITE_MONGO_PASSWORD
ENV VITE_SERVER_URL=$VITE_SERVER_URL
ENV VITE_GOOGLE_ANALYTICS_TAG=$VITE_GOOGLE_ANALYTICS_TAG

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# nginx
FROM nginx:1.23-alpine
WORKDIR /app
RUN rm -rf *
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]