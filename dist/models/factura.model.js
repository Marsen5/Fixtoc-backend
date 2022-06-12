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
exports.FacturaModel = exports.Factura = void 0;
const typegoose_1 = require("@typegoose/typegoose");
const usuario_model_1 = require("./usuario.model");
const material_model_1 = require("./material.model");
const incidencia_model_1 = require("./incidencia.model");
let Factura = class Factura {
};
__decorate([
    (0, typegoose_1.prop)({ ref: () => usuario_model_1.User }),
    __metadata("design:type", Object)
], Factura.prototype, "id_usuario", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => incidencia_model_1.Incidencia }),
    __metadata("design:type", Object)
], Factura.prototype, "id_incidencia", void 0);
__decorate([
    (0, typegoose_1.prop)({ ref: () => material_model_1.Material }),
    __metadata("design:type", Array)
], Factura.prototype, "id_materiales", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: Number, default: 21 }),
    __metadata("design:type", Number)
], Factura.prototype, "iva", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: Number }),
    __metadata("design:type", Number)
], Factura.prototype, "subtotal", void 0);
__decorate([
    (0, typegoose_1.prop)({ type: Number }),
    __metadata("design:type", Number)
], Factura.prototype, "total", void 0);
Factura = __decorate([
    (0, typegoose_1.modelOptions)({
        schemaOptions: {
            timestamps: true,
            versionKey: false,
        },
    })
], Factura);
exports.Factura = Factura;
exports.FacturaModel = (0, typegoose_1.getModelForClass)(Factura);
