import { memo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Button } from '@shared/ui/Button';
import { Title } from '@shared/ui/Title';
import { Icon } from '@shared/ui/Icon';
import { RouteCardServiceIcons } from '@entities/routes';
import styles from './CheckTrain.module.scss';

export const CheckTrain = memo(() => {
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
          <span className={styles.train_name}>R563O</span>
          <div className={styles.train_route}>
            <p>
              Москва
              <Icon iconName={'icon-arrow-thin'} color='dark' />
            </p>
            <p>астрахань</p>
          </div>
        </div>

        <div className={styles.routes_wrap}>
          <div className={styles.route}>
            <div className={styles.route_direction}>
              <span className={styles.time}>9:15</span>
              <span className={styles.city}>Москва</span>
              <span className={styles.station}>московский вокзал</span>
            </div>
            <div className={styles.trevel_time}>
              <span>9:15</span>
              <Icon
                iconName={'icon-arrow-fat-right'}
                color='accent'
                fontSize='30px'
              />
            </div>
            <div className={styles.route_direction}>
              <span className={styles.time}>9:15</span>
              <span className={styles.city}>Астрахань</span>
              <span className={styles.station}>Астрахань вокзал</span>
            </div>
          </div>

          {/* {item.arrival && (
            <div className={styles.route}>
              <div className={styles.route_direction}>
                <span className={styles.time}>
                  {formatDatetime(item.arrival?.to.datetime)}
                </span>
                <span className={styles.city}>
                  {item.arrival?.to.city.name}
                </span>
                <span className={styles.station}>
                  {item.arrival?.to.railway_station_name} вокзал
                </span>
              </div>
              <div className={styles.trevel_time}>
                <span>{formatDatetime(item.arrival?.duration)}</span>
                <Icon
                  iconName={'icon-arrow-fat-left'}
                  color='accent'
                  fontSize='30px'
                />
              </div>
              <div className={styles.route_direction}>
                <span className={styles.time}>
                  {formatDatetime(item.arrival?.from.datetime)}
                </span>
                <span className={styles.city}>
                  {item.arrival?.from.city.name}
                </span>
                <span className={styles.station}>
                  {item.arrival?.from.railway_station_name} вокзал
                </span>
              </div>
            </div>
          )} */}
        </div>

        <div className={styles.content}>
          <ul className={styles.wagons_types}>
            {[...Array(4)].map((_, i) => (
              <li className={styles.type_wrap} key={uuidv4()}>
                <span className={styles.type}>Плацкарт</span>
                <div>
                  <span className={styles.seats}>15</span>
                </div>
                <p className={styles.price}>
                  от
                  <span>{Number(1350).toLocaleString('ru-RU')}</span>
                  <Icon
                    iconName={'icon-ruble'}
                    fontSize='20px'
                    color='dark_gray'
                  />
                </p>
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
