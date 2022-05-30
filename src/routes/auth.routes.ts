import { Router } from "express";
const router = Router();

import { signIn, signUp} from "../controllers/auth.controller";
import { checkDuplicateEmail } from "../middlewares/verifySignup";
import { verifyToken } from "../middlewares/verifyToken";

router.post(
  "/signup",
  [checkDuplicateEmail],
  signUp
);

router.post(
  "/signin",
   signIn
);


export default router;