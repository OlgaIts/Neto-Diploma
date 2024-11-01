import { memo } from 'react';
import { Title } from '@shared/ui/Title';
import { Button } from '@shared/ui/Button';
import styles from './CheckPay.module.scss';

export const CheckPay = memo(() => {
  return (
    <article className={styles.component}>
      <div className={styles.title_wrapper}>
        <Title weight='regular' color='dark'>
          Способ оплаты
        </Title>
      </div>
      <div className={styles.info}>
        <div className={styles.method}>
          <p>Наличными</p>
        </div>
        <div className={styles.btn}>
          <Button tag='button' color='black' bgColor='light' size='xs'>
            Изменить
          </Button>
        </div>
      </div>
    </article>
  );
});
CheckPay.displayName = 'CheckPay';
