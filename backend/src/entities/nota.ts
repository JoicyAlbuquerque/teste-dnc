import { v4 as uuidv4 } from 'uuid';

interface INota {
  id: string;
  idAluno: string;
  idAtividade: string;
  nota: number;
}

class Nota implements INota {
  id: string;
  idAluno: string;
  idAtividade: string;
  nota: number;

  constructor(idAluno: string, idAtividade: string, nota: number) {
    this.id = uuidv4();
    this.idAluno = idAluno;
    this.idAtividade = idAtividade;
    this.nota = nota;
  }
}

export { INota, Nota };
