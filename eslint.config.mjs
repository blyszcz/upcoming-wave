import js from '@eslint/js';
import nextPlugin from '@next/eslint-plugin-next';
import importPlugin from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['.next/**', '.next-verify/**', 'out/**', 'next-env.d.ts'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: { import: importPlugin, '@next/next': nextPlugin },
    settings: { 'import/resolver': { typescript: true } },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      '@next/next/no-img-element': 'off',
      'import/order': [
        'error',
        {
          groups: [['external', 'builtin'], 'type', ['internal', 'parent'], ['sibling', 'index']],
          pathGroups: [{ pattern: '@{features,shared,routes}/**', group: 'internal' }, { pattern: '@/**', group: 'internal' }],
          pathGroupsExcludedImportTypes: ['type'],
          'newlines-between': 'always',
          alphabetize: { order: 'asc' },
        },
      ],
      // Feature boundary: shared code must not depend on features or on app wiring.
      'import/no-restricted-paths': [
        'error',
        { zones: [{ target: './src/features', from: './src/app' }, { target: './src/shared', from: ['./src/features', './src/app'] }] },
      ],
    },
  },
);
