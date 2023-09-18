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
exports.RankingRepository = void 0;
const ranking_1 = require("../entities/ranking");
class RankingRepository {
    /**
     * Método para salvar um novo registro de ranking no banco de dados.
     *
     * @param data - Os dados do ranking a serem salvos.
     * @returns O ranking que foi salvo.
     * @throws {Error} Caso ocorra um erro durante a criação do registro de ranking.
     */
    save(data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const ranking = new ranking_1.Ranking(data);
                yield ranking.save();
                return ranking;
            }
            catch (error) {
                throw new Error("Erro ao criar registro de ranking: " + error.message);
            }
        });
    }
    /**
     * Método para encontrar um ranking pelo seu ID.
     *
     * @param id - O ID do ranking a ser encontrado.
     * @returns O ranking encontrado.
     * @throws {Error} Caso ocorra um erro durante a busca do registro de ranking.
     */
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ranking_1.Ranking.findById(id).populate("idAluno").populate("idEscola");
            }
            catch (error) {
                throw new Error("Erro ao buscar registro de ranking: " + error.message);
            }
        });
    }
    /**
     * Método para encontrar um ranking pelo ID do aluno.
     *
     * @param idAluno - O ID do aluno cujo ranking deseja encontrar.
     * @returns O ranking encontrado.
     * @throws {Error} Caso ocorra um erro durante a busca do registro de ranking.
     */
    findByAlunoId(idAluno) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ranking_1.Ranking.findOne({ idAluno }).populate("idAluno").populate("idEscola");
            }
            catch (error) {
                throw new Error("Erro ao buscar registro de ranking: " + error.message);
            }
        });
    }
    /**
     * Método para encontrar os rankings associados a uma escola específica.
     *
     * @param idEscola - O ID da escola cujos rankings deseja encontrar.
     * @returns Os rankings encontrados, ordenados por pontuação total em ordem decrescente.
     * @throws {Error} Caso ocorra um erro durante a busca dos rankings.
     */
    findByEscola(idEscola) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ranking_1.Ranking.find({ idEscola })
                    .sort({ pontuacaoTotal: -1 })
                    .limit(10)
                    .populate('idAluno')
                    .populate('idEscola');
            }
            catch (error) {
                throw new Error('Erro ao buscar ranking por escola: ' + error.message);
            }
        });
    }
    /**
     * Método para encontrar todos os rankings disponíveis.
     *
     * @returns Todos os rankings encontrados, limitados a 3 registros.
     * @throws {Error} Caso ocorra um erro durante a busca dos rankings.
     */
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ranking_1.Ranking.find().populate("idAluno").populate("idEscola").limit(3);
            }
            catch (error) {
                throw new Error("Erro ao buscar registros de ranking: " + error.message);
            }
        });
    }
    /**
     * Método para atualizar um registro de ranking existente pelo seu ID.
     *
     * @param id - O ID do ranking a ser atualizado.
     * @param data - Os novos dados do ranking.
     * @returns O ranking atualizado.
     * @throws {Error} Caso ocorra um erro durante a atualização do registro de ranking.
     */
    updateById({ id, data }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ranking_1.Ranking.findByIdAndUpdate(id, data, { new: true });
            }
            catch (error) {
                throw new Error("Erro ao atualizar registro de ranking: " + error.message);
            }
        });
    }
    /**
     * Método para deletar um registro de ranking pelo seu ID.
     *
     * @param id - O ID do ranking a ser deletado.
     * @returns O resultado da operação de deleção.
     * @throws {Error} Caso ocorra um erro durante a deleção do registro de ranking.
     */
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield ranking_1.Ranking.findByIdAndDelete(id);
            }
            catch (error) {
                throw new Error("Erro ao deletar registro de ranking: " + error.message);
            }
        });
    }
}
exports.RankingRepository = RankingRepository;
