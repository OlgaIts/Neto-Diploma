import { memo, useCallback, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
import { Icon } from '@shared/ui/Icon';
import { Button } from '@shared/ui/Button';
import { useClickOutside } from '@shared/lib/hooks/useClickOutside';
import { Route } from '@entities/routes/model/types/route';
import { useAppDispatch } from '@shared/lib/hooks/useReduxHooks';
import { setArrival, setDeparture } from '@entities/seats';
import { Tooltip } from '../Tooltip/Tooltip';
import { wagonType } from '../../model/consts/wagonType';
import { type BaseRoute } from '@shared/types';
import { type WagonType } from '../../model/types/wagonType';
import styles from './WagonTypes.module.scss';

interface WagonTypesProps {
  className?: string;
  item: Route;
}

const icons = ['icon-wi-fi', 'icon-express', 'icon-caffee'];

export const WagonTypes = memo(({ className, item }: WagonTypesProps) => {
  const [openTooltipIndex, setOpenTooltipIndex] = useState<string | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const toggleTooltip = (id: string): void => {
    if (openTooltipIndex === id) {
      setOpenTooltipIndex(null);
    } else {
      setOpenTooltipIndex(id);
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
    navigate('/seats');
    // сделать диспатч setSeatsFilters и в него передать RuteFilters *(часть) где есть  have wifi, have_first_class и тд, фильтры с боку (6 фильтров)
  }, [item]);

//TODO: типы в Object.keys
  return (
    <section className={classNames(styles.component, className)}>
      <div className={styles.content}>
        <ul className={styles.wagons_types}>
          {Object.keys(item.available_seats_info)
            .reverse()
            .map((key) => (
              <li className={styles.type_wrap} key={uuidv4()}>
                <span className={styles.type}>
                  {wagonType[key as keyof WagonType].label}
                </span>
                <div
                  className={styles.count}
                  onClick={() => toggleTooltip(item.departure.train._id)}
                >
                  <span className={styles.seats}>
                    {item.available_seats_info[
                      key as keyof BaseRoute['available_seats_info']
                    ] || 0}
                  </span>
                  {openTooltipIndex === item.departure.train._id && (
                    <Tooltip item={item}/>
                  )}
                </div>
                <p className={styles.price}>
                  от
                  <span>
                    {Number(
                      item.departure.price_info[
                        key as keyof BaseRoute['available_seats_info']
                      ]?.top_price,
                    ).toLocaleString('ru-RU')}
                  </span>
                  <Icon iconName={'icon-ruble'} fontSize='22px' />
                </p>
              </li>
            ))}
        </ul>
        <div className={styles.info}>
          <ul className={styles.icons_wrap}>
            {icons.map((icon) => (
              <li>
                <Icon iconName={icon} color='grey' fontSize='24px' />
              </li>
            ))}
          </ul>
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
