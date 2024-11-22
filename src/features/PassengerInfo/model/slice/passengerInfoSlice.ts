import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { type Passenger } from '../../types/passenger';

interface PassengerState {
  passengers: Record<number, Passenger>;
}

const initialState: PassengerState = {
  passengers: {},
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
  },
});

export const { savePassengers } = passengerInfoSlice.actions;
export const passengerInfoReducer = passengerInfoSlice.reducer;
