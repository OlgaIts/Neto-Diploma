//TODO: перенести сюда seatsTicketTypeSlice

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface TicketTypeState {
  adultCount: number;
  childCount: number;
  childWithoutSeatCount: number;
  wagonClass: string | null;
}

const initialState: TicketTypeState = {
  adultCount: 0,
  childCount: 0,
  childWithoutSeatCount: 0,
  wagonClass: null,
};

const seatsTicketTypeSlice = createSlice({
  name: 'ticketType',
  initialState,
  reducers: {
    setAdultCount(state, action: PayloadAction<number>) {
      state.adultCount = action.payload;
    },
    setChildCount(state, action: PayloadAction<number>) {
      state.childCount = action.payload;
    },
    setChildWithoutSeatCount(state, action: PayloadAction<number>) {
      state.childWithoutSeatCount = action.payload;
    },
    setWagonClass(state, action: PayloadAction<string>) {
      state.wagonClass = action.payload;
    },
  },
});

export const {
  setAdultCount,
  setChildCount,
  setChildWithoutSeatCount,
  setWagonClass,
} = seatsTicketTypeSlice.actions;
export const seatsTicketTypeReducer = seatsTicketTypeSlice.reducer;
