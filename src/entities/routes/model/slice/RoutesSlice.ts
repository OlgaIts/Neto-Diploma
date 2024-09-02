import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Route } from '../types/route';

interface RoutesState {
  routes: Route[];
  totalCount: number;
}

const initialState: RoutesState = {
  routes: [],
  totalCount: 0,
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
  },
});

export const { setRoutes, setCount } = routesSlice.actions;
export const routesReducer = routesSlice.reducer;
