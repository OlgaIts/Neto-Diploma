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
  start_departure_hour_from?: number;
  start_departure_hour_to?: number;
  start_arrival_hour_from?: number;
  start_arrival_hour_to?: number;
  end_departure_hour_from?: number;
  end_departure_hour_to?: number;
  end_arrival_hour_from?: number;
  end_arrival_hour_to?: number;
}

export const services = {
  getRoutes: async (data: RouteRequestData): Promise<ResponseData> => {
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
    const routes = response.json();
    return routes;
  },

  //TODO: try catch с обработкой ошибок или axios
};
