import { url } from '@shared/consts';

export const services = {
  getCities: async (name: string) => {
    try {
      const response = await fetch(`${url}/routes/cities?name=${name}`);
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Произошла ошибка при загрузки городов:', error);
      throw error;
    }
  },
};
