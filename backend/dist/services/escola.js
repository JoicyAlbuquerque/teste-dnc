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
exports.GetAllEscolasService = void 0;
const escola_1 = require("../repositories/escola");
/**
 * Classe de serviço GetAllEscolasService.
 * Responsável por obter todas as escolas do repositório de escolas.
 */
class GetAllEscolasService {
    /**
     * Construtor da classe GetAllEscolasService.
     * Inicializa o repositório de escolas.
     */
    constructor() {
        this.escolaRepository = new escola_1.EscolaRepository();
    }
    /**
     * Método para executar o serviço.
     *
     * @returns {Promise<IEscola[] | null>} - Uma promessa que resolve para uma lista de escolas ou null.
     * @throws {Error} - Lança um erro se não encontrar nenhuma escola cadastrada.
     */
    execute() {
        return __awaiter(this, void 0, void 0, function* () {
            const escolas = yield this.escolaRepository.findAll();
            if (!escolas) {
                throw new Error('Nenhuma escola cadastrada');
            }
            return escolas;
        });
    }
}
exports.GetAllEscolasService = GetAllEscolasService;
