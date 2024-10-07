import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type Direction, DirectionDetails } from '@shared/types/direction';
import { RouteFilters } from '@entities/routes';
import { WagonClass } from '@shared/ui/WagonClassSchemes';
import { generateSeats } from '../../lib/generateSeats';
import { type Seats } from '../types/seats';

export interface SpecificPlace {
  available: boolean;
  placement: 'bottom' | 'top' | 'side';
}
export interface NormalizedSeats extends Omit<Seats, 'seats'> {
  seats: Record<number, SpecificPlace>;
}

interface SeatsState {
  departureInfo: DirectionDetails | null;
  arrivalInfo: DirectionDetails | null;
  departureSeats: Record<WagonClass, NormalizedSeats[]> | null;
  arrivalSeats: Record<WagonClass, NormalizedSeats[]> | null;
  seatsFilters: Partial<RouteFilters>;
}

interface SeatsPayload {
  seats: Seats[];
  direction: Direction;
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
    setDeparture: (state, action: PayloadAction<DirectionDetails>) => {
      state.departureInfo = action.payload;
    },
    setArrival: (state, action: PayloadAction<DirectionDetails>) => {
      state.arrivalInfo = action.payload;
    },
    setSeats: (state, action: PayloadAction<SeatsPayload>) => {
      const { direction, seats } = action.payload;
      state[`${direction}Seats`] = generateSeats(seats);
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
