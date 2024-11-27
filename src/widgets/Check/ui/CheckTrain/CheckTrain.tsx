import { memo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@shared/ui/Button';
import { Title } from '@shared/ui/Title';
import { Icon } from '@shared/ui/Icon';
import { useAppSelector } from '@shared/lib/hooks';
import { formatDatetime, toLocalString } from '@shared/lib/utils';
import {
  priceByClass,
  RouteCardServiceIcons,
  wagonType,
} from '@entities/routes';
import { getArrivalInfo, getDepartureInfo } from '@entities/seats';
import styles from './CheckTrain.module.scss';

export const CheckTrain = memo(() => {
  const departureInfo = useAppSelector(getDepartureInfo);
  const arrivalInfo = useAppSelector(getArrivalInfo);

  if (!departureInfo) {
    return null;
  }
  return (
    <article className={styles.component}>
      <div className={styles.title_wrapper}>
        <Title weight='regular' color='dark'>
          Поезд
        </Title>
      </div>
      <div className={styles.info}>
        <div className={styles.train_wrapper}>
          <div className={styles.icon_wrap}>
            <Icon iconName={'icon-train'} fontSize='54px' color='white' />
          </div>
          <span className={styles.train_name}>{departureInfo?.train.name}</span>
          <div className={styles.train_route}>
            <p>
              {departureInfo?.from.city.name}
              <Icon iconName={'icon-arrow-thin'} color='dark' />
            </p>
            <p>{departureInfo?.to.city.name}</p>
          </div>
        </div>

        <div className={styles.routes_wrap}>
          <div className={styles.route}>
            <div className={styles.route_direction}>
              <span className={styles.time}>
                {formatDatetime(departureInfo?.from.datetime)}
              </span>
              <span className={styles.city}>
                {departureInfo?.from.city.name}
              </span>
              <span className={styles.station}>
                {departureInfo?.from.railway_station_name} вокзал
              </span>
            </div>
            <div className={styles.travel_time}>
              <span>{formatDatetime(departureInfo?.duration)}</span>
              <Icon
                iconName={'icon-arrow-fat-right'}
                color='accent'
                fontSize='30px'
              />
            </div>
            <div className={styles.route_direction}>
              <span className={styles.time}>
                {formatDatetime(departureInfo?.to.datetime)}
              </span>
              <span className={styles.city}>{departureInfo?.to.city.name}</span>
              <span className={styles.station}>
                {departureInfo?.to.railway_station_name} вокзал
              </span>
            </div>
          </div>

          {arrivalInfo !== null && (
            <div className={styles.route}>
              <div className={styles.route_direction}>
                <span className={styles.time}>
                  {formatDatetime(arrivalInfo.to.datetime)}
                </span>
                <span className={styles.city}>{arrivalInfo.to.city.name}</span>
                <span className={styles.station}>
                  {arrivalInfo.to.railway_station_name} вокзал
                </span>
              </div>
              <div className={styles.travel_time}>
                <span>{formatDatetime(arrivalInfo.duration)}</span>
                <Icon
                  iconName={'icon-arrow-fat-left'}
                  color='accent'
                  fontSize='30px'
                />
              </div>
              <div className={styles.route_direction}>
                <span className={styles.time}>
                  {formatDatetime(arrivalInfo.from.datetime)}
                </span>
                <span className={styles.city}>
                  {arrivalInfo.from.city.name}
                </span>
                <span className={styles.station}>
                  {arrivalInfo.from.railway_station_name} вокзал
                </span>
              </div>
            </div>
          )}
        </div>

        <div className={styles.content}>
          <ul className={styles.wagons_types}>
            {Object.tsKeys(departureInfo.available_seats_info)
              .reverse()
              .map((key) => (
                <li className={styles.type_wrap} key={uuidv4()}>
                  <span className={styles.type}>{wagonType[key].label}</span>
                  <div>
                    <span className={styles.seats}>
                      {departureInfo?.available_seats_info[key] || 0}
                    </span>
                  </div>
                  {departureInfo?.price_info[key] && (
                    <p className={styles.price}>
                      от
                      <span>
                        {toLocalString(
                          priceByClass[key](departureInfo?.price_info[key]) ??
                            0,
                        )}
                      </span>
                      <Icon
                        iconName={'icon-ruble'}
                        fontSize='20px'
                        color='dark_gray'
                      />
                    </p>
                  )}
                </li>
              ))}
          </ul>
          <div>
            <RouteCardServiceIcons className={styles.service_icons} />
            <Button color='black' tag='button' bgColor='light' size='xs'>
              Изменить
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
});
CheckTrain.displayName = 'CheckTrain';
