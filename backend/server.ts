import express from 'express';
import http from 'http';
import { Server } from 'socket.io';
import userRoutes from './routes/userRoutes.js';
import gameRoute from './routes/gameRoute.js'
import errorHandler from './middleware/errorHandler.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const server = http.createServer(app);
const io = new Server(server);


app.use(express.json());


app.use('/users', userRoutes);
app.use('/games',gameRoute)

// Error handling middleware
app.use(errorHandler);


io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('makeMove', (data) => {
    // עיבוד המהלך שהתקבל
    console.log('Move received:', data);
    // שלח עדכונים לכולם
    io.emit('moveMade', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
