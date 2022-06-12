import { Request, Response } from "express";
import { IncidenciaModel as Incidencia } from "../models/incidencia.model";
import { FacturaModel as Factura } from "../models/factura.model";
import { TecnicoModel as Tecnico } from "../models/tecnico.model";
import { MaterialModel as Material } from "../models/material.model";
import { UserModel as User } from "../models/usuario.model";


//Crear nueva incidencia
export const createFactura = async (req: Request, res: Response) => {
  const {id_incidencia, id_usuario } = req.body;
  
  try { 
    const factura = new Factura({
      id_incidencia,
      id_usuario
});
console.log(factura);
// Guardamos la factura en la base de datos
const savedFactura = await factura.save();
const id = factura._id
res.status(201).json({savedFactura, id});
} catch (error) {
  console.log(error);
  return res.status(500).json(error);
}
};

//Mostrar factura por id
export const getFacturaById = async (req: Request, res: Response) => {
  const { facturaId } = req.params;
  const factura = await Factura.findById(facturaId).populate("id_usuario").populate("id_incidencia");
  res.status(200).send(factura);
}

export const updateFactura = async (req: Request, res: Response) => {
  const updatedFactura = await Factura.findByIdAndUpdate(
    req.params.incidenciaId,
    
    {id_usuario: req.body.id_usuario, id_incidencia: req.body.id_incidencia},
    {
      new: true,
    }
  );
  res.status(204).send(updatedFactura);
};

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

//Funcion para asignar tecnico a la incidencia
export const updateIncidenciaTecnico = async (req: Request, res: Response) => {
  const updatedIncidenciaTecnico = await Incidencia.findByIdAndUpdate(
    req.params.incidenciaId,
    {id_tecnico: req.body.id_tecnico},
    {
      new: true,
    }
  );
  res.status(204).send(updatedIncidenciaTecnico);
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

export const deleteIncidenciayById = async (req: Request, res: Response) => {
  const { incidenciaId } = req.params;

  await User.findByIdAndDelete(incidenciaId);

  // el codigo 200 estaria bien tambien
  res.status(204).send();
};
