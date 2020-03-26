import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'

export default function Me() {
  return (
    <div>
      <Layout>
        <h1 className="title">This is me</h1>
        <p>
          Here u can know about me, a junior fullstack developer, brasilian,
          living em Pouso Alegre, Minas Gerais, Brasil. Working in Dom Pedro
          Group since february 2020.
        </p>
        <p>
          need a developer?{' '}
          <Link to="/contact" className="link">
            contact me!
          </Link>
        </p>
      </Layout>
    </div>
  )
}
