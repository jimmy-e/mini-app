module.exports = {
  env: {
    'jest/globals': true
  },
  extends: [
    'airbnb',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  globals: {
    'document': true,
    'window': true,
  },
  overrides: [
    {
      'files': ['**/*.tsx', '**/*.ts'],
      'rules': {
        'react/prop-types': 'off',
        'import/prefer-default-export': 'off',
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint', 'jest'],
  rules: {
    'import/first': 0,
    'import/newline-after-import': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        'devDependencies': [
          '**/*.stories.jsx',
          '**/*.stories.tsx',
          '**/*.test.jsx',
          '**/*.test.js',
          '**/*.test.tsx',
          '**/*.test.ts',
          'setupTests.js',
          '**/storybook/*',
          '**/*.demo.tsx',
        ],
      },
    ],
    '@typescript-eslint/camelcase': ['error', { 'properties': 'never' }],
    'indent': 'off',
    '@typescript-eslint/indent': [
      'error',
      2,
      {
        'ignoredNodes': ['JSXElement'],
        'SwitchCase': 1,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': ['error', {
      'allowExpressions': true,
      'allowTypedFunctionExpressions': true
    }],
    'semi': 'off',
    '@typescript-eslint/semi': ['error'],
    'react/destructuring-assignment': [false, 'always', { 'ignoreClassFields': true }],
    'react/jsx-filename-extension': [1, { 'extensions': ['.jsx', '.tsx'] }],
    'react/no-array-index-key': 1,
    'react/jsx-props-no-spreading': 1,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
  },
  settings: {
    'import/extensions': [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
    ],
    'import/resolver': {
      webpack: {
        config: 'webpack.common.js',
      }
    }
  },
};
