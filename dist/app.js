"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
//Rutas
const index_routes_1 = __importDefault(require("./routes/index.routes"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const incidencia_routes_1 = __importDefault(require("./routes/incidencia.routes"));
const tecnico_routes_1 = __importDefault(require("./routes/tecnico.routes"));
const factura_routes_1 = __importDefault(require("./routes/factura.routes"));
const app = (0, express_1.default)();
const security = (0, helmet_1.default)();
//Settings
app.set('port', process.env.PORT || 3000);
//Middleweres
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
app.use(security);
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
//Rutas
app.use("/api", index_routes_1.default);
app.use("/api/auth", auth_routes_1.default);
app.use("/api/users", user_routes_1.default);
app.use("/api/incidencia", incidencia_routes_1.default);
app.use("/api/tecnico", tecnico_routes_1.default);
app.use("/api/factura", factura_routes_1.default);
exports.default = app;
