import express from 'express';
import dotenv from 'dotenv';
import mongoDBConnect from './mongoDB/connection.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import userRoutes from './routes/user.js';
import chatRoutes from './routes/chat.js';
import messageRoutes from './routes/message.js';
import { Server as SocketIO } from 'socket.io';

dotenv.config();
const app = express();
const corsConfig = {
  origin: process.env.BASE_URL,
  credentials: true,
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors(corsConfig));
app.use('/', userRoutes);
app.use('/api/chat', chatRoutes);
app.use('/api/message', messageRoutes);
mongoose.set('strictQuery', false);

(async () => {
  try {
    await mongoDBConnect();
    const server = app.listen(process.env.PORT, () => {
      console.log(`Server Listening at PORT - ${process.env.PORT}`);
    });
    
    const io = new SocketIO(server, {
      pingTimeout: 60000,
      cors: {
        origin: 'http://localhost:3000',
      },
    });
    
    io.on('connection', (socket) => {
      socket.on('setup', (userData) => {
        socket.join(userData.id);
        socket.emit('connected');
      });
      
      socket.on('join room', (room) => {
        socket.join(room);
      });
      
      socket.on('typing', (room) => {
        socket.in(room).emit('typing');
      });
      
      socket.on('stop typing', (room) => {
        socket.in(room).emit('stop typing');
      });
      
      socket.on('new message', (newMessageRecieve) => {
        const chat = newMessageRecieve.chatId;
        if (!chat.users) {
          console.log('chats.users is not defined');
        }
        
        chat.users.forEach((user) => {
          if (user._id == newMessageRecieve.sender._id) return;
          socket.in(user._id).emit('message received', newMessageRecieve);
        });
      });
    });
  } catch (error) {
    console.error('Error starting the server:', error);
  }
})();