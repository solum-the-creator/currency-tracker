import { ContactItem } from './ContactItem';
import styles from './index.module.scss';

export const ContactList = () => {
  const contactListData: { name: string; value: string }[] = [
    { name: 'Email', value: 'support@modsencurrencytracker.com' },
    { name: 'Phone', value: '+1 (555) 123-4567' },
    { name: 'Address', value: '123 Main St, Suite 500, Minsk, Belarus' },
    { name: 'Working Hours', value: 'Mon-Fri, 9am - 6pm' },
  ];

  return (
    <ul className={styles.contactList}>
      {contactListData.map(({ name, value }) => (
        <ContactItem key={name} name={name} value={value} />
      ))}
    </ul>
  );
};
