import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

import styles from './index.module.scss';

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
};

export const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
  const modalRoot = document.getElementById('modal-root');
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '17px';

    return () => {
      document.body.style.overflow = 'unset';
      document.body.style.paddingRight = '0';
    };
  }, []);

  const handleOverlayClick = (event: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      onClose();
    }
  };

  return createPortal(
    <div
      className={styles.modal}
      role="presentation"
      onClick={handleOverlayClick}
      data-testid="currency-modal"
    >
      <div
        className={styles.content}
        ref={modalRef}
        role="dialog"
        aria-labelledby="modal-title"
        aria-modal="true"
      >
        {children}
      </div>
    </div>,
    modalRoot,
  );
};
