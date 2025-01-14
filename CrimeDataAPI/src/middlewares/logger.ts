// Create logger middleware
import { Request, Response, NextFunction } from "express";

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
};

export default logger;
