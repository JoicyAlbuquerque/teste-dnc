import api from "../axios";

export const getAtividades = async () => {
    try {
      const response = await api.get(`/atividade/all`);
      return response.data;
    } catch (error) {
      console.error('Erro ao buscar atividades:', error);
      throw error;
    }
};