import { memo } from 'react';
import {
  withOneSeatType,
  type CurrentInfo,
  type WagonClass,
} from '../../index';
import styles from './CurrentSeatsInfo.module.scss';

interface CurrentSeatsInfoProps {
  currentInfo: CurrentInfo | null;
  wagonClass: WagonClass | undefined;
}
export const CurrentSeatsInfo = memo(
  ({ currentInfo, wagonClass }: CurrentSeatsInfoProps) => {
    return (
      <>
        {!withOneSeatType(wagonClass!) && (
          <>
            {currentInfo?.top !== 0 && (
              <p className={styles.coach_type}>
                Верхние <span>{currentInfo?.top}</span>
              </p>
            )}
            {currentInfo?.bottom !== 0 && (
              <p className={styles.coach_type}>
                Нижние <span>{currentInfo?.bottom}</span>
              </p>
            )}
            {currentInfo?.side !== 0 && (
              <p className={styles.coach_type}>
                Боковые <span>{currentInfo?.side}</span>
              </p>
            )}
          </>
        )}

        {withOneSeatType(wagonClass!) && (
          <>
            {currentInfo?.available_seats && (
              <p className={styles.coach_type}>
                Места <span>{currentInfo.available_seats}</span>
              </p>
            )}
          </>
        )}
      </>
    );
  },
);
CurrentSeatsInfo.displayName = 'CurrentSeatsInfo';
