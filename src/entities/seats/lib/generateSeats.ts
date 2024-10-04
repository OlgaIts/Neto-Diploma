import { WagonClass } from '@shared/ui/TrainSchema';
import { Seats } from '../model/types/seats';

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
  seats: Record<number, boolean>;
}
/*
  [{coach: Coach, seats: Seats}, {coach: Coach, seats: Seats},{coach: Coach, seats: Seats},{coach: Coach, seats: Seats}]
  {
    first: [{coach: Coachs, seats: SeatsState}]
  }
*/
export const generateSeats = (seatsInfo: Seats[]) => {
  const availableCoachNumbers = Array.from(
    { length: 15 },
    (v, index) => index + 1,
  ); // [1,2,3,4,5,6....,15]
  const updatedInfo = seatsInfo.reduce(
    (acc: Record<WagonClass, SeatsState[]>, info: Seats) => {
      const countAvailableSeats = info.coach.available_seats;
      const wagonClass = info.coach.class_type;
      const allSeats = Array.from(
        { length: countSeatsByClass[wagonClass] },
        (v, index) => index + 1,
      ); // [1,2,3,4]
      const availableSeats: Record<number, boolean> = {};
      for (let i = 1; i <= countAvailableSeats; i++) {
        const randomSeatIndex = randomInteger(0, allSeats.length - 1);
        const seat = allSeats.splice(randomSeatIndex, 1)[0];
        availableSeats[seat] = true; // { 5: true }
      }
      const randomCoachIndex = randomInteger(
        0,
        availableCoachNumbers.length - 1,
      );
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
  console.log(updatedInfo);
  return updatedInfo;
};
/* const departureInfo = {
  first: [ {coach, seats}, {coach, seats}],
  second: [ {coach, seats}, {coach, seats}],
} 
делаем клик на кнопку -> нажали Люкс -> wagonClass = "first"
  через селектор получили выбранный класс вагона
  затем бы забираем массив вагонов тоже через селектор, передав туда этот класс
  const coaches = departureInfo['first'] => [...]
  conaches.map(coach => coach.)
 */
