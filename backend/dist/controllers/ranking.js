"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RankingController = void 0;
const ranking_1 = require("../services/ranking");
/**
 * Classe controladora para gerenciar as operações relacionadas ao ranking.
 */
class RankingController {
    /**
     * Método para atualizar o ranking baseado em novas informações de atividades e notas dos alunos.
     *
     * @param req - O objeto de requisição do Express, contendo detalhes como e-mail, nota e atividade.
     * @param res - O objeto de resposta do Express.
     *
     * @returns Uma promessa que resolve para um objeto de resposta do Express, indicando o sucesso ou falha da operação.
     */
    atualizarRanking(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, nota, atividade } = req.body;
                const atualizarRankingService = new ranking_1.AtualizarRankingService();
                yield atualizarRankingService.execute({ email, nota, atividade });
                return res.status(200).send({ message: 'Ranking atualizado com sucesso' });
            }
            catch (error) {
                return res.status(400).send({ error: error.message });
            }
        });
    }
    /**
     * Método para obter o ranking dos alunos em uma escola específica.
     *
     * @param req - O objeto de requisição do Express, contendo o ID da escola como um parâmetro de query.
     * @param res - O objeto de resposta do Express.
     *
     * @returns Uma promessa que resolve para um objeto de resposta do Express, contendo o ranking dos alunos na escola especificada.
     */
    getRankingEscola(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { idEscola } = req.query;
                if (typeof idEscola !== 'string') {
                    return res.status(400).send({ error: 'ID da escola inválido' });
                }
                const getRankingEscolaService = new ranking_1.GetRankingEscolaService();
                const ranking = yield getRankingEscolaService.execute(idEscola);
                return res.status(200).send(ranking);
            }
            catch (error) {
                return res.status(400).send({ error: error.message });
            }
        });
    }
    /**
     * Método para obter o ranking geral de todos os alunos em todas as escolas.
     *
     * @param req - O objeto de requisição do Express.
     * @param res - O objeto de resposta do Express.
     *
     * @returns Uma promessa que resolve para um objeto de resposta do Express, contendo o ranking geral dos alunos.
     */
    getRankingGeral(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const getRankingGeralService = new ranking_1.GetRankingGeralService();
                const ranking = yield getRankingGeralService.execute();
                return res.status(200).json(ranking);
            }
            catch (error) {
                return res.status(400).send({ error: error.message });
            }
        });
    }
}
exports.RankingController = RankingController;
