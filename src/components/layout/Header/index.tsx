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

        <nav className={cn(styles.nav, isOpen && styles.open)} data-testid="navigation-menu">
          <ul className={styles.navList}>
            {navLinks.map(({ name, path }) => (
              <li key={path} className={styles.navItem}>
                <NavLink to={path} className={({ isActive }) => (isActive ? styles.active : '')}>
                  {name}
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
