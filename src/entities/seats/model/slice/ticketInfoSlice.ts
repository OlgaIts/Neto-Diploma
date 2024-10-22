import { PayloadActionDirection } from '@shared/types/directionPayload';
import { createSlice } from '@reduxjs/toolkit';
import { type WagonClass } from '../types/wagonClass';

export interface Services {
  wifi: number;
  lineans: number;
  total: number;
}

type ServicePayload = Partial<Services>;

type Tickets = Record<number, number>;
interface DirectionTicketInfo {
  adultCount: number;
  childCount: number;
  childWithoutSeatCount: number;
  wagonClass: WagonClass | null;
  coachNumber: number | null;
  seats: Record<number, number> | null; // первый number(ключ) - номер сиденья, второй - значение(ценa)
  services: Services | null;

  // coaches: Record<
  //   number,
  //   { services: Services; tickets: Tickets; price: number }
  // >;
  // choosenAdult: number;
  // choosenChild: number;
}

interface TicketTypeState {
  departureTicket: DirectionTicketInfo;
  arrivalTicket: DirectionTicketInfo;
}

const initialTicketState: DirectionTicketInfo = {
  adultCount: 0,
  childCount: 0,
  childWithoutSeatCount: 0,
  wagonClass: null,
  coachNumber: null,
  seats: null,
  services: null,
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
      const { data: dataServicePrice, direction } = action.payload;
      const prevState = state[`${direction}Ticket`].services;

      if (!prevState) {
        return;
      }

      state[`${direction}Ticket`].services = {
        ...prevState,
        // ...dataServicePrice,
        wifi: dataServicePrice.wifi ?? prevState.wifi,
        lineans: dataServicePrice.lineans ?? prevState.lineans,
        total: dataServicePrice.total ?? prevState.total,
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
