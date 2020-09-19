module.exports = {
  root: true,

  env: {
    node: true
  },

  extends: [
    '@bankai',
    'plugin:vue/essential',
    '@vue/standard'
  ],

  parserOptions: {
    parser: 'babel-eslint'
  },

  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'vue/html-indent': 'error'
  }
}
