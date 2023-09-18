"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const atividade_1 = require("../controllers/atividade");
// Inicializando o router
const atividadeRouter = (0, express_1.Router)();
// Criando uma nova instância da classe AtividadeController
const atividadeController = new atividade_1.AtividadeController();
// Definindo uma rota GET para '/all' que irá chamar o método getAllAtividades do atividadeController para buscar todas as atividades
atividadeRouter.get('/all', atividadeController.getAllAtividades);
exports.default = atividadeRouter;
