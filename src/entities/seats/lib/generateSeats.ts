import {
  WagonClass,
  secondClassSeats,
  thridClassSeats,
} from '@shared/ui/TrainSchema';
import { Seats } from '../model/types/seats';
import { type SpecificPlace } from '../model/slice/seatsSlice';

const countSeatsByClass = {
  first: 18,
  second: 32,
  third: 48,
  fourth: 62,
};

const randomInteger = (min: number, max: number) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

interface SeatsState extends Omit<Seats, 'seats'> {
  seats: Record<number, SpecificPlace>;
}

const getSeatPlacement = (wagonClass: WagonClass, seatNumber: number) => {
  let isBottom;
  let isTop;
  switch (wagonClass) {
    case 'first':
      isBottom = true;
      break;
    case 'second':
      isBottom = secondClassSeats.bottom.includes(seatNumber);
      isTop = !isBottom;
      break;
    case 'third':
      isBottom = thridClassSeats.bottom.includes(seatNumber);
      isTop = thridClassSeats.top.includes(seatNumber);
      break;
  }
  if (isBottom) {
    return 'bottom';
  }
  if (isTop) {
    return 'top';
  }
  return 'side';
};

export const generateSeats = (seatsInfo: Seats[]) => {
  const availableCoachNumbers = Array.from(
    { length: 15 },
    (v, index) => index + 1,
  );

  const updatedInfo = seatsInfo.reduce(
    (acc: Record<WagonClass, SeatsState[]>, info: Seats) => {
      const countAvailableSeats = info.coach.available_seats;
      const wagonClass = info.coach.class_type;
      const seatsPlacementInfo = { top: 0, bottom: 0, side: 0 };
      const allSeats = Array.from(
        { length: countSeatsByClass[wagonClass] },
        (v, index) => index + 1,
      );
      const availableSeats: Record<number, SpecificPlace> = {};
      for (let i = 1; i <= countAvailableSeats; i++) {
        const randomSeatIndex = randomInteger(0, allSeats.length - 1);
        const seat = allSeats.splice(randomSeatIndex, 1)[0];
        const seatPlacement = getSeatPlacement(wagonClass, seat);
        availableSeats[seat] = { available: true, placement: seatPlacement };
        seatsPlacementInfo[seatPlacement] += 1;
      }

      const randomCoachIndex = randomInteger(
        0,
        availableCoachNumbers.length - 1,
      );
      info.coach.seatsCount = seatsPlacementInfo;
      info.coach.coachNumber = availableCoachNumbers.splice(
        randomCoachIndex,
        1,
      )[0];
      if (!acc[wagonClass]) {
        acc[wagonClass] = [{ coach: info.coach, seats: availableSeats }];
        return acc;
      }
      acc[wagonClass].push({ coach: info.coach, seats: availableSeats });
      return acc;
    },
    {} as Record<WagonClass, SeatsState[]>,
  );

  return updatedInfo;
};
