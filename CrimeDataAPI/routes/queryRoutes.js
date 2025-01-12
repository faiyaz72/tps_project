import express from 'express';
const router = express.Router();

router.get('/basic', (req, res) => {
    res.json({ message: 'Query endpoint' });
});

router.get('/basic/:id', (req, res) => {
    res.json({ message: 'Query by ID endpoint' });
});

export default router;