import React from 'react';
import {
  ColorBlocks,
  TypographyBlocks,
  SpacingBlocks,
  BorderBlocks,
  ShadowBlocks,
  ComponentBlocks,
  extractTheme, useTheme
} from 'reablocks';
export default {
  title: 'Components/Theme',
  decorators: [
    (Story, context) => {
      const { tokens } = useTheme();

      const {
        colors,
        borderRadius,
        boxShadow,
        spacing,
        fontFamily,
        fontSize,
        fontWeight
      } = extractTheme(tokens);

      return (
        <div style={{ width: '95vw' }}>
          <Story
            colors={colors}
            borderRadius={borderRadius}
            boxShadow={boxShadow}
            spacing={spacing}
            fontFamily={fontFamily}
            fontSize={fontSize}
            fontWeight={fontWeight}
            theme={context?.globals?.theme}
          />
        </div>
      );
    }
  ]
};

export const Colors = (_, { colors }) => {
  return <ColorBlocks colors={colors} />;
};

export const Typography = (
  _,
  { fontFamily, fontSize, fontWeight }
) => (
  <TypographyBlocks
    families={fontFamily}
    sizes={fontSize}
    weights={fontWeight}
  />
);

export const Spacings = (_, { spacing }) => (
  <SpacingBlocks spacings={spacing} />
);

export const Borders = (_, { borderRadius }) => (
  <BorderBlocks borders={borderRadius} />
);

export const Shadows = (_, { boxShadow }) => (
  <ShadowBlocks shadows={boxShadow} />
);

export const Components = () => {
  const { theme } = useTheme();
  return <ComponentBlocks components={theme.components} />;
};
