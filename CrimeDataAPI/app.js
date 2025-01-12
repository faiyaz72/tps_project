const express = require('express');
// const connectDB = require('./utils/db');
// const crimeRoutes = require('./routes/crimeRoutes');
const config = require('./config/config');

const app = express();

// Connect to database
// connectDB();

// Middleware
app.use(express.json());

// Routes
// app.use('/api', crimeRoutes);

const PORT = config.port;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});