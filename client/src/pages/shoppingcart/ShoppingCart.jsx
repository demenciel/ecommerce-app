import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';

import { Products } from '../home';

const ShoppingCart = () => {
  return (
    <div className='w-full p-8 flex flex-col justify-center items-center'>
      <div className='w-full flex justify-center items-center'>
        <FaCartShopping />
        <h1 className='font-extrabold font-xl'>My Cart</h1>
      </div>
      <div className='flex flex-row justify-between items-center'>

      </div>
    </div>
  )
}

export default ShoppingCart