import {Request, Response} from 'express'
import { TecnicoModel as Tecnico} from "../models";

//Coger todos los tecnicos
export const getTecnicos = async (req: Request, res: Response) => {
  const tecnicos = await Tecnico.find();
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