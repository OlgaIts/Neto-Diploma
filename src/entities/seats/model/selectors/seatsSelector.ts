import { RootState } from '@app/providers/StoreProvider/store';
import { type Direction } from '@shared/types';

export const getDepartureInfo = (state: RootState) => state.seats.departureInfo;

export const getArrivalInfo = (state: RootState) => state.seats.arrivalInfo;

export const getDepartureSeats = (state: RootState) =>
  state.seats.departureSeats;

export const getArrivalSeats = (state: RootState) => state.seats.arrivalSeats;

export const getSavedRouteFilters = (state: RootState) =>
  state.seats.seatsFilters;

export const getSeatsInfo = (direction: Direction) => (state: RootState) =>
  state.seats[`${direction}Info`];
