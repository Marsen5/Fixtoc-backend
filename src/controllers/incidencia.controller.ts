import { Request, Response } from "express";
import { IncidenciaModel as Incidencia } from "../models/incidencia.model";


export const createIncidencia = async (req: Request, res: Response) => {
  const { titulo, descripcion, coste, producto,fechaAcabado  } = req.body;

  try {
    const newInsidencia = new Incidencia({
      titulo,
      descripcion,
      coste,
      producto,
      fechaAcabado
    });

    const incidenciaSaved = await newInsidencia.save();

    res.status(201).json(incidenciaSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};