import { Request, Response, NextFunction } from "express";
import { UserModel as User} from "../models";

//Verificar que el email no esta registrado ya
export const checkDuplicateEmail = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const email = await User.findOne({ email: req.body.email });
    if (email)
      return res.status(400).json({ message: "The email already exists" });
    next();
  } catch (error) {
    res.status(500).json({ message: error });
  }
};