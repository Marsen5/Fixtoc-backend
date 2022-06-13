import { Router } from "express";

import * as materialCtrl from "../controllers/material.controller";

const router = Router();

//Crear incidencia
router.post("/", materialCtrl.createMaterial);

//Mostar incidencia por id
router.get("/:materialId", materialCtrl.getMaterialById);

//Eliminar
router.delete(
  "/:materialId", materialCtrl.deleteMaterialById
);

export default router;