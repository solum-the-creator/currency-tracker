import { notificationObserver } from '@utils/observer/notificationObserver';
import cn from 'classnames';
import React from 'react';
import ReactDOM from 'react-dom';

import styles from './index.module.scss';

type NotificationProps = Record<string, never>;
type NotificationState = {
  message: string | null;
  isVisible: boolean;
  shouldRender: boolean;
};

export class Notification extends React.Component<NotificationProps, NotificationState> {
  timer?: NodeJS.Timeout;

  constructor(props: NotificationProps) {
    super(props);

    this.state = {
      message: null,
      isVisible: false,
      shouldRender: false,
    };
  }

  componentDidMount(): void {
    notificationObserver.subscribe(this.handleNotification);
  }

  componentWillUnmount() {
    notificationObserver.unsubscribe(this.handleNotification);

    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  private handleNotification = (message: string) => {
    this.setState({ message, isVisible: true, shouldRender: true });

    this.timer = setTimeout(() => {
      this.setState({ isVisible: false });
      setTimeout(() => {
        this.setState({ shouldRender: false });
      }, 500);
    }, 3000);
  };

  handleClose = () => {
    this.setState({ isVisible: false });
  };

  render(): React.ReactNode {
    const { message, isVisible, shouldRender } = this.state;

    if (!shouldRender) {
      return null;
    }

    return ReactDOM.createPortal(
      <div className={cn(styles.notification, isVisible ? styles.visible : styles.hide)}>
        <p className={styles.text}>{message}</p>
        <button
          type="button"
          className={styles.close}
          onClick={this.handleClose}
          aria-label="Close"
        >
          &times;
        </button>
      </div>,
      document.body,
    );
  }
}
