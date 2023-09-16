import { v4 as uuidv4 } from 'uuid';

interface IAluno {
  id: string;
  nome: string;
  email: string;
  idEscola: string;
  pontuacaoTotal: number;
}

class Aluno implements IAluno {
  id: string;
  nome: string;
  email: string;
  idEscola: string;
  pontuacaoTotal: number;

  constructor(nome: string, email: string, idEscola: string, pontuacaoTotal: number = 0) {
    this.id = uuidv4();
    this.nome = nome;
    this.email = email;
    this.idEscola = idEscola;
    this.pontuacaoTotal = pontuacaoTotal;
  }
}


export { IAluno, Aluno };
