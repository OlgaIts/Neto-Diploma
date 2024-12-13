import { url } from '@shared/consts';

export const services = {
  getLastRoutes: async () => {
    try {
      const response = await fetch(`${url}/routes/last`);
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(
        'Произошла ошибка при загрузки последних направлений:',
        error,
      );
      throw error;
    }
  },
};
