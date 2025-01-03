import { memo, useState } from 'react';
import classNames from 'classnames';
import { getPassengers, PassengerForm } from '@features/PassengerForm';
import { getSeatCount } from '@entities/seats';
import { Title } from '@shared/ui/Title';
import { Icon } from '@shared/ui/Icon';
import { useAppSelector } from '@shared/lib/hooks';
import styles from './PassengerFormList.module.scss';

export const PassengerFormList = memo(() => {
  const arrivalSeatsCount = useAppSelector(getSeatCount('arrival'));
  const departureSeatsCount = useAppSelector(getSeatCount('departure'));
  const passengerInfo = useAppSelector(getPassengers);

  const totalSeatsCount = Math.max(departureSeatsCount, arrivalSeatsCount);
  const [openForms, setOpenForms] = useState<boolean[]>(() =>
    Array(totalSeatsCount)
      .fill(false)
      .map((_, i) => i === 0),
  );

  const toggleForm = (index: number) => {
    setOpenForms((prev) =>
      prev.map((isOpen, i) => (i === index ? !isOpen : isOpen)),
    );
  };

  const openNextForm = (index: number) => {
    setOpenForms((prev) =>
      prev.map((isOpen, i) => (i === index + 1 ? true : isOpen)),
    );
  };

  return (
    <ul className={styles.list}>
      {[...Array(totalSeatsCount)].map((_, index) => (
        <li key={index} className={styles.item}>
          <header className={styles.header}>
            <div className={styles.title_wrapper}>
              <div
                className={classNames(
                  styles.icon_wrapper,
                  openForms[index] ? styles.icon_active : '',
                )}
                onClick={() => toggleForm(index)}
              >
                <Icon
                  iconName={openForms[index] ? 'icon-minus' : 'icon-plus'}
                  color={openForms[index] ? 'dark_gray' : 'accent'}
                  fontSize='16px'
                />
              </div>
              <Title color='dark' weight='regular'>
                Пассажир <span>{index + 1}</span>
              </Title>
            </div>
          </header>
          {openForms[index] && (
            <PassengerForm
              id={index}
              passenger={passengerInfo[index]}
              openNextForm={() => openNextForm(index)}
            />
          )}
        </li>
      ))}
    </ul>
  );
});
PassengerFormList.displayName = 'PassengerFormList';
