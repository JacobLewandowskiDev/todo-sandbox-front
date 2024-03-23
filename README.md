# (Vue 3 + Vite) Virtual Task & Productivity Tracker Project

This project is the frontend portion of a full-stack Virtual Task & Productivity Tracker application built with Vue 3 and Vite. 
It interacts with a Java Spring Boot backend API to perform CRUD operations on Tasks and their associated Steps for completion.

## Prerequisites to setup the frontend:

Before running this project, make sure you have the following prerequisites installed on your system:

- Node.js
- npm (Node Package Manager)
- Java 17 or higher (for running the backend Spring Boot API)

## Getting Started

Follow these steps to get the project up and running on your local machine:

1. Clone the repository:

   ```bash
   git clone <repository-url>

2. Navigate to your project directory:
   ```
   cd vue3-vite-todo-app
   ```

4. Install dependencies:
   ```
   npm install
   ```
5. Start the Vite development server:
   ```
   npm run dev
   ```

6. Access the application in your web browser via: 'http://localhost/${Port}

## API Endpoints

This application interacts with the following API endpoints:
* (GET) GetAllTodos: /todos
* (GET) GetTodoById: /todos/${id}
* (POST) CreateTodo: /todos
* (PUT) UpdateTodo: /todos/${id}
* (DELETE) DeleteTodo: /todos/${id}
* (POST) SaveStep: /todos/${id}/steps
* (PUT) UpdateStep: /todos/${id}/steps
* (DELETE) DeleteStep: /todos/${id}/steps?stepId=${stepId}

## Building for production
To build the project for production, run the following command:
   ```
   npm run build
   ```
This command will generate a production-ready build in the dist directory.

## Backend portion of the application:
To learn how to set up and run the backend environment please follow the link below to the application backend repository:
   https://github.com/JacobLewandowskiDev/todo-sandbox/tree/jacobscode







