# Social Network API Project

## Description
This project is a social network API that allows users to create, read, update, and delete posts and comments. It also supports user authentication and authorization.

## Features
- User authentication and authorization
- CRUD operations for posts and comments
- User profile management
- Follows and unfollows functionality

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcrypt

## Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/SocialNetworkAPIproject.git
    ```
2. Navigate to the project directory:
    ```sh
    cd SocialNetworkAPIproject
    ```
3. Install dependencies:
    ```sh
    npm install
    ```
    npm run seed

## Usage
1. Start the server:
    ```sh
    npm run start
    ```
2. Access the API at `http://localhost:3001`

## API Endpoints
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login a user
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get a user by ID
- `PUT /api/users/:id` - Update a user by ID
- `DELETE /api/users/:id` - Delete a user by ID
- `POST /api/posts` - Create a new post
- `GET /api/posts` - Get all posts
- `GET /api/posts/:id` - Get a post by ID
- `PUT /api/posts/:id` - Update a post by ID
- `DELETE /api/posts/:id` - Delete a post by ID
- `POST /api/posts/:id/comments` - Add a comment to a post
- `GET /api/posts/:id/comments` - Get all comments for a post
- `DELETE /api/posts/:id/comments/:commentId` - Delete a comment by ID

## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request

## License
This project is licensed under the MIT License.

## Contact
For any questions or inquiries, please contact [your email address].
