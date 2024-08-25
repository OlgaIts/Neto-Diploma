import classNames from 'classnames';
import { memo } from 'react';
import styles from './WagonTypes.module.scss';
import { Icon } from '@shared/ui/Icon';
import { Button } from '@shared/ui/Button';

interface WagonTypesProps {
  className?: string;
}
export const WagonTypes = memo(({ className }: WagonTypesProps) => {
  return (
    <section className={styles.component}>
      <div className={styles.content}>
        <ul className={styles.wagons_types}>
          {[...Array(4)].map((item, index) => (
            <li className={styles.type_wrap} key={index}>
              <span className={styles.type}>Плацкарт</span>
              <span className={styles.count}>88</span>
              <p className={styles.price}>
                от <span>1 920</span>
                <Icon iconName={'icon-ruble'} fontSize='22px' />
              </p>
            </li>
          ))}
        </ul>
        <div className={styles.info}>
          <div className={styles.icons_wrap}>
            <Icon iconName={'icon-Wi-Fi'} color='grey' fontSize='24px' />
            <Icon iconName={'icon-express'} color='grey' fontSize='24px' />
            <Icon iconName={'icon-caffee'} color='grey' fontSize='24px' />
          </div>
          <Button color='white' tag='button' bgColor='primary' size='xs'>
            Выбрать места
          </Button>
        </div>
      </div>
    </section>
  );
});
WagonTypes.displayName = 'WagonTypes';

{
  /* <li className={styles.type_wrap}>
            <span className={styles.type}>Плацкарт</span>
            <span className={styles.count}>88</span>
            <p className={styles.price}>
              от <span>1 920</span>
              <Icon iconName={'icon-ruble'} fontSize='22px' />
            </p>
          </li>

          <li className={styles.type_wrap}>
            <span className={styles.type}>Купе</span>
            <span className={styles.count}>88</span>
            <p className={styles.price}>
              от <span>1 920</span>
              <Icon iconName={'icon-ruble'} fontSize='22px' />
            </p>
          </li>

          <li className={styles.type_wrap}>
            <span className={styles.type}>Люкс</span>
            <span className={styles.count}>88</span>
            <p className={styles.price}>
              от <span>1 920</span>
              <Icon iconName={'icon-ruble'} fontSize='22px' />
            </p>
          </li> */
}
