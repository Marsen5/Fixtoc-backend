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
exports.signIn = exports.signUp = void 0;
const models_1 = require("../models");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = require("../config/config");
//Registro de usuario
const signUp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password, nombre, apellido, imgURL, direccion, telefono } = req.body;
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
        const user = new models_1.UserModel({
            email,
            password: yield models_1.UserModel.encryptPassword(password),
            nombre,
            apellido,
            imgURL,
            direccion,
            telefono
        });
        // Guardamos el usuario en la base de datos
        const savedUser = yield user.save();
        // Creamos el token
        const token = jsonwebtoken_1.default.sign({ id: user._id }, config_1.SECRET, {
            expiresIn: 86400, // 24 horas 
        });
        const role = user.role;
        const id = user._id;
        return res.header("x-access-token", token).json({ token, role, id, user });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
});
exports.signUp = signUp;
//Inicio de sesion de usuario
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //Buscamos el usuario en la base de datos
        const user = yield models_1.UserModel.findOne({ email: req.body.email });
        if (!user)
            return res.status(400).json({ message: "User Not Found" });
        //Comprobamos que la contraseña es correcta
        const matchPassword = yield user.comparePassword(req.body.password);
        if (!matchPassword)
            return res.status(401).json({
                token: null,
                message: "Invalid Password",
            });
        //Creamos el token
        const token = jsonwebtoken_1.default.sign({ id: user._id }, config_1.SECRET, {
            expiresIn: 86400, // 24 horas
        });
        const role = user.role;
        const id = user._id;
        res.header("x-access-token", token).json({ token, role, id, user }).status(200);
    }
    catch (error) {
        console.log(error);
    }
});
exports.signIn = signIn;
