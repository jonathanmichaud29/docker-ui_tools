module.exports = {
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:node/recommended',
    'plugin:jest/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 2021,
  },
  rules: {
    'no-console': 'warn',
    'node/no-unsupported-features/es-syntax': 'off',
    'node/no-missing-import': 'off',
  },
};
