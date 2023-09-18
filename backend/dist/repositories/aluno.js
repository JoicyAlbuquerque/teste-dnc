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
exports.AlunoRepository = void 0;
const aluno_1 = require("../entities/aluno");
class AlunoRepository {
    /**
     * Método para encontrar um aluno pelo endereço de e-mail.
     *
     * @param email - O endereço de e-mail do aluno que deseja encontrar.
     * @returns O aluno encontrado ou null se nenhum aluno foi encontrado com o endereço de e-mail fornecido.
     */
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return aluno_1.Aluno.findOne({ email }).exec();
        });
    }
    /**
     * Método para encontrar alunos associados a uma escola específica pelo ID da escola.
     *
     * @param escolaId - O ID da escola cujos alunos deseja encontrar.
     * @returns Uma lista de alunos encontrados ou null se nenhum aluno foi encontrado para a escola fornecida.
     */
    findByEscolaId(escolaId) {
        return __awaiter(this, void 0, void 0, function* () {
            return aluno_1.Aluno.find({ escolaId }).exec();
        });
    }
    /**
     * Método para encontrar todos os alunos disponíveis no banco de dados.
     *
     * @returns Uma lista de todos os alunos encontrados.
     */
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return aluno_1.Aluno.find().exec();
        });
    }
    /**
     * Método para salvar um novo aluno ou atualizar um aluno existente no banco de dados.
     *
     * @param aluno - O objeto aluno que deseja salvar.
     * @returns O aluno que foi salvo no banco de dados.
     */
    save(aluno) {
        return __awaiter(this, void 0, void 0, function* () {
            return aluno.save();
        });
    }
}
exports.AlunoRepository = AlunoRepository;
