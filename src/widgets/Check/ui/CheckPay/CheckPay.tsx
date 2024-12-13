import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Title } from '@shared/ui/Title';
import { Button } from '@shared/ui/Button';
import styles from './CheckPay.module.scss';

export const CheckPay = memo(() => {
  const navigate = useNavigate();

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
          <Button
            tag='button'
            color='black'
            bgColor='light'
            size='xs'
            onClick={() => {
              navigate('7payment');
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
CheckPay.displayName = 'CheckPay';
