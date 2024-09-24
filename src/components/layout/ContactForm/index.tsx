import { Button } from '@components/ui/Button';
import { Input } from '@components/ui/Input';
import { TextArea } from '@components/ui/TextArea';
import { useState } from 'react';

import styles from './index.module.scss';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setIsSubmitted(true);
  };

  return !isSubmitted ? (
    <form onSubmit={handleSubmit} className={styles.contactForm}>
      <div className={styles.formGroup}>
        <Input
          type="text"
          name="name"
          value={name}
          label="Name:"
          onChange={setName}
          placeholder="Name"
        />
      </div>
      <div className={styles.formGroup}>
        <Input
          type="text"
          name="email"
          value={email}
          label="Email:"
          onChange={setEmail}
          placeholder="Email"
        />
      </div>
      <div className={styles.formGroup}>
        <TextArea
          name="message"
          value={message}
          label="Message:"
          onChange={setMessage}
          placeholder="Message..."
          className={styles.messageInput}
        />
      </div>

      <Button type="submit" className={styles.button}>
        Send Message
      </Button>
    </form>
  ) : (
    <p className={styles.message}>Thank you for your message! We will get back to you soon.</p>
  );
};
