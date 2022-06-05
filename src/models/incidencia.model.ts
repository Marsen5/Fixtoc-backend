import{getModelForClass, modelOptions, prop, Ref} from "@typegoose/typegoose";

import {User} from "./usuario.model"
import {Tecnico} from "./tecnico.model"
import {Material} from "./material.model"


enum Estado {
    PENDIENTE = "PENDIENTE",
    EN_REPARACION = "EN_REPARACION",
    TERMINADA = "TERMINADA",
    ENVIADO = "ENVIADO",
    ENTREGADO = "ENTREGADO",
}

@modelOptions({
  schemaOptions: {
    timestamps: true,
    versionKey: false,
  },
})

export class Incidencia {

  @prop({ type: String, required: true })
  titulo: string;

  @prop({ type: String, required: true })
  descripcion: string;

  @prop({ type: String, required: true })
  producto: string;

  @prop({ type: Number })
  coste: number;

  @prop({ type: String, enum: Estado, default: Estado.PENDIENTE })
  estado: Estado;

  @prop({ type: Date, default: Date.now })
  fechaPedido: Date;

  @prop ({ ref: () => Tecnico})
  id_tecnico: Ref<Tecnico>; 

  @prop ({ type: Number })
  horas_reparacion: number;

  @prop ({ ref: () => User})
  id_usuario: Ref<User>;

  @prop ({ ref: () => Material})
  material: Ref<Material>[];

  @prop ({type: String})
  imagen: string;

  
}

export const IncidenciaModel = getModelForClass(Incidencia);