# Stage 1: Build the application
FROM node:20-alpine AS builder

WORKDIR /app

# Update packages and install security fixes
RUN apk update && apk upgrade && apk add --no-cache libc6-compat

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy source files
COPY . .

# Build the application
RUN npm run build

# Stage 2: Serve the application
FROM node:20-alpine

WORKDIR /app

# Update packages and install security fixes
RUN apk update && apk upgrade && apk add --no-cache libc6-compat

# Install serve globally
RUN npm install -g serve

# Copy built files from builder stage
COPY --from=builder /app/dist ./dist

# Expose port 3000
EXPOSE 3000

# Start server on port 3000
CMD ["serve", "-s", "dist", "-l", "3000"]

