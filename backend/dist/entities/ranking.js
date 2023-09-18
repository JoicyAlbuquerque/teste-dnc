"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ranking = void 0;
const mongoose_1 = require("mongoose");
/**
 * Esquema de Mongoose que define a estrutura de um documento de ranking no banco de dados MongoDB.
 */
const RankingSchema = new mongoose_1.Schema({
    idAluno: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Aluno', required: true },
    idEscola: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Escola', required: true },
    pontuacaoTotal: { type: Number, default: 0, min: 0 }, // Campo que armazena a pontuação total do aluno
});
/**
 * Modelo de Mongoose que fornece métodos para interagir com a coleção de rankings no banco de dados MongoDB.
 */
const Ranking = (0, mongoose_1.model)('Ranking', RankingSchema);
exports.Ranking = Ranking;
