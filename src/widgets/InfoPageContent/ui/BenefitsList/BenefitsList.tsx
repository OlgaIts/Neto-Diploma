import { memo } from 'react';
import classNames from 'classnames';
import styles from './BenefitsList.module.scss';
import { benefits } from '@widgets/InfoPageContent/consts/benefits';
import { Icon } from '@shared/ui/Icon';

interface BenefitsListProps {
  className?: string;
}

export const BenefitsList = memo(({ className }: BenefitsListProps) => {
  return (
    <ul>
      {benefits.map((item) => (
        <li key={item.id} className={styles.benefits_item}>
          <Icon iconName={item.iconName} />
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </li>
      ))}
    </ul>
  );
});

BenefitsList.displayName = 'BenefitsList';
