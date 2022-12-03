import { create } from '@storybook/theming';
import Logo from '../src/assets/brand/logo-bw.svg';

export const storybookTheme = create({
  brandImage: Logo,
  base: 'dark',
  brandTitle: 'Starter'
});
