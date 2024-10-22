import { memo, useCallback } from 'react';
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
import styles from './SeatsTicketType.module.scss';
import { Direction } from '@shared/types';

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

  const handleAdultCount = useCallback(
    (index: number) => {
      dispatch(setAdultCount({ data: index + 1, direction }));
    },
    [direction],
  );

  const handleChildCount = useCallback(
    (index: number) => {
      dispatch(setChildCount({ data: index + 1, direction }));
    },
    [direction],
  );

  const handleChildWithoutSeatCount = useCallback(
    (index: number) => {
      dispatch(setChildWithoutSeatCount({ data: index + 1, direction }));
    },
    [direction],
  );

  const getHintMessage = useCallback((value: number, type: string) => {
    if (value === 0) return '';

    if (type === 'Взрослых') {
      const passengers = 5 - value;
      //TODO: придумать что-то другое за место 'Лимит исчерпан'
      if (passengers === 0) return 'Лимит исчерпан';
      const conjugation = passengers === 1 ? 'пассажира' : 'пассажиров';
      return `Можно добавить еще ${passengers} ${conjugation}`;
    }

    if (type === 'Детских') {
      const children = 5 - value;
      if (children === 0) return 'Лимит исчерпан';
      const conjugation = children === 1 ? 'ребёнка' : 'детей';
      return `Можно добавить еще ${children} ${conjugation} до 10 лет. Свое место в вагоне, как у взрослых, но дешевле в среднем на 50-65%.`;
    }

    return '';
  }, []);

  return (
    <>
      <Title color='dark' weight='bold'>
        Количество билетов
      </Title>
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
          text={getHintMessage(adult, 'Детских')}
        />
        <SeatsTicketTypeInput
          label='Детских «без места»'
          onSelect={handleChildWithoutSeatCount}
          value={`Детских «без места» - ${childdWithoutSeat}`}
        />
      </div>
    </>
  );
});
SeatsTicketType.displayName = 'SeatsTicketType';
