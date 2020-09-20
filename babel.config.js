module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  plugins: [
    ['prismjs', {
      languages: ['javascript', 'css', 'markup', 'html',],
      plugins: ['line-numbers',],
      theme: 'okaidia',
      css: true,
    }, ],
  ],
}
