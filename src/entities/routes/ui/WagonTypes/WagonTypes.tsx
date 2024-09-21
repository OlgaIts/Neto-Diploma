import { memo, useRef, useState } from 'react';
import classNames from 'classnames';
import { Icon } from '@shared/ui/Icon';
import { Button } from '@shared/ui/Button';
import { useClickOutside } from '@shared/lib/hooks/useClickOutside';
import { Route } from '@entities/routes/model/types/route';
import { Tooltip } from '../Tooltip/Tooltip';
import styles from './WagonTypes.module.scss';

interface WagonTypesProps {
  className?: string;
  item: Route;
}

export const WagonTypes = memo(({ className, item }: WagonTypesProps) => {
  const [openTooltipIndex, setOpenTooltipIndex] = useState<string | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

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

  // Сидячий fourth_class --- Плацкарт third_class --- Купе second_class --- Люкс first_class

  return (
    <section className={classNames(styles.component, className)}>
      <div className={styles.content}>
        <ul className={styles.wagons_types}>
          {item.available_seats_info.fourth && (
            <li className={styles.type_wrap}>
              <span className={styles.type}>Сидячий</span>
              <div
                ref={tooltipRef}
                className={styles.count}
                onClick={() => toggleTooltip(item.departure.train._id)}
              >
                <span className={styles.seats}>
                  {item.available_seats_info.fourth || 0}
                </span>
                {openTooltipIndex === item.departure.train._id && (
                  <Tooltip ref={tooltipRef} />
                )}
              </div>
              <p className={styles.price}>
                от
                <span>
                  {Number(
                    item.departure.price_info.fourth?.top_price,
                  ).toLocaleString('ru-RU')}
                </span>
                <Icon iconName={'icon-ruble'} fontSize='22px' />
              </p>
            </li>
          )}

          {item.available_seats_info.third && (
            <li className={styles.type_wrap}>
              <span className={styles.type}>Плацкарт</span>
              <div
                className={styles.count}
                onClick={() => toggleTooltip(item.departure.train._id)}
              >
                {item.available_seats_info.third || 0}
              </div>
              <p className={styles.price}>
                от
                <span>
                  {Number(
                    item.departure.price_info.third?.top_price,
                  ).toLocaleString('ru-RU')}
                </span>
                <Icon iconName={'icon-ruble'} fontSize='22px' />
              </p>
            </li>
          )}

          {item.available_seats_info.second && (
            <li className={styles.type_wrap}>
              <span className={styles.type}>Купе</span>
              <div
                className={styles.count}
                onClick={() => toggleTooltip(item.departure.train._id)}
              >
                {item.available_seats_info.second || 0}
              </div>
              <p className={styles.price}>
                от
                <span>
                  {Number(
                    item.departure.price_info.second?.top_price,
                  ).toLocaleString('ru-RU')}
                </span>
                <Icon iconName={'icon-ruble'} fontSize='22px' />
              </p>
            </li>
          )}

          {item.available_seats_info.first && (
            <li className={styles.type_wrap}>
              <span className={styles.type}>Люкс</span>
              <div
                className={styles.count}
                onClick={() => toggleTooltip(item.departure.train._id)}
              >
                {item.available_seats_info.first || 0}
              </div>
              <p className={styles.price}>
                от
                <span>
                  {Number(
                    item.departure.price_info.first?.bottom_price,
                  ).toLocaleString('ru-RU')}
                </span>
                <Icon iconName={'icon-ruble'} fontSize='22px' />
              </p>
            </li>
          )}
        </ul>
        <div className={styles.info}>
          <div className={styles.icons_wrap}>
            {/* TODO: стилизовать (подсвечивать) иконки.  map?*/}
            <Icon iconName={'icon-wi-fi'} color='grey' fontSize='24px' />
            <Icon iconName={'icon-express'} color='grey' fontSize='24px' />
            <Icon iconName={'icon-caffee'} color='grey' fontSize='24px' />
          </div>
          {/* TODO: в фичи  переход на страницу seats*/}
          <Button color='white' tag='button' bgColor='primary' size='xs'>
            Выбрать места
          </Button>
        </div>
      </div>
    </section>
  );
});

WagonTypes.displayName = 'WagonTypes';
