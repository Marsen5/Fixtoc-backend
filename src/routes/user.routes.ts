import { Router } from "express";
const router = Router();

import * as userCtrl from "../controllers/user.controller";

//Mostrar todos los Usuarios
router.get("/", userCtrl.getUsuarios);

//Buscar por id
router.get("/:usuarioId", userCtrl.getUsuarioById);

//Eliminar
router.delete(
  "/:usuarioId",
  userCtrl.deleteUsuarioyById
);

//Actualizar usuario
router.put(
  "/:usuarioId",
  userCtrl.updateUsuarioById
);

export default router;