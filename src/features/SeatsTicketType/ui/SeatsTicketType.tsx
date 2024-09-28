import { memo } from 'react';
import { Title } from '@shared/ui/Title';
import { SeatsTicketTypeInput } from '@entities/SeatsTicketTypeInput';
import styles from './SeatsTicketType.module.scss';

export const SeatsTicketType = memo(() => {
  return (
    <>
      <Title color='dark' weight='bold'>
        Количество билетов
      </Title>
      <div className={styles.input_wrapper}>
        <SeatsTicketTypeInput label='Взрослых' />
        <SeatsTicketTypeInput label='Детских' />
        <SeatsTicketTypeInput label='Детских «без места»' />
      </div>
    </>
  );
});
SeatsTicketType.displayName = 'SeatsTicketType';
