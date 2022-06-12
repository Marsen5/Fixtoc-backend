"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const incidenciaCtrl = __importStar(require("../controllers/incidencia.controller"));
const router = (0, express_1.Router)();
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
router.delete("/:incidenciId", incidenciaCtrl.deleteIncidenciayById);
exports.default = router;
