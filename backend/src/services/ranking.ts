import { AlunoRepository } from "../repositories/aluno";
import { AtividadeRepository } from "../repositories/atividades";
import { IAluno } from "../entities/aluno";
import { IEscola } from "../entities/escola";
import { io } from "../server";
import { RankingRepository } from "../repositories/ranking";

/**
 * Interface para representar a estrutura do corpo da requisição para atualização do ranking.
 * @interface
 */
interface IRequestAtualizarRanking {
  email: string;
  atividade: string;
  nota: number;
}

/**
 * Interface para representar a estrutura da resposta ao buscar o ranking de uma escola.
 * @interface
 */
interface IResponseRankingEscola {
  ranking: IAluno[];
  escola: IEscola
}

/**
 * Classe responsável por prover serviços de atualização de ranking.
 * @class
 */
export class AtualizarRankingService {
  private alunoRepository: AlunoRepository;
  private atividadeRepository: AtividadeRepository;
  private rankingRepository: RankingRepository;

  /**
   * Inicializa uma nova instância da classe AtualizarRankingService.
   * @constructor
   */
  constructor() {
    this.alunoRepository = new AlunoRepository();
    this.atividadeRepository = new AtividadeRepository();
    this.rankingRepository = new RankingRepository();
  }

  /**
   * Executa o serviço de atualização do ranking com base nos parâmetros fornecidos no corpo da requisição.
   * @async
   * @function
   * @param {IRequestAtualizarRanking} - Contém os parâmetros necessários para atualização do ranking.
   * @throws Lançará um erro se o aluno ou a atividade não forem encontrados.
   * @returns {Promise<void>}
   */
  public async execute({ email, nota, atividade }: IRequestAtualizarRanking): Promise<void> {
    try {
      // Passo 1: Encontre o aluno e a atividade baseados no email e idAtividade
      const aluno = await this.alunoRepository.findByEmail(email);
      const atividades = await this.atividadeRepository.findById(atividade);

      if (!aluno || !atividades) {
        throw new Error('Aluno ou atividade não encontrados');
      }

      // Passo 2: Calcule a nova pontuação ponderada e atualize a pontuação total do aluno
      const notaPonderada = nota * atividades.peso;
      aluno.pontuacaoTotal += notaPonderada;
      await this.alunoRepository.save(aluno);

      // Passo 3: Atualize o ranking geral e da escola
      await this.atualizarRankingGeral();
      await this.atualizarRankingEscola(aluno.idEscola);

    } catch (error) {
      console.error(error);
    }
  }

  /**
   * Atualiza o ranking geral recuperando e ordenando todos os alunos por pontuação total em ordem decrescente.
   * @async
   * @function
   * @throws Lançará um erro se os alunos ou o ranking não forem encontrados.
   */
  async atualizarRankingGeral() {
    try {
      // Recuperar e ordenar todos os alunos por pontuação total em ordem decrescente
      const alunos = await this.alunoRepository.findAll();

      if (!alunos) {
        throw new Error('Alunos não encontrados');
      }

      alunos?.sort((a, b) => b.pontuacaoTotal - a.pontuacaoTotal);
  
      // Atualizar posições de ranking e salvar no banco de dados
      for (let i = 0; i < alunos.length; i++) {
        const ranking = await this.rankingRepository.findByAlunoId(alunos[i]._id);
        
        if (!ranking) {
          throw new Error('Ranking não encontrado');
        }

        alunos[i].posicaoRankingGeral = i + 1;
        ranking.pontuacaoTotal = alunos[i].pontuacaoTotal;

        await this.rankingRepository.updateById({id: ranking._id, data: ranking});
      }
  
      // Emitir um evento de socket com os dados atualizados do ranking geral
      io.emit('rankingGeralUpdated', { /* dados do novo ranking geral */ });
    } catch (error) {
      console.error(error);
    }
  }
  
  /**
   * Atualiza o ranking da escola recuperando e ordenando todos os alunos de uma escola específica por pontuação total em ordem decrescente.
   * @async
   * @function
   * @param {string} idEscola - O ID da escola para a qual o ranking precisa ser atualizado.
   * @throws Lançará um erro se os alunos ou o ranking não forem encontrados.
   */
  async atualizarRankingEscola(idEscola : string) {
    try {
      // Recuperar e ordenar todos os alunos da escola específica por pontuação total em ordem decrescente
      const alunos = await this.alunoRepository.findByEscolaId(idEscola);

      if (!alunos) {
        throw new Error('Alunos não encontrados');
      }

      alunos.sort((a, b) => b.pontuacaoTotal - a.pontuacaoTotal);
  
      // Atualizar posições de ranking e salvar no banco de dados
      for (let i = 0; i < alunos.length; i++) {
        const ranking = await this.rankingRepository.findByAlunoId(alunos[i]._id);

        if (!ranking) {
          throw new Error('Ranking não encontrado');
        }

        alunos[i].posicaoRankingEscola = i + 1;
        ranking.pontuacaoTotal = alunos[i].pontuacaoTotal;

        await this.rankingRepository.updateById({id: ranking._id, data: ranking});
      }
  
      // Emitir um evento de socket com os dados atualizados do ranking da escola
      io.emit('rankingEscolaUpdated', { idEscola, /* dados do novo ranking da escola */ });
    } catch (error) {
      console.error(error);
    }
  }
  

}

export class GetRankingEscolaService {
  private rankingRepository: RankingRepository;

  constructor() {
    this.rankingRepository = new RankingRepository();
  }

  public async execute( idEscola : string): Promise<object | null> {

    const ranking = await this.rankingRepository.findByEscola(idEscola);

    if (!ranking) {
      throw new Error('Nenhum aluno no ranking');
    }

    return ranking;

  }
}

export class GetRankingGeralService {
  private rankingRepository: RankingRepository;

  constructor() {
    this.rankingRepository = new RankingRepository();
  }

  public async execute(): Promise<object | null> {

    const ranking = await this.rankingRepository.findAll();

    if (!ranking) {
      throw new Error('Nenhum aluno no ranking');
    }

    return ranking;

  }
}
