# Build stage
FROM node:17-alpine as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

# Copy the source code and build the application
COPY . .
ARG VITE_SERVER_URL
ARG VITE_GOOGLE_ANALYTICS_TAG

ENV VITE_SERVER_URL=${VITE_SERVER_URL}
ENV VITE_GOOGLE_ANALYTICS_TAG=${VITE_GOOGLE_ANALYTICS_TAG}

# Production stage
FROM nginx:1.23-alpine

# Remove the default nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf

# Copy the custom nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Copy the built app to the nginx directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80 to the outside once the container has launched
EXPOSE 80

# The command to run when the container starts
CMD ["nginx", "-g", "daemon off;"]
