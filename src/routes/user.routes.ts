import { Router } from "express";
const router = Router();

import * as userCtrl from "../controllers/user.controller";

router.get("/:usuarioId", userCtrl.getUsuarioById);

export default router;