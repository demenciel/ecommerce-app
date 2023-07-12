import React, { useEffect, useState, useContext } from 'react';
import { FaArrowRight } from 'react-icons/fa';

import { addedToCartContext } from '../App';
import '../index.css';

const Product = ({ imageUrl, name, price, id }) => {

    const { itemsInCart, setItemsInCart } = useContext(addedToCartContext);
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e) => {
        const rect = e.target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        setRotateX((y / rect.height - 0.4) * -20);
        setRotateY((x / rect.width - 0.4) * 30);
    };

    const resetTransform = () => {
        setRotateX(0);
        setRotateY(0);
    };

    function addToCart(product) {
        // add the procuct to the client storage
        let cart = localStorage.getItem('cart');
        if (!cart) {
          cart = [];
        } else {
          cart = JSON.parse(cart);
        }

        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));

        // notif cart item added
        setItemsInCart(cart.length);
    }
      

    return (
        <div className='container-card' onMouseMove={handleMouseMove} onMouseOut={resetTransform}>
            <div className='flex flex-col relative justify-between items-center bg-white p-8 overflow-hidden shadow-2xl rounded card'
                style={{ transform: `translateZ(15px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)` }}>
                <img className='w-full h-[275px] mb-4' src={imageUrl} alt="" />
                <div className='left w-full font-bold mb-8'>
                  <h2 className='text-[#0F2027]'>{name}</h2>
                  <p className='mt-1 text-accent'>${price}</p>
                </div>
                <button onClick={()=>addToCart({id})} className='bg-[#0F2027] text-[#ffff] rounded-lg px-8 py-2 w-1/2 flex items-center justify-between'>Add to cart</button>
            </div>
        </div>
    )
}

export default Product;
