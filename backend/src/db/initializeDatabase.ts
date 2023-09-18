import { Aluno } from "../entities/aluno";
import { Atividade } from "../entities/atividades";
import { Escola } from "../entities/escola";
import { Ranking } from "../entities/ranking";

/**
 * Função assíncrona para inicializar o banco de dados inserindo dados mockados (simulados) para Alunos, Escolas, Atividades e Rankings.
 */
async function initializeDatabase() {
  try {
    // Verifica se há dados de alunos já existentes no banco de dados antes de inserir dados mockados
    if ((await Aluno.countDocuments()) === 0) {
      // Inserção de dados mockados para escolas
      const escolas = await Escola.insertMany([
        { nome: 'Escola de Dados' },
        { nome: 'Escola de Tecnologia' },
        { nome: 'Escola de Produto' },
      ]);

      // Inserção de dados mockados para atividades
      const atividades = await Atividade.insertMany([
        { tipo: 'Tarefa', peso: 1 },
        { tipo: 'Desafio', peso: 2 },
        { tipo: 'Projeto', peso: 5 },
      ]);

      // Inserção de dados mockados para alunos
      await Aluno.insertMany([
        // ... (os detalhes dos alunos)
      ]);

      console.log('Dados mockados inseridos com sucesso');
    }

    // Novo bloco de código para inserir dados de ranking se ainda não existirem no banco de dados
    if ((await Ranking.countDocuments()) === 0) {
      // Recuperar todos os alunos inseridos anteriormente
      let alunos = await Aluno.find(); 

      // Ordenar os alunos por pontuação total em ordem decrescente
      alunos.sort((a, b) => b.pontuacaoTotal - a.pontuacaoTotal);

      // Criar objetos de ranking com a posição geral e outras informações relevantes
      const rankings = alunos.map((aluno, index) => ({
        idAluno: aluno._id,
        idEscola: aluno.idEscola,
        pontuacaoTotal: aluno.pontuacaoTotal,
      }));

      // Obter uma lista única de IDs de escolas dos alunos
      const escolasIds = [...new Set(alunos.map(aluno => String(aluno.idEscola)))];

      // Atribuir posições de ranking por escola 
      escolasIds.forEach(async idEscola => {
        const alunosDaEscola = alunos.filter(aluno => String(aluno.idEscola) === idEscola);
        alunosDaEscola.forEach((aluno, index) => {
          const ranking = rankings.find(ranking => String(ranking.idAluno) === String(aluno._id));
          if (ranking) {
            aluno.posicaoRankingEscola = index + 1;
          }
        });
      });

      // Inserir os dados de ranking no banco de dados
      await Ranking.insertMany(rankings);

      console.log('Dados de ranking inseridos com sucesso');
    }
  } catch (error) {
    // Logar qualquer erro que ocorra durante a inicialização do banco de dados
    console.error('Erro ao inserir dados mockados:', error);
  }
}

export default initializeDatabase;
