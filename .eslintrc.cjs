// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'prettier',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    curly: 2,
    'no-unused-vars': [
      'off',
      {
        argsIgnorePattern: '^_',
        ignoreRestSiblings: true,
        args: 'none'
      }
    ],
    'react/prop-types': ['off'],
    'react/display-name': ['off'],
    '@typescript-eslint/ban-ts-comment': ['warn'],
    'no-debugger': ['warn'],
    '@typescript-eslint/no-unused-vars': ['off'],
    'react/react-in-jsx-scope': 'off',
    'import/no-anonymous-default-export': [0],
    'react/jsx-no-target-blank': [0],
    '@typescript-eslint/no-explicit-any': 'off'
  }
};
