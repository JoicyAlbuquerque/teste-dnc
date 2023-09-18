import { IAtividade } from "../entities/atividades";
import { AtividadeRepository } from "../repositories/atividades";

/**
 * Classe de serviço GetAllAtividadesService.
 * Responsável por obter todas as atividades do repositório de atividades.
 */
export class GetAllAtividadesService {
  private atividadeRepository: AtividadeRepository;

  /**
   * Construtor da classe GetAllAtividadesService.
   * Inicializa o repositório de atividades.
   */
  constructor() {
    this.atividadeRepository = new AtividadeRepository();
  }

  /**
   * Método para executar o serviço.
   * 
   * @returns {Promise<IAtividade[] | null>} - Uma promessa que resolve para uma lista de atividades ou null.
   * @throws {Error} - Lança um erro se não encontrar nenhuma atividade cadastrada.
   */
  public async execute(): Promise<IAtividade[] | null> {
    const Atividades = await this.atividadeRepository.findAll();

    if (!Atividades) {
      throw new Error('Nenhuma Atividade cadastrada');
    }
    return Atividades;
  }
}
