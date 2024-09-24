import { url } from '@shared/consts';
import { SeatsFilters } from '../types/seatsFilters';

interface SeatsRequestData {
  id: string;
  filters: Partial<SeatsFilters>;
}

export const services = {
  getSeats: async (data: SeatsRequestData) => {
    const queryParams = Object.keys(data.filters)
      .map((key) => {
        const dataKey = key as keyof SeatsFilters;
        const isValidValue = !!data.filters[dataKey];
        return isValidValue && `${key}=${data.filters[dataKey]}`;
      })
      .filter(Boolean);
    const params = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
    const response = await fetch(`${url}/routes/${data.id}/seats${params}`);
    const routes = response.json();
    return routes;
  },
  //TODO: try catch с обработкой ошибок или axios
};
