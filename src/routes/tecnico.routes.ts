import { Router } from "express";

import { checkDuplicateEmail } from "../middlewares/verifySignup";

const router = Router();

import * as tecnicoCtrl from "../controllers/tecnico.controller";

//Mostrar todos los Usuarios
router.get("/", tecnicoCtrl.getTecnicos);

//Buscar por id
router.get("/:tecnicoId", tecnicoCtrl.getTecnicoById);

//Eliminar
router.delete(
  "/:tecnicoId",
  tecnicoCtrl.deleteTecnicoyById
);

//Actualizar usuario
router.put(
  "/:tecnicoId",
  tecnicoCtrl.updateTecnicoById
);

router.post(
  "/",
  [checkDuplicateEmail],
  tecnicoCtrl.createTecnico
);

export default router;