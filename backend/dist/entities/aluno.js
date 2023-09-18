"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aluno = void 0;
const mongoose_1 = require("mongoose");
/**
 * Esquema de Mongoose que define a estrutura de um documento de aluno no banco de dados MongoDB.
 */
const AlunoSchema = new mongoose_1.Schema({
    email: { type: String, required: true, unique: true },
    idEscola: { type: String, ref: 'Escola', required: true },
    pontuacaoTotal: { type: Number, default: 0, min: 0 },
    posicaoRankingEscola: { type: Number, default: 0, min: 0 },
    posicaoRankingGeral: { type: Number, default: 0, min: 0 }, // Campo que armazena a posição do aluno no ranking geral
});
/**
 * Modelo de Mongoose que fornece métodos para interagir com a coleção de alunos no banco de dados MongoDB.
 */
const Aluno = (0, mongoose_1.model)('Aluno', AlunoSchema);
exports.Aluno = Aluno;
