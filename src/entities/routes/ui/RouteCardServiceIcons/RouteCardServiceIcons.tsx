import { memo } from 'react';
import classNames from 'classnames';
import { Icon } from '@shared/ui/Icon';
import { type IconName } from '@shared/ui/Icon';
import styles from './RouteCardServiceIcons.module.scss';

interface RouteCardServiceIconsProps {
  className?: string;
}

const icons: IconName[] = ['icon-wi-fi', 'icon-express', 'icon-caffee'];

export const RouteCardServiceIcons = memo(
  ({ className }: RouteCardServiceIconsProps) => {
    return (
      <ul className={classNames(styles.icon_wrapper, className)}>
        {icons.map((icon) => (
          <li key={icon}>
            <Icon iconName={icon} color='primary' fontSize='24px' />
          </li>
        ))}
      </ul>
    );
  },
);

RouteCardServiceIcons.displayName = 'RouteCardServiceIcons';
