import React, { useState, useEffect } from 'react';
import Product from '../../components/Product';

const Products = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch("http://localhost:8080/api/products")

      .then(response => {
        if (!response.ok) { 
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setProducts(data))
      .catch(error => console.error('There has been a problem with your fetch operation:', error));
  }, []);


  return (
    <div id='products' className='w-full p-12 flex flex-col justify-evenly items-center'>
      <h1 className='font-extrabold text-4xl text-center mb-12 text-textColor'>Our Products</h1>
      <div className='grid lg:grid-cols-3 gap-8 grid-cols-1'>
        {products.map(product => (
          <Product 
            key={product._id}
            id={product._id}
            name={product.name}
            desc={product.desc}
            imageUrl={product.imageUrl}
            price={product.price}
          />
        ))}
      </div>
    </div>
  )
}

export default Products
