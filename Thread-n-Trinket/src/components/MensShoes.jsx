import React, { useEffect, useState } from 'react'
import ProductsCard from './ProductsCard';
import Header from './Header'
import NavBar from './NavBar'
import Footer from './Footer'


function MensShoes() {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
      fetch("http://localhost:5000/products?category_id=2", {
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
      <div className='grid grid-cols-4 gap-2'>
        {products.map((product) => <ProductsCard key={product.id} {...product}/>)}
        
      </div>
      <Footer/>
      </div>
    )
}

export default MensShoes