import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../../../tailwind.config.js';

const { theme: TWConfig } = resolveConfig(tailwindConfig);

export default TWConfig;
