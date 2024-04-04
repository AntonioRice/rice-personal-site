# Build stage
FROM node:18-alpine as build

# Declare Args
ARG VITE_SERVER_URL
ARG VITE_GOOGLE_ANALYTICS_TAG

# Set the environment variables
ENV VITE_SERVER_URL=$VITE_SERVER_URL
ENV VITE_GOOGLE_ANALYTICS_TAG=$VITE_GOOGLE_ANALYTICS_TAG
ENV NODE_ENV=production

# Set the working directory to /app
WORKDIR /app

# Install app dependencies
COPY package*.json ./
RUN npm ci --only=production

# Bundle app source
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:stable-alpine as production

# Copy the build output to replace the default nginx contents.
COPY --from=build /app/dist /usr/share/nginx/html
COPY antoniorice.com.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]