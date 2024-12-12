import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@shared/lib/hooks';
import { RouteRequestData } from '../model/services/services';
import { services as RouteServices } from '../model/services/services';
import { getRouteFilter, getRoutesLoading } from '../model/selectors/selector';
import {
  setCount,
  setRoutes,
  setRoutesLoading,
} from '../model/slice/RoutesSlice';
import { type RouteFilters } from '../model/types/filters';

export const useGetRoutes = () => {
  const dispatch = useAppDispatch();
  const routeFilters = useAppSelector(getRouteFilter);
  const isLoading = useAppSelector(getRoutesLoading);

  const getRoutes = async (filters: Partial<RouteFilters>) => {
    if (
      filters?.from_city_id &&
      filters?.from_city_id &&
      typeof filters.from_city_id === 'string' &&
      typeof filters.to_city_id === 'string'
    ) {
      dispatch(setRoutesLoading(true));
      const response = await RouteServices.getRoutes(
        filters as RouteRequestData,
      );
      dispatch(setRoutes(response.items));
      dispatch(setCount(response.total_count));
      dispatch(setRoutesLoading(false)); //закомментируй это, чтобы проверить preloader
    }
  };

  useEffect(() => {
    if (!isLoading) {
      getRoutes(routeFilters);
    }
  }, [routeFilters]);
};
