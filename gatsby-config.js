module.exports = {
  siteMetadata: {
    author: 'Dimas AL Paiva',
    title: 'Gatsby Bootcamp',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`,
      },
    },
    'gatsby-transformer-remark',
  ],
}
