import { createSlice } from '@reduxjs/toolkit';
import { type PayloadActionDirection } from '@shared/types/directionPayload';
import { type Options } from '../types/serviceOptions';
import { type WagonClass } from '../types/wagonClass';
import { type CurrentInfo } from '../types/CurrentInfo';

interface CurrentDirectionInfoState {
  departure: CurrentInfo | null;
  arrival: CurrentInfo | null;
  departureWagonClass?: WagonClass;
  arrivalWagonClass?: WagonClass;
}

const initialState: CurrentDirectionInfoState = {
  departure: null,
  arrival: null,
};

type ServicePayload = Record<string, Options>;
interface UpdateSeatStatePayload {
  seatNumber: number;
  isActive: boolean;
}

const currentWagonInfoSlice = createSlice({
  name: 'currentWagonInfo',
  initialState,
  reducers: {
    setCurrentWagonInfo(state, action: PayloadActionDirection<CurrentInfo>) {
      const { direction, data: info } = action.payload;
      state[direction] = info;
    },
    clearCurrentWagonInfo(state, action: PayloadActionDirection<WagonClass>) {
      const { direction, data: wagonClass } = action.payload;
      state[direction] = { wagonClass };
    },
    updateServiceState(state, action: PayloadActionDirection<ServicePayload>) {
      const { data: serviceState, direction } = action.payload;
      if (!state[direction]) {
        return;
      }
      const prevState = state[direction].services;
      state[direction].services = { ...prevState, ...serviceState };
    },
    updateSeatState(
      state,
      action: PayloadActionDirection<UpdateSeatStatePayload>,
    ) {
      const { data, direction } = action.payload;
      if (!state[direction] || !state[direction].seats) {
        return;
      }
      const { seatNumber, isActive } = data;
      state[direction].seats[seatNumber].active = isActive;
    },
    clearCurrentInfoState(state) {
      state.arrival = null;
      state.departure = null;
      state.arrivalWagonClass = undefined;
      state.departureWagonClass = undefined;
    },
    clearActiveSeats(state, action: PayloadActionDirection<number[]>) {
      const { data: seats, direction } = action.payload;
      seats.forEach((seatNumber: number) => {
        if (!state[direction]?.seats) {
          return;
        }
        state[direction].seats[seatNumber].active = false;
      });
    },
  },
});

export const {
  setCurrentWagonInfo,
  clearCurrentWagonInfo,
  updateServiceState,
  updateSeatState,
  clearCurrentInfoState,
  clearActiveSeats,
} = currentWagonInfoSlice.actions;

export const currentWagonInfoReducer = currentWagonInfoSlice.reducer;
