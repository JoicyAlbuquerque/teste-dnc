"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Escola = void 0;
const uuid_1 = require("uuid");
class Escola {
    constructor(nome) {
        this.id = (0, uuid_1.v4)();
        this.nome = nome;
    }
}
exports.Escola = Escola;
