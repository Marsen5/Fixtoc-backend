import {Request, Response} from 'express'
import { TecnicoModel as Tecnico} from "../models";

import jwt from "jsonwebtoken";
import {SECRET} from "../config/config";

//Coger todos los tecnicos
export const getTecnicos = async (req: Request, res: Response) => {
  const tecnicos = await (await Tecnico.find());
  
  return res.send(tecnicos);
};

//Buscar tecnico por id
export const getTecnicoById = async (req: Request, res: Response) => {
  const { tecnicoId } = req.params;
  const tecnico = await Tecnico.findById(tecnicoId);
  res.status(200).send(tecnico);
};

//Funcion para actualizar tecnico
export const updateTecnicoById = async (req: Request, res: Response) => {
  const updatedTecnico= await Tecnico.findByIdAndUpdate(
    req.params.tecnicoId,
    req.body,
    {
      new: true,
    }
  );
  res.status(204).send(updatedTecnico);
};

//Funcion para borrar el tecnico
export const deleteTecnicoyById = async (req: Request, res: Response) => {
  const { tecnicoId } = req.params;

  await Tecnico.findByIdAndDelete(tecnicoId);

  res.status(204).send();
};

//Crear tecnico
export const createTecnico = async (req : Request, res: Response) => {
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
        const tecnico = new Tecnico({
            email,
            password: await Tecnico.encryptPassword(password),
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
    const savedTecnico = await tecnico.save();

    // Creamos el token
    const token : string = jwt.sign({ id: tecnico._id }, SECRET, { 
      expiresIn: 86400, // 24 horas 
    });

    res.status(200).send(tecnico);

  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}