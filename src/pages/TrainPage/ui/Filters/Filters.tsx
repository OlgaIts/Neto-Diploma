import { memo, useState } from 'react';
import classNames from 'classnames';
import { Title } from '@shared/ui/Title';
import { Icon } from '@shared/ui/Icon';
import { Switch } from '@shared/ui/Switch';
import { CustomDatePicker } from '@shared/ui/CustomDatePicker';
import { RangeSlider } from '@shared/ui/RangeSlider';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './Filters.module.scss';

interface FiltersProps {
  className?: string;
}
export const Filters = memo(({ className }: FiltersProps) => {
  const [range, setRange] = useState<any>([0, 1920]);

  return (
    <section className={styles.component}>
      <article className={classNames(styles.input_wrapper, styles.article)}>
        <Title color='light' weight='regular' className={styles.title}>
          Дата поездки
        </Title>
        <CustomDatePicker className={styles.date_picker} />
        <Title color='light' weight='regular' className={styles.title}>
          Дата возвращения
        </Title>
        <CustomDatePicker className={styles.date_picker} />
      </article>

      <article className={classNames(styles.options_wrapper, styles.article)}>
        <div className={styles.option}>
          <Icon iconName='icon-coupe' color='primary' />
          <span>Купе</span>
          <Switch className={styles.switch} />
        </div>

        <div className={styles.option}>
          <Icon iconName='icon-berth' color='primary' />
          <span>Плацкарт </span>
          <Switch className={styles.switch} />
        </div>

        <div className={styles.option}>
          <Icon iconName='icon-sitting' color='primary' />
          <span>Сидячий</span>
          <Switch className={styles.switch} />
        </div>

        <div className={styles.option}>
          <Icon iconName='icon-luxe' color='primary' />
          <span>Люкс</span>
          <Switch className={styles.switch} />
        </div>

        <div className={styles.option}>
          <Icon iconName='icon-Wi-Fi' color='primary' />
          <span>Wi-Fi</span>
          <Switch className={styles.switch} />
        </div>

        <div className={classNames(styles.option, styles.last_child)}>
          <Icon iconName='icon-express' color='primary' />
          <span>Экспресс</span>
          <Switch className={styles.switch} />
        </div>
      </article>

      <article className={classNames(styles.cost, styles.article)}>
        <Title color='light' weight='regular' className={styles.title}>
          Стоимость
        </Title>
        <div className={styles.wrapper}>
          <span>от</span>
          <span>до</span>
        </div>

        <RangeSlider
          height={'19px'}
          max={1920}
          min={0}
          onChange={setRange}
          step={1}
          value={range}
          className={styles.slider}
        />
      </article>
      <article className={classNames(styles.there, styles.article)}>
        <Title color='light' weight='regular' className={styles.title}>
          Туда
        </Title>
      </article>
    </section>
  );
});
Filters.displayName = 'Filters';
