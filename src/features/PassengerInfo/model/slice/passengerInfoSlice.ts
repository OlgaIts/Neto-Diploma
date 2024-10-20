import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface FullNamePayload {
  lastName?: string;
  firstName?: string;
  middleName?: string;
}

interface passengerInfoState {
  passengerType: string;
  fullName: FullNamePayload;
  birthday: string;
  documentType: string;
  passSeries: string;
  passNumber: string;
  birthNumber: string;
}

const initialState: passengerInfoState = {
  passengerType: '',
  fullName: {
    lastName: '',
    firstName: '',
    middleName: '',
  },
  birthday: '',
  documentType: '',
  passSeries: '',
  passNumber: '',
  birthNumber: '',
};

const passengerInfoSlice = createSlice({
  name: 'passengerInfo',
  initialState,
  reducers: {
    setPassengerType: (state, action: PayloadAction<string>) => {
      state.passengerType = action.payload;
    },
    setFullName: (state, action: PayloadAction<FullNamePayload>) => {
      state.fullName = { ...state.fullName, ...action.payload };
    },
    setBirthday: (state, action: PayloadAction<string>) => {
      state.birthday = action.payload;
    },
    setDocumentType: (state, action: PayloadAction<string>) => {
      state.documentType = action.payload;
    },
    setPassSeries: (state, action: PayloadAction<string>) => {
      state.passSeries = action.payload;
    },
    setPassNumber: (state, action: PayloadAction<string>) => {
      state.passNumber = action.payload;
    },
    setBirthNumber: (state, action: PayloadAction<string>) => {
      state.birthNumber = action.payload;
    },
  },
});

export const {
  setPassengerType,
  setFullName,
  setBirthday,
  setDocumentType,
  setPassSeries,
  setPassNumber,
  setBirthNumber,
} = passengerInfoSlice.actions;
export const passengerInfoReducer = passengerInfoSlice.reducer;
