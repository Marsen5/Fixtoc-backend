import { Router } from "express";

import * as incidenciaCtrl from "../controllers/incidencia.controller";

const router = Router();

//Crear incidencia
router.post("/", incidenciaCtrl.createIncidencia);

//Mostar incidencia por id
router.get("/:incidenciaId", incidenciaCtrl.getIncidenciaById);

//Mostrar indicencias de un usario
router.get("/usuario/:usuarioId", incidenciaCtrl.getIncidenciasByIdUsuario);


//Funcion para mostrar todas las incidencias
router.get("/", incidenciaCtrl.getIncidencias);

//Modificar estado incidencia
router.put("/estado/:incidenciaId", incidenciaCtrl.updateIncidenciaState);

//Modificar/asinar tecnico incidencia
router.put("/tecnico/:tecnicoId", incidenciaCtrl.updateIncidenciaTecnico);

//Modificar toda incidencia
router.put("/:incidenciaId", incidenciaCtrl.updateIncidencia);

//Eliminar
router.delete(
  "/:incidenciId", incidenciaCtrl.deleteIncidenciayById
);

export default router;