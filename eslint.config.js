import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import storybook from 'eslint-plugin-storybook';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default tseslint.config(
  {
    ignores: [
      'dist',
      'node_modules',
      'src/core/api/queries',
      'src/core/api/requests'
    ]
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  react.configs.flat.recommended,
  reactHooks.configs.flat['recommended-latest'],
  ...storybook.configs['flat/recommended'],
  prettier,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.es2021
      }
    },
    settings: {
      react: { version: 'detect' }
    },
    rules: {
      curly: 2,
      'no-unused-vars': 'off',
      'react/prop-types': 'off',
      'react/display-name': 'off',
      '@typescript-eslint/ban-ts-comment': 'warn',
      'no-debugger': 'warn',
      '@typescript-eslint/no-unused-vars': 'off',
      'react/react-in-jsx-scope': 'off',
      'import/no-anonymous-default-export': 'off',
      'react/jsx-no-target-blank': 'off',
      '@typescript-eslint/no-explicit-any': 'off'
    }
  }
);
