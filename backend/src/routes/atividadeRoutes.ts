import { Router } from 'express';
import { AtividadeController } from '../controllers/atividade';

// Inicializando o router
const atividadeRouter = Router();

// Criando uma nova instância da classe AtividadeController
const atividadeController = new AtividadeController();

// Definindo uma rota GET para '/all' que irá chamar o método getAllAtividades do atividadeController para buscar todas as atividades
atividadeRouter.get('/all', atividadeController.getAllAtividades);

export default atividadeRouter;
