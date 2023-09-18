"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Nota = void 0;
const mongoose_1 = require("mongoose");
/**
 * Esquema de Mongoose que define a estrutura de um documento de nota no banco de dados MongoDB.
 */
const NotaSchema = new mongoose_1.Schema({
    idAluno: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Aluno', required: true },
    idAtividade: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Atividade', required: true },
    nota: { type: Number, required: true }, // Campo que armazena a nota atribuída
});
/**
 * Modelo de Mongoose que fornece métodos para interagir com a coleção de notas no banco de dados MongoDB.
 */
const Nota = (0, mongoose_1.model)('Nota', NotaSchema);
exports.Nota = Nota;
