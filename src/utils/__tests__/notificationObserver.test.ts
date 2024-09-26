import { notificationObserver } from '@utils/observer/notificationObserver';

describe('NotificationObserver', () => {
  let messageReceived: string | null = null;

  const testObserver = (message: string) => {
    messageReceived = message;
  };

  beforeEach(() => {
    messageReceived = null;
  });

  it('should subscribe an observer and notify it', () => {
    const unsubscribe = notificationObserver.subscribe(testObserver);

    notificationObserver.notify('Hello, Observer!');
    expect(messageReceived).toBe('Hello, Observer!');

    unsubscribe();
    notificationObserver.notify('Goodbye, Observer!');
    expect(messageReceived).toBe('Hello, Observer!');
  });

  it('should unsubscribe an observer', () => {
    const unsubscribe = notificationObserver.subscribe(testObserver);

    notificationObserver.notify('First Message');
    expect(messageReceived).toBe('First Message');

    unsubscribe();
    notificationObserver.notify('Second Message');
    expect(messageReceived).toBe('First Message');
  });

  it('should allow multiple observers to be subscribed', () => {
    const anotherObserver = (message: string) => {
      messageReceived = `${message} (from another observer)`;
    };

    notificationObserver.subscribe(testObserver);
    notificationObserver.subscribe(anotherObserver);

    notificationObserver.notify('Hello, Multiple Observers!');
    expect(messageReceived).toBe('Hello, Multiple Observers! (from another observer)');
  });
});
