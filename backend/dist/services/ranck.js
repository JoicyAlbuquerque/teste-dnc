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
exports.AtualizarRankingService = void 0;
const aluno_1 = require("../repositories/aluno");
class AtualizarRankingService {
    constructor() {
        this.alunoRepository = new aluno_1.AlunoRepository();
    }
    execute({ email, nota }) {
        return __awaiter(this, void 0, void 0, function* () {
            const aluno = yield this.alunoRepository.findByEmail(email);
            if (!aluno) {
                throw new Error('Aluno não encontrado');
            }
            aluno.pontuacaoTotal += nota;
            aluno.posicaoRankingEscola = yield this.alunoRepository.calcularPosicaoRankingEscola(aluno.idEscola, aluno.pontuacaoTotal);
            aluno.posicaoRankingGeral = yield this.alunoRepository.calcularPosicaoRankingGeral(aluno.pontuacaoTotal);
            yield this.alunoRepository.save(aluno);
        });
    }
}
exports.AtualizarRankingService = AtualizarRankingService;
