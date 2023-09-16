import { Escola } from "../entities/escola";

interface IEscolaRepository {
  findById(id: string): Escola | null;
  save(escola: Escola): void;
  // outros métodos relacionados ao repositório, como find, delete, update, etc.
}

class EscolaRepository implements IEscolaRepository {
  private escolas: Escola[] = [];

  findById(id: string): Escola | null {
    return this.escolas.find(escola => escola.id === id) || null;
  }

  save(escola: Escola): void {
    this.escolas.push(escola);
  }

  // implemente outros métodos conforme necessário
}

export { IEscolaRepository, EscolaRepository };
