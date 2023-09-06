# Redx Technologies Assignment - Insert Keyword and Insert Video Link

This README.md file provides an overview of the assignment and instructions on how to set up and run the project. The assignment involves creating two web pages using React: one for inserting keywords and another for inserting video links. Additionally, a MongoDB database is used for storing the data, and an Express/Node.js server is created to handle requests.

## Demo of Project
![Insert Keyword](https://github.com/Seemant9118/Redx-Assign/assets/71726668/a07d9561-36be-424f-813f-eaafb9adaa6c)

![Insert Video](https://github.com/Seemant9118/Redx-Assign/assets/71726668/2448cf79-74be-4579-bb8e-634ea6fcfbe6)

## Table of Contents
- [Project Overview](#project-overview)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Project Overview

The assignment requires you to create two web pages:

1. **Insert Keyword Page**: A page where users can insert keywords. These keywords will be stored in the MongoDB database.

2. **Insert Video Link Page**: A page where users can insert video links. These links will also be stored in the MongoDB database.

A server built with Express and Node.js will handle the incoming requests to interact with the database.

## Prerequisites

Before you begin, ensure you have the following tools and technologies installed:

- Node.js and npm: [Download and Install Node.js](https://nodejs.org/)

## Getting Started

Follow these steps to set up and run the project:

1. Clone the repository to your local machine:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd <project-directory>
   ```

3. Install the server dependencies:

   ```bash
   cd backend
   npm install
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. In a new terminal, navigate to the client directory:

   ```bash
   cd ../frontend
   ```

6. Install the client dependencies:

   ```bash
   npm install
   ```

7. Start the client application:

   ```bash
   npm start
   ```

8. Access the web application by opening a web browser and navigating to `http://localhost:3000`.

## Project Structure

The project directory structure is as follows:

- **frontend**: Contains the React-based web application for inserting keywords and video links.
- **backend**: Contains the Express.js server for handling requests and interacting with the MongoDB database.

Feel free to explore the subdirectories for more details.

## Usage

1. **Insert Keyword Page**:
   - Access the "Insert Keyword" page from the web application.
   - Enter the keyword in the input field.
   - Click the "Submit" button to store the keyword in the database.

2. **Insert Video Link Page**:
   - Access the "Insert Video Link" page from the web application.
   - Enter the video link in the input field.
   - Click the "Submit" button to store the video link in the database.

## Technologies Used

- React.js for the client-side web application.
- Express.js and Node.js for the server application.
- MongoDB for the database.

## Contributing

If you would like to contribute to this project, please follow these guidelines:

1. Fork the repository to your own GitHub account.
2. Create a new branch with a descriptive name for your feature or bug fix.
3. Make your changes and commit them with clear and concise messages.
4. Push your changes to your forked repository.
5. Submit a pull request to the original repository with a clear description of your changes.

## created by 
Seemant Kamlapuri
