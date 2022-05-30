import { Router } from "express";
const router = Router();

import * as userCtrl from "../controllers/tecnico.controller";

//Mostrar todos los Usuarios
router.get("/", userCtrl.getTecnicos);

//Buscar por id
router.get("/:usuarioId", userCtrl.getTecnicoById);

//Eliminar
router.delete(
  "/:usuarioId",
  userCtrl.deleteTecnicoyById
);

//Actualizar usuario
router.put(
  "/:usuarioId",
  userCtrl.updateTecnicoById
);

export default router;