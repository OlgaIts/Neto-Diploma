import {
  secondClassSeats,
  thridClassSeats,
} from '@shared/ui/WagonClassSchemes';
import { NormalizedCoachData } from '../model/slice/seatsSlice';
import { Seats } from '../model/types/seats';
import { type WagonClass } from '../model/types/wagonClass';
import { type SpecificPlace } from '@shared/types';

const countSeatsByClass = {
  first: 18,
  second: 32,
  third: 48,
  fourth: 62,
};

const randomInteger = (min: number, max: number) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const seatPlacementFunctions: Record<
  WagonClass,
  (seatNumber: number) => 'top' | 'bottom' | 'side' | null
> = {
  first: () => null,
  second: (seatNumber) =>
    secondClassSeats.bottom.includes(seatNumber) ? 'bottom' : 'top',
  third: (seatNumber) =>
    thridClassSeats.bottom.includes(seatNumber)
      ? 'bottom'
      : thridClassSeats.top.includes(seatNumber)
        ? 'top'
        : 'side',
  fourth: () => null,
};

export const generateSeats = (seatsInfo: Seats[]) => {
  const availableCoachNumbers = Array.from(
    { length: 15 },
    (v, index) => index + 1,
  );

  const updatedInfo = seatsInfo.reduce(
    (
      acc: Record<WagonClass, Record<number, NormalizedCoachData>>,
      info: Seats,
    ) => {
      const {
        _id,
        bottom_price,
        class_type,
        have_air_conditioning,
        is_linens_included,
        linens_price,
        price,
        top_price,
        wifi_price,
        have_wifi,
        side_price,
        available_seats,
      } = info.coach;

      const allSeats = Array.from(
        { length: countSeatsByClass[class_type] },
        (v, index) => index + 1,
      );
      const seatsCount = { top: 0, bottom: 0, side: 0, total: available_seats };
      const availableSeats: Record<number, SpecificPlace> = {};
      for (let i = 1; i <= available_seats; i++) {
        const randomSeatIndex = randomInteger(0, allSeats.length - 1);
        const seat = allSeats.splice(randomSeatIndex, 1)[0];
        const seatPlacement =
          seatPlacementFunctions[class_type](randomSeatIndex);
        availableSeats[seat] = { available: true, placement: seatPlacement };
        if (seatPlacement) {
          seatsCount[seatPlacement] += 1;
        }
      }

      const randomCoachIndex = randomInteger(
        0,
        availableCoachNumbers.length - 1,
      );
      const coachNumber = availableCoachNumbers.splice(randomCoachIndex, 1)[0];

      const coach = {
        _id,
        coachNumber,
        seatsCount,
        bottom_price:
          class_type !== 'first' && class_type !== 'fourth' ? bottom_price : 0,
        price: class_type === 'fourth' ? bottom_price : price,
        have_air_conditioning,
        have_wifi,
        is_linens_included,
        linens_price,
        side_price:
          class_type !== 'first' &&
          class_type !== 'fourth' &&
          class_type !== 'second'
            ? side_price
            : 0,
        top_price:
          class_type !== 'first' && class_type !== 'fourth' ? top_price : 0,
        wifi_price,
        available_seats,
      };

      if (!acc[class_type]) {
        acc[class_type] = {};
      }

      acc[class_type][coachNumber] = { coach, seats: availableSeats };

      return acc;
    },
    {} as Record<WagonClass, Record<number, NormalizedCoachData>>,
  );

  return updatedInfo;
};
