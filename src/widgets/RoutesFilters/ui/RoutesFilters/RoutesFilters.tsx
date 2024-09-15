import { memo } from 'react';
import classNames from 'classnames';
import { RouteAmenitiesFilter } from '@features/RouteAmenitiesFilter';
import { RouteDateFilter } from '@features/RouteDateFilter';
import { RoutePriceFilter } from '@features/RoutePriceFilter';
import { RouteTimeFilter } from '@features/RouteTimeFilter';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './RoutesFilters.module.scss';

export const RoutesFilters = memo(() => {
  return (
    <section className={styles.component}>
      <article className={classNames(styles.input_wrapper, styles.article)}>
        <RouteDateFilter />
      </article>

      <article className={classNames(styles.options_wrapper, styles.article)}>
        <RouteAmenitiesFilter />
      </article>

      <article className={classNames(styles.cost, styles.article)}>
        <RoutePriceFilter />
      </article>

      <article className={classNames(styles.there, styles.article)}>
        <RouteTimeFilter title='Туда' type='departure' />
      </article>

      <article className={classNames(styles.back, styles.article)}>
        <RouteTimeFilter title='Обратно' type='arrival' />
      </article>
    </section>
  );
});

RoutesFilters.displayName = 'RoutesFilters';
