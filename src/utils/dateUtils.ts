import { format, subDays } from 'date-fns';

export const isUpdateDayPassed = (lastUpdate: number) => {
  if (!lastUpdate) {
    return true;
  }

  const oneDay = 24 * 60 * 60 * 1000;
  return Date.now() - lastUpdate > oneDay;
};

export const formatTime = (timestamp: number | null): string => {
  if (timestamp === null) {
    return '';
  }

  const date = new Date(timestamp);
  const formatter = new Intl.DateTimeFormat('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return formatter.format(date);
};

export const getFormattedDate = (daysAgo?: number): string => {
  return format(subDays(new Date(), daysAgo), 'yyyy-MM-dd');
};

export const formatDate = (date: string): string => {
  return format(new Date(date), 'dd.MM.yyyy');
};
