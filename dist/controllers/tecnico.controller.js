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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTecnico = exports.deleteTecnicoyById = exports.updateTecnicoById = exports.getTecnicoById = exports.getTecnicos = void 0;
const models_1 = require("../models");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config/config");
//Coger todos los tecnicos
const getTecnicos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const tecnicos = yield (yield models_1.TecnicoModel.find());
    return res.send(tecnicos);
});
exports.getTecnicos = getTecnicos;
//Buscar tecnico por id
const getTecnicoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tecnicoId } = req.params;
    const tecnico = yield models_1.TecnicoModel.findById(tecnicoId);
    res.status(200).send(tecnico);
});
exports.getTecnicoById = getTecnicoById;
//Funcion para actualizar tecnico
const updateTecnicoById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedTecnico = yield models_1.TecnicoModel.findByIdAndUpdate(req.params.tecnicoId, req.body, {
        new: true,
    });
    res.status(204).send(updatedTecnico);
});
exports.updateTecnicoById = updateTecnicoById;
//Funcion para borrar el tecnico
const deleteTecnicoyById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { tecnicoId } = req.params;
    yield models_1.TecnicoModel.findByIdAndDelete(tecnicoId);
    res.status(204).send();
});
exports.deleteTecnicoyById = deleteTecnicoyById;
//Crear tecnico
const createTecnico = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, nombre, apellido, imgURL, direccion, telefono, puesto, precio_hora } = req.body;
    const errors = [];
    /* if (password.length < 6) {
        errors.push("La contraseña debe tener al menos 6 caracteres");
    }

    if (errors.length > 0) {
        return res.status(400).json({
            ok: false,
            errors
        });
    } */
    try {
        const tecnico = new models_1.TecnicoModel({
            email,
            password: yield models_1.TecnicoModel.encryptPassword(password),
            nombre,
            apellido,
            imgURL,
            direccion,
            telefono,
            puesto,
            precio_hora,
            role: "TECNICO"
        });
        // Guardamos el usuario en la base de datos
        const savedTecnico = yield tecnico.save();
        // Creamos el token
        const token = jsonwebtoken_1.default.sign({ id: tecnico._id }, config_1.SECRET, {
            expiresIn: 86400, // 24 horas 
        });
        res.status(200).send(tecnico);
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});
exports.createTecnico = createTecnico;
