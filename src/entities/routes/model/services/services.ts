import { url } from '@shared/consts';
import { type Route } from '../types/route';
import { type RouteFilters } from '../types/filters';

interface ResponseData {
  items: Route[];
  total_count: number;
}

export interface RouteRequestData
  extends Omit<Partial<RouteFilters>, 'from_city_id' | 'to_city_id'> {
  from_city_id: string;
  to_city_id: string;
}

export const services = {
  getRoutes: async (data: RouteRequestData): Promise<ResponseData> => {
    try {
      const queryParams = Object.keys(data)
        .map((key) => {
          const dataKey = key as keyof RouteRequestData;
          const isValidValue = data[dataKey] || data[dataKey] === 0;
          return isValidValue && `${key}=${data[dataKey]}`;
        })
        .filter(Boolean);

      // const queryParams = [
      //   data.from_city_id && `from_city_id=${data.from_city_id}`,
      //   data.to_city_id && `to_city_id=${data.to_city_id}`,
      //   data.date_start && `date_start=${data.date_start.split('T')[0]}`,
      //   data.date_end && `date_end=${data.date_end.split('T')[0]}`,
      // ].filter(Boolean);

      const params = queryParams.length > 0 ? `?${queryParams.join('&')}` : '';
      const response = await fetch(`${url}/routes${params}`);

      if (!response.ok) {
        throw new Error(`HTTP ошибка! Статус: ${response.status}`);
      }

      const routes = response.json();
      return routes;
    } catch (error) {
      console.error('Произошла ошибка при загрузке маршрутов', error);
      throw error;
    }
  },
};
