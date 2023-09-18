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
exports.EscolaRepository = void 0;
const escola_1 = require("../entities/escola");
class EscolaRepository {
    /**
     * Método para encontrar uma escola específica pelo seu ID.
     *
     * @param id - O ID da escola que deseja encontrar.
     * @returns A escola encontrada ou null se nenhuma escola foi encontrada com o ID fornecido.
     */
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return escola_1.Escola.findById(id).exec();
        });
    }
    /**
     * Método para salvar uma nova escola no banco de dados.
     *
     * @param escola - O objeto escola que deseja salvar.
     * @returns A escola que foi salva no banco de dados.
     */
    save(escola) {
        return __awaiter(this, void 0, void 0, function* () {
            const novaEscola = new escola_1.Escola(escola);
            return novaEscola.save();
        });
    }
    /**
     * Método para encontrar todas as escolas disponíveis no banco de dados.
     *
     * @returns Uma lista de todas as escolas encontradas.
     */
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return escola_1.Escola.find().exec();
        });
    }
}
exports.EscolaRepository = EscolaRepository;
