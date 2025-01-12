import express from 'express';
import * as queryController from '../controllers/queryController';
const router = express.Router();

router.get('/basic', queryController.getSampleData);

router.get('/basic/:id', (req, res) => {
    res.json({ message: 'Query by ID endpoint' });
});

export default router;