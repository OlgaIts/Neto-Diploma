import { memo } from 'react';
import { Icon } from '@shared/ui/Icon';
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
                {Number(currentInfo?.top_price).toLocaleString('ru-RU')}
                <Icon
                  iconName={'icon-ruble'}
                  color='dark_gray'
                  fontSize='18px'
                />
              </p>
            )}
            {currentInfo?.bottom !== 0 && (
              <p className={styles.coach_price}>
                {Number(currentInfo?.bottom_price).toLocaleString('ru-RU')}
                <Icon
                  iconName={'icon-ruble'}
                  color='dark_gray'
                  fontSize='18px'
                />
              </p>
            )}

            {currentInfo?.side !== 0 && (
              <p className={styles.coach_price}>
                {Number(currentInfo?.side_price).toLocaleString('ru-RU')}
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
                <span>{Number(currentInfo.price).toLocaleString('ru-RU')}</span>
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
