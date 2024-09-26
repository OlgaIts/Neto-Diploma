import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Direction } from '@shared/types/direction';
import { type Seats } from '../types/seats';

interface SeatsState {
  departureInfo: Direction | null;
  arrivalInfo: Direction | null;
  departureSeats: Seats | null;
  arrivalSeats: Seats | null;
}

interface SeatsPayload {
  seats: Seats;
  direction: 'departure' | 'arrival';
}

const initialState: SeatsState = {
  departureInfo: null,
  arrivalInfo: null,
  departureSeats: null,
  arrivalSeats: null,
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
    setSeats: (state, action: PayloadAction<SeatsPayload>) => {
      const { direction, seats } = action.payload;
      state[`${direction}Seats`] = seats;
    },
  },
});

export const { setDeparture, setArrival, setSeats } = seatsSlice.actions;
export const seatsReducer = seatsSlice.reducer;
