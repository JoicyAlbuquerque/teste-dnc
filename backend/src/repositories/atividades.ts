import { Atividade, IAtividade } from "../entities/atividades";

class AtividadeRepository {

  /**
   * Método para encontrar uma atividade específica pelo seu ID.
   * 
   * @param id - O ID da atividade que deseja encontrar.
   * @returns A atividade encontrada ou null se nenhuma atividade foi encontrada com o ID fornecido.
   */
  async findById(id: string): Promise<IAtividade | null> {
    return Atividade.findById(id).exec();
  }

  /**
   * Método para encontrar todas as atividades disponíveis no banco de dados.
   * 
   * @returns Uma lista de todas as atividades encontradas.
   */
  async findAll(): Promise<IAtividade[] | null> {
    return Atividade.find().exec();
  }

  /**
   * Método para salvar uma nova atividade no banco de dados.
   * 
   * @param atividade - O objeto atividade que deseja salvar.
   * @returns A atividade que foi salva no banco de dados.
   */
  async save(atividade: IAtividade): Promise<IAtividade> {
    const novaAtividade = new Atividade(atividade);
    return novaAtividade.save();
  }
}

export { AtividadeRepository };
