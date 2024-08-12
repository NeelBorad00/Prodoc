# MERN Stack User Authentication System

This project is a simple user authentication module using the MERN stack. It allows users to register, log in, log out, and access a user profile page. This README provides instructions for setting up and running the project, as well as an overview of the project structure.

## Table of Contents

- [Project Overview](#project-overview)
- [Setup and Installation](#setup-and-installation)
- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)

## Project Overview

The project consists of a backend API built with Node.js and Express.js, and a frontend application built with React.js. The main functionalities include:

- *User Registration*: Create a new account with a username, email, and password.
- *User Login*: Log in with email and password.
- *User Profile Page*: View user profile information after logging in.
- *Logout Functionality*: End the user session.

## Setup and Installation

### *Prerequisites*

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/try/download/community) (v4.2 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### *1. Clone the Repository*

bash
git clone https://github.com/yourusername/mern-authentication.git
cd mern-authentication


### *2. Set Up Environment Variables*

Create a .env file in the root of the project and add the following environment variables:

env
MONGO_URI=mongodb://localhost:27017/prodoc
JWT_SECRET=your_generated_secret_key
PORT=5000


Replace your_generated_secret_key with the secret key you generated for JWT.

### *3. Install Dependencies*

Navigate to the backend and frontend directories and install dependencies:

#### *Backend*

bash
cd backend
npm install


#### *Frontend*

bash
cd ../frontend
npm install


## Running the Project

### *1. Start the MongoDB Server*

Ensure MongoDB is running. Open a new terminal and start the MongoDB server:

bash
mongod


### *2. Start the Backend Server*

Open a new terminal, navigate to the backend directory, and start the server:

bash
cd backend
npm start


The backend server will be running on http://localhost:5000.

### *3. Start the Frontend Application*

Open a new terminal, navigate to the frontend directory, and start the React application:

bash
cd frontend
npm start


The frontend application will be running on http://localhost:3000.

## Project Structure

### *Backend*

- **server.js**: Entry point for the backend server. Sets up Express and connects to MongoDB.
- **/models**: Contains Mongoose models (e.g., User.js).
- **/routes**: Contains API routes (e.g., auth.js for authentication routes).
- **/config**: Configuration files (e.g., database connection setup).
- **.env**: Environment variables for configuration (database URI, JWT secret).

### *Frontend*

- **src/index.js**: Entry point for the React application.
- **src/App.js**: Main application component and routing setup.
- **src/components**: Contains React components (e.g., Register.js, Login.js, Profile.js).
- **src/services**: Contains service functions for API calls.
- **src/context**: Context providers for managing authentication state.
- **.env**: Environment variables for configuration (API URL, etc.).

## Technologies Used

- *Frontend*: React.js, React Router, Axios
- *Backend*: Node.js, Express.js, Mongoose, bcrypt, jsonwebtoken
- *Database*: MongoDB
- *Development Tools*: npm, dotenv

