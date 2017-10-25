module.exports = {
  extends: 'standard',
  plugins: [ 'babel' ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  globals: { },
  parser: 'babel-eslint',
  rules: {
    'standard/no-callback-literal': 0
  }
}
