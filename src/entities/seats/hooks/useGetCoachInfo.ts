import { useAppSelector } from '@shared/lib/hooks/useReduxHooks';
import { type Direction } from '@shared/types';
import {
  getArrivalSeats,
  getDepartureSeats,
} from '../model/selectors/seatsSelector';
import {
  getArrivalTicket,
  getDepartureTicket,
} from '../model/selectors/ticketInfoSelector';

export const useGetCoachInfo = (direction: Direction) => {
  const isDeparture = direction === 'departure';
  const getSeats = isDeparture ? getDepartureSeats : getArrivalSeats;
  const getTicket = isDeparture ? getDepartureTicket : getArrivalTicket;

  const seats = useAppSelector(getSeats);
  const ticketInfo = useAppSelector(getTicket);
  const {
    wagonClass,
    coachNumber: wagonNumber,
    seats: wagonSeats,
  } = ticketInfo;

  const currentSeats = seats && wagonClass ? seats[wagonClass] : null;
  const currentWagonSeats =
    currentSeats &&
    currentSeats.find(({ coach }) => coach.coachNumber === wagonNumber);

  return {
    currentSeats,
    currentWagonSeats,
    wagonClass,
    wagonNumber,
    wagonSeats,
  };
};
