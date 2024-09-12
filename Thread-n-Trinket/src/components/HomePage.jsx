
import React from 'react';
import "./HomePage.css";
import { FaShoppingCart, FaUser } from 'react-icons/fa'; 
import NavBar from './NavBar';

const HomePage = () => {
  return (
    <div className='homepage'>
      <div className="flex items-center gap-8 mt-2 mb-4 bg-orange-600 p-4">
        <a href="/" className='font-bold hover:font-serif text-3xl pr-7 text-white'>
          THREAD & TRINKET
        </a>

        <div className='relative flex-grow pr-4'>
          <input 
            className='p-2 outline-none border-8 border-gray-400 w-full text-xl max-w-lg' 
            type="text" 
            placeholder='Search for products...' 
          />
        </div>

        <a href="/categories" className='text-white pr-5 font-bold hover:underline'>Categories</a>

        <div className='flex items-center space-x-4'>
          <a href="/login" className='text-white font-bold pr-7 hover:underline'>Sign In</a>

          <a href="/account" className='text-white pr-7'>
            <FaUser size={24} />
          </a>

          <a href="/cart" className='text-white pr-4'>
            <FaShoppingCart size={24} />
          </a>
        </div>
      </div>
      
      <hr className='navbar-divider' />
      
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

export default HomePage;
