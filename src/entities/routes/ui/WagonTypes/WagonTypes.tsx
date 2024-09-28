import { memo, useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
import { Icon } from '@shared/ui/Icon';
import { Button } from '@shared/ui/Button';
import { useClickOutside } from '@shared/lib/hooks/useClickOutside';
import { type Route } from '@entities/routes/model/types/route';
import {
  useAppDispatch,
  useAppSelector,
} from '@shared/lib/hooks/useReduxHooks';
import { setArrival, setDeparture } from '@entities/seats';
import { setSavedRouteFilters } from '@entities/seats/model/slice/seatsSlice';
import { getRouteFilter } from '@entities/routes/model/selectors/selector';
import { Tooltip } from '../Tooltip/Tooltip';
import { wagonType } from '../../model/consts/wagonType';
import { RouteCardServiceIcons } from '../RouteCardServiceIcons/RouteCardServiceIcons';
import styles from './WagonTypes.module.scss';

interface WagonTypesProps {
  className?: string;
  item: Route;
}

export const WagonTypes = memo(({ className, item }: WagonTypesProps) => {
  const [openTooltipIndex, setOpenTooltipIndex] = useState<string | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const filters = useAppSelector(getRouteFilter);
  const navigate = useNavigate();

  const toggleTooltip = (id: string, key: string): void => {
    if (openTooltipIndex === `${id} ${key}`) {
      setOpenTooltipIndex(null);
    } else {
      setOpenTooltipIndex(`${id} ${key}`);
    }
  };

  useClickOutside({
    ref: tooltipRef,
    handleClickOutside: () => setOpenTooltipIndex(null),
  });

  const redirectSeats = useCallback(() => {
    dispatch(setDeparture(item.departure));
    if (item.arrival) {
      dispatch(setArrival(item.arrival));
    }
    dispatch(setSavedRouteFilters(filters));
    navigate('/seats');
  }, [item]);

  return (
    <section className={classNames(styles.component, className)}>
      <div className={styles.content}>
        <ul className={styles.wagons_types}>
          {Object.tsKeys(item.available_seats_info)
            .reverse()
            .map((key) => (
              <li className={styles.type_wrap} key={uuidv4()}>
                <span className={styles.type}>{wagonType[key].label}</span>
                <div
                  ref={tooltipRef}
                  className={styles.count}
                  onClick={() => toggleTooltip(item.departure.train._id, key)}
                >
                  <span className={styles.seats}>
                    {item.available_seats_info[key] || 0}
                  </span>
                  {openTooltipIndex ===
                    `${item.departure.train._id} ${key}` && (
                    <Tooltip item={item} seatsClass={key} />
                  )}
                </div>
                <p className={styles.price}>
                  от
                  <span>
                    {Number(
                      item.departure.price_info[key]?.top_price,
                    ).toLocaleString('ru-RU')}
                  </span>
                  <Icon iconName={'icon-ruble'} fontSize='22px' />
                </p>
              </li>
            ))}
        </ul>
        <div className={styles.info}>
          <RouteCardServiceIcons className={styles.service_icons} />
          <Button
            color='white'
            tag='button'
            bgColor='primary'
            size='xs'
            onClick={redirectSeats}
          >
            Выбрать места
          </Button>
        </div>
      </div>
    </section>
  );
});

WagonTypes.displayName = 'WagonTypes';
