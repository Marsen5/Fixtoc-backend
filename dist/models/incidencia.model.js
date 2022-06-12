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
exports.IncidenciaModel = exports.Incidencia = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const usuario_model_1 = require("./usuario.model");
const tecnico_model_1 = require("./tecnico.model");
const material_model_1 = require("./material.model");
var Estado;
(function (Estado) {
    Estado["PENDIENTE"] = "PENDIENTE";
    Estado["EN_REPARACION"] = "EN_REPARACION";
    Estado["TERMINADA"] = "TERMINADA";
    Estado["ENVIADO"] = "ENVIADO";
    Estado["ENTREGADO"] = "ENTREGADO";
})(Estado || (Estado = {}));
let Incidencia = class Incidencia {
};
__decorate([
    (0, typegoose_1.prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Incidencia.prototype, "titulo", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Incidencia.prototype, "descripcion", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Incidencia.prototype, "producto", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: Number }),
    __metadata("design:type", Number)
], Incidencia.prototype, "coste", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: String, enum: Estado, default: Estado.PENDIENTE }),
    __metadata("design:type", String)
], Incidencia.prototype, "estado", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: Date, default: Date.now }),
    __metadata("design:type", Date)
], Incidencia.prototype, "fechaPedido", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => tecnico_model_1.Tecnico }),
    __metadata("design:type", Object)
], Incidencia.prototype, "id_tecnico", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: Number }),
    __metadata("design:type", Number)
], Incidencia.prototype, "horas_reparacion", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => usuario_model_1.User }),
    __metadata("design:type", Object)
], Incidencia.prototype, "id_usuario", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => material_model_1.Material }),
    __metadata("design:type", Array)
], Incidencia.prototype, "material", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: String }),
    __metadata("design:type", String)
], Incidencia.prototype, "imagen", void 0);
Incidencia = __decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: {
            timestamps: true,
            versionKey: false,
        },
    })
], Incidencia);
exports.Incidencia = Incidencia;
exports.IncidenciaModel = (0, typegoose_1.getModelForClass)(Incidencia);
