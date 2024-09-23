

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import Header from './Header';

function CartPage() {
  const [cartItems, setCartItems] = useState([]);
  const [cartMessage, setCartMessage] = useState('');
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch('http://localhost:5000/cart/view?session_id=unique_session_id')
      .then(response => response.json())
      .then(data => {
        if (data.items.length === 0) {
          setCartMessage('Your cart is empty');
        } else {
          setCartItems(data.items);
        }
      })
      .catch(error => console.error('Error fetching cart:', error));
  }, []);

  const handleUpdateCart = (productId, newQuantity) => {
    const cartUpdate = {
      session_id: 'unique_session_id',
      product_id: productId,
      quantity: newQuantity,
    };

    fetch('http://localhost:5000/cart/update', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartUpdate),
    })
      .then(response => response.json())
      .then(data => {
        if (data.message) {
          setCartMessage('Cart updated successfully');
        }
      })
      .catch(error => setCartMessage('Failed to update cart'));
  };

  const handleRemoveFromCart = (productId) => {
    const cartItem = {
      session_id: 'unique_session_id',
      product_id: productId,
    };

    fetch('http://localhost:5000/cart/remove', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cartItem),
    })
      .then(response => {
        if (response.status === 204) {
          setCartMessage('Item removed successfully');
          setCartItems(cartItems.filter(item => item.product_id !== productId));
          if (cartItems.length === 1) {
            setCartMessage('Your cart is empty');
          }
        }
      })
      .catch(error => setCartMessage('Failed to remove item from cart'));
  };

  const handleProceedToCheckout = () => {
    navigate('/login');
  };

  return (
    <div>
      <Header />
      <div className="cart-container flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className='font-extrabold text-3xl font-serif text-zinc-600 mb-8'>Your Cart</h1>
        {cartMessage && <p>{cartMessage}</p>}

        {cartItems.length === 0 ? (
          <p>Your cart is empty. <a href="/">Continue shopping</a></p>
        ) : (
          <div className="cart-items-container w-full max-w-5xl px-6 py-10 bg-white rounded shadow-lg">
            <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {cartItems.map(item => (
                <li key={item.product_id} className="flex flex-col items-center p-4 border rounded shadow-sm">
                  <img
                    src={item.product.image_url} 
                    alt={item.product.name} 
                    className="w-60 h-60 object-cover mb-4"
                  />
                  <div className="text-center">
                    <h3 className="font-bold text-xl">{item.product.name}</h3>
                    <p className="font-semibold text-lg mb-2">Price: ${item.price}</p>
                    <p>Quantity: {item.quantity}</p>
                    <input
                      type="number"
                      value={item.quantity}
                      onChange={e => handleUpdateCart(item.product_id, parseInt(e.target.value))}
                      className="border p-2 w-16 mt-2 mb-2"
                    />
                    <button
                      onClick={() => handleRemoveFromCart(item.product_id)}
                      className="bg-red-500 text-white px-4 py-2 rounded mt-2"
                    >
                      Remove
                    </button>
                  </div>
                </li>
              ))}
            </ul>

            <button
              onClick={handleProceedToCheckout}
              className="bg-green-500 text-white px-6 py-3 mt-8 rounded hover:bg-green-600"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;
