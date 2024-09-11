import { memo, useState } from 'react';
import classNames from 'classnames';
import { Title } from '@shared/ui/Title';
import { Icon } from '@shared/ui/Icon';
import { useAppSelector } from '@shared/lib/hooks/useReduxHooks';
import { getTicketFormData } from '@features/TicketForm';
import { services } from '@entities/routes/model/services/services';
import { RoundTripTime } from '../RoundTripTime/RoundTripTime';
import styles from './RoutesFilters.module.scss';

interface RoutesFiltersProps {
  className?: string;
}

export const RoutesFilters = memo(({ className }: RoutesFiltersProps) => {
  const [open, setOpen] = useState(false);
  const ticketFormData = useAppSelector(getTicketFormData);

  const getRoutes = (range: number[]) => {
    const startRangeTime = range[0];
    const endRangeTime = range[1];
    if (ticketFormData.from && ticketFormData.to) {
      services.getRoutes({
        from_city_id: ticketFormData.from.id,
        to_city_id: ticketFormData.to.id,
        date_start: ticketFormData.departureDate.split('T')[0],
        date_end: ticketFormData.returnDate.split('T')[0],
        start_departure_hour_from: startRangeTime,
        end_departure_hour_from: endRangeTime,
      });
    }
  };

  return (
    <>
      <header className={classNames(styles.header, className)}>
        <div className={styles.title_wrapper}>
          <div className={styles.icon_wrapper}>
            <Icon
              iconName={'icon-arrow-fat-right'}
              color="dark"
              fontSize="16px"
              className={styles.icon}
            />
          </div>
          <Title color="light" weight="regular" className={styles.title}>
            Туда
          </Title>
        </div>
        <button
          className={styles.open_btn}
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? (
            <Icon iconName={'icon-minus'} color="white" />
          ) : (
            <Icon iconName={'icon-plus'} color="white" />
          )}
        </button>
      </header>
      {/* {open && <TimeFilter func={getRoutes} />} */}
      {open && <RoundTripTime func={getRoutes} />}
    </>
  );
});

RoutesFilters.displayName = 'RoutesFilters';
