import { v4 as uuidv4 } from 'uuid';

interface IEscola {
  id: string;
  nome: string;
}

class Escola implements IEscola {
  id: string;
  nome: string;

  constructor(nome: string) {
    this.id = uuidv4();
    this.nome = nome;
  }
}

export { IEscola, Escola };

