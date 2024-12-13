import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { getRoutesTotalPrice } from '@entities/seats';
import { Title } from '@shared/ui/Title';
import { Button } from '@shared/ui/Button';
import { Icon } from '@shared/ui/Icon';
import { useAppSelector } from '@shared/lib/hooks';
import { toLocalString } from '@shared/lib/utils';
import { PassengerList } from '../PassengerList/PassengerList';
import styles from './CheckPassenger.module.scss';

export const CheckPassenger = memo(() => {
  const totalPrice = useAppSelector(getRoutesTotalPrice);
  const navigate = useNavigate();

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
              <span className={styles.price}>{toLocalString(totalPrice)}</span>
              <Icon iconName='icon-ruble' color='dark_gray' fontSize='24px' />
            </p>
          </div>
          <Button
            tag='button'
            color='black'
            bgColor='light'
            size='xs'
            onClick={() => {
              navigate('/passenger');
              scroll(0, 0);
            }}
          >
            Изменить
          </Button>
        </div>
      </div>
    </article>
  );
});
CheckPassenger.displayName = 'CheckPassenger';
