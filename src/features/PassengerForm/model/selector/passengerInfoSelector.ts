import { RootState } from '@app/providers/StoreProvider/store';

export const getPassengers = (state: RootState) =>
  state.passengerInfo.passengers;

export const getPaymentPerson = (state: RootState) =>
  state.passengerInfo.paymentPerson;
