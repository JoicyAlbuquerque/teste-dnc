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
class RankingController {
    atualizarRanking(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, nota, idAtividade } = req.body;
                const atualizarRankingService = new ranking_1.AtualizarRankingService();
                yield atualizarRankingService.execute({ email, nota, idAtividade });
                return res.status(200).send({ message: 'Ranking atualizado com sucesso' });
            }
            catch (error) {
                return res.status(400).send({ error: error.message });
            }
        });
    }
}
exports.RankingController = RankingController;
