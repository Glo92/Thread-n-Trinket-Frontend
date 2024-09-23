import React from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Men from '../components/Men'

function MensWear() {
  return (
    <div>
      <Header/>
      <NavBar/>
        <Men/>
      <Footer/>
    </div>
  )
}

export default MensWear