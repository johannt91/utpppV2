/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

 module.exports = {
  pathPrefix: "/utpppV2",
  siteMetadata: {
    title: "University of Toronto Piano Pedagogy Program",
    description: "Piano Pedagogy at the University of Toronto's Music Faculty"
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-source-filesystem`, //A Gatsby plugin for sourcing data into your Gatsby application from your local filesystem
      options: {
        // The unique name for each instance
        name: `teachers`,
        // Path to the directory
        path: `${__dirname}/src/assets/images/people`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`, //A Gatsby plugin for sourcing data into your Gatsby application from your local filesystem
      options: {
        // The unique name for each instance
        name: `faculty`,
        // Path to the directory
        path: `${__dirname}/src/assets/images/people`,
      },
    }
  ],
}