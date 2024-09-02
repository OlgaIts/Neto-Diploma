import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { ticketFormReducer } from '@features/TicketForm';
import { routesReducer } from '@entities/routes';

const rootReducer = combineReducers({
  ticketForm: ticketFormReducer,
  routes: routesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
