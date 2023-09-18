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
exports.AtividadeRepository = void 0;
const atividades_1 = require("../entities/atividades");
class AtividadeRepository {
    /**
     * Método para encontrar uma atividade específica pelo seu ID.
     *
     * @param id - O ID da atividade que deseja encontrar.
     * @returns A atividade encontrada ou null se nenhuma atividade foi encontrada com o ID fornecido.
     */
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return atividades_1.Atividade.findById(id).exec();
        });
    }
    /**
     * Método para encontrar todas as atividades disponíveis no banco de dados.
     *
     * @returns Uma lista de todas as atividades encontradas.
     */
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return atividades_1.Atividade.find().exec();
        });
    }
    /**
     * Método para salvar uma nova atividade no banco de dados.
     *
     * @param atividade - O objeto atividade que deseja salvar.
     * @returns A atividade que foi salva no banco de dados.
     */
    save(atividade) {
        return __awaiter(this, void 0, void 0, function* () {
            const novaAtividade = new atividades_1.Atividade(atividade);
            return novaAtividade.save();
        });
    }
}
exports.AtividadeRepository = AtividadeRepository;
