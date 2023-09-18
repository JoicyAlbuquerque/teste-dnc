import api from "../axios";

export const getEscolas = async () => {
    try {
      const response = await api.get(`/escola/all`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar escolas:', error);
      throw error;
    }
};