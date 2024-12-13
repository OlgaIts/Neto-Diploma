import { ChangeEvent, memo, useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@shared/lib/hooks';
import { getRouteFilter, setRouteFilters } from '@entities/routes';
import { Icon } from '@shared/ui/Icon';
import { Switch } from '@shared/ui/Switch';
import { options } from '../consts/filterConfig';
import styles from './RouteAmenitiesFilter.module.scss';

export const RouteAmenitiesFilter = memo(() => {
  const dispatch = useAppDispatch();
  const ref = useRef(null);
  const routeFilters = useAppSelector(getRouteFilter);

  const handleChangeFilters = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setRouteFilters({ [e.target.name]: e.target.checked }));
  };

  return (
    <>
      {Object.tsKeys(options).map((key) => (
        <div className={styles.option} key={key}>
          <div className={styles.wrapper}>
            <Icon
              iconName={options[key].iconName}
              color='primary'
              fontSize='24px'
            />
            <span>{options[key].label}</span>
          </div>
          <Switch
            className={styles.switch}
            onChange={handleChangeFilters}
            name={key}
            ref={ref}
            checked={Boolean(routeFilters[key])}
          />
        </div>
      ))}
    </>
  );
});

RouteAmenitiesFilter.displayName = 'RouteAmenitiesFilter';
