import { Request, Response } from "express";
import { MaterialModel as Material } from "../models/material.model";

//Crear nueva incidencia
export const createMaterial = async (req: Request, res: Response) => {
  const { name, coste } = req.body;

  try {
    const newMaterial = new Material({
      name,
      coste
    });

    const materialSaved = await newMaterial.save();

    res.status(200).send(materialSaved);

  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

//Mostrar incidencia por id
export const getMaterialById = async (req: Request, res: Response) => {
  const { materialId } = req.params;
  const material = await Material.findById(materialId);
  res.status(200).send(material);
};

export const deleteMaterialById = async (req: Request, res: Response) => {
  const { materialId } = req.params;

  await Material.findByIdAndDelete(materialId);

  // el codigo 200 estaria bien tambien
  res.status(204).send();
};
