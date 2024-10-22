import { memo } from 'react';
import { Icon } from '@shared/ui/Icon';
import { Title } from '@shared/ui/Title';
import styles from './PassengerFilter.module.scss';

export const PassengerFilter = memo(() => {
  return (
    <>
      <div className={styles.title_wrapper}>
        <Icon iconName='icon-person' color='accent' fontSize='24px' />
        <Title color='light' weight='bold'>
          Пассажиры
        </Title>
      </div>
      <div className={styles.wrapper}>
        <p className={styles.text}>
          <span>2</span> Взрослых
        </p>
        <div>
          <span className={styles.price}>3456</span>
          <Icon iconName='icon-ruble' color='primary' fontSize='18px' />
        </div>
      </div>
      <div className={styles.wrapper}>
        <p className={styles.text}>
          <span>1</span> Ребёнок
        </p>
        <div>
          <span className={styles.price}>3456</span>
          <Icon iconName='icon-ruble' color='primary' fontSize='18px' />
        </div>
      </div>
    </>
  );
});
PassengerFilter.displayName = 'PassengerFilter';
