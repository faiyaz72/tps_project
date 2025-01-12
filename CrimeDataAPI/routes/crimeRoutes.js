import express from 'express';
import authMiddleware from '../middlewares/authMiddleware.js';
import queryController from '../controllers/queryController.js';

const router = express.Router();

router.get('/query', authMiddleware, queryController);

// Add other routes as needed

export default router;