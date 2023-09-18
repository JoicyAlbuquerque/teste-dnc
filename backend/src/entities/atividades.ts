import { Schema, model, Document } from 'mongoose';

/**
 * Interface que representa a estrutura de um documento de atividade no banco de dados MongoDB.
 */
interface IAtividade extends Document {
  tipo: string; // Tipo da atividade (por exemplo, 'Tarefa', 'Desafio', 'Projeto')
  peso: number; // Peso atribuído à atividade (utilizado para calcular a pontuação ponderada)
}

/**
 * Esquema de Mongoose que define a estrutura de um documento de atividade no banco de dados MongoDB.
 */
const AtividadeSchema = new Schema<IAtividade>({
  tipo: { type: String, required: true }, // Campo que armazena o tipo de atividade
  peso: { type: Number, required: true, min: 0, max: 100 }, // Campo que armazena o peso da atividade
});

/**
 * Modelo de Mongoose que fornece métodos para interagir com a coleção de atividades no banco de dados MongoDB.
 */
const Atividade = model<IAtividade>('Atividade', AtividadeSchema);

export { IAtividade, Atividade };
