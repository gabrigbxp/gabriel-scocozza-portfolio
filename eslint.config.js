import { defineConfig, globalIgnores } from 'eslint/config';
import rules from 'not-airbnb-eslint-config';
import tseslint from 'typescript-eslint';
import reactRefresh from 'eslint-plugin-react-refresh';

export default defineConfig([
  // Ignore build output, vendor typings, and local tooling configs to reduce noise
  globalIgnores([
    'dist',
    'public/js-dos/**',
    'eslint.config.js',
    'prettier.config.js',
    'coverage/**',
    'cypress/**/*.js',
    'cypress/**/*.d.ts',
  ]),
  ...rules,
  // Override for config files: use default parser, not TypeScript
  {
    files: ['*.config.js', '*.config.mjs', 'vite.config.ts'],
    languageOptions: {
      parser: undefined, // Use default parser
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      'import/no-extraneous-dependencies': 'off',
    },
  },
  // TypeScript and React-specific overrides
  {
    files: ['src/**/*.ts', 'src/**/*.tsx'], // Only src files, not config files
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
      },
    },
    settings: {
      // Configure import resolver to understand TypeScript
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
        node: true,
      },
    },
    plugins: {
      'react-refresh': reactRefresh,
    },
  },
  // Cypress E2E tests configuration
  {
    files: ['cypress/**/*.ts', 'cypress/**/*.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: {
          defaultProject: './cypress/tsconfig.json',
        },
      },
    },
    rules: {
      // Cypress-specific rules
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      // Allow namespace for Cypress type declarations
      '@typescript-eslint/no-namespace': 'off',
    },
  },
]);
