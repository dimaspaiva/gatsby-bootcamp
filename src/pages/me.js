import React from 'react'
import { Link } from 'gatsby'

export default function Me() {
  return (
    <div>
      <h1>About</h1>
      <p>
        Here u can know about me, a junior fullstack developer, living em Pouso
        Alegre, Minas Gerais, Brasil
      </p>
      <p>
        need a developer? <Link to="/contact">contact me!</Link>
      </p>
    </div>
  )
}
