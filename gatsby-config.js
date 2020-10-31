/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: ['gatsby-plugin-sass', {resolve: 'gatsby-plugin-s3', options: {bucketName: 'travistillotson.com'}}],
}
