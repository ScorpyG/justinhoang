module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'next',
    'plugin:react-hooks/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    ecmaFeatures: {
      tsx: true,
      ts: true,
    },
  },
  plugins: [ 'react', '@typescript-eslint', 'prettier', 'react-hooks' ],
  rules: {
    'react/jsx-filename-extension': [ 'warn', { extensions: [ '.tsx' ] } ],
    'react/react-in-jsx-scope': 'off', // suppress errors for missing 'import React' in files
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/no-use-before-define': [ 'error' ],
    '@typescript-eslint/no-shadow': [ 'error' ],
    'no-console': 'error',
    'no-duplicate-imports': 'error',
    eqeqeq: [ 'error', 'smart' ],
    'no-unused-expressions': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'no-shadow': 'error',
  },
};
