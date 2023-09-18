import { Schema, model, Document } from 'mongoose';

/**
 * Interface que representa a estrutura de um documento de ranking no banco de dados MongoDB.
 */
interface IRanking extends Document {
  idAluno: Schema.Types.ObjectId; // Referência ao ID do aluno no banco de dados
  idEscola: Schema.Types.ObjectId; // Referência ao ID da escola no banco de dados
  pontuacaoTotal: number; // Pontuação total acumulada pelo aluno
}

/**
 * Esquema de Mongoose que define a estrutura de um documento de ranking no banco de dados MongoDB.
 */
const RankingSchema = new Schema<IRanking>({
    idAluno: { type: Schema.Types.ObjectId, ref: 'Aluno', required: true }, // Campo que armazena o ID do aluno
    idEscola: { type: Schema.Types.ObjectId, ref: 'Escola', required: true }, // Campo que armazena o ID da escola
    pontuacaoTotal: { type: Number, default: 0, min: 0 }, // Campo que armazena a pontuação total do aluno
});

/**
 * Modelo de Mongoose que fornece métodos para interagir com a coleção de rankings no banco de dados MongoDB.
 */
const Ranking = model<IRanking>('Ranking', RankingSchema);

export { IRanking, Ranking };
