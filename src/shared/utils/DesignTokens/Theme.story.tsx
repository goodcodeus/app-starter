import {
  BorderBlocks,
  ColorBlocks,
  ComponentBlocks,
  DesignTokensProvider,
  GradientBlocks,
  PaletteBlocks,
  ShadowBlocks,
  SpacingBlocks,
  TypographyBlocks
} from 'reablocks';
import { theme } from './theme';

export default {
  title: 'General/Theme',
  component: DesignTokensProvider
};

export const Colors = () => (
  <DesignTokensProvider value={theme}>
    <div style={{ width: '90vw' }}>
      <ColorBlocks />
    </div>
  </DesignTokensProvider>
);

export const Palettes = () => (
  <DesignTokensProvider value={theme}>
    <div style={{ width: '90vw' }}>
      <PaletteBlocks />
    </div>
  </DesignTokensProvider>
);

export const Typography = () => (
  <DesignTokensProvider value={theme}>
    <div style={{ width: '90vw' }}>
      <TypographyBlocks />
    </div>
  </DesignTokensProvider>
);

export const Spacings = () => (
  <DesignTokensProvider value={theme}>
    <SpacingBlocks />
  </DesignTokensProvider>
);

export const Borders = () => (
  <DesignTokensProvider value={theme}>
    <BorderBlocks />
  </DesignTokensProvider>
);

export const Gradients = () => (
  <DesignTokensProvider value={theme}>
    <div style={{ width: '90vw' }}>
      <GradientBlocks />
    </div>
  </DesignTokensProvider>
);

export const Shadows = () => (
  <DesignTokensProvider value={theme}>
    <ShadowBlocks />
  </DesignTokensProvider>
);

export const Components = () => (
  <DesignTokensProvider value={theme}>
    <ComponentBlocks />
  </DesignTokensProvider>
);
