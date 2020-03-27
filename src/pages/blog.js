import React from 'react'
import { graphql, useStaticQuery, Link } from 'gatsby'

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
            fields {
              slug
            }
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
        <ol>
          {data.allMarkdownRemark.edges.map(it => (
            <li key={Math.random()}>
              <Link to={`/blog/${it.node.fields.slug}`}>
                <h2>{it.node.frontmatter.title}</h2>
                <p>{it.node.frontmatter.date}</p>
              </Link>
            </li>
          ))}
        </ol>
      </Layout>
    </div>
  )
}
