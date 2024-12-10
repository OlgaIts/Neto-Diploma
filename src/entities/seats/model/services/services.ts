import { url } from '@shared/consts';
import { type SeatsFilters } from '../types/seatsFilters';
import { type Seats } from '../types/seats';

interface SeatsRequestData {
  id: string;
  filters: Partial<SeatsFilters>;
}

export const services = {
  getSeats: async (data: SeatsRequestData): Promise<Seats[]> => {
    try {
      const queryParams = Object.keys(data.filters)
        .map((key) => {
          const dataKey = key as keyof SeatsFilters;
          const isValidValue = !!data.filters[dataKey];
          return isValidValue && `${key}=${data.filters[dataKey]}`;
        })
        .filter(Boolean);
      const params = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
      const response = await fetch(`${url}/routes/${data.id}/seats${params}`);

      if (!response.ok) {
        throw new Error(
          `Ошибка загрузки данных: ${response.status} ${response.statusText}`,
        );
      }

      const routes = response.json();
      return routes;
    } catch (error) {
      console.error('Произошла ошибка при получении данных:', error);
      throw new Error('Не удалось загрузить данные. Повторите попытку позже.');
    }
  },
};
