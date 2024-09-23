

import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom'; 

function ProductsCard({ id, name, image_url, description, price }) {
  return (
    <div className='bg-slate-300 shadow-md rounded-lg overflow-hidden group relative'>
      <div className='relative'>
        <img 
          className='w-full h-86 object-cover' 
          src={image_url} 
          alt={name} 
        />
        
        <Link 
          to={`/details/${id}`} 
          className='absolute inset-0 bg-black bg-opacity-50 text-white font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'
        >
          View Details
        </Link>
      </div>
     
      <div className='p-4'>
        <h2 className='font-bold text-lg mb-2'>{name}</h2>
        <h1 className='font-semibold text-gray-700 mb-2'>$ {price}</h1>
        <p className='text-gray-600 mb-4 text-sm'>{description}</p>
        <div className='flex'>
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} className='text-yellow-500' />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductsCard;
