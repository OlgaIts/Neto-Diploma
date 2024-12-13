import { AppDispatch, RootState } from '@app/providers/StoreProvider/store';
import { type Direction } from '@shared/types';
import {
  clearTicketState,
  setPersonCount,
  type PersonName,
} from '../slice/ticketInfoSlice';
import { clearActiveSeats } from '../slice/currentDirectionInfo';

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
