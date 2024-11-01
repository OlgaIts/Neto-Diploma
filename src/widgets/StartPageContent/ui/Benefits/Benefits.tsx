import { memo } from 'react';
import { Title } from '@shared/ui/Title';
import { Icon } from '@shared/ui/Icon';
import { Button } from '@shared/ui/Button';
import styles from './Benefits.module.scss';

export const Benefits = memo(() => {
  return (
    <>
      <div className={styles.section_top}>
        <Title color='light' weight='medium' uppercase>
          Как это работает
        </Title>
        <Button
          tag='button'
          size='m'
          color='white'
          bgColor='primary'
          className={styles.btn}
        >
          Узнать больше
        </Button>
      </div>
      <div className={styles.benefits_wrapper}>
        <div className={styles.benefit}>
          <div className={styles.icon_wrap}>
            <Icon iconName={'icon-computer'} color='accent' fontSize='76px' />
          </div>
          <p>
            Удобный заказ <br /> на сайте
          </p>
        </div>
        <div className={styles.benefit}>
          <div className={styles.icon_wrap}>
            <Icon iconName={'icon-building'} color='accent' fontSize='76px' />
          </div>
          <p>
            Нет необходимости <br /> ехать в офис
          </p>
        </div>
        <div className={styles.benefit}>
          <div className={styles.icon_wrap}>
            <Icon iconName={'icon-world'} color='accent' fontSize='76px' />
          </div>
          <p>
            Огромный выбор <br /> направлений
          </p>
        </div>
      </div>
    </>
  );
});
Benefits.displayName = 'Benefits';
