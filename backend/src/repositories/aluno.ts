import { Aluno } from "../entities/aluno";

interface IAlunoRepository {
  findById(id: string): Aluno | null;
  save(aluno: Aluno): void;
  // outros métodos relacionados ao repositório, como find, delete, update, etc.
}

class AlunoRepository implements IAlunoRepository {
  private alunos: Aluno[] = [];

  findById(id: string): Aluno | null {
    return this.alunos.find(aluno => aluno.id === id) || null;
  }

  save(aluno: Aluno): void {
    this.alunos.push(aluno);
  }

  // implemente outros métodos conforme necessário
}

export { IAlunoRepository, AlunoRepository };
