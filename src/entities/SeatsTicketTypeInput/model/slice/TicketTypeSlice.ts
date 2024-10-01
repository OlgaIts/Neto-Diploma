import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface TicketTypeState {
  adultCount: number | null;
  childCount: number | null;
  childWithoutSeatCount: number | null;
}

const initialState: TicketTypeState = {
  adultCount: null,
  childCount: null,
  childWithoutSeatCount: null,
};

const seatsTicketTypeSlice = createSlice({
  name: 'ticketType',
  initialState,
  reducers: {
    setAdultCount(state, action: PayloadAction<number | null>) {
      state.adultCount = action.payload;
    },
    setChildCount(state, action: PayloadAction<number | null>) {
      state.childCount = action.payload;
    },
    setChildWithoutSeatCount(state, action: PayloadAction<number | null>) {
      state.childWithoutSeatCount = action.payload;
    },
  },
});

export const { setAdultCount, setChildCount, setChildWithoutSeatCount } =
  seatsTicketTypeSlice.actions;
export const seatsTicketTypeReducer = seatsTicketTypeSlice.reducer;
