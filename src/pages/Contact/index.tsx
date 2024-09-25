import { ErrorBoundary } from '@components/ErrorBoundary';
import { ContactBlock } from '@components/layout/ContactBlock';
import { ContactList } from '@components/layout/ContactBlock/ContactList';
import { ContactForm } from '@components/layout/ContactForm';

import styles from './index.module.scss';

export const Contact: React.FC = () => {
  return (
    <section className={styles.contactSection}>
      <div className={styles.contactWrapper}>
        <h1 className={styles.title}>Contact Our Team</h1>

        <div className={styles.content}>
          <ContactBlock title="Contact Information">
            <p className={styles.description}>
              If you need further assistance, feel free to reach out to us using the following
              information:
            </p>
            <ContactList />
          </ContactBlock>

          <ContactBlock title="Get in Touch">
            <ErrorBoundary fallback={<p>Error loading contact form</p>}>
              <ContactForm />
            </ErrorBoundary>
          </ContactBlock>
        </div>
      </div>
    </section>
  );
};
