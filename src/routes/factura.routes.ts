import { Router } from "express";

import * as facturasCtrl from "../controllers/factura.controller";

const router = Router();

//Crear incidencia
router.post("/", facturasCtrl.createFactura);

router.get("/:facturaId", facturasCtrl.getFacturaById);



export default router;