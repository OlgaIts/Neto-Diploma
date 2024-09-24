import { RefObject, memo } from 'react';
import classNames from 'classnames';
import { Icon } from '@shared/ui/Icon';
import { type Route } from '../../model/types/route';
import styles from './Tooltip.module.scss';

interface TooltipProps {
  className?: string;
  ref?: RefObject<HTMLDivElement>;
  item: Route;
}

export const Tooltip = memo(({ className, ref, item }: TooltipProps) => {
  //TODO: доделать подсказку
  return (
    <div ref={ref} className={classNames(styles.tooltip, className)}>
      <div className={styles.wrapper}>
        <p className={styles.desc}>верхние</p>
        <p className={styles.count}>7</p>
        <p className={styles.price}>2 920</p>
        <Icon iconName={'icon-ruble'} color='dark_gray' fontSize='20px' />
      </div>

      <div className={styles.wrapper}>
        <p className={styles.desc}>нижние</p>
        <p className={styles.count}>77</p>
        <p className={styles.price}>3 450</p>
        <Icon iconName={'icon-ruble'} color='dark_gray' fontSize='20px' />
      </div>

      <div className={styles.wrapper}>
        <p className={styles.desc}>боковые</p>
        <p className={styles.count}>83</p>
        <p className={styles.price}>3 450</p>
        <Icon iconName={'icon-ruble'} color='dark_gray' fontSize='20px' />
      </div>
    </div>
  );
});
Tooltip.displayName = 'Tooltip';
