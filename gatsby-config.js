module.exports = {
  siteMetadata: {
    title: `My super blog`,
    description: `Gatsby log with Strapi as a headless CMS`,
    author: `@clementlgd`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        // apiURL: process.env.DEPLOY_URL
        // ? "https://whentocop-back.herokuapp.com"
        // : "http://localhost:1337",
        apiURL: "https://whentocop-back.herokuapp.com",
        contentTypes: [
          `drops`,
          // `retaillers`,
        ],
        // loginData: {
        //   identifier: 'Clement',
        //   password: 'chickenRun9278',
        // },
        queryLimit: 1000,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
