import { ReactNode } from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

type ButtonSizes = 'xs' | 's' | 'm' | 'default';
type ButtonColors = 'primary' | 'light';

interface ButtonProps {
  className?: string;
  children?: string;
  disabled?: boolean;
  size?: ButtonSizes;
  bgColor?: ButtonColors;
  color: 'white' | 'black';
  uppercase?: boolean;
  onClick?: () => void;
  tag: 'button' | 'Link';
  to?: string;
}

export const Button = ({
  className,
  children,
  disabled,
  size = 'default',
  bgColor = 'primary',
  color,
  uppercase,
  onClick,
  tag = 'button',
  to,
}: ButtonProps) => {
  const buttonStyles = classNames(
    styles.btn,
    styles[size],
    styles[bgColor],
    styles[color],
    {
      [styles.disabled]: disabled,
      [styles.uppercase]: uppercase,
    },
    className,
  );
  return (
    <>
      {tag === 'Link' ? (
        <Link className={buttonStyles} to={to as string}>
          {children}
        </Link>
      ) : (
        <button className={buttonStyles} onClick={onClick}>
          {children}
        </button>
      )}
    </>
  );
};
