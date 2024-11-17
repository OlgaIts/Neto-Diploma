import { AppDispatch, RootState } from '@app/providers/StoreProvider/store';
import { createSlice } from '@reduxjs/toolkit';
import {
  clearTicketState,
  PersonName,
  saveSeatPrice,
  saveServicesPrice,
  setPersonCount,
} from './ticketInfoSlice';
import { type SpecificPlace, type Direction } from '@shared/types';
import { type PayloadActionDirection } from '@shared/types/directionPayload';
import { type Options } from '../types/serviceOptions';
import { type WagonClass } from '../types/wagonClass';
import { withOneSeatType } from '@entities/seats/lib/withOneSeatType';

export interface CurrentInfo {
  wagonNumber?: number;
  available_seats?: number;
  top?: number;
  side?: number;
  bottom?: number;
  top_price?: number;
  bottom_price?: number;
  side_price?: number;
  price?: number;
  services?: Record<string, Options>;
  wagonList?: number[];
  wagonClass: WagonClass;
  seats?: Record<number, SpecificPlace>;
}

interface CurrentDirectionInfoState {
  departure: CurrentInfo | null;
  arrival: CurrentInfo | null;
  departureWagonClass?: WagonClass;
  arrivalWagonClass?: WagonClass;
}

const initialState: CurrentDirectionInfoState = {
  departure: null,
  arrival: null,
};

type ServicePayload = Record<string, Options>;
interface UpdateSeatStatePayload {
  seatNumber: number;
  isActive: boolean;
}

const currentWagonInfoSlice = createSlice({
  name: 'currentWagonInfo',
  initialState,
  reducers: {
    setCurrentWagonInfo(state, action: PayloadActionDirection<CurrentInfo>) {
      const { direction, data: info } = action.payload;
      state[direction] = info;
    },
    clearCurrentWagonInfo(state, action: PayloadActionDirection<WagonClass>) {
      const { direction, data: wagonClass } = action.payload;
      state[direction] = { wagonClass };
    },
    updateServiceState(state, action: PayloadActionDirection<ServicePayload>) {
      const { data: serviceState, direction } = action.payload;
      if (!state[direction]) {
        return;
      }
      const prevState = state[direction].services;
      state[direction].services = { ...prevState, ...serviceState };
    },
    updateSeatState(
      state,
      action: PayloadActionDirection<UpdateSeatStatePayload>,
    ) {
      const { data, direction } = action.payload;
      if (!state[direction] || !state[direction].seats) {
        return;
      }
      const { seatNumber, isActive } = data;
      state[direction].seats[seatNumber].active = isActive;
    },
    clearCurrentInfoState(state) {
      state.arrival = null;
      state.departure = null;
      state.arrivalWagonClass = undefined;
      state.departureWagonClass = undefined;
    },
    clearActiveSeats(state, action: PayloadActionDirection<number[]>) {
      const { data: seats, direction } = action.payload;
      seats.forEach((seatNumber: number) => {
        if (!state[direction]?.seats) {
          return;
        }
        state[direction].seats[seatNumber].active = false;
      });
    },
  },
});

interface SetDirection {
  direction: Direction;
  coachNumber?: number;
  wagonClass: WagonClass;
}

export const {
  setCurrentWagonInfo,
  clearCurrentWagonInfo,
  updateServiceState,
  updateSeatState,
  clearCurrentInfoState,
  clearActiveSeats,
} = currentWagonInfoSlice.actions;

export const setDirectionInfo =
  ({ direction, coachNumber, wagonClass }: SetDirection) =>
  (dispatch: AppDispatch, getState: () => RootState) => {
    const seatsData = getState().seats;
    const ticketData = getState().ticketInfo;
    const ticketServices =
      coachNumber &&
      ticketData[`${direction}Ticket`]?.coaches?.[coachNumber]?.services;

    const ticketSeats =
      coachNumber &&
      ticketData[`${direction}Ticket`]?.coaches?.[coachNumber]?.tickets;

    if (!seatsData) {
      return;
    }

    const currentWagonsData = seatsData[`${direction}Seats`]?.[wagonClass];
    if (!currentWagonsData) {
      dispatch(clearCurrentWagonInfo({ direction, data: wagonClass }));
      return;
    }
    const wagonNumber = coachNumber || Object.tsKeys(currentWagonsData)[0];
    const currentSeats = currentWagonsData[wagonNumber];
    if (currentSeats) {
      const { coach, seats } = currentSeats;

      dispatch(
        setCurrentWagonInfo({
          direction,
          data: {
            wagonClass,
            wagonList: Object.tsKeys(currentWagonsData),
            wagonNumber,
            available_seats: coach.available_seats,
            top: coach.seatsCount.top,
            bottom: coach.seatsCount.bottom,
            side: coach.seatsCount.side,
            top_price: coach.top_price,
            bottom_price: coach.bottom_price,
            side_price: coach.side_price,
            price: coach.price,
            services: {
              conditioner: {
                name: 'icon-conditioner',
                tooltip: 'кондиционер',
                included: !!coach.have_air_conditioning,
                disabled: !coach.have_air_conditioning,
              },
              'wi-fi': {
                name: 'icon-wi-fi',
                tooltip: 'Wi-Fi',
                included: false,
                disabled: !coach.have_wifi && !coach.wifi_price,
                price: coach.wifi_price,
                active: !!(ticketServices && ticketServices['wi-fi']),
              },
              linens: {
                name: 'icon-linens',
                tooltip: 'белье',
                included: !!coach.is_linens_included,
                disabled: !coach.is_linens_included && !coach.linens_price,
                price: coach.linens_price,
                active: !!(ticketServices && ticketServices.linens),
              },
              caffee: {
                name: 'icon-caffee',
                tooltip: 'питание',
                included: true,
                disabled: !coach.is_linens_included,
              },
            },
            seats,
          },
        }),
      );
      ticketSeats &&
        Object.tsKeys(ticketSeats).map((seatNumber) => {
          if (ticketSeats?.[seatNumber]) {
            dispatch(
              updateSeatState({
                direction,
                data: { isActive: true, seatNumber },
              }),
            );
          }
        });
    }
  };

interface SetService {
  service: string;
  direction: Direction;
}

export const updateService =
  ({ direction, service }: SetService) =>
  (dispatch: AppDispatch, getState: () => RootState) => {
    const currentInfo = getState().currentWagonInfo[direction];
    const currentService = currentInfo?.services?.[service];

    if (!currentService || !['wi-fi', 'linens'].includes(service)) {
      return;
    }

    const wagonNumber = currentInfo.wagonNumber;
    const wagonClass = currentInfo.wagonClass;
    const price = currentService.price;

    if (!price || !wagonNumber) {
      return;
    }

    const booleanActive = !currentService.active;
    const updatedService: Options = {
      ...currentService,
      active: booleanActive,
    };

    dispatch(
      updateServiceState({ direction, data: { [service]: updatedService } }),
    );

    dispatch(
      saveServicesPrice({
        direction,
        data: {
          [service]: booleanActive ? currentService.price : 0,
          wagonNumber,
          wagonClass,
        },
      }),
    );
  };

interface updateSeat {
  seatNumber: number;
  direction: Direction;
}

export const updateSeat =
  ({ direction, seatNumber }: updateSeat) =>
  (dispatch: AppDispatch, getState: () => RootState) => {
    const currentInfo = getState().currentWagonInfo[direction];
    const ticketInfo = getState().ticketInfo[`${direction}Ticket`];
    const wagonNumber = currentInfo?.wagonNumber;
    const seatPlacement = currentInfo?.seats?.[seatNumber].placement;
    const wagonClass = currentInfo?.wagonClass;

    if (!wagonNumber || !wagonClass) {
      return;
    }

    const onePersonsClassesPrice =
      withOneSeatType(wagonClass) && currentInfo.price;
    const recentClassesPrice =
      seatPlacement && currentInfo[`${seatPlacement}_price`];
    const seatPrice = onePersonsClassesPrice || recentClassesPrice;

    if (!seatPrice) {
      return;
    }

    const newSeatActiveState = !currentInfo?.seats?.[seatNumber].active;
    const { adultCount, totalSeatsCount } = ticketInfo;
    const currentPrice =
      totalSeatsCount + 1 > adultCount
        ? (seatPrice * 0.55).toFixed(2)
        : seatPrice;

    console.log(currentPrice);

    dispatch(
      saveSeatPrice({
        direction,
        data: {
          wagonNumber,
          wagonClass,
          seat: { [seatNumber]: newSeatActiveState ? Number(currentPrice) : 0 },
        },
      }),
    );

    dispatch(
      updateSeatState({
        direction,
        data: { isActive: newSeatActiveState, seatNumber },
      }),
    );
  };

interface ChangePersonCount {
  personCount: number;
  passengerCategory: PersonName;
  direction: Direction;
}

export const changePersonCount =
  ({ direction, personCount, passengerCategory }: ChangePersonCount) =>
  (dispatch: AppDispatch, getState: () => RootState) => {
    const { coaches } = getState().ticketInfo[`${direction}Ticket`];
    const currentCoach = getState().currentWagonInfo[direction]?.wagonNumber;

    if (currentCoach && coaches[currentCoach]) {
      const { tickets } = coaches[currentCoach];

      tickets &&
        Object.tsKeys(tickets).length &&
        dispatch(clearActiveSeats({ direction, data: Object.tsKeys(tickets) }));
      dispatch(clearTicketState());
    }

    dispatch(
      setPersonCount({
        data: {
          value: Number(personCount),
          name: passengerCategory,
        },
        direction,
      }),
    );
  };

export const currentWagonInfoReducer = currentWagonInfoSlice.reducer;
