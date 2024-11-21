import { memo } from 'react';
import { Icon } from '@shared/ui/Icon';
import { toLocalString } from '@shared/lib/utils';
import { withOneSeatType } from '../../lib/withOneSeatType';
import { type CurrentInfo } from '../../model/slice/currentDirectionInfo';
import { type WagonClass } from '../../model/types/wagonClass';
import styles from './CurrentPriceInfo.module.scss';

interface CurrentPriceInfoProps {
  currentInfo: CurrentInfo | null;
  wagonClass: WagonClass | undefined;
}
export const CurrentPriceInfo = memo(
  ({ currentInfo, wagonClass }: CurrentPriceInfoProps) => {
    return (
      <>
        {!withOneSeatType(wagonClass!) && (
          <>
            {currentInfo?.top !== 0 && (
              <p className={styles.coach_price}>
                {toLocalString(currentInfo?.top_price ?? 0)}
                <Icon
                  iconName={'icon-ruble'}
                  color='dark_gray'
                  fontSize='18px'
                />
              </p>
            )}
            {currentInfo?.bottom !== 0 && (
              <p className={styles.coach_price}>
                {toLocalString(currentInfo?.bottom_price ?? 0)}
                <Icon
                  iconName={'icon-ruble'}
                  color='dark_gray'
                  fontSize='18px'
                />
              </p>
            )}

            {currentInfo?.side !== 0 && (
              <p className={styles.coach_price}>
                {toLocalString(currentInfo?.side_price ?? 0)}
                <Icon
                  iconName={'icon-ruble'}
                  color='dark_gray'
                  fontSize='18px'
                />
              </p>
            )}
          </>
        )}

        {withOneSeatType(wagonClass!) && (
          <>
            {currentInfo?.price && (
              <p className={styles.coach_price}>
                <span>{toLocalString(currentInfo.price)}</span>
                <Icon
                  iconName={'icon-ruble'}
                  color='dark_gray'
                  fontSize='18px'
                />
              </p>
            )}
          </>
        )}
      </>
    );
  },
);
CurrentPriceInfo.displayName = 'CurrentPriceInfo';
