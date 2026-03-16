# Use Node.js
FROM node:18-alpine

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy all files
COPY . .

# Open port 3001
EXPOSE 3001

# Start the app
CMD ["npm", "start"]