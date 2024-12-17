# Use the official Node.js image
FROM node:22.12

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .


# Define the command to run your bot
CMD ["npm", "run", "dev"]
