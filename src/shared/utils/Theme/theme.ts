import {
  extendTheme,
  theme as reaTheme,
  PartialReablocksTheme
} from 'reablocks';

const themeOverrides: PartialReablocksTheme = {
  components: {}
};

export const theme = extendTheme(reaTheme, themeOverrides);
