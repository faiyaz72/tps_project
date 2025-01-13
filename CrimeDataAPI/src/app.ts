import express from "express";
import { connectDb } from "./service/utils/db";
import queryRoutes from "./routes/queryRoutes";
import authRoutes from "./routes/authRoutes";
import config from "./config/config";
import authMiddleware from "./middlewares/authMiddleware";
import setupSwagger from "./swaggerConfig";

const app = express();

// Connect to database
connectDb();

// Middleware
app.use(express.json());

// Routes
app.use("/auth", authRoutes);
app.use("/query", authMiddleware, queryRoutes);

// Setup Swagger
setupSwagger(app);

const PORT = config.port;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
