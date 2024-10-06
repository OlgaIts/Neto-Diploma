import { memo, useState } from 'react';
import classNames from 'classnames';
import { Icon } from '../Icon';
import styles from './ServiceIcons.module.scss';

interface ServiceIconsProps {
  className?: string;
}

interface Options {
  name: string;
  tooltip: string;
  condition: string;
}

const options: Options[] = [
  {
    name: 'icon-conditioner',
    tooltip: 'кондиционер',
    condition: 'have_air_conditioning',
  },
  { name: 'icon-wi-fi', tooltip: 'Wi-Fi', condition: 'have_wifi' },
  { name: 'icon-linens', tooltip: 'белье', condition: 'is_linens_included' }, // linens_price
  //have_coffee: true
  { name: 'icon-caffee', tooltip: 'питание', condition: 'is_linens_included' },
];

export const ServiceIcons = memo(({ className }: ServiceIconsProps) => {
  const [openTooltip, setOpenTooltip] = useState<string | null>(null);

  return (
    <div className={classNames(styles.component, className)}>
      {options.map((item) => (
        <div
          className={classNames(styles.wrapper)}
          key={item.name}
          onMouseEnter={() => setOpenTooltip(item.name)}
          onMouseLeave={() => setOpenTooltip(null)}
        >
          <Icon iconName={item.name} color='dark' fontSize='20px' />
          {openTooltip === item.name && (
            <div className={styles.tooltip}>{item.tooltip}</div>
          )}
        </div>
      ))}
    </div>
  );
});

ServiceIcons.displayName = 'ServiceIcons';
