/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Entre bois, champs et villages`,
    siteUrl: `https://www.entreboischampsetvillages.fr`,
  },
  plugins: [
    'gatsby-plugin-image',
    'gatsby-plugin-sitemap',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-google-docs',
      options: {
        folder: '11qX4WVrzjaqiXwv4m4irpJuner7KqrZ3',
        createPages: true,
        debug: process.env.NODE_ENV !== 'production',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          // You need some transformations?
          // Checkout https://www.gatsbyjs.com/plugins/?=gatsby-remark
          // And pick-up some plugins
          'gatsby-remark-images',
        ],
      },
    },
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
        /**
         * @property {boolean} [isBaseProvider=false]
         * if true, will render `<ChakraBaseProvider>`
         */
        isBaseProvider: false,
      },
    },
  ],
}
