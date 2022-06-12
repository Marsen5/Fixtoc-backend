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
exports.deleteUsuarioyById = exports.updateUsuarioById = exports.getUsuarioById = exports.getUsuarios = void 0;
const models_1 = require("../models");
//Coger todos los usuarios
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarios = yield models_1.UserModel.find();
    return res.send(usuarios);
});
exports.getUsuarios = getUsuarios;
//Buscar usuario por id
const getUsuarioById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { usuarioId } = req.params;
    const usuario = yield models_1.UserModel.findById(usuarioId);
    res.status(200).send(usuario);
});
exports.getUsuarioById = getUsuarioById;
//Funcion para actualizar usuario
const updateUsuarioById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedUsuario = yield models_1.UserModel.findByIdAndUpdate(req.params.usuarioId, req.body, {
        new: true,
    });
    res.status(204).send(updatedUsuario);
});
exports.updateUsuarioById = updateUsuarioById;
//Funcion para borrar el usuario
const deleteUsuarioyById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { usuarioId } = req.params;
    yield models_1.UserModel.findByIdAndDelete(usuarioId);
    // el codigo 200 estaria bien tambien
    res.status(204).send();
});
exports.deleteUsuarioyById = deleteUsuarioyById;
