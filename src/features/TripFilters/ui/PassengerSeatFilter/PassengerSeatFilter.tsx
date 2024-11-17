import { memo } from 'react';
import classNames from 'classnames';
import { Title } from '@shared/ui/Title';
import { Icon } from '@shared/ui/Icon';
import { useAppSelector } from '@shared/lib/hooks';
import { getTicketInfo } from '@entities/seats';
import { wagonClassTranslations } from '@shared/lib/helpers';
import { type Direction } from '@shared/types';
import styles from './PassengerSeatFilter.module.scss';

interface PassengerSeatFilterProps {
  className?: string;
  direction: Direction;
}
export const PassengerSeatFilter = memo(
  ({ className, direction }: PassengerSeatFilterProps) => {
    const ticketInfo = useAppSelector(getTicketInfo(direction));

    return (
      <div className={classNames(className)}>
        <div className={styles.title_wrapper}>
          <Icon iconName='icon-sitting' color='accent' fontSize='28px' />
          <Title color='light' weight='bold'>
            Места
          </Title>
        </div>
        {Object.tsValues(ticketInfo.coaches).map(
          ({ wagonClass, coachNumber, tickets }) => (
            <>
              <div className={styles.wrapper}>
                <p>Тип вагона</p>
                <span>{wagonClass && wagonClassTranslations[wagonClass]}</span>
              </div>

              <div className={styles.wrapper}>
                <p>Номер вагона</p>
                <span className={styles.wagon}>{coachNumber}</span>
              </div>

              <div className={styles.wrapper}>
                <p>Места</p>
                <div className={styles.seats}>
                  <span>{Object.tsKeys(tickets).join(', ')}</span>
                </div>
              </div>
            </>
          ),
        )}
      </div>
    );
  },
);
PassengerSeatFilter.displayName = 'PassengerSeatFilter';
