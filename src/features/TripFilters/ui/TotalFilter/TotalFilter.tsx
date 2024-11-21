import { memo } from 'react';
import classNames from 'classnames';
import { Title } from '@shared/ui/Title';
import { Icon } from '@shared/ui/Icon';
import styles from './TotalFilter.module.scss';

interface TotalFilterProps {
  className?: string;
  totalPrice: number;
}
export const TotalFilter = memo(
  ({ className, totalPrice }: TotalFilterProps) => {
    return (
      <div className={classNames(styles.component, className)}>
        <Title color='light' weight='bold' uppercase>
          Итог
        </Title>
        <div>
          <span className={styles.price}>
            {totalPrice.toLocaleString('ru-RU')}
          </span>
          <Icon iconName='icon-ruble' color='primary' fontSize='26px' />
        </div>
      </div>
    );
  },
);
TotalFilter.displayName = 'TotalFilter';
