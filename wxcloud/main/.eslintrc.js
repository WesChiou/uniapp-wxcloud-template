module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 13,
  },
  rules: {
    'no-unused-vars': 'warn',
    'no-underscore-dangle': 'off',
    'import/prefer-default-export': 'off',
    'no-restricted-syntax': 'off',
  },
};
