import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Route } from '../types/route';
import { RouteFilters } from '../types/filters';

interface RoutesState {
  routes: Route[];
  totalCount: number;
  routeFilters: Partial<RouteFilters>;
  routesLoading?: boolean;
}

const initialState: RoutesState = {
  routes: [],
  totalCount: 0,
  routeFilters: {
    price_from: 0,
    price_to: 7000,
  },
  routesLoading: false,
};

const routesSlice = createSlice({
  name: 'routes',
  initialState,

  reducers: {
    setRoutes: (state, action: PayloadAction<Route[]>) => {
      state.routes = action.payload;
    },
    setCount: (state, action: PayloadAction<number>) => {
      state.totalCount = action.payload;
    },
    setRouteFilters: (state, action: PayloadAction<Partial<RouteFilters>>) => {
      state.routeFilters = { ...state.routeFilters, ...action.payload };

      if (action.payload.offset === undefined) {
        delete state.routeFilters.offset;
      }
    },
    setRoutesLoading: (state, action: PayloadAction<boolean>) => {
      state.routesLoading = action.payload;
    },
  },
});

export const { setRoutes, setCount, setRouteFilters, setRoutesLoading } =
  routesSlice.actions;
export const routesReducer = routesSlice.reducer;
