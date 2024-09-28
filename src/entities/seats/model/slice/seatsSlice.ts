import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Direction } from '@shared/types/direction';
import { type Seats } from '../types/seats';
import { RouteFilters } from '@entities/routes';

interface SeatsState {
  departureInfo: Direction | null;
  arrivalInfo: Direction | null;
  departureSeats: Seats | null;
  arrivalSeats: Seats | null;
  seatsFilters: Partial<RouteFilters>;
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
  seatsFilters: {},
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
    setSavedRouteFilters: (
      state,
      action: PayloadAction<Partial<RouteFilters>>,
    ) => {
      const filters = {
        have_wifi: action.payload.have_wifi,
        have_air_conditioning: action.payload.have_air_conditioning,
      };
      state.seatsFilters = filters;
    },
  },
});

export const { setDeparture, setArrival, setSeats, setSavedRouteFilters } =
  seatsSlice.actions;
export const seatsReducer = seatsSlice.reducer;
