import { BurgerMenu } from '@components/ui/BurgerMenu';
import { Logo } from '@components/ui/Logo';
import { ToggleTheme } from '@components/ui/ToggleTheme';
import { navLinks } from '@constants/paths';
import cn from 'classnames';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './index.module.scss';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.contentWrapper}>
        <div className={styles.logo}>
          <Logo />
        </div>

        <nav className={cn(styles.nav, isOpen && styles.open)}>
          <ul className={styles.navList}>
            {navLinks.map((link) => (
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
          <ToggleTheme />
        </div>
        <BurgerMenu isOpen={isOpen} onClick={handleClick} />
      </div>
    </header>
  );
};
