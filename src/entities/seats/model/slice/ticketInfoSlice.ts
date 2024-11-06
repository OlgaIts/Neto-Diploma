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

interface SeatPricePayload {
  wagonNumber: number;
  seat: Record<number, number>;
}

interface CoachTicketInfo {
  coachNumber: number;
  tickets: Record<number, number>; //седушка и цена
  services: Services;
  wagonClass: WagonClass | null;
}

interface DirectionTicketInfo {
  adultCount: number;
  childCount: number;
  childWithoutSeatCount: number;
  coaches: Record<number, CoachTicketInfo>;
  totalPrice: number;
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

export type PersonName = 'adult' | 'child' | 'childWithoutSeat';
interface PersonCountPayload {
  value: number;
  name: PersonName;
}

const initialTicketState: DirectionTicketInfo = {
  adultCount: 0,
  childCount: 0,
  childWithoutSeatCount: 0,
  coaches: {},
  totalPrice: 0,
};

const initialState: TicketTypeState = {
  departureTicket: initialTicketState,
  arrivalTicket: initialTicketState,
};

const seatsTicketInfoSlice = createSlice({
  name: 'ticketType',
  initialState,
  reducers: {
    setPersonCount(state, action: PayloadActionDirection<PersonCountPayload>) {
      const { data: personCount, direction } = action.payload;
      const { name, value } = personCount;
      state[`${direction}Ticket`][`${name}Count`] = value;
    },
    saveServicesPrice(state, action: PayloadActionDirection<ServicePayload>) {
      const { data, direction } = action.payload;
      const { wagonNumber, ...servicesPrice } = data;

      if (!state[`${direction}Ticket`].coaches?.[wagonNumber]) {
        state[`${direction}Ticket`].coaches[wagonNumber] = {
          coachNumber: wagonNumber,
          services: initialServiceState,
          tickets: {},
          wagonClass: 'first',
        };
      }
      const prevState =
        state[`${direction}Ticket`].coaches?.[wagonNumber]?.services;

      state[`${direction}Ticket`].coaches[wagonNumber].services = {
        ...prevState,
        ...servicesPrice,
      };

      state[`${direction}Ticket`].coaches[wagonNumber].services.total =
        state[`${direction}Ticket`].coaches[wagonNumber].services['wi-fi'] +
        state[`${direction}Ticket`].coaches[wagonNumber].services.linens;

      state[`${direction}Ticket`].totalPrice = getTotalPrice(
        state[`${direction}Ticket`].coaches,
      );
    },
    saveSeatPrice(state, action: PayloadActionDirection<SeatPricePayload>) {
      const { data, direction } = action.payload;
      const { seat, wagonNumber } = data;

      if (!state[`${direction}Ticket`].coaches?.[wagonNumber]) {
        state[`${direction}Ticket`].coaches[wagonNumber] = {
          coachNumber: wagonNumber,
          services: initialServiceState,
          tickets: {},
          wagonClass: 'first',
        };
      }

      const prevState =
        state[`${direction}Ticket`].coaches[wagonNumber].tickets;
      state[`${direction}Ticket`].coaches[wagonNumber].tickets = {
        ...prevState,
        ...seat,
      };
      state[`${direction}Ticket`].totalPrice = getTotalPrice(
        state[`${direction}Ticket`].coaches,
      );
    },
    clearTicketState(state) {
      state.arrivalTicket = initialTicketState;
      state.departureTicket = initialTicketState;
    },
  },
});

export const {
  saveServicesPrice,
  saveSeatPrice,
  clearTicketState,
  setPersonCount,
} = seatsTicketInfoSlice.actions;
export const seatsTicketInfoReducer = seatsTicketInfoSlice.reducer;

const getTotalPrice = (coaches: Record<number, CoachTicketInfo>) =>
  Object.tsValues(coaches).reduce((acc, { services, tickets }) => {
    Object.tsValues(tickets).forEach((price) => {
      acc += services.total + price;
    });
    return acc;
  }, 0);
