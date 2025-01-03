import { memo } from 'react';
import classNames from 'classnames';
import { RouteAmenitiesFilter } from '@features/RouteAmenitiesFilter';
import { RouteDateFilter } from '@features/RouteDateFilter';
import { RoutePriceFilter } from '@features/RoutePriceFilter';
import { RouteTimeFilter } from '../RouteTimeFilter/RouteTimeFilter';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './RoutesFilters.module.scss';

interface RoutesFiltersProps {
  disabled?: boolean;
}

export const RoutesFilters = memo(({ disabled }: RoutesFiltersProps) => {
  return (
    <section
      className={classNames(styles.component, disabled ? styles.backdrop : '')}
    >
      <article className={styles.article}>
        <RouteDateFilter />
      </article>

      <article className={classNames(styles.options_wrapper, styles.article)}>
        <RouteAmenitiesFilter />
      </article>

      <article className={classNames(styles.cost, styles.article)}>
        <RoutePriceFilter />
      </article>

      <article className={styles.article}>
        <RouteTimeFilter
          title='Туда'
          type='departure'
          iconName='icon-arrow-fat-right'
        />
      </article>

      <article className={styles.article}>
        <RouteTimeFilter
          title='Обратно'
          type='arrival'
          iconName='icon-arrow-fat-left'
        />
      </article>
    </section>
  );
});

RoutesFilters.displayName = 'RoutesFilters';
