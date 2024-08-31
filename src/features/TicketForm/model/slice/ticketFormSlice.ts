import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface TicketFormState {
  from: { id: string; name: string } | null;
  to: { id: string; name: string } | null;
  departureDate: string;
  returnDate: string;
}

export const initialState: TicketFormState = {
  from: null,
  to: null,
  departureDate: '',
  returnDate: '',
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
    },

    setToCity: (state, action: PayloadAction<{ id: string; name: string }>) => {
      state.to = action.payload;
    },
  },
});

export const { setTicketForm, setFromCity, setToCity } =
  ticketFormSlice.actions;
export const ticketFormReducer = ticketFormSlice.reducer;
