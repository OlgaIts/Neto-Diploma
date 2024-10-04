import { memo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { wagonType } from '@entities/routes';
import { Icon } from '@shared/ui/Icon';
import {
  useAppDispatch,
  useAppSelector,
} from '@shared/lib/hooks/useReduxHooks';
import { getWagonClass, setWagonClass } from '@entities/seats';
import styles from './SelectWagonType.module.scss';

interface SelectWagonTypeProps {
  className?: string;
}
export const SelectWagonType = memo(() => {
  const wagonClass = useAppSelector(getWagonClass);
  const dispatch = useAppDispatch();

  return (
    <ul className={styles.seats_type_list}>
      {Object.tsKeys(wagonType).map((key) => (
        <li
          key={uuidv4()}
          className={styles.seats_item}
          onClick={() => dispatch(setWagonClass(key))}
        >
          <Icon
            iconName={wagonType[key].iconName}
            fontSize='50px'
            color={wagonClass === key ? 'accent' : 'grey'}
          />
          <p className={wagonClass === key ? styles.text_active : ''}>
            {wagonType[key].label}
          </p>
        </li>
      ))}
    </ul>
  );
});
SelectWagonType.displayName = 'SelectWagonType';
