import {memo} from "react";
import {Link} from "react-router-dom";
import classNames from "classnames";
import styles from "./TransparentButton.module.scss";

interface TransparentButtonProps {
  className?: string;
  children: string;
  uppercase?: boolean;
  size: "small" | "big";
  weight: "regular" | "bold";
  onClick?: () => void;
  tag: "button" | "Link";
  to?: string;
}

export const TransparentButton = memo(
  ({
    className,
    children,
    uppercase,
    size,
    weight,
    onClick,
    tag = "button",
    to,
  }: TransparentButtonProps) => {
    const allStyles = classNames(
      styles.component,
      styles[size],
      styles[weight],
      {[styles.uppercase]: uppercase},
      className,
    );

    return (
      <>
        {tag === "Link" ? (
          <Link className={allStyles} to={to as string}>
            {children}
          </Link>
        ) : (
          <button className={allStyles} onClick={onClick}>
            {children}
          </button>
        )}
      </>
    );
  },
);
TransparentButton.displayName = "TransparentButton";
