import express from "express";
import * as queryController from "../controllers/queryController";
const router = express.Router();

/**
 * @swagger
 * /query/basic:
 *   get:
 *     summary: Get Sample Data
 *     description: Fetches the first ten major crimes from the database.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A JSON array of the first ten major crimes.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 */
router.get("/basic", queryController.getSampleData);

/**
 * @swagger
 * /query/between:
 *   get:
 *     summary: Get Crimes Between Dates
 *     description: Fetches major crimes that occurred between the specified start and end dates, with pagination support.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: startDate
 *         schema:
 *           type: string
 *           format: date
 *         required: true
 *         description: The start date in YYYY-MM-DD format.
 *       - in: query
 *         name: endDate
 *         schema:
 *           type: string
 *           format: date
 *         required: true
 *         description: The end date in YYYY-MM-DD format.
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         required: false
 *         description: The page number for pagination.
 *     responses:
 *       200:
 *         description: A JSON array of major crimes between the specified dates.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CrimeModel'
 *       400:
 *         description: Missing required query parameters.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: startDate and endDate query parameters are required
 *       500:
 *         description: Failed to fetch data due to a server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 error:
 *                   type: string
 *                   example: Failed to fetch crimes between dates
 */
router.get("/between", queryController.getCrimesBetweenDates);

// Add the CrimeModel schema definition to your Swagger components
/**
 * @swagger
 * components:
 *   schemas:
 *     CrimeModel:
 *       type: object
 *       properties:
 *         eventUniqueId:
 *           type: string
 *         reportDate:
 *           type: string
 *         occDate:
 *           type: string
 *         reportYear:
 *           type: number
 *         reportMonth:
 *           type: string
 *         reportDay:
 *           type: number
 *         reportDoy:
 *           type: number
 *         reportDow:
 *           type: string
 *         reportHour:
 *           type: number
 *         occYear:
 *           type: number
 *         occMonth:
 *           type: string
 *         occDay:
 *           type: number
 *         occDoy:
 *           type: number
 *         occDow:
 *           type: string
 *         occHour:
 *           type: number
 *         division:
 *           type: string
 *         locationType:
 *           type: string
 *         premisesType:
 *           type: string
 *         offence:
 *           type: string
 *         mciCategory:
 *           type: string
 *         neighbourhood158:
 *           type: string
 *         neighbourhood140:
 *           type: string
 *         longWgs84:
 *           type: number
 *         latWgs84:
 *           type: number
 *         x:
 *           type: number
 *         y:
 *           type: number
 */

export default router;
