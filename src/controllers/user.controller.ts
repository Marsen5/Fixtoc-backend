import {Request, Response} from 'express'
import { UserModel as User} from "../models";

//Coger todos los usuarios
export const getUsuarios = async (req: Request, res: Response) => {
  const usuarios = await User.find();
  return res.send(usuarios);
};

//Buscar usuario por id
export const getUsuarioById = async (req: Request, res: Response) => {
  const { usuarioId } = req.params;
  const usuario = await User.findById(usuarioId);
  res.status(200).send(usuario);
};

//Funcion para actualizar usuario
export const updateUsuarioById = async (req: Request, res: Response) => {
  const updatedUsuario = await User.findByIdAndUpdate(
    req.params.usuarioId,
    req.body,
    {
      new: true,
    }
  );
  res.status(204).send(updatedUsuario);
};

//Funcion para borrar el usuario
export const deleteUsuarioyById = async (req: Request, res: Response) => {
  const { usuarioId } = req.params;

  await User.findByIdAndDelete(usuarioId);

  // el codigo 200 estaria bien tambien
  res.status(204).send();
};

