import{getModelForClass, ModelOptions, modelOptions, prop, Ref} from "@typegoose/typegoose";
import bcrypt from "bcrypt";

import {Incidencia} from "./incidencia.model"


enum Role {
    ADMIN = "ADMIN",
    USER = "USER",
    TECNICO = "TECNICO"
}

@ModelOptions({
    schemaOptions: {
        timestamps: true,
        collection: "usuarios",
        versionKey: false
    }
})

export class User{

  @prop({type: String, unique: true, required: true, trim: true})
  email: string;

  @prop({type: String, required: true, minlength: 6})
  password: string;

  @prop({type: String, required: true })
  nombre: string;

  @prop({type: String})
  apellido: string;

  @prop({type: String, default: "https://res.cloudinary.com/dzqbzqgjw/image/upload/v1589788982/default_imgURL.png"})
  imgURL?: string;

  @prop({type: String, enum: Role, default: Role.USER})
  role: Role;

  @prop({type: String})
  direccion: string;

  @prop({type: String})
  observaciones: string;

  @prop({type: String})
  telefono: string;

  //Funcion para encriptar la contraseña
  public static async encryptPassword(password: string) {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  }

  //Funcion para comprobar la contraseña
  public async comparePassword(password: string) {
    return await bcrypt.compare(password, this.password);
  }
}

export const UserModel = getModelForClass(User)