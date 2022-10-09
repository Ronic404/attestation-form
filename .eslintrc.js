module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:react/jsx-runtime',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: 0,
    'no-shadow': 0,
    'no-plusplus': 0,
    'arrow-body-style': 0,
    'import/prefer-default-export': 0,
    'jsx-a11y/tabindex-no-positive': 0,
    'react/jsx-closing-tag-location': 0,
    'react/jsx-one-expression-per-line': 0,
    'no-unused-vars': 1,
  },
};
