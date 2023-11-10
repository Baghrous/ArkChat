# ArkChat

ArkChat is a real-time chat platform that enables users to connect and communicate with each other in real-time. It has been built using the MERN stack (MongoDB, Express.js, React.js, and Node.js), Socket.io, Redux Toolkit, and Tailwind CSS.

## Technologies Used

- MERN stack (MongoDB, Express.js, React.js, Node.js)
- Socket.io
- Redux Toolkit
- Tailwind CSS

## Features

- Real-time chat: Users can send and receive messages instantly.
- User authentication: Secure sign-up, log-in, and log-out using JWT and Google Authentication.
- Group creation: Users can create chat rooms and invite others to join conversations.
- Notifications: Users receive notifications for new messages.
- Emojis: Send and receive emojis in messages.
- Profile Page: Users can customize their avatars and display names.
- Room Creation: Users can create rooms for group chats.
- Search Functionality: Search for users or rooms.
- Responsive Design: Optimized for various screen sizes and devices.

## Configuration and Setup

To run this project locally, follow these steps:

1. Clone the repository to your local machine.

git clone https://github.com/baghrous/ArkChat.git


2. Open the project in your preferred code editor.

3. Open two terminals (one for the client and one for the server).

4. In the first terminal (Client):

- Navigate to the `client` directory.
- Create a `.env` file in the root of your client directory.
- Supply the following credentials:

  ```
  REACT_APP_GOOGLE_CLIENT_ID=
  REACT_APP_SERVER_URL=http://localhost:8000
  ```

- To obtain your Google Client ID for authentication, follow these steps:
  - Go to the [Google Cloud Console](https://console.cloud.google.com/).
  - Create or select a project.
  - Navigate to the Credentials page.
  - Click "Create credentials" > "OAuth client ID."
  - Select "Web application" as the application type.
  - Name your OAuth client and click "Create."
  - Configure your authorized JavaScript origins and redirect URIs (e.g., `http://localhost:3000` and `http://localhost:3000/login` for development).
  - Copy the Client ID and assign it to `REACT_APP_GOOGLE_CLIENT_ID` in your `.env` file.

- Install client-side dependencies and start the client:

  ```
  cd client
  npm install
  npm start
  ```

5. In the second terminal (Server):

- Navigate to the `server` directory.
- Create a `.env` file in the root of your server directory.
- Supply the following credentials:

  ```
  PORT=8000
  URL=YOUR_MONGODB_CONNECTION_URL
  SECRET=YOUR_SECRET_KEY
  CLIENT_ID=YOUR_CLIENT_ID
  BASE_URL=http://localhost:3000
  ```

- Install server-side dependencies and start the server:

  ```
  cd server
  npm install
  npm start
  ```

Replace `YOUR_MONGODB_CONNECTION_URL`, `YOUR_SECRET_KEY`, and `YOUR_CLIENT_ID` with your MongoDB connection URL, a secret key for JWT, and your Google Client ID, respectively.

Now, ArkChat should be running locally. You can access it by opening your browser and navigating to `http://localhost:3000`.
