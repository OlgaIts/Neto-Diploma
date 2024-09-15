import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Route } from '../types/route';
import { RouteFilters } from '../types/filters';

interface RoutesState {
  routes: Route[];
  totalCount: number;
  routeFilters: Partial<RouteFilters>;
}

const initialState: RoutesState = {
  routes: [],
  totalCount: 0,
  routeFilters: {},
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
    },
  },
});

export const { setRoutes, setCount, setRouteFilters } = routesSlice.actions;
export const routesReducer = routesSlice.reducer;
