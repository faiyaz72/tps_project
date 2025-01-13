import express from 'express';
import * as queryController from '../controllers/queryController';
const router = express.Router();

router.get('/basic', queryController.getSampleData);

router.get('/between', queryController.getCrimesBetweenDates);

export default router;