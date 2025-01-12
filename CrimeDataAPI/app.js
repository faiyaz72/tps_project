import express from 'express';
// import connectDB from './utils/db';
import queryRoutes from './routes/queryRoutes.js';
import authRoutes from './routes/authRoutes.js';
import config from './config/config.js';
import authMiddleware from './middlewares/authMiddleware.js';

const app = express();

// Connect to database
// connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/auth', authRoutes);
app.use('/query', authMiddleware, queryRoutes);

const PORT = config.port;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});