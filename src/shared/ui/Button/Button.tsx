import {ReactNode} from "react";
import classNames from "classnames";
import styles from "./Button.module.scss";
import {Link} from "react-router-dom";

type ButtonSizes = "xs" | "s" | "m";
type ButtonColors = "primary" | "light";

interface ButtonProps {
  className?: string;
  disabled?: boolean;
  children?: string;
  size?: ButtonSizes;
  bgColor?: ButtonColors;
  uppercase?: boolean;
  onClick?: () => void;
  tag: "button" | "Link";
  to?: string;
}

export const Button = ({
  className,
  disabled,
  children,
  size = "m",
  bgColor,
  uppercase,
  onClick,
  tag = "button",
  to,
}: ButtonProps) => {
  const buttonStyles = classNames(
    styles.btn,
    styles[size],
    {
      [styles.disabled]: disabled,
      [styles.uppercase]: uppercase,
    },
    className,
  );
  return (
    <>
      {tag === "Link" ? (
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
