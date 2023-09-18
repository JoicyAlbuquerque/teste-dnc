"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rankingRoutes_1 = __importDefault(require("./rankingRoutes"));
const escolaRoutes_1 = __importDefault(require("./escolaRoutes"));
const atividadeRoutes_1 = __importDefault(require("./atividadeRoutes"));
// Inicializando o router principal
const router = (0, express_1.Router)();
// Definindo uma rota GET básica para '/' que retorna uma mensagem de confirmação de conexão
router.get("/", (request, response) => {
    return response.send('Conectado');
});
// Associando os routers de ranking, escola e atividade às suas respectivas rotas base
router.use('/ranking', rankingRoutes_1.default);
router.use('/escola', escolaRoutes_1.default);
router.use('/atividade', atividadeRoutes_1.default);
exports.default = router;
