import { memo, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import classNames from 'classnames';
import { useAppSelector } from '@shared/lib/hooks/useReduxHooks';
import { getTotalCount } from '@entities/routes/model/selectors/selector';
import styles from './MainFilters.module.scss';

interface MainFiltersProps {
  className?: string;
}

const sortList = [
  { id: uuidv4(), name: 'времени' },
  { id: uuidv4(), name: 'стоимости' },
  { id: uuidv4(), name: 'длительности' },
];

export const MainFilters = memo(({ className }: MainFiltersProps) => {
  const [open, setOpen] = useState(false);
  const total = useAppSelector(getTotalCount);

  return (
    <div className={classNames(styles.component, className)}>
      <p>
        найдено <span>{total}</span>
      </p>
      <div className={styles.wrapper}>
        <div>
          <span>сортировать по:</span>
          <span onClick={() => setOpen(!open)}>времени</span>
        </div>
        {open && (
          <ul className={styles.list}>
            {sortList.map((item) => (
              <li key={item.id} className={styles.item}>
                {item.name}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>показывать по: 5 10 20</div>
    </div>
  );
});

MainFilters.displayName = 'MainFilters';
