import { memo } from 'react';
import classNames from 'classnames';
import { Title } from '@shared/ui/Title';
import { Icon } from '@shared/ui/Icon';
import styles from './PassengerSeatFilter.module.scss';

interface PassengerSeatFilterProps {
  className?: string;
}
export const PassengerSeatFilter = memo(
  ({ className }: PassengerSeatFilterProps) => {
    return (
      <div className={classNames(className)}>
        <div className={styles.title_wrapper}>
          <Icon iconName='icon-sitting' color='accent' fontSize='28px' />
          <Title color='light' weight='bold'>
            Места
          </Title>
        </div>

        <div className={styles.wrapper}>
          <p>Тип вагона</p>
          <span>купе</span>
        </div>

        <div className={styles.wrapper}>
          <p>Номер вагона</p>
          <span className={styles.wagon}>08</span>
        </div>

        <div className={styles.wrapper}>
          <p>Места</p>
          <div className={styles.seats}>
            <span>верхнее 12</span>
            <span>нижнее 45</span>
            <span>боковое 55</span>
          </div>
        </div>
      </div>
    );
  },
);
PassengerSeatFilter.displayName = 'PassengerSeatFilter';
