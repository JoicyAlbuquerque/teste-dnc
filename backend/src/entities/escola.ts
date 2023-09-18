import { Schema, model, Document } from 'mongoose';

/**
 * Interface que representa a estrutura de um documento de escola no banco de dados MongoDB.
 */
interface IEscola extends Document {
  nome: string; // Nome da escola
}

/**
 * Esquema de Mongoose que define a estrutura de um documento de escola no banco de dados MongoDB.
 */
const EscolaSchema = new Schema<IEscola>({
  nome: { type: String, required: true, unique: true }, // Campo que armazena o nome da escola
});

/**
 * Modelo de Mongoose que fornece métodos para interagir com a coleção de escolas no banco de dados MongoDB.
 */
const Escola = model<IEscola>('Escola', EscolaSchema);

export { IEscola, Escola };
