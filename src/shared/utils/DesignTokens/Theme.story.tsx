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

export default {
  title: 'General/Theme',
  component: DesignTokensProvider,
  decorators: [
    Story => (
      <div style={{ width: '95vw' }}>
        <Story />
      </div>
    )
  ]
};

export const Colors = () => (
  <ColorBlocks />
);

export const Palettes = () => (
  <PaletteBlocks />
);

export const Typography = () => (
  <TypographyBlocks />
);

export const Spacings = () => (
  <SpacingBlocks />
);

export const Borders = () => (
  <BorderBlocks />
);

export const Gradients = () => (
  <GradientBlocks />
);

export const Shadows = () => (
  <ShadowBlocks />
);

export const Components = () => (
  <ComponentBlocks />
);
