const { defaultTheme } = require('vuepress')
// const { docsearchPlugin } = require('@vuepress/plugin-docsearch')
const { searchPlugin } = require('@vuepress/plugin-search')

module.exports = {
    lang: 'en-US',
    // title: 'Hjálpin',
    description: 'Skútan hjálpin',
    plugins: [
      // docsearchPlugin({
      //   // options
      // }),
      searchPlugin({
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
            text: 'Skráningar',
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
            text: 'Lögskráningar',
            link: '/logskraning',
          },
          {
            text: 'Vefþjónustur',
            link: '/web',
          },
        ],
      }),
  }