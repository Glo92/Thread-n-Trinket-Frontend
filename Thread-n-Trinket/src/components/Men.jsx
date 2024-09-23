import React, { useEffect, useState } from 'react'
import ProductsCard from './ProductsCard';

function Men() {
  const [mensClothes, setMensClothes] = useState([]);
  
  useEffect(() => {
    fetch("http://localhost:5000/products?category_id=1", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => res.json())
      .then((data) => setMensClothes(data));
  } ,[])
  return (
    <div className='grid grid-cols-4 gap-4 my-5 px-8'>
      {mensClothes.map((mansClothe) => <ProductsCard key={mansClothe.id} {...mansClothe}/>)}
      
    </div>
  )
}

export default Men;