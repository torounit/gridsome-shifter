module.exports = {
  siteName: 'Gridsome',
  siteDescription: 'A WordPress starter for Gridsome',

  templates: {
    WordPressCategory: '/category/:slug', // adds route for "category" post type (Optional)
    WordPressPost: '/:year/:month/:day/:slug', //adds route for "post" post type (Optional)
    WordPressPostTag: '/tag/:slug', // adds route for "post_tag" post type (Optional)
    WordPressPage: [
      {
        path: (node) => {
          const url = new URL(node.link);
          return `${url.pathname}`
        }
      }
    ]
  },

  plugins: [
    {
      use: '@gridsome/source-wordpress',
      options: {
        baseUrl: process.env.CONTAINER_URL,
        typeName: 'WordPress', // GraphQL schema name (Optional)
      }
    }
  ]
}
