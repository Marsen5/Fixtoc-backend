import { Request, Response } from "express";
import { UserModel as User } from "../models";

import jwt from "jsonwebtoken";
import {SECRET} from "../config/config";

//Registro de usuario
export const signUp = async (req : Request, res: Response) => {
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
        const user = new User({
            email,
            password: await User.encryptPassword(password),
            nombre,
            apellido,
            imgURL,
            direccion,
            telefono
    });

    // Guardamos el usuario en la base de datos
    const savedUser = await user.save();

    // Creamos el token
    const token : string = jwt.sign({ id: user._id }, SECRET, { 
      expiresIn: 86400, // 24 horas 
    });

    const role = user.role;
    const id = user._id;

    return res.header("x-access-token", token).json({ token, role, id, user });

  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

//Inicio de sesion de usuario

export const signIn = async (req : Request, res: Response) => {
  try{ 
    //Buscamos el usuario en la base de datos
    const user = await User.findOne({ email: req.body.email });
    
    if (!user) return res.status(400).json({ message: "User Not Found" });

    //Comprobamos que la contraseña es correcta
    const matchPassword = await user.comparePassword(req.body.password);
    if (!matchPassword)
      return res.status(401).json({
        token: null,
        message: "Invalid Password",
      });

    //Creamos el token
    const token : string = jwt.sign({ id: user._id }, SECRET, {
      expiresIn: 86400, // 24 horas
    });

    const role = user.role;
    const id = user._id;

    res.header("x-access-token", token).json({ token, role, id, user });

  } catch (error) {
    console.log(error);
  }
  }




