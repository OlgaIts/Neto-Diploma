import { RootState } from '@app/providers/StoreProvider/store';

export const getAdultCount = (state: RootState) => state.ticketInfo.adultCount;

export const getChildCount = (state: RootState) => state.ticketInfo.childCount;

export const getChilddWithoutSeatCount = (state: RootState) =>
  state.ticketInfo.childWithoutSeatCount;

export const getDepartureTicket = (state: RootState) =>
  state.ticketInfo.departureTicket;

export const getArrivalTicket = (state: RootState) =>
  state.ticketInfo.arrivalTicket;
