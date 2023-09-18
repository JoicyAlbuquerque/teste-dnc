import { Escola, IEscola } from "../entities/escola";

class EscolaRepository {

  /**
   * Método para encontrar uma escola específica pelo seu ID.
   * 
   * @param id - O ID da escola que deseja encontrar.
   * @returns A escola encontrada ou null se nenhuma escola foi encontrada com o ID fornecido.
   */
  async findById(id: string): Promise<IEscola | null> {
    return Escola.findById(id).exec();
  }

  /**
   * Método para salvar uma nova escola no banco de dados.
   * 
   * @param escola - O objeto escola que deseja salvar.
   * @returns A escola que foi salva no banco de dados.
   */
  async save(escola: IEscola): Promise<IEscola> {
    const novaEscola = new Escola(escola);
    return novaEscola.save();
  }

  /**
   * Método para encontrar todas as escolas disponíveis no banco de dados.
   * 
   * @returns Uma lista de todas as escolas encontradas.
   */
  async findAll(): Promise<IEscola[] | null> {
    return Escola.find().exec();
  }
}

export { EscolaRepository };
