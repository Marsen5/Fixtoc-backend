import {Request, Response} from 'express'
import { UserModel as User} from "../models";

//Buscar usuario por id
export const getUsuarioById = async (req: Request, res: Response) => {
  const { usuarioId } = req.params;
  const usuario = await User.findById(usuarioId);
  res.status(200).send(usuario);
};