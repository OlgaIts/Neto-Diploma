import { AppDispatch, RootState } from '@app/providers/StoreProvider/store';
import { createSlice } from '@reduxjs/toolkit';
import { type SpecificPlace, type Direction } from '@shared/types';
import { type PayloadActionDirection } from '@shared/types/directionPayload';
import { type Options } from '../types/serviceOptions';
import { type WagonClass } from '../types/wagonClass';

interface CurrentInfo {
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
  },
});

interface SetDirection {
  direction: Direction;
  coachNumber?: number;
  wagonClass: WagonClass;
}

export const { setCurrentWagonInfo, clearCurrentWagonInfo } =
  currentWagonInfoSlice.actions;

export const setDirectionInfo =
  ({ direction, coachNumber, wagonClass }: SetDirection) =>
  (dispatch: AppDispatch, getState: () => RootState) => {
    const seatsData = getState().seats;
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
              },
              linens: {
                name: 'icon-linens',
                tooltip: 'белье',
                included: !!coach.is_linens_included,
                disabled: !coach.is_linens_included && !coach.linens_price,
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
    }
  };

export const currentWagonInfoReducer = currentWagonInfoSlice.reducer;

// тут появятся 2 селектора, перерабатывать их данные и отправлять в редюсер.

/*

  priceServices: ...
  priceSeats: 3200 + 3400 + (2600)*0.6 = 8000
  count: {
    adults: 2
    children: 1
    childrenWithout: 0
  }

  ticketsInfo : {
    coaches: {
      3: { 
        services: {
          wifi: 200  
          lineans: 300
          total: 500
        },
        tickets: {
          18: 3600,
          20: 3600,
        }
        price: Object.keys(state.).reduce((totalPrice, ticketKey) => tickets[ticketKey] +  state.services.total)
      }
      5: { 
        services: {}, 
        tickets: { 
          19: 2400
        }
        price: 
      }
    },
    choosenAdult:
    choosenChild:  
    persons: { 
      adult: 7
      child:3 
      childWithout:
      total: 7+3
    }
  }

  Цена: Object.keys(ticketsInfo.coaches).reduce((totalPrice, coach) => totalPrice+= coach.price, 0)

  slice seats -> для рендера информации номер выбранного вагона хранить здесь 
    wagonNumber

  slice ticketInfo -> {
    coaches: {
      1: {
        services: {}
        tickets: {}
        price:  
      }
    },
  
  }
*/
