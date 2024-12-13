import { memo } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { getWagonClass, setDirectionInfo } from '@entities/seats';
import { wagonType } from '@entities/routes';
import { Icon } from '@shared/ui/Icon';
import { useAppDispatch, useAppSelector } from '@shared/lib/hooks';
import { type Direction } from '@shared/types';
import styles from './SelectWagonType.module.scss';

interface SelectWagonTypeProps {
  direction: Direction;
}

export const SelectWagonType = memo(({ direction }: SelectWagonTypeProps) => {
  const dispatch = useAppDispatch();
  const wagonClass = useAppSelector(getWagonClass(direction));

  return (
    <ul className={styles.seats_type_list}>
      {Object.tsKeys(wagonType).map((key) => (
        <li
          key={uuidv4()}
          className={styles.seats_item}
          onClick={() =>
            dispatch(setDirectionInfo({ direction, wagonClass: key }))
          }
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
