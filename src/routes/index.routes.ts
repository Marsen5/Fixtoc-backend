import { Request, Router, Response } from "express";

const router = Router();

const pkg = require("../../package.json");

router.get("/", (req: Request, res: Response) => {
  return res.json({
    message: "API TFG "
  });
});

export default router;