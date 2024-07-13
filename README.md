# University Application Node Server

This is a Node.js server for a CAR WASH application built with TypeScript, Node.js, Mongoose, Joi for validation, and bcrypt for password hashing. The server includes various API routes for managing academic semesters, users, admins, faculty, and offered courses.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites
- Node.js
- npm or yarn
- MongoDB

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/university-node-server.git
    ```

2. Navigate to the project directory:
    ```sh
    cd university-node-server
    ```

3. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

4. Create a `.env` file in the root directory and add your environment variables:
    ```env
    MONGO_URI=your_mongo_db_connection_string
    JWT_SECRET=your_jwt_secret_key
    ```

## Usage

1. Start the server:
    ```sh
    npm run dev
    # or
    yarn dev
    ```

2. The server will run on `http://localhost:3000`.

## API Endpoints

### Academic Semesters
- **GET /api/semesters**: Get all academic semesters
- **POST /api/semesters**: Create a new academic semester

### Users
- **GET /api/users**: Get all users
- **POST /api/users**: Create a new user

### Admin
- **GET /api/admins**: Get all admins
- **POST /api/admins**: Create a new admin

### Faculty
- **GET /api/faculties**: Get all faculties
- **POST /api/faculties**: Create a new faculty

### Courses
- **GET /api/courses**: Get all offered courses
- **POST /api/courses**: Create a new course

## Example Requests/Responses

### Create User
**Request:**
```sh
POST /api/users
Content-Type: application/json
{
  "name": "John Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}
