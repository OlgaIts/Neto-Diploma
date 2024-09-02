import { url } from '@shared/consts';
import { Route } from '../types/route';

interface ResponseData {
  items: Route[];
  total_count: number;
}

interface RouteRequestData {
  from_city_id: string;
  to_city_id: string;
  date_start?: string;
  date_end?: string; //в формате YYYY-MM-DD; например 2030-03-01
}

export const services = {
  getRoutes: async (data: RouteRequestData): Promise<ResponseData> => {
    const queryParams = Object.keys(data)
      .map((key) => {
        const dataKey = key as keyof RouteRequestData;
        return data[dataKey] && `${key}=${data[dataKey]}`;
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
    const routes = response.json();
    return routes;
  },

  //TODO: try catch с обработкой ошибок
};
