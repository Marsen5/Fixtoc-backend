import { Router } from "express";

import * as facturasCtrl from "../controllers/factura.controller";

const router = Router();

//Crear incidencia
router.post("/", facturasCtrl.createFactura);

export default router;