"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteIncidenciayById = exports.updateIncidencia = exports.updateIncidenciaTecnico = exports.updateIncidenciaState = exports.getIncidenciasByIdUsuario = exports.getIncidencias = exports.updateFactura = exports.getFacturaById = exports.createFactura = void 0;
const incidencia_model_1 = require("../models/incidencia.model");
const factura_model_1 = require("../models/factura.model");
const usuario_model_1 = require("../models/usuario.model");
//Crear nueva incidencia
const createFactura = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id_incidencia, id_usuario } = req.body;
    try {
        const factura = new factura_model_1.FacturaModel({
            id_incidencia,
            id_usuario
        });
        console.log(factura);
        // Guardamos la factura en la base de datos
        const savedFactura = yield factura.save();
        const id = factura._id;
        res.status(201).json({ savedFactura, id });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});
exports.createFactura = createFactura;
//Mostrar factura por id
const getFacturaById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { facturaId } = req.params;
    const factura = yield factura_model_1.FacturaModel.findById(facturaId).populate("id_usuario").populate("id_incidencia");
    res.status(200).send(factura);
});
exports.getFacturaById = getFacturaById;
const updateFactura = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedFactura = yield factura_model_1.FacturaModel.findByIdAndUpdate(req.params.incidenciaId, { id_usuario: req.body.id_usuario, id_incidencia: req.body.id_incidencia }, {
        new: true,
    });
    res.status(204).send(updatedFactura);
});
exports.updateFactura = updateFactura;
//Funcion para mostrar todos las incidencias
const getIncidencias = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const incidencias = yield incidencia_model_1.IncidenciaModel.find().populate("id_tecnico").populate("id_usuario");
    return res.json(incidencias);
});
exports.getIncidencias = getIncidencias;
//funcion para filtar incidencias por id_usuario
const getIncidenciasByIdUsuario = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { usuarioId } = req.params;
    const incidencias = yield incidencia_model_1.IncidenciaModel.find({ id_usuario: usuarioId });
    return res.json(incidencias);
});
exports.getIncidenciasByIdUsuario = getIncidenciasByIdUsuario;
//Funcion para modificar estado de la incidencia
const updateIncidenciaState = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedIncidenciaState = yield incidencia_model_1.IncidenciaModel.findByIdAndUpdate(req.params.incidenciaId, { estado: req.body.estado }, {
        new: true,
    });
    res.status(204).send(updatedIncidenciaState);
});
exports.updateIncidenciaState = updateIncidenciaState;
//Funcion para asignar tecnico a la incidencia
const updateIncidenciaTecnico = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedIncidenciaTecnico = yield incidencia_model_1.IncidenciaModel.findByIdAndUpdate(req.params.incidenciaId, { id_tecnico: req.body.id_tecnico }, {
        new: true,
    });
    res.status(204).send(updatedIncidenciaTecnico);
});
exports.updateIncidenciaTecnico = updateIncidenciaTecnico;
//Funcion para modificar incidencia
const updateIncidencia = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedIncidencia = yield incidencia_model_1.IncidenciaModel.findByIdAndUpdate(req.params.incidenciaId, req.body, {
        new: true,
    });
    res.status(204).send(updatedIncidencia);
});
exports.updateIncidencia = updateIncidencia;
const deleteIncidenciayById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { incidenciaId } = req.params;
    yield usuario_model_1.UserModel.findByIdAndDelete(incidenciaId);
    // el codigo 200 estaria bien tambien
    res.status(204).send();
});
exports.deleteIncidenciayById = deleteIncidenciayById;
