import{getModelForClass, modelOptions, prop, Ref} from "@typegoose/typegoose";

import {User} from "./usuario.model"
import {Material} from "./material.model"
import {Incidencia} from "./incidencia.model"


@modelOptions({
  schemaOptions: {
    timestamps: true,
    versionKey: false,
  },
})

export class Factura {
  
  @prop({ref: () => User})
  id_usuario: Ref<User>;

  @prop({ref: () => Incidencia})
  id_incidencia: Ref<Incidencia>;

  @prop({ref: () => Material})
  id_materiales: Ref<Material>[];

  @prop({type: Number, default: 21})
  iva: number;

  @prop({type: Number})
  subtotal: number;

  @prop({type: Number})
  total: number;
}

export const FacturaModel = getModelForClass(Factura);