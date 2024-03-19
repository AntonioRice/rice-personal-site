# Build stage
FROM node:17-alpine as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

# Set build-time environment variables
ARG VITE_SERVER_URL
ARG VITE_GOOGLE_ANALYTICS_TAG

ENV VITE_SERVER_URL=${VITE_SERVER_URL}
ENV VITE_GOOGLE_ANALYTICS_TAG=${VITE_GOOGLE_ANALYTICS_TAG}

# Copy the source code
COPY . .

# Build the application
RUN npm run build

# Serve stage
FROM node:17-alpine
WORKDIR /app
COPY --from=build /app/dist /app/dist
COPY server.js /app
RUN npm install express

EXPOSE 80
CMD ["node", "server.js"]
