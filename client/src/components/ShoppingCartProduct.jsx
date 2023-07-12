import React, { useState, useEffect, useContext } from 'react';
import { FaPlus, FaMinus } from "react-icons/fa";

import { addedToCartContext } from '../App';


const CartProduct = ({name, price, image, qty}) => {

    const { clearCart, itemsInCart } = useContext(addedToCartContext);
    const [isMobile, setMobile] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const [totalPrice, setTotalPrice] = useState();

    useEffect(() => {
        const handleResize = () => {
          setMobile(window.innerWidth >= 740);
        }
    
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        }
    }, []);

    useEffect(() => {
        setTotalPrice((price * quantity).toFixed(2));
    }, [quantity]);

    function addQty() {
        setQuantity(quantity + 1);
    }

    function subQty() {
        setQuantity(quantity - 1);
    }
    
  return (
    <div className='w-full h-[212px] md:h-[164px] flex flex-row items-center'>
        <img src={image} alt="image" className='w-[126px] h-[164px] mr-8'/>
        <div className='w-full h-full'>
            {isMobile ? 
            <div className='w-full h-full flex flex-col justify-between'>
                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='font-bold'>{name}</div>
                    <div className='flex flex-col'>
                        <p className='font-bold mb-2'>Each</p>
                        ${price}
                    </div>
                    <div className='flex flex-col'>
                        <p className='mb-2 font-bold'>Qty</p>
                        <div className='flex'>
                            <button onClick={subQty} className='rounded bg-[#2C5364] p-1 mr-3'><FaMinus className='text-white'/></button>
                            {quantity}
                            <button onClick={addQty} className='rounded bg-[#2C5364] p-1 ml-3 md:mr-3'><FaPlus className='text-white'/></button>
                        </div>
                    </div>
                    <div className='flex flex-col'>
                        <p className='mb-2 font-bold'>Total Price</p>
                        ${totalPrice}
                    </div>
                </div>
                <div className='flex items-end'>
                    <button className='rounded bg-[#2C5364] px-2 py-1 text-white hover:bg-[#0F2027] text-[12px] md:text-[18px]'>Remove</button>
                </div>
            </div>
            :
             <div className='w-full h-full flex flex-row'>
                <div className='w-1/2 h-full flex flex-col justify-between'>
                    <div className='font-bold mb-4'>{name}</div>
                    <div className='flex flex-col'>
                        <p className='font-bold mb-2'>Each</p>
                        ${price}
                    </div>
                    <div className='flex flex-col'>
                        <p className='mb-2 font-bold'>Qty</p>
                        <div className='flex'>
                            <button onClick={subQty} className='rounded bg-[#2C5364] p-1 mr-3'><FaMinus className='text-white'/></button>
                            {quantity}
                            <button onClick={addQty} className='rounded bg-[#2C5364] p-1 ml-3 md:mr-3'><FaPlus className='text-white'/></button>
                        </div>
                    </div>
                </div>
                <div className='w-1/2 flex flex-col items-end justify-between'>
                    <div className='flex flex-col items-end'>
                        <p className='mb-2 font-bold'>Total Price</p>
                        ${totalPrice}
                    </div>
                    <div className='flex '>
                        <button className='rounded bg-[#2C5364] px-2 py-1 text-white hover:bg-[#0F2027] text-[12px] md:text-[18px]'>Remove</button>
                    </div>
                </div>
             </div>
            }
        </div>
    </div>
  )
}

export default CartProduct