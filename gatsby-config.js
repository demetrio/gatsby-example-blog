module.exports = {
  siteMetadata: {
    title: 'Gatsby Blog',
    description: 'This is a simple blog made with Gatsby',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/layout.js'),
        },
      },
    },
  ],
};
