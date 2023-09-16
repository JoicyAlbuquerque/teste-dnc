"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EscolaRepository = void 0;
class EscolaRepository {
    constructor() {
        this.escolas = [];
        // implemente outros métodos conforme necessário
    }
    findById(id) {
        return this.escolas.find(escola => escola.id === id) || null;
    }
    save(escola) {
        this.escolas.push(escola);
    }
}
exports.EscolaRepository = EscolaRepository;
