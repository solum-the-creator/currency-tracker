import styles from './index.module.scss';

type ContactBlockProps = {
  title: string;
  children?: React.ReactNode;
};

export const ContactBlock: React.FC<ContactBlockProps> = ({ title, children }) => {
  return (
    <div className={styles.contentBlock}>
      <h2 className={styles.subtitle}>{title}</h2>
      {children}
    </div>
  );
};
