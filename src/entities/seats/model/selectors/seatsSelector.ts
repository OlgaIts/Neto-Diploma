import { RootState } from '@app/providers/StoreProvider/store';

export const getDepartureInfo = (state: RootState) => state.seats.departureInfo;

export const getArrivalInfo = (state: RootState) => state.seats.arrivalInfo;

export const getDepartureSeats = (state: RootState) =>
  state.seats.departureSeats;

export const getArrivalSeats = (state: RootState) => state.seats.arrivalSeats;

export const getSavedRouteFilters = (state: RootState) =>
  state.seats.seatsFilters;
