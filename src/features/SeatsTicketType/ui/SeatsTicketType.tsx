import { memo } from 'react';
import { Title } from '@shared/ui/Title';
import {
  SeatsTicketTypeInput,
  setAdultCount,
  setChildCount,
  setChildWithoutSeatCount,
} from '@entities/SeatsTicketTypeInput';
import { useAppDispatch } from '@shared/lib/hooks/useReduxHooks';
import styles from './SeatsTicketType.module.scss';

export const SeatsTicketType = memo(() => {
  const dispatch = useAppDispatch();

  const handleAdultCount = (index: number) => {
    dispatch(setAdultCount(index + 1));
  };

  const handleChildCount = (index: number) => {
    dispatch(setChildCount(index + 1));
  };

  const handleChildWithoutSeatCount = (index: number) => {
    dispatch(setChildWithoutSeatCount(index + 1));
  };

  return (
    <>
      <Title color='dark' weight='bold'>
        Количество билетов
      </Title>
      <div className={styles.input_wrapper}>
        <SeatsTicketTypeInput label='Взрослых' onSelect={handleAdultCount} />
        <SeatsTicketTypeInput label='Детских' onSelect={handleChildCount} />
        <SeatsTicketTypeInput
          label='Детских «без места»'
          onSelect={handleChildWithoutSeatCount}
        />
      </div>
    </>
  );
});
SeatsTicketType.displayName = 'SeatsTicketType';
