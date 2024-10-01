import express from 'express';
import userRoutes from './routes/userRoutes.js';
import gameRoute from './routes/gameRoute.js';
import errorHandler from './middleware/errorHandler.js';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
app.use(express.json());
// Routes
app.use('/users', userRoutes);
app.use('/games', gameRoute);
// Error handling middleware
app.use(errorHandler);
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
