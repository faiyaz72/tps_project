import jwt from 'jsonwebtoken';
import config from '../config/config';

const authMiddleware = (req: any, res: any, next: any) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).json({ message: 'Access denied' });

    try {
        const verified = jwt.verify(token, config.jwtSecret);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).json({ message: 'Invalid token' });
    }
};

export default authMiddleware;