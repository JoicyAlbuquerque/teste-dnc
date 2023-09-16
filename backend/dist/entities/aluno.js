"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
const uuid_1 = require("uuid");
class Aluno {
    constructor(nome, email, idEscola, pontuacaoTotal = 0) {
        this.id = (0, uuid_1.v4)();
        this.nome = nome;
        this.email = email;
        this.idEscola = idEscola;
        this.pontuacaoTotal = pontuacaoTotal;
    }
}
exports.Aluno = Aluno;
