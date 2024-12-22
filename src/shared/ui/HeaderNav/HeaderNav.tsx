import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { navItems } from '../../consts/';
import logo from '../../assets/img/Logo_chu-chUh.png';
import styles from './HeaderNav.module.scss';

export const HeaderNav = memo(() => {
  return (
    <div id='top'>
      <div className={styles.logo_wrap}>
        <div className={styles.container}>
          <NavLink to='/'>
            <img src={logo} alt='логотип компании' className={styles.logo} />
          </NavLink>
        </div>
      </div>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <ul className={styles.nav_list}>
            {navItems.map((item) => (
              <li className={styles.nav_item} key={item.id}>
                <Link to={item.to} smooth='linear' duration={item.duration}>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
});
HeaderNav.displayName = 'HeaderNav';
