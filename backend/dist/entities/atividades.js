"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Atividade = void 0;
const mongoose_1 = require("mongoose");
/**
 * Esquema de Mongoose que define a estrutura de um documento de atividade no banco de dados MongoDB.
 */
const AtividadeSchema = new mongoose_1.Schema({
    tipo: { type: String, required: true },
    peso: { type: Number, required: true, min: 0, max: 100 }, // Campo que armazena o peso da atividade
});
/**
 * Modelo de Mongoose que fornece métodos para interagir com a coleção de atividades no banco de dados MongoDB.
 */
const Atividade = (0, mongoose_1.model)('Atividade', AtividadeSchema);
exports.Atividade = Atividade;
