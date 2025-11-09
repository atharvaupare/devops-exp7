# Use official Node image
FROM node:22-alpine

# Create app directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy source
COPY . .

# Expose app port
EXPOSE 3000

# Start app
CMD ["npm", "start"]
