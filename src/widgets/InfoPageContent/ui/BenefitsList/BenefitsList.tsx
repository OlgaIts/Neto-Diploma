import { memo } from 'react';
import { Icon } from '@shared/ui/Icon';
import { benefits } from '../../consts/';
import styles from './BenefitsList.module.scss';

export const BenefitsList = memo(() => {
  return (
    <ul className={styles.list}>
      {benefits.map((item) => (
        <li key={item.id} className={styles.item}>
          <Icon
            iconName={item.iconName}
            fontSize='90px'
            color='accent'
            className={styles.icon}
          />
          <h3 className={styles.title}>{item.title}</h3>
          <p>{item.text}</p>
        </li>
      ))}
    </ul>
  );
});

BenefitsList.displayName = 'BenefitsList';
