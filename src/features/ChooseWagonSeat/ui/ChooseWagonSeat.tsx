import { memo, useCallback } from 'react';
import classNames from 'classnames';
import {
  CoachInfo,
  TrainSchema,
  getCurrentWagonInfo,
  getCurrentWagonSeats,
  getSeatCount,
  getSeatsLimit,
  getTotalTicketPrice,
  getWagonClass,
  getWagonList,
  setDirectionInfo,
  updateSeat,
  type Seats,
} from '@entities/seats';
import { addZero } from '@shared/lib/utils/addZero';
import { Icon } from '@shared/ui/Icon';
import { useAppDispatch, useAppSelector } from '@shared/lib/hooks';
import { type Direction } from '@shared/types';
import styles from './ChooseWagonSeat.module.scss';

interface ChooseWagonSeatProps {
  className?: string;
  item?: Seats;
  direction: Direction;
}

export const ChooseWagonSeat = memo(({ direction }: ChooseWagonSeatProps) => {
  const dispatch = useAppDispatch();
  const wagonInfo = useAppSelector(getCurrentWagonInfo(direction));
  const wagonClass = useAppSelector(getWagonClass(direction));
  const wagonList = useAppSelector(getWagonList(direction));
  const wagonSeats = useAppSelector(getCurrentWagonSeats(direction));
  const totalPrice = useAppSelector(getTotalTicketPrice(direction));
  const seatsLimit = useAppSelector(getSeatsLimit(direction));
  const SeatCount = useAppSelector(getSeatCount(direction));

  const saveWagonNumber = (
    direction: Direction,
    number?: number | undefined,
  ) => {
    if (wagonClass) {
      dispatch(
        setDirectionInfo({ direction, coachNumber: number, wagonClass }),
      );
    }
  };

  const selectSeat = useCallback(
    (seatNumber: number) => {
      dispatch(updateSeat({ direction, seatNumber }));
    },
    [direction, dispatch],
  );

  if (!wagonClass) {
    return null;
  }

  if (!wagonList || !wagonInfo?.wagonNumber) {
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
          {wagonList.map((key) => (
            <span
              className={classNames(styles.coach)}
              key={key}
              onClick={() => saveWagonNumber(direction, key)}
            >
              {addZero(key)}
            </span>
          ))}
        </p>
        <p>Нумерация вагонов начинается с головы поезда</p>
      </div>

      <div className={styles.seats_options}>
        <CoachInfo direction={direction} />
      </div>
      <div className={styles.schema_wrapper}>
        <TrainSchema
          disabled={seatsLimit === SeatCount}
          onClick={selectSeat}
          wagonClass={wagonClass}
          wagonNumber={wagonInfo?.wagonNumber}
          seats={wagonSeats}
        />
      </div>

      <div className={styles.seat_count}>
        Количество выбранных мест:
        <span className={styles.count}>{SeatCount}</span>
      </div>

      <div className={styles.price_wrapper}>
        <span className={styles.price}>
          {Number(totalPrice).toLocaleString('ru-RU')}
        </span>
        <Icon iconName={'icon-ruble'} fontSize='18px' color='dark_gray' />
      </div>
    </div>
  );
});
ChooseWagonSeat.displayName = 'ChooseWagonSeat';
