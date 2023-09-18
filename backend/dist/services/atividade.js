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
exports.GetAllAtividadesService = void 0;
const atividades_1 = require("../repositories/atividades");
/**
 * Classe de serviço GetAllAtividadesService.
 * Responsável por obter todas as atividades do repositório de atividades.
 */
class GetAllAtividadesService {
    /**
     * Construtor da classe GetAllAtividadesService.
     * Inicializa o repositório de atividades.
     */
    constructor() {
        this.atividadeRepository = new atividades_1.AtividadeRepository();
    }
    /**
     * Método para executar o serviço.
     *
     * @returns {Promise<IAtividade[] | null>} - Uma promessa que resolve para uma lista de atividades ou null.
     * @throws {Error} - Lança um erro se não encontrar nenhuma atividade cadastrada.
     */
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const Atividades = yield this.atividadeRepository.findAll();
            if (!Atividades) {
                throw new Error('Nenhuma Atividade cadastrada');
            }
            return Atividades;
        });
    }
}
exports.GetAllAtividadesService = GetAllAtividadesService;
