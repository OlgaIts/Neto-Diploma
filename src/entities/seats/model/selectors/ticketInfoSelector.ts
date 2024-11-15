import { RootState } from '@app/providers/StoreProvider/store';
import { Direction } from '@shared/types';

export const getAdultCount = (direction: Direction) => (state: RootState) =>
  state.ticketInfo[`${direction}Ticket`].adultCount;

export const getChildCount = (direction: Direction) => (state: RootState) =>
  state.ticketInfo[`${direction}Ticket`].childCount;

export const getChilddWithoutSeatCount =
  (direction: Direction) => (state: RootState) =>
    state.ticketInfo[`${direction}Ticket`].childWithoutSeatCount;

export const getDepartureTicket = (state: RootState) =>
  state.ticketInfo.departureTicket;

export const getArrivalTicket = (state: RootState) =>
  state.ticketInfo.arrivalTicket;

export const getTotalTicketPrice =
  (direction: Direction) => (state: RootState) =>
    state.ticketInfo[`${direction}Ticket`].totalPrice;

export const getSeatsLimit = (direction: Direction) => (state: RootState) =>
  state.ticketInfo[`${direction}Ticket`].childCount +
  state.ticketInfo[`${direction}Ticket`].adultCount;

export const getSeatCount = (direction: Direction) => (state: RootState) =>
  state.ticketInfo[`${direction}Ticket`].totalSeatsCount;
