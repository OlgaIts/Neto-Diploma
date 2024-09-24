import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Direction } from '@shared/types/direction';

interface SeatsState {
  departureInfo: Direction | null;
  arrivalInfo: Direction | null;
}

const initialState: SeatsState = {
  departureInfo: null,
  arrivalInfo: null,
};

const seatsSlice = createSlice({
  name: 'seats',
  initialState,
  reducers: {
    setDeparture: (state, action: PayloadAction<Direction>) => {
      state.departureInfo = action.payload;
    },
    setArrival: (state, action: PayloadAction<Direction>) => {
      state.arrivalInfo = action.payload;
    },
  },
});

export const { setDeparture, setArrival } = seatsSlice.actions;
export const seatsReducer = seatsSlice.reducer;
