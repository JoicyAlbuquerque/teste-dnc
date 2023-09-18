import { Request, Response } from 'express';
import { GetAllAtividadesService } from "../services/atividade";

/**
 * Controller responsável por gerenciar as operações relacionadas às atividades.
 */
export class AtividadeController {

    /**
     * Método para recuperar todas as atividades disponíveis.
     * 
     * @param req - O objeto de requisição do Express.
     * @param res - O objeto de resposta do Express.
     * 
     * @returns Uma promessa que resolve para um objeto de resposta do Express.
     */
    public async getAllAtividades(req: Request, res: Response): Promise<Response> {
        try {
            // Instanciação do serviço para buscar todas as atividades.
            const getAllAtividadesService = new GetAllAtividadesService();
            
            // Execução do serviço e obtenção das atividades.
            const atividades = await getAllAtividadesService.execute();

            // Resposta bem-sucedida com as atividades em formato JSON.
            return res.status(200).json(atividades);
        } catch (error: any) {
            // Resposta de erro com a mensagem de erro.
            return res.status(400).send({ error: error.message });
        }
    }

}
