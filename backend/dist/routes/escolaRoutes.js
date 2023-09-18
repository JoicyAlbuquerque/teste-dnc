"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const escola_1 = require("../controllers/escola");
// Inicializando o router
const escolaRouter = (0, express_1.Router)();
// Criando uma nova instância da classe EscolaController
const escolaController = new escola_1.EscolaController();
// Definindo uma rota GET para '/all' que irá chamar o método getAllEscolas do escolaController para buscar todas as escolas
escolaRouter.get('/all', escolaController.getAllEscolas);
exports.default = escolaRouter;
