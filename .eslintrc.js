module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:react/recommended', 'airbnb', 'airbnb-typescript', 'plugin:react/jsx-runtime', 'plugin:storybook/recommended'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: ['react'],
  rules: {
    semi: 0,
    'no-shadow': 0,
    'no-plusplus': 0,
    'arrow-body-style': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/tabindex-no-positive': 0,
    'react/jsx-closing-tag-location': 0,
    'react/jsx-one-expression-per-line': 0,
    'react/jsx-wrap-multilines': 0,
    'react/jsx-curly-newline': 0,
    'react/button-has-type': 0,
    'react/function-component-definition': 0,
    'react/jsx-props-no-spreading': 0,
    'max-len': ['error', {
      'code': 120
    }],
    'react/require-default-props': 0,
    'operator-linebreak': 0,
    'prefer-destructuring': 0,
    '@typescript-eslint/semi': 0,
    '@typescript-eslint/no-shadow': 0,
    'no-unused-vars': 1,
    'import/no-extraneous-dependencies': [
      'error',
      {
        'devDependencies': [
          '**/*.stories.*',
          '**/.storybook/**/*.*'
        ],
        'peerDependencies': true
      },
    ],
  },
};
