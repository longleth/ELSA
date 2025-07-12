# Use official Node.js LTS image as base
FROM node:20-alpine

LABEL authors="longle"

# Set working directory in the container
WORKDIR /app
# Copy package.json and package-lock.json first for efficient caching
COPY package*.json ./
# Install dependencies
RUN npm install
# Copy the rest of the application source code
COPY . .
# Build the app if required (uncomment if using build scripts)
# RUN npm run build
# Expose the port the application listens on
# EXPOSE 5173

# Start the app
CMD ["node", "src/index.js"]
