import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type PaymentPerson } from '@features/PaymentPersonForm';
import { type Passenger } from '../../../PassengerForm/types/passenger';

interface PassengerState {
  passengers: Record<number, Passenger>;
  paymentPerson: PaymentPerson;
}

const initialState: PassengerState = {
  passengers: {},
  paymentPerson: {
    firstName: '',
    lastName: '',
    middleName: '',
    phone: '',
    email: '',
    payment_method: 'cash',
  },
};

const passengerInfoSlice = createSlice({
  name: 'passengerInfo',
  initialState,
  reducers: {
    savePassengers: (
      state,
      action: PayloadAction<{ id: number; passenger: Passenger }>,
    ) => {
      const { id, passenger } = action.payload;
      state.passengers[id] = passenger;
    },
    savePaymentPerson: (state, action: PayloadAction<PaymentPerson>) => {
      state.paymentPerson = action.payload;
    },
  },
});

export const { savePassengers, savePaymentPerson } = passengerInfoSlice.actions;
export const passengerInfoReducer = passengerInfoSlice.reducer;
