const { defaultTheme } = require('vuepress')
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')

module.exports = {
    lang: 'en-US',
    // title: 'Hjálpin',
    description: 'Skútan hjálpin',
    plugins: [
      docsearchPlugin({
        // options
      }),
    ],

    theme: defaultTheme({
        logo: 'images/sgs-logo.svg',

        navbar: [
          {
            text: 'Almennt',
            link: '/',
          },
          {
            text: 'Skráning',
            link: '/skraning',
          },
          {
            text: 'Skírteini',
            link: '/skirteini',
          },
          {
            text: 'Skoðanir',
            link: '/skodanir',
          },
          {
            text: 'Öryggisbúnaður',
            link: '/oryggis',
          },
          {
            text: 'Lögskráning',
            link: '/logskraning',
          },
          {
            text: 'Vefþjónustur',
            link: '/web',
          },
        ],
      }),
  }