import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'

export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  console.log(data.site.siteMetadata.title)

  return (
    <header className="navHeader">
      <nav className="navBar">
        <ul className="navList">
          <li className="navItem">
            <Link to="/">Home</Link>
          </li>
          <li className="navItem">
            <Link to="/blog">Blog</Link>
          </li>
          <li className="navItem">
            <Link to="/me">Me</Link>
          </li>
          <li className="navItem">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <h1 className="logo">{data.site.siteMetadata.title}</h1>
    </header>
  )
}
