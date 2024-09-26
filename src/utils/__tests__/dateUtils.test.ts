import {
  addDays,
  formatDate,
  formatTime,
  getFormattedDate,
  isUpdateDayPassed,
} from '@utils/dateUtils';
import { format, parseISO, subDays } from 'date-fns';

describe('isUpdateDayPassed', () => {
  it('should return true if lastUpdate is missing', () => {
    const result = isUpdateDayPassed(undefined as unknown as number);
    expect(result).toBe(true);
  });

  it('should return true if lastUpdate is more than a day ago', () => {
    const lastUpdate = Date.now() - 25 * 60 * 60 * 1000;
    const result = isUpdateDayPassed(lastUpdate);
    expect(result).toBe(true);
  });

  it('should return false if lastUpdate is within the last 24 hours', () => {
    const lastUpdate = Date.now() - 23 * 60 * 60 * 1000;
    const result = isUpdateDayPassed(lastUpdate);
    expect(result).toBe(false);
  });
});

describe('formatTime', () => {
  it('should return empty string if timestamp is null', () => {
    const result = formatTime(null);
    expect(result).toBe('');
  });

  it('should format timestamp into a 12-hour format time string', () => {
    const timestamp = new Date('2024-09-25T14:30:00Z').getTime();

    const expectedTime = new Date(timestamp).toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    const result = formatTime(timestamp);
    expect(result).toBe(expectedTime);
  });
});

describe('getFormattedDate', () => {
  it('should return the correct formatted date for the given days ago', () => {
    const daysAgo = 5;
    const result = getFormattedDate(daysAgo);
    const expectedDate = subDays(new Date(), daysAgo);
    expect(result).toBe(format(expectedDate, 'yyyy-MM-dd'));
  });
});

describe('formatDate', () => {
  it('should format the date string into dd.MM.yyyy format', () => {
    const date = '2024-09-25';
    const result = formatDate(date);
    expect(result).toBe('25.09.2024');
  });
});

describe('addDays', () => {
  it('should add days to a given date string and return the result in yyyy-MM-dd format', () => {
    const date = '2024-09-25';
    const days = 5;
    const result = addDays(date, days);
    const expectedDate = parseISO('2024-09-30');
    expect(result).toBe(format(expectedDate, 'yyyy-MM-dd'));
  });

  it('should subtract days from a given date if days is negative', () => {
    const date = '2024-09-25';
    const days = -3;
    const result = addDays(date, days);
    const expectedDate = parseISO('2024-09-22');
    expect(result).toBe(format(expectedDate, 'yyyy-MM-dd'));
  });
});
