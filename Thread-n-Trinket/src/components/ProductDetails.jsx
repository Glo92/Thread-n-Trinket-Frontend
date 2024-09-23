import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom'; 
import Header from './Header';
import { FaStar } from 'react-icons/fa';
import "./HomePage.css";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState('');
  const [cartMessage, setCartMessage] = useState('');
  const [sessionId] = useState('unique_session_id'); 
  
  useEffect(() => {
    
    fetch(`http://localhost:5000/products/${id}`)
      .then(response => response.json())
      .then(data => setProduct(data))
      .catch(error => console.error('Error fetching product:', error));
  }, [id]);

  const handleAddToCart = () => {
    if (!selectedSize) {
      setCartMessage('Please select a size.');
      return;
    }

    const cartItem = {
      session_id: sessionId, 
      product_id: product.id,
      quantity: 1, 
      size: selectedSize, 
    };

    fetch('http://localhost:5000/cart/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItem),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message) {
          setCartMessage(`Added ${product.name} (Size: ${selectedSize}) to the cart!`);
          setTimeout(() => {
            navigate('/cart');
          }, 1000);
        } else {
          setCartMessage('Failed to add item to the cart.');
        }
      })
      .catch(error => {
        console.error('Error adding to cart:', error);
        setCartMessage('Failed to add item to the cart.');
      });
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
    setCartMessage(''); 
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header />
      <div className="card p-9 flex border-red-700">
        <img
          src={product.image_url}
          alt={product.name}
          className="w-1/3 rounded-s-full h-2/3 object-cover mb-4"
        />
        <div className='px-9'>
          <h1 className="text-4xl font-bold underline mb-4">{product.name}</h1>

          <div className='flex mb-5'>
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className='text-yellow-500' />
            ))}
          </div>

          <p className="mb-2 text-2xl">{product.description}</p>
          <p className="text-2xl font-semibold text-gray-700 mt-5 mb-4">${product.price}</p>

          <div className="mb-4">
            <label htmlFor="size" className="block text-2xl mt-20 font-semibold mb-2">Choose Size:</label>
            <select
              id="size"
              value={selectedSize}
              onChange={handleSizeChange}
              className="border text-xl p-3"
            >
              <option value="">Select a size</option>
              <option value="S">Small</option>
              <option value="M">Medium</option>
              <option value="L">Large</option>
              <option value="XL">Extra Large</option>
            </select>
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-blue-500 text-white px-6 py-4 mt-10 rounded hover:bg-blue-600"
          >
            Add to Cart
          </button>

          {cartMessage && <p className="mt-4 text-green-600">{cartMessage}</p>}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
