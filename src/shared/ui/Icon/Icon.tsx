import { ReactNode, memo } from 'react';
import classNames from 'classnames';
import iconStyles from '../../assets/iconStyle.module.scss';
import styles from './Icon.module.scss';

export type IconName = keyof typeof iconStyles;
export type IconColor =
  | 'primary'
  | 'accent'
  | 'white'
  | 'grey'
  | 'dark'
  | 'dark_gray';

interface IconProps {
  children?: ReactNode | string;
  className?: string;
  iconName: IconName;
  color?: IconColor;
  fontSize?: string;
  onClick?: () => void;
}

export const Icon = memo(
  ({ children, className, iconName, color, fontSize, onClick }: IconProps) => {
    const iconStyle = classNames(
      iconStyles[iconName],
      color && styles[color],
      className,
    );

    return (
      <i
        className={iconStyle}
        style={{
          fontSize,
        }}
        onClick={onClick}
      >
        {children}
      </i>
    );
  },
);
Icon.displayName = 'Icon';
