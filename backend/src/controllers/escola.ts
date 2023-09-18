import { Request, Response } from 'express';
import { GetAllEscolasService } from '../services/escola';

/**
 * Classe controladora responsável por gerenciar as operações relacionadas às escolas.
 */
export class EscolaController {

    /**
     * Método para recuperar todas as escolas disponíveis.
     * 
     * @param req - O objeto de requisição do Express.
     * @param res - O objeto de resposta do Express.
     * 
     * @returns Uma promessa que resolve para um objeto de resposta do Express.
     */
    public async getAllEscolas(req: Request, res: Response): Promise<Response> {
        try {
            // Instanciação do serviço para buscar todas as escolas.
            const getAllEscolasService = new GetAllEscolasService();
            
            // Execução do serviço e obtenção das escolas.
            const escolas = await getAllEscolasService.execute();

            // Resposta bem-sucedida com as escolas em formato JSON.
            return res.status(200).json(escolas);
        } catch (error: any) {
            // Resposta de erro com a mensagem de erro.
            return res.status(400).send({ error: error.message });
        }
    }

}
