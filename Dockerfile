# Build stage
FROM node:17-alpine as build
ARG VITE_SERVER_URL
ARG VITE_GOOGLE_ANALYTICS_TAG
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
# Use the arguments as environment variables for the build
RUN VITE_SERVER_URL=$VITE_SERVER_URL VITE_GOOGLE_ANALYTICS_TAG=$VITE_GOOGLE_ANALYTICS_TAG npm run build

# Production stage
FROM nginx:1.23-alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]