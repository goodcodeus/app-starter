import type { DateInputTheme } from 'reablocks';

import { calendarTheme } from './CalendarTheme';
import { inputTheme } from './InputTheme';

export const dateInputTheme: DateInputTheme = {
  input: inputTheme,
  calendar: calendarTheme,
  preset: {
    list: 'w-full',
    option: {
      base: '',
      active: '',
    },
  },
};
