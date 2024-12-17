# Step 1: Use an official Node.js image as the base image
FROM node:18-alpine

# Step 2: Set the working directory inside the container
WORKDIR /app

# Step 3: Copy package.json and package-lock.json into the container
COPY package*.json ./

# Step 4: Install dependencies
RUN npm install

# Step 5: Copy the entire project code into the container
COPY . .

# Step 6: Expose the port React's development server will run on
EXPOSE 3000

# Step 7: Start the React development server
CMD ["npm", "start"]
