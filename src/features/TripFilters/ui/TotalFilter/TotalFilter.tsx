import { memo } from 'react';
import classNames from 'classnames';
import { Title } from '@shared/ui/Title';
import { Icon } from '@shared/ui/Icon';
import styles from './TotalFilter.module.scss';

interface TotalFilterProps {
  className?: string;
}
export const TotalFilter = memo(({ className }: TotalFilterProps) => {
  return (
    <div className={classNames(styles.component, className)}>
      <Title color='light' weight='bold' uppercase>
        Итог
      </Title>
      <div>
        <span className={styles.price}>7 760</span>
        <Icon iconName='icon-ruble' color='primary' fontSize='28px' />
      </div>
    </div>
  );
});
TotalFilter.displayName = 'TotalFilter';
