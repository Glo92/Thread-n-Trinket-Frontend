

import React, { useEffect, useState } from 'react'
import ProductsCard from './ProductsCard';
import NavBar from './NavBar';
import Header from './Header';

function MensAccesories() {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
      fetch("http://localhost:5000/products?category_id=3", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((res) => res.json())
        .then((data) => setProducts(data));
    } ,[])
    return (
      <div>
        <Header/>
        <NavBar/>
      <div className='grid grid-cols-4 gap-4 my-5 px-8'>
        {products.map((product) => <ProductsCard key={product.id} {...product}/>)}
        
      </div>
      </div>
    )
}

export default MensAccesories;