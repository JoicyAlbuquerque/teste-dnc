"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotaRepository = void 0;
class NotaRepository {
    constructor() {
        this.notas = [];
        // implemente outros métodos conforme necessário
    }
    findById(id) {
        return this.notas.find(nota => nota.id === id) || null;
    }
    save(nota) {
        this.notas.push(nota);
    }
}
exports.NotaRepository = NotaRepository;
