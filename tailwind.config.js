import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{ts,tsx,css}',
    './node_modules/reablocks/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': [...defaultTheme.fontFamily.sans],
        'mono': ['"Monaco, monospace"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: colors.blue,
        secondary: colors.gray,
        success: colors.green,
        error: colors.red,
        warning: colors.orange,
        info: colors.sky,
        disabled: colors.gray['400'],
        dark: {
          background: colors.zinc['800'],
          disabled: colors.zinc['600']
        }
      }
    },
  },
  plugins: [],
}

