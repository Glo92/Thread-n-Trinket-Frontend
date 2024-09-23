import React, { useEffect, useState } from 'react'
import ProductsCard from './ProductsCard';

function Accesory() {
  const [products, setProducts] = useState([]);
  console.log(products)
  useEffect(() => {
    fetch("http://localhost:5000/products?category_id=6", {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => res.json())
      .then((data) => setProducts(data));
  } ,[])
  return (
    <div className='grid grid-cols-4 gap-2 my-5 px-5'>
      {products.map((product) => <ProductsCard key={product.id} {...product}/>)}
      
    </div>
  )
}

export default Accesory;