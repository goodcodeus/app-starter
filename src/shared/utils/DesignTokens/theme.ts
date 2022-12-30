import { DesignTokens, Colors } from 'reablocks';

export const themeColors: Colors = {
  blue: {
    '100': '#DFE4FF',
    '200': '#C0C8FF',
    '300': '#A1ACFF',
    '400': '#8793FF',
    '500': '#6372FF',
    '600': '#4B5CFA',
    '700': '#3B3EF0',
    '800': '#2E2ED4',
    '900': '#282AAB'
  },
  grey: {
    '100': '#CACBD0',
    '200': '#90929E',
    '300': '#878A96',
    '400': '#696D77',
    '500': '#454853',
    '600': '#33363F',
    '700': '#262931',
    '800': '#1C1D22',
    '900': '#101114'
  },
  red: {
    '100': '#FEE2E2',
    '200': '#FECACA',
    '300': '#FCA5A5',
    '400': '#F87171',
    '500': '#F03C3C',
    '600': '#DC2626',
    '700': '#B91C1C',
    '800': '#991B1B',
    '900': '#7F1D1D'
  },
  orange: {
    '100': '#FFF4D8',
    '200': '#FFE7B1',
    '300': '#FFD68A',
    '400': '#FFB94D',
    '500': '#FFAB3D',
    '600': '#DB872C',
    '700': '#B7681E',
    '800': '#934B13',
    '900': '#7A370B'
  },
  green: {
    '100': '#CCFAD8',
    '200': '#9BF5BC',
    '300': '#66E29F',
    '400': '#3EC58A',
    '500': '#0E9F6E',
    '600': '#0A886A',
    '700': '#077263',
    '800': '#045C58',
    '900': '#02484C'
  },
  slate: {
    '100': '#fbfcfd',
    '200': '#f8f9fa',
    '300': '#f1f3f5',
    '400': '#eceef0',
    '500': '#e6e8eb',
    '600': '#dfe3e6',
    '700': '#d7dbdf',
    '800': '#c1c8cd',
    '900': '#889096'
  },
  overlay: {
    '100': 'rgba(0, 0, 0, 0.01)',
    '200': 'rgba(0, 0, 0, 0.02)',
    '300': 'rgba(0, 0, 0, 0.03)',
    '400': 'rgba(0, 0, 0, 0.04)',
    '500': 'rgba(0, 0, 0, 0.05)',
    '600': 'rgba(0, 0, 0, 0.06)',
    '700': 'rgba(0, 0, 0, 0.07)',
    '800': 'rgba(0, 0, 0, 0.08)',
    '900': 'rgba(0, 0, 0, 0.09)'
  }
};

export const theme: DesignTokens = {
  colors: themeColors,
  typography: {
    families: {
      fontFamily: 'Inter, sans-serif',
      monoFontFamily: 'JetBrains Mono, monospace'
    },
    sizes: {
      xs: '8px',
      sm: '12px',
      md: '14px',
      lg: '20px',
      xl: '28px',
      xxl: '32px'
    }
  },
  spacings: {
    xs: '2px',
    sm: '5px',
    md: '10px',
    lg: '20px',
    xl: '24px',
    xxl: '30px'
  },
  borders: {
    radius: {
      sm: '2px',
      md: '5px',
      lg: '10px'
    }
  },
  gradients: {
    blue: {
      '100': 'linear-gradient(204deg, #19D4EE 10%, #4B5CFA 100%)',
      '200': 'linear-gradient(30deg, #2E27AD 0%, #679BFF 100%)'
    },
    orange: {
      '100': 'linear-gradient(45deg, #C8511B 0%, #FFA800 100%)'
    },
    red: {
      '100': 'linear-gradient(204deg, #FF8A8A 10%, #C14941 100%)'
    },
    green: {
      '100': 'linear-gradient(45deg, #055F4E 0%, #56C0A7 100%)'
    },
    pink: {
      '100': 'linear-gradient(204deg, #FC7AFF 10%, #C15179 100%)'
    }
  },
  shadows: {
    100: '0 2px 4px 0 rgba(17,22,26,0.16), 0 0 4px 0 rgba(17,22,26,0.08), 0 4px 8px 0 rgba(17,22,26,0.04)',
    200: '0 4px 8px 0 rgba(17,22,26,0.16), 0 4px 8px 0 rgba(17,22,26,0.08), 0 8px 16px 0 rgba(17,22,26,0.04)',
    300: '0 0 8px 0 rgba(17,22,26,0.06), 0 4px 16px 0 rgba(17,22,26,0.08), 0 8px 12px 0 rgba(17,22,26,0.06), 0 16px 24px 0 rgba(17,22,26,0.04)'
  },
  palettes: {
    body: {
      background: '#1c1d22',
      color: 'white'
    },
    primary: {
      background: themeColors.blue['800'],
      color: themeColors.slate['100']
    },
    secondary: {
      background: themeColors.slate['500'],
      color: themeColors.grey['700']
    },
    error: {
      background: themeColors.red['500'],
      color: themeColors.slate['100']
    },
    success: {
      background: themeColors.green['500'],
      color: themeColors.slate['100']
    },
    warning: {
      background: themeColors.orange['500'],
      color: themeColors.slate['100']
    }
  },
  components: {
  }
};
