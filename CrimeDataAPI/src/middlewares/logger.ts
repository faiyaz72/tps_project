// Create logger middleware
import { Request, Response, NextFunction } from "express";

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(
    `${new Date()} - ${req.ip} - ${req.method} ${req.path} - ${req.params} ${
      req.ip
    }`
  );
  next();
};

export default logger;
