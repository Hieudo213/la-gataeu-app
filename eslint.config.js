import { fileURLToPath } from 'node:url';
import { FlatCompat } from '@eslint/eslintrc';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const compat = new FlatCompat({
  baseDirectory: fileURLToPath(new URL('.', import.meta.url)),
});

export default [
  { ignores: ['dist/**', 'node_modules/**'] },
  // Project overrides must follow the Airbnb presets.
  ...compat.extends('airbnb', 'airbnb/hooks'),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: { ecmaFeatures: { jsx: true } },
      globals: globals.browser,
    },
    plugins: { '@typescript-eslint': tseslint.plugin },
    settings: {
      react: { version: 'detect' },
      'import/resolver': {
        typescript: { project: './tsconfig.app.json' },
        alias: {
          map: [['@', './src']],
          extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        },
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
          moduleDirectory: ['node_modules', './'],
        },
      },
    },
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-use-before-define': 'off',
      '@typescript-eslint/no-require-imports': 'off',
      'import/prefer-default-export': 'off',
      'no-console': 'warn',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-eval': 'error',
      'react/function-component-definition': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/jsx-filename-extension': ['error', {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      }],
      'import/extensions': ['error', 'ignorePackages', {
        js: 'never', jsx: 'never', ts: 'never', tsx: 'never',
      }],
      'linebreak-style': 'off',
      'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
      'padded-blocks': ['error', 'never'],
      'eol-last': ['error', 'always'],
      'import/newline-after-import': ['error', { count: 1 }],
      'padding-line-between-statements': [
        'error',
        { blankLine: 'always', prev: ['const', 'let', 'var'], next: '*' },
        { blankLine: 'any', prev: ['const', 'let', 'var'], next: ['const', 'let', 'var'] },
        { blankLine: 'always', prev: '*', next: 'return' },
      ],
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      // TypeScript checks undefined names, including type references.
      'no-undef': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', {
        ignoreRestSiblings: true,
        vars: 'all',
        args: 'after-used',
      }],
    },
  },
  {
    files: ['src/stores/*.store.ts'],
    rules: { 'no-param-reassign': 'off' },
  },
  {
    files: ['src/**/*.tsx'],
    rules: {
      'react/require-default-props': 'off',
      'react-hooks/exhaustive-deps': 'off',
      'react/destructuring-assignment': 'off',
      'react/jsx-props-no-spreading': 'off',
      'jsx-a11y/anchor-is-valid': 'off',
      'react/jsx-no-useless-fragment': 'off',
    },
  },
  {
    files: ['src/interfaces/*.interfaces.ts'],
    rules: { 'no-unused-vars': 'off' },
  },
  {
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    rules: {
      'no-shadow': 'off',
      'no-alert': 'off',
      '@typescript-eslint/no-shadow': 'error',
      'import/no-extraneous-dependencies': 'off',
      'no-nested-ternary': 'off',
      'no-underscore-dangle': 'off',
      'brace-style': 'off',
      'class-methods-use-this': 'off',
      'no-plusplus': 'off',
      'no-await-in-loop': 'off',
    },
  },
  {
    files: ['*.config.{js,ts}'],
    languageOptions: { globals: globals.node },
    rules: {
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    },
  },
];
