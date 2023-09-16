"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Atividade = void 0;
const uuid_1 = require("uuid");
class Atividade {
    constructor(nome, tipo, peso, descricao) {
        this.id = (0, uuid_1.v4)();
        this.tipo = tipo;
        this.peso = peso;
    }
}
exports.Atividade = Atividade;
