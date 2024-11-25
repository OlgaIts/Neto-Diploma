import { RootState } from '@app/providers/StoreProvider/store';

export const getRoutesData = (state: RootState) => state.routes.routes;

export const getTotalCount = (state: RootState) => state.routes.totalCount;

export const getRouteFilter = (state: RootState) => state.routes.routeFilters;

export const getLimit = (state: RootState) =>
  state.routes.routeFilters?.limit || 5;

export const getOffset = (state: RootState) => state.routes.routeFilters.offset;

export const getRouteDateStart = (state: RootState) => {
  const dateStart = state.routes.routeFilters.date_start;
  if (!dateStart) {
    return undefined;
  }
  const date = new Date(dateStart);
  date.setUTCHours(22, 0, 0, 0);

  return date.toISOString();
};

export const getRouteDateEnd = (state: RootState) => {
  const dateEndArrival = state.routes.routeFilters.date_end;
  if (!dateEndArrival) {
    return undefined;
  }
  const date = new Date(dateEndArrival);
  date.setUTCHours(22, 0, 0, 0);

  return date.toISOString();
};
