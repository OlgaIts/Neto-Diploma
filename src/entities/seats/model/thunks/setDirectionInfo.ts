import { AppDispatch, RootState } from '@app/providers/StoreProvider/store';
import { type Direction } from '@shared/types';
import {
  clearCurrentWagonInfo,
  setCurrentWagonInfo,
  updateSeatState,
} from '../slice/currentDirectionInfo';
import { type WagonClass } from '../types/wagonClass';

interface SetDirection {
  direction: Direction;
  coachNumber?: number;
  wagonClass: WagonClass;
}

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
    const wagonId =
      seatsData[`${direction}Seats`]?.[wagonClass][wagonNumber]?.coach._id;

    const currentSeats = currentWagonsData[wagonNumber];
    if (currentSeats) {
      const { coach, seats } = currentSeats;

      dispatch(
        setCurrentWagonInfo({
          direction,
          data: {
            wagonClass,
            wagonId,
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
