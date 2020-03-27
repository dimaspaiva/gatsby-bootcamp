const path = require('path')

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md')

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const templatePath = path.resolve(__dirname, 'src', 'templates', 'blog.js')

  const response = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  response.data.allMarkdownRemark.edges.forEach(it => {
    createPage({
      component: templatePath,
      path: `blog/${it.node.fields.slug}`,
      context: {
        slug: it.node.fields.slug,
      },
    })
  })
}
