import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  {
    files: ['**/*.{js,jsx}'],
    ignores: ['**/dist/**'], // Updated to ignore all dist folders
    languageOptions: {
      ecmaVersion: 'latest',  // Using 'latest' ECMA version
      globals: globals.browser,
      ecmaFeatures: { jsx: true },
      sourceType: 'module',
      parser: '@babel/eslint-parser',  // Added correct parser
    },
    settings: { react: { version: '18.2' } },  // Changed React version to 18.2
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];
