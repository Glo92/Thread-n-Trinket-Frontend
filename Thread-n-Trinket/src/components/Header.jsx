
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import "./HomePage.css";
import SearchBar from './SearchBar';
import { useState } from 'react';

function Header() {
  const [searchInput, setSearchInput] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div>
      <div className="flex items-center gap-8 mt-2 mb-4 bg-black p-4">
        <a href="/" className='font-bold hover:font-serif text-3xl pr-7 text-white'>
          THREAD & TRINKET
        </a>
        
        <div className='relative flex-grow pr-4'>
          <SearchBar searchInput={searchInput} setSearchInput={setSearchInput} />
        </div>

        <div className='relative'>
          <button 
            onClick={toggleDropdown} 
            className='text-white pr-8 font-bold hover:underline'
          >
            Categories
          </button>
          {dropdownVisible && (
            <div className='absolute bg-white text-black shadow-lg rounded-md mt-2 z-10'>
              <a href="/mensclothes" className='block px-4 py-2 hover:bg-gray-200'>Men's Clothes</a>
              <a href="/menshoes" className='block px-4 py-2 hover:bg-gray-200'>Men's Shoes</a>
              <a href="/mensaccesories" className='block px-4 py-2 hover:bg-gray-200'>Men's Accessories</a>
              <a href="/womensclothes" className='block px-4 py-2 hover:bg-gray-200'>Women's Clothes</a>
              <a href="/womenshoes" className='block px-4 py-2 hover:bg-gray-200'>Women's Shoes</a>
              <a href="/womensaccesories" className='block px-4 py-2 hover:bg-gray-200'>Women's Accessories</a>
            </div>
          )}
        </div>

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
    </div>
  );
}

export default Header;
