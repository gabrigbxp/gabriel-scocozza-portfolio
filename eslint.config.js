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
    'prettier.config.mjs',
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
    rules: {
      // React 17+ uses automatic JSX transform, no need to import React
      'react/react-in-jsx-scope': 'off',
      'react/jsx-uses-react': 'off',

      // Allow arrow function components (modern React pattern)
      'react/function-component-definition': 'off',

      // Disable formatting rules (handled by Prettier)
      'react/jsx-one-expression-per-line': 'off',
      '@stylistic/jsx-one-expression-per-line': 'off',
      // Let Prettier handle JSX indentation/line breaks
      'react/jsx-indent-props': 'off',
      'react/jsx-indent': 'off',
      'react/jsx-first-prop-new-line': 'off',
      'react/jsx-max-props-per-line': 'off',
      'react/jsx-closing-bracket-location': 'off',
      'react/jsx-closing-tag-location': 'off',
      'react/jsx-curly-newline': 'off',
      'react/jsx-wrap-multilines': 'off',

      // Allow props spreading (common in React)
      'react/jsx-props-no-spreading': 'off',

      // Allow array index as key in controlled scenarios
      'react/no-array-index-key': 'warn',

      // Allow default exports (Vite convention for pages/components)
      'import/prefer-default-export': 'off',
      'import/no-default-export': 'off',

      // Relax destructuring rules
      'react/destructuring-assignment': 'off',

      // Allow implicit arrow function returns
      'arrow-body-style': 'off',

      // React Refresh: only export components from .tsx files
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

      // Relax target="_blank" rules (we use rel="noopener noreferrer" in Footer)
      'react/jsx-no-target-blank': 'warn',

      // Allow void operator (used in event handlers)
      'no-void': ['error', { allowAsStatement: true }],

      // Allow browser globals like 'location' (common in web apps)
      'no-restricted-globals': 'off',

      // Allow file extensions in imports (TypeScript/Vite convention)
      'import/extensions': 'off',

      // Relax import order (can be fixed with --fix)
      'import/order': [
        'error',
        {
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          'newlines-between': 'never',
        },
      ],

      // Allow unused prop types (TypeScript handles this)
      'react/no-unused-prop-types': 'off',

      // Allow unescaped entities in JSX (quotes are fine)
      'react/no-unescaped-entities': 'off',

      // Allow JSX curly braces for consistency
      'react/jsx-curly-brace-presence': 'off',

      // Allow nested components (sometimes needed for render functions)
      'react/no-unstable-nested-components': 'warn',
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
