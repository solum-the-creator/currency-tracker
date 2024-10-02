import cn from 'classnames';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './index.module.scss';

type LinkRowProps = {
  title: string;
  linkList: Array<{ to: string; label: string }>;
};
export const LinkRow: React.FC<LinkRowProps> = ({ title, linkList }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.linkRow}>
      <button onClick={toggleOpen} type="button" className={styles.buttonTitle}>
        <h4 className={styles.linkTitle}>{title}</h4>
      </button>
      <div className={cn(styles.links, isOpen && styles.open)}>
        {linkList.map((link) => (
          <NavLink
            key={link.to}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
            to={`https://${link.to}`}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
