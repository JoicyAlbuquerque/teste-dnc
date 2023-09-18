"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const ranking_1 = require("./controllers/ranking");
const escola_1 = require("./controllers/escola");
const routes = (0, express_1.Router)();
exports.routes = routes;
const rankingController = new ranking_1.RankingController();
const escolaController = new escola_1.EscolaController();
routes.get("/", (request, response) => {
    return response.send('Conectado');
});
// rota para atualizar a pontuação do aluno no ranking
routes.put('/atualizar-ranking', rankingController.atualizarRanking);
// rota para pegar o ranking por escola
routes.get('/get-ranking-escola', rankingController.getRankingEscola);
// rota para pegar o ranking geral
routes.get('/get-ranking-geral', rankingController.getRankingGeral);
// rota para pegar todas as escolas
routes.get('/get-escolas', escolaController.getAllEscolas);
