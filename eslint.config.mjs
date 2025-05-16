// @ts-check
import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import eslintPluginReact from 'eslint-plugin-react';
import tseslint from 'typescript-eslint';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
  allConfig: {
    ...eslint.configs.recommended,
    ...tseslint.configs.strict,
    ...tseslint.configs.stylistic,
  },
});

/** @type { import('eslint').Linter.Config[]} */
const eslintConfig = [
  eslintPluginReact.configs.flat.recommended,
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  {
    files: ['**/*.{ts,tsx,js,jsx,mjs,cjs}'],
    rules: {
      // https://eslint.org/docs/latest/rules/ - ESLint rules
      'prefer-const': 'error',
      eqeqeq: ['error', 'smart'],
      'no-var': 'error',
      'no-console': 'error',
      'no-unused-expressions': 'warn',
      'no-shadow': 'off',
      'no-duplicate-imports': 'error', // ! Trigger false positive with typescript when import type vs import module
      // https://typescript-eslint.io/rules/ - TypeScript ESLint rules
      '@typescript-eslint/no-unused-vars': [
        'error', // or "error"
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^_',
        },
      ],
      '@typescript-eslint/consistent-type-definitions': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-use-before-define': 'error',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-unused-expressions': 'warn',
      '@typescript-eslint/consistent-type-assertions': 'error',
      '@typescript-eslint/array-type': ['error', { default: 'generic' }],
    },
  },
  { ignores: ['.next/**', 'node_modules/**', 'public/**', 'next.config.js'] },
  {
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true, tsx: true },
      },
    },
  },
];

export default eslintConfig;
