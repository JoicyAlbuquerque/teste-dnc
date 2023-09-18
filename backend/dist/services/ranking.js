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
exports.GetRankingGeralService = exports.GetRankingEscolaService = exports.AtualizarRankingService = void 0;
const aluno_1 = require("../repositories/aluno");
const atividades_1 = require("../repositories/atividades");
const server_1 = require("../server");
const ranking_1 = require("../repositories/ranking");
/**
 * Classe responsável por prover serviços de atualização de ranking.
 * @class
 */
class AtualizarRankingService {
    /**
     * Inicializa uma nova instância da classe AtualizarRankingService.
     * @constructor
     */
    constructor() {
        this.alunoRepository = new aluno_1.AlunoRepository();
        this.atividadeRepository = new atividades_1.AtividadeRepository();
        this.rankingRepository = new ranking_1.RankingRepository();
    }
    /**
     * Executa o serviço de atualização do ranking com base nos parâmetros fornecidos no corpo da requisição.
     * @async
     * @function
     * @param {IRequestAtualizarRanking} - Contém os parâmetros necessários para atualização do ranking.
     * @throws Lançará um erro se o aluno ou a atividade não forem encontrados.
     * @returns {Promise<void>}
     */
    execute({ email, nota, atividade }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Passo 1: Encontre o aluno e a atividade baseados no email e idAtividade
                const aluno = yield this.alunoRepository.findByEmail(email);
                const atividades = yield this.atividadeRepository.findById(atividade);
                if (!aluno || !atividades) {
                    throw new Error('Aluno ou atividade não encontrados');
                }
                // Passo 2: Calcule a nova pontuação ponderada e atualize a pontuação total do aluno
                const notaPonderada = nota * atividades.peso;
                aluno.pontuacaoTotal += notaPonderada;
                yield this.alunoRepository.save(aluno);
                // Passo 3: Atualize o ranking geral e da escola
                yield this.atualizarRankingGeral();
                yield this.atualizarRankingEscola(aluno.idEscola);
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    /**
     * Atualiza o ranking geral recuperando e ordenando todos os alunos por pontuação total em ordem decrescente.
     * @async
     * @function
     * @throws Lançará um erro se os alunos ou o ranking não forem encontrados.
     */
    atualizarRankingGeral() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Recuperar e ordenar todos os alunos por pontuação total em ordem decrescente
                const alunos = yield this.alunoRepository.findAll();
                if (!alunos) {
                    throw new Error('Alunos não encontrados');
                }
                alunos === null || alunos === void 0 ? void 0 : alunos.sort((a, b) => b.pontuacaoTotal - a.pontuacaoTotal);
                // Atualizar posições de ranking e salvar no banco de dados
                for (let i = 0; i < alunos.length; i++) {
                    const ranking = yield this.rankingRepository.findByAlunoId(alunos[i]._id);
                    if (!ranking) {
                        throw new Error('Ranking não encontrado');
                    }
                    alunos[i].posicaoRankingGeral = i + 1;
                    ranking.pontuacaoTotal = alunos[i].pontuacaoTotal;
                    yield this.rankingRepository.updateById({ id: ranking._id, data: ranking });
                }
                // Emitir um evento de socket com os dados atualizados do ranking geral
                server_1.io.emit('rankingGeralUpdated', { /* dados do novo ranking geral */});
            }
            catch (error) {
                console.error(error);
            }
        });
    }
    /**
     * Atualiza o ranking da escola recuperando e ordenando todos os alunos de uma escola específica por pontuação total em ordem decrescente.
     * @async
     * @function
     * @param {string} idEscola - O ID da escola para a qual o ranking precisa ser atualizado.
     * @throws Lançará um erro se os alunos ou o ranking não forem encontrados.
     */
    atualizarRankingEscola(idEscola) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Recuperar e ordenar todos os alunos da escola específica por pontuação total em ordem decrescente
                const alunos = yield this.alunoRepository.findByEscolaId(idEscola);
                if (!alunos) {
                    throw new Error('Alunos não encontrados');
                }
                alunos.sort((a, b) => b.pontuacaoTotal - a.pontuacaoTotal);
                // Atualizar posições de ranking e salvar no banco de dados
                for (let i = 0; i < alunos.length; i++) {
                    const ranking = yield this.rankingRepository.findByAlunoId(alunos[i]._id);
                    if (!ranking) {
                        throw new Error('Ranking não encontrado');
                    }
                    alunos[i].posicaoRankingEscola = i + 1;
                    ranking.pontuacaoTotal = alunos[i].pontuacaoTotal;
                    yield this.rankingRepository.updateById({ id: ranking._id, data: ranking });
                }
                // Emitir um evento de socket com os dados atualizados do ranking da escola
                server_1.io.emit('rankingEscolaUpdated', { idEscola, /* dados do novo ranking da escola */ });
            }
            catch (error) {
                console.error(error);
            }
        });
    }
}
exports.AtualizarRankingService = AtualizarRankingService;
class GetRankingEscolaService {
    constructor() {
        this.rankingRepository = new ranking_1.RankingRepository();
    }
    execute(idEscola) {
        return __awaiter(this, void 0, void 0, function* () {
            const ranking = yield this.rankingRepository.findByEscola(idEscola);
            if (!ranking) {
                throw new Error('Nenhum aluno no ranking');
            }
            return ranking;
        });
    }
}
exports.GetRankingEscolaService = GetRankingEscolaService;
class GetRankingGeralService {
    constructor() {
        this.rankingRepository = new ranking_1.RankingRepository();
    }
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const ranking = yield this.rankingRepository.findAll();
            if (!ranking) {
                throw new Error('Nenhum aluno no ranking');
            }
            return ranking;
        });
    }
}
exports.GetRankingGeralService = GetRankingGeralService;
