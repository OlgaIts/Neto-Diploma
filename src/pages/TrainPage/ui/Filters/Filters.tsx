import { memo, useState } from 'react';
import classNames from 'classnames';
import { Title } from '@shared/ui/Title';
import { CustomDatePicker } from '@shared/ui/CustomDatePicker';
import { RangeSlider } from '@shared/ui/RangeSlider';
import { RoutesFilters } from '@widgets/ui/RoutesFilters';
import { SortOptions } from '../SortOptions/SortOptions';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './Filters.module.scss';

export const Filters = memo(() => {
  const [range, setRange] = useState([0, 24]);

  return (
    <section className={styles.component}>
      <article className={classNames(styles.input_wrapper, styles.article)}>
        <Title color="light" weight="regular" className={styles.title}>
          Дата поездки
        </Title>
        <CustomDatePicker className={styles.date_picker} />
        <Title color="light" weight="regular" className={styles.title}>
          Дата возвращения
        </Title>
        <CustomDatePicker className={styles.date_picker} />
      </article>

      <article className={classNames(styles.options_wrapper, styles.article)}>
        <SortOptions />
      </article>

      <article className={classNames(styles.cost, styles.article)}>
        <Title color="light" weight="regular" className={styles.title}>
          Стоимость
        </Title>
        <div className={styles.wrapper}>
          <span>от</span>
          <span>до</span>
        </div>
        <RangeSlider
          height={'19px'}
          max={24}
          min={0}
          onChange={setRange}
          step={1}
          value={range}
          className={styles.slider}
        />
      </article>

      <article className={classNames(styles.there, styles.article)}>
        {/* <RoundTripTime title='Туда' /> */}
        <RoutesFilters />
      </article>

      <article className={classNames(styles.back, styles.article)}>
        <RoutesFilters />
      </article>
    </section>
  );
});

Filters.displayName = 'Filters';
