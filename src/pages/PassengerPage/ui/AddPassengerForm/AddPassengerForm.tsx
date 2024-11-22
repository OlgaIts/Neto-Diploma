import { memo, useState } from 'react';
import classNames from 'classnames';
import { Title } from '@shared/ui/Title';
import { Icon } from '@shared/ui/Icon';
import { PassengerForm } from '@features/PassengerInfo';
import { useAppSelector } from '@shared/lib/hooks';
import { getSeatCount } from '@entities/seats';
import styles from './AddPassengerForm.module.scss';

export const AddPassengerForm = memo(() => {
  const totalSeatsCount = useAppSelector(getSeatCount('departure'));
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <ul className={styles.list}>
      {[...Array(totalSeatsCount)].map((_, index) => (
        <li key={index} className={styles.item}>
          <header className={styles.header}>
            <div className={styles.title_wrapper}>
              <div
                className={classNames(
                  styles.icon_wrapper,
                  activeIndex === index ? styles.icon_active : '',
                )}
                onClick={() =>
                  setActiveIndex((prev) => (prev === index ? null : index))
                }
              >
                <Icon
                  iconName={activeIndex === index ? 'icon-minus' : 'icon-plus'}
                  color={activeIndex === index ? 'dark_gray' : 'accent'}
                  fontSize='16px'
                />
              </div>
              <Title color='dark' weight='regular'>
                Пассажир <span>{index + 1}</span>
              </Title>
            </div>
            <Icon
              iconName={'icon-close'}
              fontSize='12px'
              color='grey'
              className={styles.passenger_icon}
            />
          </header>
          {activeIndex === index && <PassengerForm id={index} />}
        </li>
      ))}
    </ul>
  );
});
AddPassengerForm.displayName = 'AddPassengerForm';
