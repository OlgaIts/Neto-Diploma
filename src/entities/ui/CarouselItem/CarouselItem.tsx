import {memo} from "react";
import classNames from "classnames";
import styles from "./CarouselItem.module.scss";

interface CarouselItemProps {
  className?: string;
  text: string;
  name: string;
  image: string;
}
export const CarouselItem = memo(
  ({className, text, name, image}: CarouselItemProps) => {
    return (
      <div className={classNames(styles.component, className)}>
        <img
          src={image}
          className={styles.img}
        />
        <div className={styles.reviews_desc}>
          <p className={styles.name}>{name}</p>
          <p className={styles.text}>{text}</p>
        </div>
      </div>
    );
  },
);
CarouselItem.displayName = "CarouselItem";
