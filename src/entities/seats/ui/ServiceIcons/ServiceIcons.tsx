import { memo, useState } from 'react';
import classNames from 'classnames';
import { Icon } from '@shared/ui/Icon';
import { type Direction } from '@shared/types';
import {
  useAppDispatch,
  useAppSelector,
} from '@shared/lib/hooks/useReduxHooks';
import { getCurrentServicesInfo } from '../../model/selectors/currentWagonInfoSelector';
import { updateService } from '../../model/slice/currentDirectionInfo';
import styles from './ServiceIcons.module.scss';

interface Conditions {
  have_air_conditioning?: boolean;
  have_coffee?: boolean;
  have_wifi?: boolean;
  is_linens_included?: boolean;
}

interface ServiceIconsProps extends Conditions {
  className?: string;
  direction: Direction;
}

export const ServiceIcons = memo(
  ({ className, direction }: ServiceIconsProps) => {
    const [openTooltip, setOpenTooltip] = useState<string | null>(null);
    const services = useAppSelector(getCurrentServicesInfo(direction));
    const dispatch = useAppDispatch();

    const selectOption = (key: string) => {
      dispatch(updateService({ direction, service: key }));
    };

    if (!services) {
      return null;
    }

    // console.log(['wifi', 'lineans'].includes('wifi'));

    //TODO: доделать
    return (
      <div className={classNames(styles.component, className)}>
        {Object.tsKeys(services).map((key) => (
          <div
            onClick={() => selectOption(key)}
            className={classNames(styles.wrapper, {
              [styles.included]: services[key].included,
              [styles.active]: services[key].active,
              [styles.disabled]: services[key].disabled,
            })}
            key={services[key].name}
            onMouseEnter={() => setOpenTooltip(services[key].name)}
            onMouseLeave={() => setOpenTooltip(null)}
          >
            <Icon iconName={services[key].name} color='dark' fontSize='20px' />
            {openTooltip === services[key].name && (
              <div className={styles.tooltip}>{services[key].tooltip}</div>
            )}
          </div>
        ))}
      </div>
    );
  },
);

ServiceIcons.displayName = 'ServiceIcons';
