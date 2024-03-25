import { extendTheme, darkTheme, PartialReablocksTheme } from 'reablocks';

const themeOverrides: PartialReablocksTheme = {
  components: {}
}

export const theme = extendTheme(darkTheme, themeOverrides);
