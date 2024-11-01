import { memo } from 'react';
import { Title } from '@shared/ui/Title';
import { Button } from '@shared/ui/Button';
import { Icon } from '@shared/ui/Icon';
import { PassengerList } from '../PassengerList/PassengerList';
import styles from './CheckPassenger.module.scss';

export const CheckPassenger = memo(() => {
  return (
    <article className={styles.component}>
      <div className={styles.title_wrapper}>
        <Title weight='regular' color='dark'>
          Пассажиры
        </Title>
      </div>
      <div className={styles.info}>
        <PassengerList />
        <div className={styles.total}>
          <div className={styles.price_wrapper}>
            <p>Всего</p>
            <p>
              <span className={styles.price}>7 760</span>
              <Icon iconName='icon-ruble' color='dark_gray' fontSize='24px' />
            </p>
          </div>
          <Button tag='button' color='black' bgColor='light' size='xs'>
            Изменить
          </Button>
        </div>
      </div>
    </article>
  );
});
CheckPassenger.displayName = 'CheckPassenger';
