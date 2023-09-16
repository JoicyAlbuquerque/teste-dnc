import { Nota } from "../entities/nota";

interface INotaRepository {
  findById(id: string): Nota | null;
  save(nota: Nota): void;
  // outros métodos relacionados ao repositório, como find, delete, update, etc.
}

class NotaRepository implements INotaRepository {
  private notas: Nota[] = [];

  findById(id: string): Nota | null {
    return this.notas.find(nota => nota.id === id) || null;
  }

  save(nota: Nota): void {
    this.notas.push(nota);
  }

  // implemente outros métodos conforme necessário
}

export { INotaRepository, NotaRepository };
