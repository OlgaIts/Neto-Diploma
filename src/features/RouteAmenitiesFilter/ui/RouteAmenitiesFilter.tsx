import { ChangeEvent, memo, useRef } from 'react';
import classNames from 'classnames';
import { Icon } from '@shared/ui/Icon';
import { Switch } from '@shared/ui/Switch';
import { useAppDispatch } from '@shared/lib/hooks/useReduxHooks';
import { setRouteFilters } from '@entities/routes';
import styles from './RouteAmenitiesFilter.module.scss';

const options = {
  have_second_class: {
    iconName: 'icon-coupe',
    label: 'Купе',
  },
  have_third_class: {
    iconName: 'icon-berth',
    label: 'Плацкарт',
  },
  have_fourth_class: {
    iconName: 'icon-sitting',
    label: 'Сидячий',
  },
  have_first_class: {
    iconName: 'icon-luxe',
    label: 'Люкс',
  },
  have_wifi: {
    iconName: 'icon-wi-fi',
    label: 'Wi-Fi',
  },
  is_express: {
    iconName: 'icon-express',
    label: 'Экспресс',
  },
};

export const RouteAmenitiesFilter = memo(() => {
  const dispatch = useAppDispatch();
  const ref = useRef(null);
  
  const inClick = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setRouteFilters({ [e.target.name]: e.target.checked }));
  };

  return (
    <>
      {Object.keys(options).map((key) => (
        <div className={styles.option} key={key}>
          <div className={styles.wrapper}>
            <Icon
              iconName={options[key as keyof typeof options].iconName}
              color='primary'
              fontSize='24px'
            />
            <span>{options[key as keyof typeof options].label}</span>
          </div>
          <Switch
            className={styles.switch}
            onChange={inClick}
            name={key}
            ref={ref}
          />
        </div>
      ))}
    </>
  );
});

RouteAmenitiesFilter.displayName = 'RouteAmenitiesFilter';