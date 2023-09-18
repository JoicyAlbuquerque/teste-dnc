import { Router } from 'express';

import { RankingController } from '../controllers/ranking';

// Inicializando o router
const rankingRouter = Router();

// Criando uma nova instância da classe RankingController
const rankingController = new RankingController();

// Definindo uma rota PUT para '/atualizar' que chamará o método atualizarRanking do rankingController para atualizar a pontuação do aluno no ranking
rankingRouter.put('/atualizar', rankingController.atualizarRanking);

// Definindo uma rota GET para '/escola/' que chamará o método getRankingEscola do rankingController para buscar o ranking por escola
rankingRouter.get('/escola/', rankingController.getRankingEscola);

// Definindo uma rota GET para '/geral' que chamará o método getRankingGeral do rankingController para buscar o ranking geral
rankingRouter.get('/geral', rankingController.getRankingGeral);

export default rankingRouter;
