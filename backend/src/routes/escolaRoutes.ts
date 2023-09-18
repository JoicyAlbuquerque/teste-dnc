import { Router } from 'express';

import { EscolaController } from '../controllers/escola';

// Inicializando o router
const escolaRouter = Router();

// Criando uma nova instância da classe EscolaController
const escolaController = new EscolaController();

// Definindo uma rota GET para '/all' que irá chamar o método getAllEscolas do escolaController para buscar todas as escolas
escolaRouter.get('/all', escolaController.getAllEscolas);

export default escolaRouter;
