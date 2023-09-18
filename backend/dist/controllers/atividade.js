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
exports.AtividadeController = void 0;
const atividade_1 = require("../services/atividade");
/**
 * Controller responsável por gerenciar as operações relacionadas às atividades.
 */
class AtividadeController {
    /**
     * Método para recuperar todas as atividades disponíveis.
     *
     * @param req - O objeto de requisição do Express.
     * @param res - O objeto de resposta do Express.
     *
     * @returns Uma promessa que resolve para um objeto de resposta do Express.
     */
    getAllAtividades(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // Instanciação do serviço para buscar todas as atividades.
                const getAllAtividadesService = new atividade_1.GetAllAtividadesService();
                // Execução do serviço e obtenção das atividades.
                const atividades = yield getAllAtividadesService.execute();
                // Resposta bem-sucedida com as atividades em formato JSON.
                return res.status(200).json(atividades);
            }
            catch (error) {
                // Resposta de erro com a mensagem de erro.
                return res.status(400).send({ error: error.message });
            }
        });
    }
}
exports.AtividadeController = AtividadeController;
