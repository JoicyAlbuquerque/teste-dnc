import { Schema } from "mongoose";
import { Aluno, IAluno } from "../entities/aluno";

export class AlunoRepository {

  /**
   * Método para encontrar um aluno pelo endereço de e-mail.
   * 
   * @param email - O endereço de e-mail do aluno que deseja encontrar.
   * @returns O aluno encontrado ou null se nenhum aluno foi encontrado com o endereço de e-mail fornecido.
   */
  public async findByEmail(email: string): Promise<IAluno | null> {
    return Aluno.findOne({ email }).exec();
  }

  /**
   * Método para encontrar alunos associados a uma escola específica pelo ID da escola.
   * 
   * @param escolaId - O ID da escola cujos alunos deseja encontrar.
   * @returns Uma lista de alunos encontrados ou null se nenhum aluno foi encontrado para a escola fornecida.
   */
  public async findByEscolaId(escolaId: string): Promise<IAluno[] | null> {
    return Aluno.find({ escolaId }).exec();
  }

  /**
   * Método para encontrar todos os alunos disponíveis no banco de dados.
   * 
   * @returns Uma lista de todos os alunos encontrados.
   */
  public async findAll(): Promise<IAluno[] | null> {
    return Aluno.find().exec();
  }

  /**
   * Método para salvar um novo aluno ou atualizar um aluno existente no banco de dados.
   * 
   * @param aluno - O objeto aluno que deseja salvar.
   * @returns O aluno que foi salvo no banco de dados.
   */
  public async save(aluno: IAluno): Promise<IAluno> {
    return aluno.save();
  }
}
