"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoRepository = void 0;
class AlunoRepository {
    constructor() {
        this.alunos = [];
        // implemente outros métodos conforme necessário
    }
    findById(id) {
        return this.alunos.find(aluno => aluno.id === id) || null;
    }
    save(aluno) {
        this.alunos.push(aluno);
    }
}
exports.AlunoRepository = AlunoRepository;
