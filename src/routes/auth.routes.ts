import { Router } from "express";
const router = Router();

import { signIn, signUp} from "../controllers/auth.controller";
import { verifyToken } from "../middlewares/verifyToken";

router.post(
  "/signup",
  signUp
);

router.post(
  "/signin",
   signIn
);


export default router;