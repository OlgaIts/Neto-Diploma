import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import styles from './HeaderNav.module.scss';

export const HeaderNav = memo(() => {
  return (
    <div id="top">
      <div className={styles.logo_wrap}>
        <div className={styles.container}>
          <NavLink to="/">
            <span className={styles.logo}>Лого</span>
          </NavLink>
        </div>
      </div>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <ul className={styles.nav_list}>
            <li className={styles.nav_item}>
              <Link to="about" smooth="linear" duration={800}>
                О нас
              </Link>
            </li>
            <li className={styles.nav_item}>
              <Link to="how-it-works" smooth="linear" duration={800}>
                Как это работает
              </Link>
            </li>
            <li className={styles.nav_item}>
              <Link to="reviews" smooth="linear" duration={700}>
                Отзывы
              </Link>
            </li>
            <li className={styles.nav_item}>
              <Link to="contact" smooth="linear" duration={700}>
                Контакты
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
});
HeaderNav.displayName = 'HeaderNav';
