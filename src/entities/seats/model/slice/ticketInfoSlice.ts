import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type WagonClass } from '../types/wagonClass';

interface Services {
  wifi: number;
  lineans: number;
  total: number;
}

type Tickets = Record<number, number>;
interface DirectionTicketInfo {
  wagonClass: WagonClass | null;
  coachNumber: number | null;
  seats: Record<number, number> | null; // первый number(ключ) - номер сиденья, второй - значение(ценa)

  // coaches: Record<
  //   number,
  //   { services: Services; tickets: Tickets; price: number }
  // >;
  // choosenAdult: number;
  // choosenChild: number;
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
    // будут PayloadActionDirection
    setAdultCount(state, action: PayloadAction<number>) {
      // const { data: adultCount , direction } = action.payload;
      // state[]
      state.adultCount = action.payload;
    },
    
    //??
    // setAdultCount(state, action: PayloadAction<number>) {
    //   const { data: adultCount, direction } = action.payload;
    //   state[`${direction}Ticket`].adultCount = adultCount;
    // },

    setChildCount(state, action: PayloadAction<number>) {
      state.childCount = action.payload;
    },
    setChildWithoutSeatCount(state, action: PayloadAction<number>) {
      state.childWithoutSeatCount = action.payload;
    },
  },
});

export const { setAdultCount, setChildCount, setChildWithoutSeatCount } =
  seatsTicketInfoSlice.actions;
export const seatsTicketInfoReducer = seatsTicketInfoSlice.reducer;
