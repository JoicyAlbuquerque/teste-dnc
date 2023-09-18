"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Escola = void 0;
const mongoose_1 = require("mongoose");
/**
 * Esquema de Mongoose que define a estrutura de um documento de escola no banco de dados MongoDB.
 */
const EscolaSchema = new mongoose_1.Schema({
    nome: { type: String, required: true, unique: true }, // Campo que armazena o nome da escola
});
/**
 * Modelo de Mongoose que fornece métodos para interagir com a coleção de escolas no banco de dados MongoDB.
 */
const Escola = (0, mongoose_1.model)('Escola', EscolaSchema);
exports.Escola = Escola;
