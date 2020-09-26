const path2 = require('path')
module.exports = {
  title: 'Studio Sanstream Design System',
  theme: {
    fontFamily: {
      base: 'Montserrat',
      monospace: 'Fira Code',
    },
  },
  // defaultExample: true,
  require: [
    path2.join(__dirname, 'src/design-tokens/generateCssVariables.js'),
    path2.join(__dirname, 'src/tokens.css'),
    path2.join(__dirname, 'src/layouts.css'),
  ],
  sections: [
    {
      name: 'Design Tokens',
      components: 'src/design-tokens/docs/Color.vue',
    },
    {
      name: 'Elements',
      components: 'src/components/elements/[A-Z]*.vue',
    },
  ],
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.json5$/i,
          loader: 'json5-loader',
          options: {
            esModule: true,
          },
          type: 'javascript/auto',
        },
      ],
    },
  },
  exampleMode: 'expand',
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Armata&family=Fira+Code&family=Montserrat:wght@500&display=swap',
        },
      ],
    },
  },
}
