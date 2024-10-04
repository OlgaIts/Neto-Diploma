import { RootState } from '@app/providers/StoreProvider/store';

export const getAdultCount = (state: RootState) => state.ticketType.adultCount;

export const getChildCount = (state: RootState) => state.ticketType.childCount;

export const getChilddWithoutSeatCount = (state: RootState) =>
  state.ticketType.childWithoutSeatCount;

export const getWagonClass = (state: RootState) => state.ticketType.wagonClass;
