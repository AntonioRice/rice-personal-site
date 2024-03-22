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

# Install app dependencies
COPY package.json ./
RUN npm install

# Bundle app source
COPY . .

# Build the application
RUN npm run build
