# Build stage
FROM node:17-alpine as build
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install

# Copy the source code and build the application
COPY . .
ARG VITE_SERVER_URL
ARG VITE_GOOGLE_ANALYTICS_TAG

# Use the arguments as environment variables for the build
RUN VITE_SERVER_URL=$VITE_SERVER_URL VITE_GOOGLE_ANALYTICS_TAG=$VITE_GOOGLE_ANALYTICS_TAG npm run build

# Production stage
FROM nginx:1.23-alpine

# Copy the built app to the nginx directory
COPY --from=build /app/dist /usr/share/nginx/html

# Copy the nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 to the outside once the container has launched
EXPOSE 80

# The command to run when the container starts
CMD ["nginx", "-g", "daemon off;"]
