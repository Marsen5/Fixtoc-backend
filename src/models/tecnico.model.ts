import { getModelForClass, modelOptions, prop, Ref } from "@typegoose/typegoose";
import {Incidencia} from "./incidencia.model"
import {User} from "./usuario.model"



@modelOptions({
  schemaOptions: {
    timestamps: true,
    versionKey: false,
  },
})

export class Tecnico extends User {
  
  @prop({ type: String})
  puesto: string;

  @prop({ type: Number})
  precio_hora: number

  @prop({ type: Boolean, default: true})
  activo: boolean

}

export const TecnicoModel = getModelForClass(Tecnico)

