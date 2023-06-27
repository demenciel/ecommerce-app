import React, { useState, useEffect } from 'react';
import { FaCartShopping, FaBars } from 'react-icons/fa6';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Gallery, Products, Reviews, ShoppingCart } from '../containers';


import logo from '../assets/Shop.png';
import '../index.css';


const Navbar = () => {

  const [isMobile, setisMobile] = useState(false);
  const [toggleMenu, settoggleMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setisMobile(window.innerWidth <= 840);
      settoggleMenu(false);
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  function handleClick() {
    settoggleMenu(toggleMenu => !toggleMenu);
  }
    
  return (
    <BrowserRouter>
      <div className='text-white p-4 flex justify-between items-center'>
        <div className=''>
          <img src={logo} alt="logo" className='w-[98px]'/>
        </div>
        <div className='w-1/4'>
          <div className='flex justify-end mr-4'>
            {isMobile ? 
              <FaBars className='text-[36px] cursor-pointer' onClick={handleClick}/> :
              <div className='flex justify-evenly items-center'>
                <Link className='' to="/gallery">Gallery</Link>
                <Link className='ml-6' to="/products">Products</Link>
                <Link className='ml-6' to="/reviews">Reviews</Link>
                <Link className='ml-6' to="/shoppingcart"><FaCartShopping className='text-[32px]'/></Link>
              </div>
            }
          </div>

          {toggleMenu && isMobile ? 
            <div className='flex flex-col toggleMenuBg absolute right-0 mr-8 mt-8 border rounded-lg py-8 px-12'>
              <Link className='hover:text-[#2C5364] mb-4' to="/gallery">Gallery</Link>
              <Link className='hover:text-[#2C5364] mb-4' to="/products">Products</Link>
              <Link className='hover:text-[#2C5364] mb-4' to="/reviews">Reviews</Link>
              <Link className='hover:text-[#2C5364] mb-4' to="/shoppingcart"><FaCartShopping className='text-[32px]' /></Link>
            </div> : 
            null
          }
        </div>

        <Routes>
          <Route path='/gallery' element={<Gallery />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/reviews' element={<Reviews />}/>
          <Route path='/shoppingcart' element={<ShoppingCart />}/>
        </Routes>
      </div>
    </BrowserRouter> 

  )
}

export default Navbar