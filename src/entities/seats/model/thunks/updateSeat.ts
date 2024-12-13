import { AppDispatch, RootState } from '@app/providers/StoreProvider/store';
import { withOneSeatType } from '@entities/seats/lib/withOneSeatType';
import { type Direction } from '@shared/types';
import { updateSeatState } from '../slice/currentDirectionInfo';
import { saveSeatPrice } from '../slice/ticketInfoSlice';

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
    const wagonId = currentInfo?.wagonId;

    if (!wagonNumber || !wagonClass || !wagonId) {
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
    const isChildSeat = totalSeatsCount + 1 > adultCount;
    const currentPrice = isChildSeat
      ? (seatPrice * 0.55).toFixed(2)
      : seatPrice;

    dispatch(
      saveSeatPrice({
        direction,
        data: {
          wagonNumber,
          wagonId,
          wagonClass,
          seat: {
            [seatNumber]: {
              price: newSeatActiveState ? Number(currentPrice) : 0,
              isChildSeat,
            },
          },
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
