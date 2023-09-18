import { EscolaRepository } from "../repositories/escola";
import { IEscola } from "../entities/escola";

/**
 * Classe de serviço GetAllEscolasService.
 * Responsável por obter todas as escolas do repositório de escolas.
 */
export class GetAllEscolasService {
  private escolaRepository: EscolaRepository;

  /**
   * Construtor da classe GetAllEscolasService.
   * Inicializa o repositório de escolas.
   */
  constructor() {
    this.escolaRepository = new EscolaRepository();
  }

  /**
   * Método para executar o serviço.
   * 
   * @returns {Promise<IEscola[] | null>} - Uma promessa que resolve para uma lista de escolas ou null.
   * @throws {Error} - Lança um erro se não encontrar nenhuma escola cadastrada.
   */
  public async execute(): Promise<IEscola[] | null> {
    const escolas = await this.escolaRepository.findAll();

    if (!escolas) {
      throw new Error('Nenhuma escola cadastrada');
    }
    return escolas;
  }
}
