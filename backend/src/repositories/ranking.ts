import { IRanking, Ranking } from "../entities/ranking";

export class RankingRepository {
  
  /**
   * Método para salvar um novo registro de ranking no banco de dados.
   * 
   * @param data - Os dados do ranking a serem salvos.
   * @returns O ranking que foi salvo.
   * @throws {Error} Caso ocorra um erro durante a criação do registro de ranking.
   */
  public async save(data: IRanking): Promise<IRanking> {
    try {
      const ranking = new Ranking(data);
      await ranking.save();
      return ranking;
    } catch (error: any) {
      throw new Error("Erro ao criar registro de ranking: " + error.message);
    }
  }

  /**
   * Método para encontrar um ranking pelo seu ID.
   * 
   * @param id - O ID do ranking a ser encontrado.
   * @returns O ranking encontrado.
   * @throws {Error} Caso ocorra um erro durante a busca do registro de ranking.
   */
  public async findById(id: string) {
    try {
      return await Ranking.findById(id).populate("idAluno").populate("idEscola");
    } catch (error: any) {
      throw new Error("Erro ao buscar registro de ranking: " + error.message);
    }
  }

  /**
   * Método para encontrar um ranking pelo ID do aluno.
   * 
   * @param idAluno - O ID do aluno cujo ranking deseja encontrar.
   * @returns O ranking encontrado.
   * @throws {Error} Caso ocorra um erro durante a busca do registro de ranking.
   */
  public async findByAlunoId(idAluno: string) {
    try {
      return await Ranking.findOne({ idAluno }).populate("idAluno").populate("idEscola");
    } catch (error: any) {
      throw new Error("Erro ao buscar registro de ranking: " + error.message);
    }
  }

  /**
   * Método para encontrar os rankings associados a uma escola específica.
   * 
   * @param idEscola - O ID da escola cujos rankings deseja encontrar.
   * @returns Os rankings encontrados, ordenados por pontuação total em ordem decrescente.
   * @throws {Error} Caso ocorra um erro durante a busca dos rankings.
   */
  async findByEscola(idEscola: string) {
    try {
      return await Ranking.find({ idEscola })
        .sort({ pontuacaoTotal: -1 })
        .limit(10)
        .populate('idAluno')
        .populate('idEscola');
    } catch (error: any) {
      throw new Error('Erro ao buscar ranking por escola: ' + error.message);
    }
  }

  /**
   * Método para encontrar todos os rankings disponíveis.
   * 
   * @returns Todos os rankings encontrados, limitados a 3 registros.
   * @throws {Error} Caso ocorra um erro durante a busca dos rankings.
   */
  public async findAll() {
    try {
      return await Ranking.find().populate("idAluno").populate("idEscola").limit(3);
    } catch (error: any) {
      throw new Error("Erro ao buscar registros de ranking: " + error.message);
    }
  }

  /**
   * Método para atualizar um registro de ranking existente pelo seu ID.
   * 
   * @param id - O ID do ranking a ser atualizado.
   * @param data - Os novos dados do ranking.
   * @returns O ranking atualizado.
   * @throws {Error} Caso ocorra um erro durante a atualização do registro de ranking.
   */
  async updateById({ id, data }: any) {
    try {
      return await Ranking.findByIdAndUpdate(id, data, { new: true });
    } catch (error: any) {
      throw new Error(
        "Erro ao atualizar registro de ranking: " + error.message
      );
    }
  }

  /**
   * Método para deletar um registro de ranking pelo seu ID.
   * 
   * @param id - O ID do ranking a ser deletado.
   * @returns O resultado da operação de deleção.
   * @throws {Error} Caso ocorra um erro durante a deleção do registro de ranking.
   */
  async deleteById(id: string) {
    try {
      return await Ranking.findByIdAndDelete(id);
    } catch (error: any) {
      throw new Error("Erro ao deletar registro de ranking: " + error.message);
    }
  }
}
