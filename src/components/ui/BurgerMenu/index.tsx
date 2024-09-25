import cn from 'classnames';

import styles from './index.module.scss';

type BurgerMenuProps = {
  isOpen: boolean;
  onClick?: () => void;
};

export const BurgerMenu: React.FC<BurgerMenuProps> = ({ isOpen, onClick }) => {
  return (
    <button
      type="button"
      className={cn(styles.burgerIcon, isOpen && styles.burgerOpen)}
      onClick={onClick}
      aria-label="toggle menu"
    >
      <span />
      <span />
      <span />
    </button>
  );
};
