import express from 'express';
const router = express.Router();

router.get('/query', (req, res) => {
    res.json({ message: 'Query endpoint' });
});

router.get('/query/:id', (req, res) => {
    res.json({ message: 'Query by ID endpoint' });
});

export default router;