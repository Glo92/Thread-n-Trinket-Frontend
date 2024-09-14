
import React from 'react';
import "./HomePage.css";

import NavBar from './NavBar';
import Header from './Header';

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

      <footer className='text-center mt-4'>
        <p>© 2024 Thread and Trinket. All rights reserved.</p>
        <h3>Contact Us:</h3>
      </footer>
    </div>
  );
};

export default HomePage