"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT_SECRET = exports.MONGODB_URI = exports.SECRET = exports.PORT = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.PORT = process.env.PORT || 4000;
exports.SECRET = "fixtoc-secret";
exports.MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://marsenen:JnUKNP57coghJ626@cluster0.imllc.mongodb.net/fixtoc-database?retryWrites=true&w=majority';
exports.JWT_SECRET = process.env.JWT_SECRET || 'jwt-secret';
