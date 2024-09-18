import { Logo } from '@components/ui/Logo';
import { Toggle } from '@components/ui/Toggle';
import { NAV_LINKS } from '@constants/paths';
import { NavLink } from 'react-router-dom';

import styles from './index.module.scss';

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contentWrapper}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {NAV_LINKS.map((link) => (
              <li key={link.path} className={styles.navItem}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) => (isActive ? styles.active : '')}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.themeControl}>
          <Toggle />
        </div>
      </div>
    </header>
  );
};
