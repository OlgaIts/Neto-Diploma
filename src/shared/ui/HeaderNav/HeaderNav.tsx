import { memo } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { Icon } from '../Icon';
import { navItems } from '../../consts/';
import styles from './HeaderNav.module.scss';

export const HeaderNav = memo(() => {
  return (
    <div id='top'>
      <div className={styles.logo_wrap}>
        <div className={styles.container}>
          <NavLink to='/'>
            <Icon iconName='icon-logo-3' color='white' fontSize='80px' />
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
