import React from 'react'

import Header from './Header'
import Footer from './Footer'

import '../styles/index.css'

export default function Layout(props) {
  return (
    <>
      <Header />
      <div className="container">{props.children}</div>
      <Footer />
    </>
  )
}
