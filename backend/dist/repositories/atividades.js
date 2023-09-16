"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AtividadeRepository = void 0;
class AtividadeRepository {
    constructor() {
        this.atividades = [];
        // implemente outros métodos conforme necessário
    }
    findById(id) {
        return this.atividades.find(atividade => atividade.id === id) || null;
    }
    save(atividade) {
        this.atividades.push(atividade);
    }
}
exports.AtividadeRepository = AtividadeRepository;
