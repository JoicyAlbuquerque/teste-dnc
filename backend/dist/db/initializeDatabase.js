"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const aluno_1 = require("../entities/aluno");
const atividades_1 = require("../entities/atividades");
const escola_1 = require("../entities/escola");
const ranking_1 = require("../entities/ranking");
/**
 * Função assíncrona para inicializar o banco de dados inserindo dados mockados (simulados) para Alunos, Escolas, Atividades e Rankings.
 */
function initializeDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Verifica se há dados de alunos já existentes no banco de dados antes de inserir dados mockados
            if ((yield aluno_1.Aluno.countDocuments()) === 0) {
                // Inserção de dados mockados para escolas
                const escolas = yield escola_1.Escola.insertMany([
                    { nome: 'Escola de Dados' },
                    { nome: 'Escola de Tecnologia' },
                    { nome: 'Escola de Produto' },
                ]);
                // Inserção de dados mockados para atividades
                const atividades = yield atividades_1.Atividade.insertMany([
                    { tipo: 'Tarefa', peso: 1 },
                    { tipo: 'Desafio', peso: 2 },
                    { tipo: 'Projeto', peso: 5 },
                ]);
                // Inserção de dados mockados para alunos
                yield aluno_1.Aluno.insertMany([
                // ... (os detalhes dos alunos)
                ]);
                console.log('Dados mockados inseridos com sucesso');
            }
            // Novo bloco de código para inserir dados de ranking se ainda não existirem no banco de dados
            if ((yield ranking_1.Ranking.countDocuments()) === 0) {
                // Recuperar todos os alunos inseridos anteriormente
                let alunos = yield aluno_1.Aluno.find();
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
                escolasIds.forEach((idEscola) => __awaiter(this, void 0, void 0, function* () {
                    const alunosDaEscola = alunos.filter(aluno => String(aluno.idEscola) === idEscola);
                    alunosDaEscola.forEach((aluno, index) => {
                        const ranking = rankings.find(ranking => String(ranking.idAluno) === String(aluno._id));
                        if (ranking) {
                            aluno.posicaoRankingEscola = index + 1;
                        }
                    });
                }));
                // Inserir os dados de ranking no banco de dados
                yield ranking_1.Ranking.insertMany(rankings);
                console.log('Dados de ranking inseridos com sucesso');
            }
        }
        catch (error) {
            // Logar qualquer erro que ocorra durante a inicialização do banco de dados
            console.error('Erro ao inserir dados mockados:', error);
        }
    });
}
exports.default = initializeDatabase;
