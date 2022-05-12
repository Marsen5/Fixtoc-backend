import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { SECRET } from "../config/config";

export const verifyToken = async (req: Request, res: Response, next: NextFunction) => {
  
  const token = req.header("x-access-token");
  
  if (!token) {
    return res.status(401).json({
      message: "No token provided.",
    });
  }
  
  try {
    const payload = jwt.verify(token as string, SECRET);
    console.log(payload);
    next();
    
  } catch (error) {
    return res.status(401).json({
      message: "Token invalid.",
    });
  }
}
