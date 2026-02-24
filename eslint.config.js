import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import prettier from 'eslint-config-prettier';
import storybook from 'eslint-plugin-storybook';
import globals from 'globals';

export default tseslint.config(
  { ignores: ['dist/', 'node_modules/', 'src/core/api/queries/', 'src/core/api/requests/', '**/*.d.ts'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['src/**/*.{js,ts,tsx}'],
    ...react.configs.flat['jsx-runtime'],
    plugins: {
      ...react.configs.flat['jsx-runtime'].plugins,
      'react-hooks': reactHooks,
    },
    languageOptions: {
      ...react.configs.flat['jsx-runtime'].languageOptions,
      globals: {
        ...globals.browser,
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      ...react.configs.flat.recommended.rules,
      ...react.configs.flat['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      curly: 2,
      'no-unused-vars': 'off',
      'react/prop-types': 'off',
      'react/display-name': 'off',
      '@typescript-eslint/ban-ts-comment': 'warn',
      'no-debugger': 'warn',
      '@typescript-eslint/no-unused-vars': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  ...storybook.configs['flat/recommended'],
  prettier,
);
