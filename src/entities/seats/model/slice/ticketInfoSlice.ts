//TODO: перенести сюда seatsTicketTypeSlice

import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type Direction } from '@shared/types';
import { type WagonClass } from '../types/wagonClass';

interface DirectionTicketInfo {
  wagonClass: WagonClass | null;
  coachNumber: number | null;
  seats: Record<number, number> | null; // первый number(ключ) - номер сиденья, второй - значение(ценa)
}

interface TicketTypeState {
  adultCount: number;
  childCount: number;
  childWithoutSeatCount: number;
  departureTicket: DirectionTicketInfo;
  arrivalTicket: DirectionTicketInfo;
}

const initialTicketState: DirectionTicketInfo = {
  wagonClass: null,
  coachNumber: null,
  seats: null,
};

interface WagonClassPayload {
  direction: Direction;
  wagonClass: WagonClass;
}

interface CoachNumberPayload {
  direction: Direction;
  coachNumber: number;
}
const initialState: TicketTypeState = {
  adultCount: 0,
  childCount: 0,
  childWithoutSeatCount: 0,
  departureTicket: initialTicketState,
  arrivalTicket: initialTicketState,
};

const seatsTicketInfoSlice = createSlice({
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
    setWagonClass(state, action: PayloadAction<WagonClassPayload>) {
      const { wagonClass, direction } = action.payload;
      state[`${direction}Ticket`].wagonClass = wagonClass;
    },
    setCoachNumber(state, action: PayloadAction<CoachNumberPayload>) {
      const { coachNumber, direction } = action.payload;
      state[`${direction}Ticket`].coachNumber = coachNumber;
    },
  },
});

export const {
  setAdultCount,
  setChildCount,
  setChildWithoutSeatCount,
  setWagonClass,
  setCoachNumber,
} = seatsTicketInfoSlice.actions;
export const seatsTicketInfoReducer = seatsTicketInfoSlice.reducer;
