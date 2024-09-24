import { RootState } from '@app/providers/StoreProvider/store';

export const getDepartureInfo = (state: RootState) => state.seats.departureInfo;

export const getArrivalInfo = (state: RootState) => state.seats.arrivalInfo;
