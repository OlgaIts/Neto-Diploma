import classNames from "classnames";
import {memo} from "react";
import styles from "./HeaderNav.module.scss";

interface HeaderNavProps {
  className?: string;
}
export const HeaderNav = memo(({className}: HeaderNavProps) => {
  return (

  <>
    <div className={styles.logo_wrap}>
      <div className={styles.container}>
        <span className={styles.logo}>Лого</span>
      </div>
    </div>
    <nav className={styles.nav}>
      <div className={styles.container}>
        <ul className={styles.nav_list}>
          <li className={styles.nav_item}>
            <a>О нас</a>
          </li>
          <li className={styles.nav_item}>
            <a>Как это работает</a>
          </li>
          <li className={styles.nav_item}>
            <a>Отзывы</a>
          </li>
          <li className={styles.nav_item}>
            <a>Контакты</a>
          </li>
        </ul>
      </div>
    </nav>
  </>
  )
});
HeaderNav.displayName = "HeaderNav";
