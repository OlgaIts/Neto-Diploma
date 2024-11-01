import { memo } from 'react';
import { Icon } from '@shared/ui/Icon';
import styles from './PassengerList.module.scss';

interface PassengerListProps {
  className?: string;
}

export const PassengerList = memo(({ className }: PassengerListProps) => {
  return (
    <ul className={className}>
      {[...Array(3)].map((item, index) => (
        <li key={index} className={styles.card}>
          <div className={styles.type}>
            <div className={styles.icon_wrapper}>
              <Icon iconName='icon-person' color='white' fontSize='34px' />
            </div>
            <p>Взрослый</p>
          </div>
          <div className={styles.desc}>
            <p className={styles.name}>Мартынюк Ирина Эдуардовна</p>
            <p>
              Пол <span>женский</span>
            </p>
            <p>
              Дата рождения <span>17.02.1985</span>
            </p>
            <p>
              Паспорт <span>РФ 4204 380694</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
});
PassengerList.displayName = 'PassengerList';
