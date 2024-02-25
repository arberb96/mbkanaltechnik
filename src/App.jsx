import React from 'react'
import Navigation from './components/navigation/Navigation'
import Hero from './components/hero/Hero'
import Services from './components/services/Services'
import OurTeam from './components/our-team/OurTeam'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import ChooseUs from './components/why-chooseUs/ChooseUs'

function App() {
  return (
    <>
    <Navigation />
    <Hero />
    <Services />
    <ChooseUs />
    <OurTeam />
    <Contact />
    <Footer />
    </>
  )
}

export default App