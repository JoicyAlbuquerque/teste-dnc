import { useContext, useEffect, useState, useCallback } from "react";
import { CssBaseline } from "@mui/material";
import { LoadingContext } from "../../context/loading";
import Loading from "../../components/Loading/Loading";
import PodiumList from "../../components/PodiumList/PodiumList";
import RankingList from "../../components/RankingList/RankingList";
import { BoxEscolas, BoxWrapper } from "./styles";
import { Aluno } from "../../types";
import { getPodium, getRankingEscola } from "../../services/rankingServices";
import { getEscolas } from "../../services/escolaService";
import Form from "../../components/Form/Form";
import { getAtividades } from "../../services/atividadeService";

/**
 * Componente Rankings - responsável por exibir os rankings de alunos e escolas, bem como um formulário 
 * para buscar atividades e um pódio com os melhores alunos.
 * 
 * @returns {JSX.Element} - Elemento JSX que representa o componente Rankings.
 */
function Rankings() {
  const loadingState = useContext(LoadingContext);

  const [alunosPodium, setAlunosPodium] = useState<Aluno[]>([]);
  const [rankingEscolas, setRankingEscolas] = useState([]);
  const [atividades, setAtividades] = useState([]);

  useEffect(() => {
    fGetPodium();
    fGetEscolas();
    fGetAtividades();
  }, []);

  /**
   * Função para buscar e definir o pódio dos melhores alunos.
   */
  const fGetPodium = useCallback(async () => {
    loadingState?.setLoading(true);
    try {
      const response = await getPodium();
      setAlunosPodium(response);
    } catch (error) {
      console.error('Erro ao buscar ranking:', error);
    } finally {
      loadingState?.setLoading(false);
    }
  }, [loadingState]);

  /**
   * Função para buscar e definir o ranking das escolas.
   */
  const fGetEscolas = useCallback(async () => {
    loadingState?.setLoading(true);
    try {
      const response = await getEscolas();
      const escolas = response; 
      const rankingPromises = escolas.map((escola) => fGetRankingEscolas(escola._id));
      const rankings = await Promise.all(rankingPromises);
      setRankingEscolas(rankings);
    } catch (error) {
      console.error('Erro ao buscar escolas:', error);
    } finally {
      loadingState?.setLoading(false);
    }
  }, [loadingState]);

  /**
   * Função para buscar o ranking de uma escola específica pelo ID.
   * 
   * @param {string} idEscola - ID da escola.
   * @returns {Promise<any>} - Promise que resolve para o ranking da escola.
   */
  const fGetRankingEscolas = useCallback(async (idEscola: string) => {
    try {
      const response = await getRankingEscola(idEscola);
      return response;
    } catch (error) {
      console.error('Erro ao buscar ranking:', error);
      throw error;
    }
  }, []);

  /**
   * Função para buscar e definir a lista de atividades.
   */
  const fGetAtividades = useCallback(async () => {
    try {
      const response = await getAtividades();
      setAtividades(response);
    } catch (error) {
      console.error('Erro ao buscar atividades:', error);
      throw error;
    }
  }, []);

  return !loadingState?.loading ? (
    <>
      <CssBaseline />
      <BoxWrapper>
        <PodiumList alunos={alunosPodium}/>
        <BoxEscolas>
          {rankingEscolas.map((ranking, index) => (
            <RankingList key={index} ranking={ranking} />
          ))}
        </BoxEscolas>
        <Form atividades={atividades}/>
      </BoxWrapper>
    </>
  ) : <Loading/>;
}

export default Rankings;
