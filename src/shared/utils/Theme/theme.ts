import {
  extendTheme,
  theme as defaultTheme,
  PartialReablocksTheme
} from 'reablocks';

const themeOverrides: PartialReablocksTheme = {
  components: {}
};

export const theme = extendTheme(defaultTheme, themeOverrides);
