import React from 'react'
import NavBar from '../components/NavBar'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Accesory from '../components/Accesory';


function Accesories() {
  return (
    <div>
      <Header/>
        <NavBar/>
        
        <Accesory/>
        <Footer/>
    </div>
  )
}

export default Accesories;