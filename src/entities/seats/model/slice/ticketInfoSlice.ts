import { PayloadActionDirection } from '@shared/types/directionPayload';
import { createSlice } from '@reduxjs/toolkit';
import { type WagonClass } from '../types/wagonClass';

export interface Services {
  'wi-fi': number;
  linens: number;
  total: number;
}

interface ServicePayload extends Partial<Services> {
  wagonNumber: number;
}

interface CoachTicketInfo {
  coachNumber: number;
  tickets: Record<number, number>; //седушка и цена
  totalPrice: number;
  services: Services;
  wagonClass: WagonClass | null;
}

interface DirectionTicketInfo {
  adultCount: number;
  childCount: number;
  childWithoutSeatCount: number;
  coaches: Record<number, CoachTicketInfo>;
  // choosenAdult: number;
  // choosenChild: number;
}

interface TicketTypeState {
  departureTicket: DirectionTicketInfo;
  arrivalTicket: DirectionTicketInfo;
}

const initialServiceState = {
  'wi-fi': 0,
  linens: 0,
  total: 0,
};

const initialTicketState: DirectionTicketInfo = {
  adultCount: 0,
  childCount: 0,
  childWithoutSeatCount: 0,
  coaches: {},
};

const initialState: TicketTypeState = {
  departureTicket: initialTicketState,
  arrivalTicket: initialTicketState,
};

const seatsTicketInfoSlice = createSlice({
  name: 'ticketType',
  initialState,
  reducers: {
    setAdultCount(state, action: PayloadActionDirection<number>) {
      const { data: adultCount, direction } = action.payload;
      state[`${direction}Ticket`].adultCount = adultCount;
    },
    setChildCount(state, action: PayloadActionDirection<number>) {
      const { data: childCount, direction } = action.payload;
      state[`${direction}Ticket`].childCount = childCount;
    },
    setChildWithoutSeatCount(state, action: PayloadActionDirection<number>) {
      const { data: childWithoutSeatCount, direction } = action.payload;
      state[`${direction}Ticket`].childWithoutSeatCount = childWithoutSeatCount;
    },
    saveServicesPrice(state, action: PayloadActionDirection<ServicePayload>) {
      const { data, direction } = action.payload;
      const { wagonNumber, ...servicesPrice } = data;

      if (!state[`${direction}Ticket`].coaches?.[wagonNumber]) {
        state[`${direction}Ticket`].coaches[wagonNumber] = {
          coachNumber: wagonNumber,
          services: initialServiceState,
          tickets: {},
          totalPrice: 0,
          wagonClass: 'first',
        };
      }
      const prevState =
        state[`${direction}Ticket`].coaches?.[wagonNumber]?.services;

      state[`${direction}Ticket`].coaches[wagonNumber].services = {
        ...prevState,
        ...servicesPrice,
      };
    },
  },
});

export const {
  setAdultCount,
  setChildCount,
  setChildWithoutSeatCount,
  saveServicesPrice,
} = seatsTicketInfoSlice.actions;
export const seatsTicketInfoReducer = seatsTicketInfoSlice.reducer;
