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
exports.AlunoController = void 0;
const aluno_1 = require("../services/aluno");
class AlunoController {
    atualizarRanking(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, nota } = req.body;
                const atualizarRankingService = new aluno_1.AtualizarRankingService();
                yield atualizarRankingService.execute({ email, nota });
                return res.status(200).send({ message: 'Ranking atualizado com sucesso' });
            }
            catch (error) {
                return res.status(400).send({ error: error.message });
            }
        });
    }
}
exports.AlunoController = AlunoController;
