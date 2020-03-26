import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

import Layout from '../components/Layout'

export default function Blog() {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
          }
        }
      }
    }
  `)

  console.log(data)

  return (
    <div>
      <Layout>
        <h1 className="title">Blog</h1>
        <p>This is the blog area, where some posts will be added</p>
      </Layout>
    </div>
  )
}
