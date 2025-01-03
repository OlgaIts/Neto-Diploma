import {
  secondClassSeats,
  thirdClassSeats,
} from '@shared/ui/WagonClassSchemes';
import { NormalizedCoachData } from '../model/slice/seatsSlice';
import { Seats } from '../model/types/seats';
import { type WagonClass } from '../model/types/wagonClass';
import { type SpecificPlace } from '@shared/types';

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
    thirdClassSeats.bottom.includes(seatNumber)
      ? 'bottom'
      : thirdClassSeats.top.includes(seatNumber)
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

      const seatsCount = { top: 0, bottom: 0, side: 0, total: available_seats };
      const availableSeats: Record<number, SpecificPlace> = {};

      info.seats.map((seat) => {
        const { index: seatIndex, available } = seat;
        const placement = seatPlacementFunctions[class_type](seatIndex);

        if (available) {
          availableSeats[seatIndex] = {
            available,
            placement,
          };
          if (placement) {
            seatsCount[placement] += 1;
          }
        }
      });

      const randomCoachIndex = randomInteger(
        0,
        availableCoachNumbers.length - 1,
      );
      const coachNumber = availableCoachNumbers.splice(randomCoachIndex, 1)[0];

      const coach = {
        _id,
        coachNumber,
        seatsCount,
        bottom_price,
        price,
        have_air_conditioning,
        have_wifi,
        is_linens_included,
        linens_price,
        side_price,
        top_price,
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
