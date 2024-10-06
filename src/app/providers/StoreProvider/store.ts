import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { ticketFormReducer } from '@features/TicketForm';
import { routesReducer } from '@entities/routes';
import { seatsReducer, seatsTicketInfoReducer } from '@entities/seats';

const rootReducer = combineReducers({
  ticketForm: ticketFormReducer,
  routes: routesReducer,
  seats: seatsReducer,
  ticketInfo: seatsTicketInfoReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
