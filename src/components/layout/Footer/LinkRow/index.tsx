import styles from './index.module.scss';

type LinkRowProps = {
  title: string;
  linkList: Array<{ to: string; label: string }>;
};
export const LinkRow: React.FC<LinkRowProps> = ({ title, linkList }) => {
  return (
    <div className={styles.linkRow}>
      <h4 className={styles.linkTitle}>{title}</h4>
      <div className={styles.links}>
        {linkList.map((link) => (
          <a
            key={link.to}
            className={styles.link}
            target="_blank"
            rel="noopener noreferrer"
            href={`https://${link.to}`}
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};
