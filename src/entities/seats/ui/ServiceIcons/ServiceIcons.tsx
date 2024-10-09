import { memo, useState } from 'react';
import classNames from 'classnames';
import { Icon } from '../../../../shared/ui/Icon';
import styles from './ServiceIcons.module.scss';
import { useGetCoachInfo } from '@entities/seats';
import { type Direction } from '@shared/types';
import { type CoachStateInfo } from '../../model/slice/seatsSlice';

interface Conditions {
  have_air_conditioning?: boolean;
  have_coffee?: boolean;
  have_wifi?: boolean;
  is_linens_included?: boolean;
}

interface Options {
  name: string;
  tooltip: string;
  included: (coachInfo: CoachStateInfo) => boolean;
  active?: boolean;
  disabled: (coachInfo: CoachStateInfo) => boolean;
}

const options: Record<string, Options> = {
  conditioner: {
    name: 'icon-conditioner',
    tooltip: 'кондиционер',
    included: (coachInfo) => !!coachInfo.have_air_conditioning,
    disabled: (coachInfo) => !coachInfo.have_air_conditioning,
  },
  'wi-fi': {
    name: 'icon-wi-fi',
    tooltip: 'Wi-Fi',
    included: () => false,
    disabled: (coachInfo) => !coachInfo.have_wifi && !coachInfo.wifi_price,
  },
  linens: {
    name: 'icon-linens',
    tooltip: 'белье',
    included: (coachInfo) => !!coachInfo.is_linens_included,
    disabled: (coachInfo) =>
      !coachInfo.is_linens_included && !coachInfo.linens_price,
  },
  caffee: {
    name: 'icon-caffee',
    tooltip: 'питание',
    included: (coachInfo) => !!coachInfo.is_linens_included,
    disabled: (coachInfo) => !coachInfo.is_linens_included,
  },
};

interface ServiceIconsProps extends Conditions {
  className?: string;
  direction: Direction;
}

export const ServiceIcons = memo(
  ({ className, direction }: ServiceIconsProps) => {
    const [openTooltip, setOpenTooltip] = useState<string | null>(null);
    const [services, setServices] = useState(options);
    const { currentWagonSeats } = useGetCoachInfo(direction);

    const coach = currentWagonSeats?.coach;

    const selectOption = (key: keyof Options) => {
      setServices((prev) => ({
        ...prev,
        [key]: {
          ...prev[key],
          active: !prev[key].active,
        },
      }));
    };

    return (
      <div className={classNames(styles.component, className)}>
        {Object.tsKeys(services).map((key) => (
          <div
            // TODO: переписать условие и всё будет работать
            onClick={() =>
              !services[key].disabled && selectOption(key as keyof Options)
            }
            className={classNames(styles.wrapper, {
              [styles.included]: coach && services[key].included(coach),
              [styles.active]: services[key].active,
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
