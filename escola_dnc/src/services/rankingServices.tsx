import api from '../axios';
import { Aluno } from '../types';

export const getRankingEscola = async (escola: string): Promise<Aluno[]> => {
  
  const res = await api.get(`/ranking/escola`,{ 
    params: {
      idEscola: escola
    } 
  });
  return res.data;
  
};

export const getPodium = async (): Promise<Aluno[]> => {
  try {
    const response = await api.get(`/ranking/geral`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar ranking:', error);
    throw error;
  }
};

export const updateRanking = async (data: object) => {
  try {
    const response = await api.put(`/ranking/atualizar`, data);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar ranking:', error);
    throw error;
  }
};
