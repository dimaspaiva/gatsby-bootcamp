import React from 'react'
import { Link } from 'gatsby'

export default function Header() {
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
      <h1 className="logo">Dimas Paiva</h1>
    </header>
  )
}
