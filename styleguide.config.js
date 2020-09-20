const { path, } = require('d3')

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
    path2.join(__dirname, 'src/tokens.css'),
    path2.join(__dirname, 'src/layouts.css'),
  ],
  sections: [
    {
      name: 'Elements',
      components: 'src/components/elements/[A-Z]*.vue',
    },
    {
      name: 'Patterns',
      components: 'src/components/patterns/[A-Z]*.vue',
    },
  ],
  // webpackConfig: {
  //   // custom config goes here
  // },
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
