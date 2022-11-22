module.exports = {
  extends: "next/core-web-vitals",
  root: true,
  ignorePatterns: [
    '!.eslintrc.js',
    '!.babelrc.js',
    '!.storybook',
    'node_modules',
    'docs',
    'out',
    '.next',
    'build',
    'next.config.js',
  ],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:import/errors',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.ts', '.tsx'],
      },
      typescript: {
        project: '.',
      },
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'off',
    'sort-imports': 'off',
    'import/order': [
      2,
      {
        alphabetize: {
          order: 'asc',
        },
      },
    ],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_|dispatch|action|props|state',
        varsIgnorePattern: '^_|response',
      },
    ],
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'no-console': [
      'error',
      {
        allow: ['info', 'error'],
      },
    ],
  },
}
