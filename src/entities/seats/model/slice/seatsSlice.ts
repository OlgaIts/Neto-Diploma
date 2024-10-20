import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type Direction, DirectionDetails } from '@shared/types/direction';
import { type SpecificPlace } from '@shared/types';
import { RouteFilters } from '@entities/routes';
import { generateSeats } from '../../lib/generateSeats';
import { type WagonClass } from '../types/wagonClass';
import { type Seats } from '../types/seats';

export interface NormalizedCoachData {
  coach: CoachStateInfo;
  seats: Record<number, SpecificPlace>;
}

export interface CoachStateInfo {
  _id: string;
  have_wifi?: boolean;
  have_air_conditioning?: boolean;
  price?: number;
  top_price?: number;
  bottom_price?: number;
  side_price?: number;
  linens_price?: number;
  wifi_price?: number;
  is_linens_included?: boolean;
  coachNumber: number;
  available_seats: number;
  seatsCount: {
    top?: number;
    bottom?: number;
    side?: number;
  };
}

interface SeatsState {
  departureInfo: DirectionDetails | null;
  arrivalInfo: DirectionDetails | null;
  departureSeats: Record<
    WagonClass,
    Record<number, NormalizedCoachData>
  > | null;
  arrivalSeats: Record<WagonClass, Record<number, NormalizedCoachData>> | null;
  seatsFilters: Partial<RouteFilters>;
}

interface SeatsPayload {
  seats: Seats[];
  direction: Direction;
}

// interface CoachNumberPayload {
//   direction: Direction;
//   coachNumber: number;
// }

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
