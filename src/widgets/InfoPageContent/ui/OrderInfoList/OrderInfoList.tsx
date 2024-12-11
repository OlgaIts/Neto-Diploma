import { memo } from 'react';
import { orderInfo } from '@widgets/InfoPageContent/consts/orderInfo';
import styles from './OrderInfoList.module.scss';

export const OrderInfoList = memo(() => {
  return (
    <ul className={styles.steps}>
      {orderInfo.map((item) => (
        <li className={styles.step} key={item.id}>
          <div className={styles.number_wrapper}>
            <span>{item.id}</span>
          </div>
          <h3 className={styles.subtitle}>{item.title}</h3>
          <p className={styles.text}>{item.text}</p>
        </li>
      ))}
    </ul>
  );
});

OrderInfoList.displayName = 'OrderInfoList';
