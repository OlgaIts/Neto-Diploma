import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { ticketFormReducer } from '@features/TicketForm';
import { passengerInfoReducer } from '@features/PassengerForm';
import { routesReducer } from '@entities/routes';
import {
  currentWagonInfoReducer,
  seatsReducer,
  seatsTicketInfoReducer,
} from '@entities/seats';

const rootReducer = combineReducers({
  ticketForm: ticketFormReducer,
  routes: routesReducer,
  seats: seatsReducer,
  ticketInfo: seatsTicketInfoReducer,
  currentWagonInfo: currentWagonInfoReducer,
  passengerInfo: passengerInfoReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
