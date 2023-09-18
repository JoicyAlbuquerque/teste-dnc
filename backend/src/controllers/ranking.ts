import { Request, Response } from 'express';
import { AtualizarRankingService, GetRankingEscolaService, GetRankingGeralService } from '../services/ranking';

/**
 * Classe controladora para gerenciar as operações relacionadas ao ranking.
 */
export class RankingController {

  /**
   * Método para atualizar o ranking baseado em novas informações de atividades e notas dos alunos.
   * 
   * @param req - O objeto de requisição do Express, contendo detalhes como e-mail, nota e atividade.
   * @param res - O objeto de resposta do Express.
   * 
   * @returns Uma promessa que resolve para um objeto de resposta do Express, indicando o sucesso ou falha da operação.
   */
  public async atualizarRanking(req: Request, res: Response): Promise<Response> {
    try {
      const { email, nota, atividade } = req.body;
      
      const atualizarRankingService = new AtualizarRankingService();
      await atualizarRankingService.execute({ email, nota, atividade });

      return res.status(200).send({ message: 'Ranking atualizado com sucesso' });
    } catch (error: any) {
      return res.status(400).send({ error: error.message });
    }
  }

  /**
   * Método para obter o ranking dos alunos em uma escola específica.
   * 
   * @param req - O objeto de requisição do Express, contendo o ID da escola como um parâmetro de query.
   * @param res - O objeto de resposta do Express.
   * 
   * @returns Uma promessa que resolve para um objeto de resposta do Express, contendo o ranking dos alunos na escola especificada.
   */
  public async getRankingEscola(req: Request, res: Response): Promise<Response> {
    try {
      const { idEscola }  = req.query;

      if (typeof idEscola !== 'string') {
        return res.status(400).send({ error: 'ID da escola inválido' });
      }

      const getRankingEscolaService = new GetRankingEscolaService();
      const ranking = await getRankingEscolaService.execute(idEscola);

      return res.status(200).send(ranking);
    } catch (error: any) {
      return res.status(400).send({ error: error.message });
    }
  }

  /**
   * Método para obter o ranking geral de todos os alunos em todas as escolas.
   * 
   * @param req - O objeto de requisição do Express.
   * @param res - O objeto de resposta do Express.
   * 
   * @returns Uma promessa que resolve para um objeto de resposta do Express, contendo o ranking geral dos alunos.
   */
  public async getRankingGeral(req: Request, res: Response): Promise<Response> {
    try {
      const getRankingGeralService = new GetRankingGeralService();
      const ranking = await getRankingGeralService.execute();

      return res.status(200).json(ranking);
    } catch (error: any) {
      return res.status(400).send({ error: error.message });
    }
  }
}
