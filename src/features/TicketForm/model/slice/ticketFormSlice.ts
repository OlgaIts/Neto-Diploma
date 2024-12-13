import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface City {
  id: string;
  name: string;
}
export interface TicketFormState {
  from: City | null;
  to: City | null;
  date_start: string;
  date_end: string;
}

const localFrom = localStorage.getItem('from');
const localTo = localStorage.getItem('to');
const date_start = localStorage.getItem('date_start');
const date_end = localStorage.getItem('date_end');

export const initialState: TicketFormState = {
  from: localFrom ? JSON.parse(localFrom) : null,
  to: localTo ? JSON.parse(localTo) : null,
  date_start: date_start || '',
  date_end: date_end || '',
};

const ticketFormSlice = createSlice({
  name: 'ticketForm',
  initialState,

  reducers: {
    setTicketForm: (state, action: PayloadAction<TicketFormState>) => {
      return { ...state, ...action.payload };
    },

    setFromCity: (
      state,
      action: PayloadAction<{ id: string; name: string }>,
    ) => {
      state.from = action.payload;
      localStorage.setItem('from', JSON.stringify(action.payload));
    },

    setToCity: (state, action: PayloadAction<{ id: string; name: string }>) => {
      state.to = action.payload;
      localStorage.setItem('to', JSON.stringify(action.payload));
    },
  },
});

export const { setTicketForm, setFromCity, setToCity } =
  ticketFormSlice.actions;
export const ticketFormReducer = ticketFormSlice.reducer;
