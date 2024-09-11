import classNames from 'classnames';
import { memo } from 'react';
import styles from './SortOptions.module.scss';
import { Icon } from '@shared/ui/Icon';
import { Switch } from '@shared/ui/Switch';

interface SortOptionsProps {
  className?: string;
}
export const SortOptions = memo(({ className }: SortOptionsProps) => {
  return (
    <>
      <div className={styles.option}>
        <div className={styles.wrapper}>
          <Icon iconName="icon-coupe" color="primary" fontSize="24px" />
          <span>Купе</span>
        </div>
        <Switch className={styles.switch} />
      </div>

      <div className={styles.option}>
        <div className={styles.wrapper}>
          <Icon iconName="icon-berth" color="primary" fontSize="24px" />
          <span>Плацкарт </span>
        </div>
        <Switch className={styles.switch} />
      </div>

      <div className={styles.option}>
        <div className={styles.wrapper}>
          <Icon iconName="icon-sitting" color="primary" fontSize="24px" />
          <span>Сидячий</span>
        </div>
        <Switch className={styles.switch} />
      </div>

      <div className={styles.option}>
        <div className={styles.wrapper}>
          <Icon iconName="icon-luxe" color="primary" fontSize="24px" />
          <span>Люкс</span>
        </div>
        <Switch className={styles.switch} />
      </div>

      <div className={styles.option}>
        <div className={styles.wrapper}>
          <Icon iconName="icon-wi-fi" color="primary" fontSize="24px" />
          <span>Wi-Fi</span>
        </div>
        <Switch className={styles.switch} />
      </div>

      <div className={classNames(styles.option, styles.last_child)}>
        <div className={styles.wrapper}>
          <Icon iconName="icon-express" color="primary" fontSize="24px" />
          <span>Экспресс</span>
        </div>
        <Switch className={styles.switch} />
      </div>
    </>
  );
});

SortOptions.displayName = 'SortOptions';
