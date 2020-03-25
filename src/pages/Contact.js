import React from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Contact() {
  return (
    <div>
      <Header />
      <h1>Contact</h1>
      <p>
        Here is how u can contact me,{' '}
        <a
          href="https://www.linkedin.com/in/dimas-paiva-354733141/"
          target="_blanc"
        >
          via linkedin
        </a>
      </p>

      <Footer />
    </div>
  )
}
