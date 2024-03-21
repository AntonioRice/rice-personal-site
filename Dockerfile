# Build stage
FROM node:17-alpine as build

# Declare Args
ARG VITE_MONGO_PASSWORD
ARG VITE_SERVER_URL
ARG VITE_GOOGLE_ANALYTICS_TAG

# Set the environment variables
ENV VITE_MONGO_PASSWORD=$VITE_MONGO_PASSWORD
ENV VITE_SERVER_URL=$VITE_SERVER_URL
ENV VITE_GOOGLE_ANALYTICS_TAG=$VITE_GOOGLE_ANALYTICS_TAG

# Set the working directory to /app
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Nginx stage
FROM nginx:1.23-alpine
# Set the working directory to the directory where Nginx serves files
WORKDIR /usr/share/nginx/html
# Remove default Nginx static files
RUN rm -rf *
# Copy the static build directory from the previous build stage into the Nginx serve directory
COPY --from=build /app/dist .

# Copy custom nginx fil
COPY antoniorice.com /etc/nginx/conf.d/

# Inform Docker that the container listens on port 80
EXPOSE 80
# Start Nginx and keep it running in the foreground
ENTRYPOINT [ "nginx", "-g", "daemon off;" ]
