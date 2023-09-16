import { Atividade } from "../entities/atividades";

interface IAtividadeRepository {
  findById(id: string): Atividade | null;
  save(atividade: Atividade): void;
  // outros métodos relacionados ao repositório, como find, delete, update, etc.
}

class AtividadeRepository implements IAtividadeRepository {
  private atividades: Atividade[] = [];

  findById(id: string): Atividade | null {
    return this.atividades.find(atividade => atividade.id === id) || null;
  }

  save(atividade: Atividade): void {
    this.atividades.push(atividade);
  }

  // implemente outros métodos conforme necessário
}

export { IAtividadeRepository, AtividadeRepository };
