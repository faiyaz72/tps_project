import express from 'express';
const router = express.Router();
import jwt from 'jsonwebtoken';
import config from '../config/config.js';

router.get('/login', (req, res) => {
    const user = {
        id: 1,
        username: 'test'
    }
    const token = jwt.sign(user, config.jwtSecret, { expiresIn: '1h' });
    res.json({ token });

});

export default router;