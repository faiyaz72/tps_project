import express from 'express';
// import connectDB from './utils/db';
import crimeRoutes from './routes/crimeRoutes.js';
import config from './config/config.js';

const app = express();

// Connect to database
// connectDB();

// Middleware
app.use(express.json());

// Routes
app.use('/api', crimeRoutes);

const PORT = config.port;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});