"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TecnicoModel = exports.Tecnico = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const usuario_model_1 = require("./usuario.model");
let Tecnico = class Tecnico extends usuario_model_1.User {
};
__decorate([
    (0, typegoose_1.prop)({ type: String }),
    __metadata("design:type", String)
], Tecnico.prototype, "puesto", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: Number }),
    __metadata("design:type", Number)
], Tecnico.prototype, "precio_hora", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: Boolean, default: true }),
    __metadata("design:type", Boolean)
], Tecnico.prototype, "activo", void 0);
Tecnico = __decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: {
            timestamps: true,
            versionKey: false,
        },
    })
], Tecnico);
exports.Tecnico = Tecnico;
exports.TecnicoModel = (0, typegoose_1.getModelForClass)(Tecnico);
