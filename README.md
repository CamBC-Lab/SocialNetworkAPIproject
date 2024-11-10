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
    
    npm run seed
    ```
    

## Usage
1. Start the server:
    ```sh
    npm run start
    ```
2. Access the API at `http://localhost:3001`

## API Endpoints
- `POST /api/users` - Create a new user
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get a user by ID
- `PUT /api/users/:id` - Update a user by ID
- `DELETE /api/users/:id` - Delete a user by ID
- `POST /api/users/:id/friends - Add a friend by ID
- `DELETE /api/users/:id/friends/:friendsID - Delete a friend by ID
- `POST /api/thoughts` - Create a new thought
- `GET /api/thoughts` - Get all thoughts
- `GET /api/thoughts/:id` - Get a thought by ID
- `PUT /api/thoughts/:id` - Update a thought by ID
- `DELETE /api/thoughts/:id` - Delete a thought by ID
- `POST /api/thoughts/:id/reactions` - Add a reaction to a thought
- `GET /api/thoughts/:id/reactions` - Get all reactions for a thought
- `DELETE /api/thoughts/:id/reactions/:reactionId` - Delete a reaction by ID


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
