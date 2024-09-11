import { memo, useRef, useState } from 'react';
import classNames from 'classnames';
import { Icon } from '@shared/ui/Icon';
import { Button } from '@shared/ui/Button';
import { useClickOutside } from '@shared/lib/hooks/useClickOutside';
import { Route } from '@entities/routes/model/types/route';
import styles from './WagonTypes.module.scss';

interface WagonTypesProps {
  className?: string;
  item: Route;
}
export const WagonTypes = memo(({ className, item }: WagonTypesProps) => {
  const [openTooltipIndex, setOpenTooltipIndex] = useState<number | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const toggleTooltip = (index: number): void => {
    if (openTooltipIndex === index) {
      setOpenTooltipIndex(null);
    } else {
      setOpenTooltipIndex(index);
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
                className={styles.count}
                // onClick={() => toggleTooltip()}
              >
                {item.available_seats_info.third || 0}
              </div>
              <p className={styles.price}>
                от
                <span>
                  {Number(
                    item.departure.price_info.fourth?.top_price,
                  ).toLocaleString('ru-RU')}
                </span>
                <Icon iconName={'icon-ruble'} fontSize="22px" />
              </p>
            </li>
          )}

          {item.available_seats_info.third && (
            <li className={styles.type_wrap}>
              <span className={styles.type}>Плацкарт</span>
              <div
                className={styles.count}
                // onClick={() => toggleTooltip()}
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
                <Icon iconName={'icon-ruble'} fontSize="22px" />
              </p>
            </li>
          )}

          {item.available_seats_info.second && (
            <li className={styles.type_wrap}>
              <span className={styles.type}>Купе</span>
              <div
                className={styles.count}
                // onClick={() => toggleTooltip()}
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
                <Icon iconName={'icon-ruble'} fontSize="22px" />
              </p>
            </li>
          )}

          {item.available_seats_info.first && (
            <li className={styles.type_wrap}>
              <span className={styles.type}>Люкс</span>
              <div
                className={styles.count}
                // onClick={() => toggleTooltip(index)}
              >
                {item.available_seats_info.first || 0}
              </div>
              <p className={styles.price}>
                от
                <span>
                  {Number(
                    item.departure.price_info.first?.top_price?.toLocaleString(
                      'ru-RU',
                    ),
                  )}
                </span>
                <Icon iconName={'icon-ruble'} fontSize="22px" />
              </p>
            </li>
          )}
          {/* {item.have_first_class && (
            <li className={styles.type_wrap}>
              <span className={styles.type}>Люкс</span>
              <div
                className={styles.count}
                // onClick={() => toggleTooltip(index)}
              >
                88
              </div>
              <p className={styles.price}>
                от <span>1 920</span>
                <Icon iconName={'icon-ruble'} fontSize='22px' />
              </p>
            </li>
          )} */}

          {/* {[...Array(4)].map((item, index) => (
            <li className={styles.type_wrap} key={index}>
              <span className={styles.type}>Плацкарт</span>
              <div
                className={styles.count}
                onClick={() => toggleTooltip(index)}
              >
                88
              </div> */}

          {/* {openTooltipIndex === index && (
                <div ref={tooltipRef} className={styles.tooltip}>
                  <div className={styles.wrapper}>
                    <span>верхние</span>
                    <p className={styles.count}>20</p>
                    <p className={styles.tooptip_price}>2 920</p>
                    <Icon
                      iconName={'icon-ruble'}
                      color='dark_gray'
                      fontSize='20px'
                    />
                  </div>

                  <div className={styles.wrapper}>
                    <span>нижние</span>
                    <p className={styles.count}>7</p>
                    <p className={styles.tooptip_price}>3 450</p>
                    <Icon
                      iconName={'icon-ruble'}
                      color='dark_gray'
                      fontSize='20px'
                    />
                  </div>
                </div>
              )} */}
          {/* <p className={styles.price}>
                от <span>1 920</span>
                <Icon iconName={'icon-ruble'} fontSize='22px' />
              </p>
            </li>
          ))} */}
        </ul>
        <div className={styles.info}>
          <div className={styles.icons_wrap}>
            <Icon iconName={'icon-wi-fi'} color="grey" fontSize="24px" />
            <Icon iconName={'icon-express'} color="grey" fontSize="24px" />
            <Icon iconName={'icon-caffee'} color="grey" fontSize="24px" />
          </div>
          <Button color="white" tag="button" bgColor="primary" size="xs">
            Выбрать места
          </Button>
        </div>
      </div>
    </section>
  );
});

WagonTypes.displayName = 'WagonTypes';
