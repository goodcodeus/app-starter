import type { DateInputTheme } from 'reablocks';

import { calendarTheme } from './calendarTheme';
import { inputTheme } from './inputTheme';

export const dateInputTheme: DateInputTheme = {
  input: inputTheme,
  calendar: calendarTheme,
  preset: {
    list: 'w-full',
    option: {
      base: '',
      active: ''
    }
  }
};
