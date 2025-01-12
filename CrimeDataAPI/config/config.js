require('dotenv').config();

module.exports = {
    port: process.env.PORT || 8080,
    dbUri: process.env.DB_URI || 'mongodb://localhost:27017/crimeData',
    jwtSecret: process.env.JWT_SECRET || 'your_jwt_secret'
};