import React from 'react'
import { Link } from 'gatsby'

import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Me() {
  return (
    <div>
      <Header />
      <h1>About</h1>
      <p>
        Here u can know about me, a junior fullstack developer, living em Pouso
        Alegre, Minas Gerais, Brasil
      </p>
      <p>
        need a developer? <Link to="/contact">contact me!</Link>
      </p>

      <Footer />
    </div>
  )
}
