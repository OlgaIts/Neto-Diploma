import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { ticketFormReducer } from '@features/TicketForm';

const rootReducer = combineReducers({
  ticketForm: ticketFormReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
