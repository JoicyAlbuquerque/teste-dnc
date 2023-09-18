"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AlunoProvider = void 0;
const mongoose_1 = require("mongoose");
const AlunoSchema = new mongoose_1.Schema({
    email: { type: String, required: true, unique: true },
    idEscola: { type: String, required: true },
    pontuacaoTotal: { type: Number, default: 0 },
});
const AlunoProvider = (0, mongoose_1.model)('Aluno', AlunoSchema);
exports.AlunoProvider = AlunoProvider;
