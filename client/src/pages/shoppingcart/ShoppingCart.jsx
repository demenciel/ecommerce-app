import React, { useState, useEffect } from 'react';
import { FaCartShopping } from 'react-icons/fa6';

import { Products } from '../home';
import { CartProduct } from '../../components';

const ShoppingCart = () => {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
  
    cart.forEach(item => {
      const url = `http://localhost:8080/api/products/${item._id}`;
      fetch(url)
        .then(response => {
          if (!response.ok) { 
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(product => setproducts(products => [...products, product]))
        .catch(error => console.error('Error:', error));
    });
  }, []);
  

  return (
    <div className='w-full p-8 flex flex-col justify-center items-center'>
      <div className='w-full flex justify-center items-center mb-8'>
        <FaCartShopping className='text-[36px] mr-4'/>
        <h1 className='font-bold text-[36px]'>My Cart</h1>
      </div>
      <hr className='w-full border-slate-700 mb-4'/>
      <div className='w-full flex flex-row justify-between items-center'>
        <div id='products-list' className='w-full'>
          {products.map(product => (
            <div key={product.id} className='mb-8'>
              <CartProduct name={product.name} image={product.imageUrl} price={product.price} />
              <hr className='mt-4 border-slate-700'/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export default ShoppingCart