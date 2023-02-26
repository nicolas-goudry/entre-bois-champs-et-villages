require('dotenv').config()

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Entre Bois, Champs et Villages`,
    siteUrl: `https://www.entreboischampsetvillages.fr`,
  },
  trailingSlash: 'never',
  plugins: [
    {
      resolve: 'gatsby-source-google-docs',
      options: {
        folder: process.env.FOLDER_ID,
        createPages: true,
        debug: process.env.NODE_ENV !== 'production',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /.*\.svg$/,
        },
      },
    },
    'gatsby-plugin-layout',
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
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-image',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [
          // You need some transformations?
          // Checkout https://www.gatsbyjs.com/plugins/?=gatsby-remark
          // And pick-up some plugins
          'gatsby-remark-images',
        ],
      },
    },
  ],
}
