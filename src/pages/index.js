import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/Layout'

export default function Index() {
  return (
    <div>
      <Layout>
        <h1 className="title">Hello Bootcamp</h1>
        <p>
          I'm Dimas, a jr. fullStack developer{' '}
          <Link to="/me">Know more about me</Link>{' '}
        </p>
      </Layout>
    </div>
  )
}
