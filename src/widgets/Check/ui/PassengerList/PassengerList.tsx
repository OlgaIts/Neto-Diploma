import { memo } from 'react';
import { getPassengers } from '@features/PassengerForm';
import { useAppSelector } from '@shared/lib/hooks';
import { Icon } from '@shared/ui/Icon';
import styles from './PassengerList.module.scss';

interface PassengerListProps {
  className?: string;
}

export const PassengerList = memo(({ className }: PassengerListProps) => {
  const passengers = useAppSelector(getPassengers);

  const translateGender = (gender: string) =>
    gender === 'man' ? 'мужской' : 'женский';

  return (
    <ul className={className}>
      {Object.tsKeys(passengers).map((key) => (
        <li key={key} className={styles.card}>
          <div className={styles.type}>
            <div className={styles.icon_wrapper}>
              <Icon iconName='icon-person' color='white' fontSize='34px' />
            </div>
            <p>{passengers[key].ticketType}</p>
          </div>
          <div className={styles.desc}>
            <p className={styles.name}>
              {`${passengers[key].lastName} ${passengers[key].firstName} ${passengers[key].middleName}`}
            </p>
            <p>
              Пол <span>{translateGender(passengers[key].gender)}</span>
            </p>
            <p>
              Дата рождения <span>{passengers[key].birthday}</span>
            </p>
            {passengers[key].documentType === 'Паспорт РФ' ? (
              <p>
                Паспорт РФ
                <span
                  className={styles.doc_type}
                >{`${passengers[key].passSeries} ${passengers[key].passNumber}`}</span>
              </p>
            ) : (
              <p>
                Свидетельство о рождении
                <span className={styles.doc_type}>
                  {passengers[key].birthNumber}
                </span>
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>
  );
});
PassengerList.displayName = 'PassengerList';
