import {
  BorderBlocks,
  ColorBlocks,
  ComponentBlocks,
  ThemeProvider,
  PaletteBlocks,
  ShadowBlocks,
  SpacingBlocks,
  TypographyBlocks,
  extractTheme,
  useTheme
} from 'reablocks';
import TWConfig from './config';
import tailwindConfig from '../../../../tailwind.config';

export default {
  title: 'General/Theme',
  component: ThemeProvider,
  decorators: [
    Story => (
      <div style={{ width: '95vw' }}>
        <Story />
      </div>
    )
  ]
};

const {
  colors,
  palettes,
  borderRadius,
  boxShadow,
  spacing,
  fontFamily,
  fontSize,
  fontWeight
} = extractTheme(TWConfig, tailwindConfig);


export const Colors = () => (
  <ColorBlocks colors={colors} />
);

export const Palettes = () => (
  <PaletteBlocks palettes={palettes} />
);

export const Typography = () => (
  <TypographyBlocks
    families={fontFamily}
    sizes={fontSize}
    weights={fontWeight}
  />
);

export const Spacings = () => (
  <SpacingBlocks spacings={spacing} />
);

export const Borders = () => (
  <BorderBlocks borders={borderRadius} />
);

export const Shadows = () => (
  <ShadowBlocks shadows={boxShadow} />
);

export const Components = () => {
  const { theme } = useTheme();
  return <ComponentBlocks components={theme.components} />;
};
