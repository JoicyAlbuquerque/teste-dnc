"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nota = void 0;
const uuid_1 = require("uuid");
class Nota {
    constructor(idAluno, idAtividade, nota) {
        this.id = (0, uuid_1.v4)();
        this.idAluno = idAluno;
        this.idAtividade = idAtividade;
        this.nota = nota;
    }
}
exports.Nota = Nota;
