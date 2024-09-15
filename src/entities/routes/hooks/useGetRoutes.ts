import { useEffect } from 'react';
import { RouteRequestData } from '../model/services/services';
import { RouteFilters } from '../model/types/filters';
import { services as RouteServices } from '../model/services/services';
import { getRouteFilter } from '../model/selectors/selector';
import { setCount, setRoutes } from '../model/slice/RoutesSlice';
import {
  useAppDispatch,
  useAppSelector,
} from '@shared/lib/hooks/useReduxHooks';

export const useGetRoutes = () => {
  const routeFilters = useAppSelector(getRouteFilter);
  const dispatch = useAppDispatch();

  const getRoutes = async (filters: Partial<RouteFilters>) => {
    if (
      filters?.from_city_id &&
      filters?.from_city_id &&
      typeof filters.from_city_id === 'string' &&
      typeof filters.to_city_id === 'string'
    ) {
      const response = await RouteServices.getRoutes(
        filters as RouteRequestData,
      );
      dispatch(setRoutes(response.items));
      dispatch(setCount(response.total_count));
    }
  };

  useEffect(() => {
    getRoutes(routeFilters);
  }, [routeFilters]);

  return { getRoutes };
};

//useGetSeade() все параметры  в слайс запрос по аналогии
