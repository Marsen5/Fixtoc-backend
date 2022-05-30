import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";


@modelOptions({
  schemaOptions: {
    versionKey: false,
  },
})

export class Material {
  @prop({type: String})
  name: string;
  
  @prop({type: Number})
  coste: Number;
}

export const MaterialModel = getModelForClass(Material)