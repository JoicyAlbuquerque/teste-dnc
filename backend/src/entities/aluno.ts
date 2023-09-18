import { Schema, model, Document } from 'mongoose';

/**
 * Interface que representa a estrutura de um documento de aluno no banco de dados MongoDB.
 */
interface IAluno extends Document {
  email: string; // Endereço de e-mail do aluno
  idEscola: string; // ID da escola à qual o aluno pertence
  pontuacaoTotal: number; // Pontuação total acumulada pelo aluno
  posicaoRankingEscola: number; // Posição do aluno no ranking da sua escola
  posicaoRankingGeral: number; // Posição do aluno no ranking geral
}

/**
 * Esquema de Mongoose que define a estrutura de um documento de aluno no banco de dados MongoDB.
 */
const AlunoSchema = new Schema<IAluno>({
  email: { type: String, required: true, unique: true }, // Campo que armazena o e-mail do aluno
  idEscola: { type: String, ref: 'Escola', required: true }, // Campo que armazena o ID da escola
  pontuacaoTotal: { type: Number, default: 0, min: 0 }, // Campo que armazena a pontuação total do aluno
  posicaoRankingEscola: { type: Number, default: 0, min: 0 }, // Campo que armazena a posição do aluno no ranking da escola
  posicaoRankingGeral: { type: Number, default: 0, min: 0 }, // Campo que armazena a posição do aluno no ranking geral
});

/**
 * Modelo de Mongoose que fornece métodos para interagir com a coleção de alunos no banco de dados MongoDB.
 */
const Aluno = model<IAluno>('Aluno', AlunoSchema);

export { IAluno, Aluno };
