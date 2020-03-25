import React from 'react'
import { Link } from 'gatsby'

import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Index() {
  return (
    <div>
      <Header />
      <h1>Hello Bootcamp</h1>
      <p>
        I'm Dimas, a jr. fullStack developer{' '}
        <Link to="/me">Know more about me</Link>{' '}
      </p>

      <Footer />
    </div>
  )
}
