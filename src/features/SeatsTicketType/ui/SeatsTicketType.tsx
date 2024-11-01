import { memo, useCallback, useState } from 'react';
import { Title } from '@shared/ui/Title';
import {
  useAppDispatch,
  useAppSelector,
} from '@shared/lib/hooks/useReduxHooks';
import {
  SeatsTicketTypeInput,
  getAdultCount,
  getChildCount,
  getChilddWithoutSeatCount,
  setAdultCount,
  setChildCount,
  setChildWithoutSeatCount,
} from '@entities/seats';
import { type Direction } from '@shared/types';
import styles from './SeatsTicketType.module.scss';
import { Icon } from '@shared/ui/Icon';
import classNames from 'classnames';

interface SeatsTicketTypeProps {
  direction: Direction;
}

export const SeatsTicketType = memo(({ direction }: SeatsTicketTypeProps) => {
  const dispatch = useAppDispatch();
  const adult = useAppSelector(getAdultCount(direction));
  const child = useAppSelector(getChildCount(direction));
  const childdWithoutSeat = useAppSelector(
    getChilddWithoutSeatCount(direction),
  );
  const [openTooltip, setOpenTooltip] = useState(false);

  const maxPassengers = 4;

  const handleAdultCount = useCallback(
    (index: number) => {
      const newAdultCount = index;
      const totalPassengers = newAdultCount + child;

      if (totalPassengers > maxPassengers) {
        const adjustedAdultCount = maxPassengers - child;
        dispatch(setAdultCount({ data: adjustedAdultCount, direction }));
      } else {
        dispatch(setAdultCount({ data: newAdultCount, direction }));
      }
    },
    [child, direction, dispatch],
  );

  const handleChildCount = useCallback(
    (index: number) => {
      const newChildCount = index;
      const totalPassengers = adult + newChildCount;

      if (totalPassengers > maxPassengers) {
        const adjustedChildCount = maxPassengers - adult;
        dispatch(setChildCount({ data: adjustedChildCount, direction }));
      } else {
        dispatch(setChildCount({ data: newChildCount, direction }));
      }

      if (newChildCount + adult > maxPassengers) {
        const remainingAdults = maxPassengers - newChildCount;
        dispatch(setAdultCount({ data: remainingAdults, direction }));
      }
    },
    [adult, direction, dispatch],
  );

  const handleChildWithoutSeatCount = useCallback(
    (index: number) => {
      if (adult === 0) return;

      const newChildWithoutSeatCount = index;
      dispatch(
        setChildWithoutSeatCount({ data: newChildWithoutSeatCount, direction }),
      );
    },
    [adult, direction, dispatch],
  );

  const getHintMessage = useCallback(
    (value: number, type: string) => {
      if (value === 0) return '';

      const passengersLeft = maxPassengers - adult - child;

      if (type === 'Взрослых') {
        if (passengersLeft === 0) return 'Лимит исчерпан';
        const conjugation = passengersLeft === 1 ? 'пассажира' : 'пассажиров';
        return `Можно добавить еще ${passengersLeft} ${conjugation}`;
      }

      if (type === 'Детских') {
        if (passengersLeft === 0) return 'Лимит исчерпан';
        const conjugation = passengersLeft === 1 ? 'ребёнка' : 'детей';
        return `Можно добавить еще ${passengersLeft} ${conjugation} до 10 лет.`;
      }

      return '';
    },
    [adult, child],
  );

  return (
    <>
      <div className={styles.title_wrapper}>
        <Title color='dark' weight='bold'>
          Количество билетов
        </Title>
        <div
          className={styles.icon}
          onMouseEnter={() => setOpenTooltip(true)}
          onMouseLeave={() => setOpenTooltip(false)}
        >
          <Icon iconName='icon-question' color='dark_gray' fontSize='10px' />
        </div>
        {openTooltip && (
          <div
            className={classNames(
              styles.tooltip,
              openTooltip ? styles.active_tooltip : '',
            )}
          >
            <p className={styles.text}>
              По правилам РЖД в одном заказе может быть не более 4-х пассажиров,
              включая детских «без места».
            </p>
          </div>
        )}
      </div>
      <div className={styles.input_wrapper}>
        <SeatsTicketTypeInput
          label='Взрослых'
          onSelect={handleAdultCount}
          value={`Взрослых - ${adult}`}
          text={getHintMessage(adult, 'Взрослых')}
        />
        <SeatsTicketTypeInput
          label='Детских'
          onSelect={handleChildCount}
          value={`Детских - ${child}`}
          text={
            adult === 0
              ? 'Выберите хотя бы один взрослый билет'
              : getHintMessage(child, 'Детских')
          } //
          disabled={adult === 0}
        />
        <SeatsTicketTypeInput
          label='Детских «без места»'
          onSelect={handleChildWithoutSeatCount}
          value={`Детских «без места» - ${childdWithoutSeat}`}
          text={adult === 0 ? 'Выберите хотя бы один взрослый билет' : ''}
          disabled={adult === 0}
        />
      </div>
    </>
  );
});
SeatsTicketType.displayName = 'SeatsTicketType';
