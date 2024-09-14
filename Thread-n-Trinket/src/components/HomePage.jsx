
import React from 'react';
import "./HomePage.css";

import NavBar from './NavBar';
import Header from './Header';
import Footer from './Footer';

const HomePage = () => {
  return (
    <div className='homepage'>
      <Header/>
      <div>
        <NavBar />
      </div>

      

      <div className='image-container'>
        <img 
          src="https://tiqueabouclothing.com/wp-content/uploads/2019/11/COVER12-1.jpg" 
          alt="Cover Image" 
          className='main-image'
        />
      </div>

     <Footer/>
    </div>
  );
};

export default HomePage