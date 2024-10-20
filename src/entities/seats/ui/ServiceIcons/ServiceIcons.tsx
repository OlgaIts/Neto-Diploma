import { memo, useState } from 'react';
import classNames from 'classnames';

import { Icon } from '@shared/ui/Icon';
import { type Direction } from '@shared/types';
import { type Options } from '../../model/types/serviceOptions';
import styles from './ServiceIcons.module.scss';
import { useAppSelector } from '@shared/lib/hooks/useReduxHooks';
import { getCurrentServicesInfo } from '@entities/seats/model/selectors/currentWagonInfoSelector';

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
    // const [services, setServices] = useState(serviceOptions);
    // const coach = currentWagonSeats?.coach;
//TODO: дописать

    const services = useAppSelector(getCurrentServicesInfo(direction));

    // const selectOption = (key: keyof Options) => {
    //   setServices((prev) => ({
    //     ...prev,
    //     [key]: {
    //       ...prev[key],
    //       active: !prev[key].active,
    //     },
    //   }));
    // };

    if (!services) {
      return null;
    }
    return (
      <div className={classNames(styles.component, className)}>
        {Object.tsKeys(services).map((key) => (
          <div
            // onClick={() =>
            //   coach &&
            //   !services[key].disabled(coach) &&
            //   selectOption(key as keyof Options)
            // }
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
