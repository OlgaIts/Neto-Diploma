import { memo, useEffect } from 'react';
import classNames from 'classnames';
import { Seats } from '@entities/seats/model/types/seats';
import { useAppDispatch } from '@shared/lib/hooks/useReduxHooks';
import {
  CoachInfo,
  TrainSchema,
  setCoachNumber,
  useGetCoachInfo,
} from '@entities/seats';
import { addZero } from '@shared/lib/helpers/addZero';
import { type Direction } from '@shared/types';
import styles from './ChooseWagonSeat.module.scss';

interface ChooseWagonSeatProps {
  className?: string;
  item?: Seats;
  direction: Direction;
}

export const ChooseWagonSeat = memo(({ direction }: ChooseWagonSeatProps) => {
  const { currentSeats, wagonClass, wagonNumber } = useGetCoachInfo(direction);
  const dispatch = useAppDispatch();

  const saveWagonNumber = (
    number: number | undefined,
    direction: Direction,
  ) => {
    number && dispatch(setCoachNumber({ coachNumber: number, direction }));
  };

  // хуки нельзя использовать после условий
  useEffect(() => {
    if (currentSeats) {
      const defaultCoachNumber = currentSeats[0].coach.coachNumber;
      saveWagonNumber(defaultCoachNumber, direction);
    }
  }, [currentSeats]);

  if (!wagonClass || !wagonNumber) {
    return null;
  }

  if (!currentSeats) {
    return (
      <p className={styles.info_text}>
        В этом поезде нет вагона данного класса
      </p>
    );
  }

  return (
    <div className={styles.wagons}>
      <div className={styles.wagon}>
        <p className={styles.title}>
          Вагоны
          {currentSeats.map(({ coach }) => (
            <span
              className={classNames(styles.coach)}
              key={coach._id}
              onClick={() => saveWagonNumber(coach.coachNumber, direction)}
            >
              {addZero(coach.coachNumber)}
            </span>
          ))}
        </p>
        <p>Нумерация вагонов начинается с головы поезда</p>
      </div>

      <div className={styles.seats_options}>
        <CoachInfo direction={direction} />
      </div>
      <div className={styles.schema_wrapper}>
        <TrainSchema wagonClass={wagonClass} wagonNumber={wagonNumber} />
      </div>
    </div>
  );
});
ChooseWagonSeat.displayName = 'ChooseWagonSeat';
