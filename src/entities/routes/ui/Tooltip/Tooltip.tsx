import { RefObject, memo } from 'react';
import classNames from 'classnames';
import { Icon } from '@shared/ui/Icon';
import { seatsLabels } from '../../model/consts/seatsLabels';
import { type Route } from '../../model/types/route';
import styles from './Tooltip.module.scss';

interface TooltipProps {
  className?: string;
  ref?: RefObject<HTMLDivElement>;
  seatsClass: string;
  item: Route;
}

export const Tooltip = memo(
  ({ className, ref, seatsClass, item }: TooltipProps) => {
    const prices =
      item.departure.price_info[
        seatsClass as keyof typeof item.departure.price_info
      ];

    if (!prices) {
      return null;
    }

    return (
      <div ref={ref} className={classNames(styles.tooltip, className)}>
        {Object.tsKeys(prices).map((priceKey) => (
          <div className={styles.wrapper} key={priceKey}>
            <p className={styles.desc}>{seatsLabels[priceKey]}</p>
            <div className={styles.price_wrapper}>
              <p className={styles.price}>{prices[priceKey]}</p>
              <Icon iconName={'icon-ruble'} color='dark_gray' fontSize='20px' />
            </div>
          </div>
        ))}
      </div>
    );
  },
);
Tooltip.displayName = 'Tooltip';
