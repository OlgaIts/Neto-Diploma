import { memo } from 'react';
import { Icon } from '@shared/ui/Icon';
import styles from './SubscribeModalContent.module.scss';

export const SubscribeModalContent = memo(() => {
  return (
    <div className={styles.component}>
      <Icon iconName='icon-envelope' color='accent' fontSize='80px' />
      <p>Спасибо за подписку!</p>
      <p>
        Теперь вы первыми узнаете о лучших предложениях и скидках на билеты.
      </p>
      <p className={styles.text}>Отличный шаг к выгодным путешествиям!</p>
      <Icon iconName='icon-wagons' fontSize='40px' color='dark_gray' />
    </div>
  );
});
SubscribeModalContent.displayName = 'SubscribeModalContent';
