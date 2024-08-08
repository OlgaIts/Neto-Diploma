import { ReactNode, memo } from 'react';
import classNames from 'classnames';
import styles from './Title.module.scss';

type TitleWeight = 'light' | 'regular' | 'medium' | 'bold';

interface TitleProps {
  className?: string;
  children: ReactNode;
  color: 'dark' | 'light';
  uppercase?: boolean;
  weight: TitleWeight;
}
export const Title = memo(
  ({
    className,
    children,
    uppercase = false,
    color = 'light',
    weight,
  }: TitleProps) => {
    const allStyles = classNames(
      styles.component,
      styles[color],
      styles[weight],
      { [styles.uppercase]: uppercase },
      className,
    );

    return <h2 className={allStyles}>{children}</h2>;
  },
);

Title.displayName = 'Title';
