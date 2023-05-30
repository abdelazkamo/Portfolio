import React from 'react'

import Header from './components/header/header'
import Nav from './components/nav/nav'
import About from './components/about/about'
import Porfolio from './components/porfolio/porfolio'
import Services from './components/services/services'
import Contact from './components/contact/contact'
import Experience from './components/experience/experience'
import Testimonials from './components/testimonials/testimonials'
import Footer from './components/footer/footer'

const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Porfolio/>
      <Contact/>
      <Testimonials/>
      <Footer/>
    </>
  )
}

export default App