import { RootState } from '@app/providers/StoreProvider/store';

export const getPassengerType = (state: RootState) =>
  state.passengerInfo.passengerType;

export const getFullName = (state: RootState) => state.passengerInfo.fullName;

export const getBirthday = (state: RootState) => state.passengerInfo.birthday;

export const getDocumentType = (state: RootState) =>
  state.passengerInfo.documentType;

export const getPassSeries = (state: RootState) =>
  state.passengerInfo.passSeries;

export const getPassNumber = (state: RootState) =>
  state.passengerInfo.passNumber;

export const getBirthNumber = (state: RootState) =>
  state.passengerInfo.birthNumber;
