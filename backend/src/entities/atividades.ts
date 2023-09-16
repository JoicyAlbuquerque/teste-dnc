import { v4 as uuidv4 } from 'uuid';

interface IAtividade {
  id: string;
  tipo: string;
  peso: number;
}

class Atividade implements IAtividade {
    id: string;
    tipo: string;
    peso: number;

  constructor(nome: string, tipo: string, peso: number, descricao: string) {
    this.id = uuidv4();
    this.tipo = tipo;
    this.peso = peso;
  }
}

export { IAtividade, Atividade };
