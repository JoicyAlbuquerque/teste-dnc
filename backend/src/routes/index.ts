import { Router } from 'express';
import rankingRouter from './rankingRoutes';
import escolaRouter from './escolaRoutes';
import atividadeRouter from './atividadeRoutes';

// Inicializando o router principal
const router = Router();

// Definindo uma rota GET básica para '/' que retorna uma mensagem de confirmação de conexão
router.get("/", (request, response) => {
    return response.send('Conectado');
});

// Associando os routers de ranking, escola e atividade às suas respectivas rotas base
router.use('/ranking', rankingRouter);
router.use('/escola', escolaRouter);
router.use('/atividade', atividadeRouter);

export default router;
