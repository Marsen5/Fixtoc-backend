import { Request, Response } from "express";
import { IncidenciaModel as Incidencia } from "../models/incidencia.model";
import { TecnicoModel as Tecnico } from "../models/tecnico.model";
import { MaterialModel as Material } from "../models/material.model";
import { UserModel as User } from "../models/usuario.model";


//Crear nueva incidencia
export const createIncidencia = async (req: Request, res: Response) => {
  const { titulo, descripcion, coste, producto,fechaPedido, id_usuario } = req.body;

  try {
    const newInsidencia = new Incidencia({
      titulo,
      descripcion,
      coste,
      producto,
      fechaPedido,
      id_usuario
    });

    const incidenciaSaved = await newInsidencia.save();

    res.status(201).json(incidenciaSaved);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

//Mostrar incidencia por id
export const getIncidenciaById = async (req: Request, res: Response) => {
  const { incidenciaId } = req.params;
  const incidencia = await Incidencia.findById(incidenciaId).populate("id_usuario");
  res.status(200).send(incidencia);
}

//Funcion para mostrar todos las incidencias
export const getIncidencias = async (req: Request, res: Response) => {
  const incidencias = await Incidencia.find().populate("id_tecnico").populate("id_usuario");
  return res.json(incidencias);
};

//funcion para filtar incidencias por id_usuario
export const getIncidenciasByIdUsuario = async (req: Request, res: Response) => {
  const { usuarioId } = req.params;
  const incidencias = await Incidencia.find({ id_usuario: usuarioId });
  return res.json(incidencias);
}

//Funcion para modificar estado de la incidencia
export const updateIncidenciaState = async (req: Request, res: Response) => {
  const updatedIncidenciaState = await Incidencia.findByIdAndUpdate(
    req.params.incidenciaId,
    {estado: req.body.estado},
    {
      new: true,
    }
  );
  res.status(204).send(updatedIncidenciaState);
};

//Funcion para modificar incidencia
export const updateIncidencia = async (req: Request, res: Response) => {
  const updatedIncidencia = await Incidencia.findByIdAndUpdate(
    req.params.incidenciaId,
    req.body,
    {
      new: true,
    }
  );
  res.status(204).send(updatedIncidencia);
};
