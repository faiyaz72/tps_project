import express from "express";
const router = express.Router();
import jwt from "jsonwebtoken";
import config from "../config/config";

/**
 * @swagger
 * /auth/login:
 *   get:
 *     summary: User Login
 *     description: Generates a JWT token for a test user.
 *     responses:
 *       200:
 *         description: A JSON object containing the JWT token.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 */
router.get("/login", (req, res) => {
  const user = {
    id: 1,
    username: "test",
  };
  const token = jwt.sign(user, config.jwtSecret, { expiresIn: "1d" });
  res.json({ token });
});

export default router;
