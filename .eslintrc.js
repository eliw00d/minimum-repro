module.exports = {
  env: {
    browser: true,
  },
  extends: ['plugin:import/errors', 'plugin:import/warnings'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
  },
  plugins: ['babel', 'import'],
}
