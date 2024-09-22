type ObserverCallback = (message: string) => void;

class NotificationObserver {
  private observers: Set<ObserverCallback> = new Set();

  subscribe(observer: ObserverCallback): () => void {
    this.observers.add(observer);
    return () => this.unsubscribe(observer);
  }

  unsubscribe(observer: ObserverCallback): void {
    this.observers.delete(observer);
  }

  notify(message: string): void {
    this.observers.forEach((callback) => callback(message));
  }
}

export const notificationObserver = new NotificationObserver();
