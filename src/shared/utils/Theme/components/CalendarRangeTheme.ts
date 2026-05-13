import type { CalendarTheme } from 'reablocks';

import { calendarTheme } from './CalendarTheme';

export type CalendarRangeTheme = Omit<CalendarTheme, 'months' | 'years'>;

const baseTheme: Partial<CalendarRangeTheme> = {
  base: 'relative overflow-hidden bg-calendar-colors-container-background-default',
  header: {
    base: 'flex text-center justify-between py-3 items-center text-calendar-colors-header-text-default',
    prev: 'text-calendar-colors-header-text-default',
    mid: 'text-calendar-colors-header-text-default',
    next: 'text-calendar-colors-header-text-default'
  },
  title: 'font-semibold flex grow justify-around',
  content: 'flex gap-4'
};

export const calendarRangeTheme: CalendarRangeTheme = {
  base: baseTheme.base,
  header: baseTheme.header,
  title: baseTheme.title,
  content: baseTheme.content,
  days: calendarTheme.days,
  time: calendarTheme.time,
  presets: {
    ...calendarTheme.presets,
    divider: 'mx-1 h-[calc(100%-30px)] self-end',
  },
};
