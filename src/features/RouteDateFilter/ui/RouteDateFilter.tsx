import { memo } from 'react';
import { Title } from '@shared/ui/Title';
import { CustomDatePicker } from '@shared/ui/CustomDatePicker';
import styles from './RouteDateFilter.module.scss';

export const RouteDateFilter = memo(() => {
  return (
    <>
      <Title color='light' weight='regular' className={styles.title}>
        Дата поездки
      </Title>
      <CustomDatePicker className={styles.date_picker} />
      <Title color='light' weight='regular' className={styles.title}>
        Дата возвращения
      </Title>
      <CustomDatePicker className={styles.date_picker} />
    </>
  );
});
RouteDateFilter.displayName = 'RouteDateFilter';
