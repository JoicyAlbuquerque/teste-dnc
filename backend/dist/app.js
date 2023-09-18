"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
exports.app = app;
const cors_1 = __importDefault(require("cors"));
// Criar o middleware para permitir requisição externa
app.use((0, cors_1.default)({
    origin: "*",
    methods: ["GET", "PUT", "POST", "DELETE"],
    allowedHeaders: ["Content-Type"]
}));
app.use(express_1.default.json());
app.use('/api', index_1.default);
