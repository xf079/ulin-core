import { configs } from '@eslint/js';
import { browser } from 'globals';
import reactHooks, { configs as _configs } from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { config, configs as __configs } from 'typescript-eslint';

export default config(
  { ignores: ['dist', '.vite'] },
  {
    extends: [configs.recommended, ...__configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: browser
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh
    },
    rules: {
      ..._configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true }
      ],
      '@typescript-eslint/ban-ts-comment': 'off',
      '@typescript-eslint/no-unused-expressions': 'off',
      '@typescript-eslint/no-require-imports':'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-async-promise-executor': 'off',
      '@typescript-eslint/no-unused-vars': 'off',
      'no-var': 'off',
    }
  }
);
