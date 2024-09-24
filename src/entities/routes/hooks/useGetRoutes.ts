import { useEffect } from 'react';
import {
  useAppDispatch,
  useAppSelector,
} from '@shared/lib/hooks/useReduxHooks';
import { RouteRequestData } from '../model/services/services';
import { services as RouteServices } from '../model/services/services';
import { getRouteFilter } from '../model/selectors/selector';
import { setCount, setRoutes } from '../model/slice/RoutesSlice';
import { type RouteFilters } from '../model/types/filters';

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
};
