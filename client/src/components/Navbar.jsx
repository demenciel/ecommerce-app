import React, { useState, useEffect } from 'react';
import { FaCartShopping, FaBars } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { Products} from '../pages/home';
import { ShoppingCart } from '../pages/shoppingcart';


import logo from '../assets/Shop.png';
import '../index.css';


const Navbar = () => {

  const [isMobile, setisMobile] = useState(false);
  const [toggleMenu, settoggleMenu] = useState(true);

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
      <div className='text-[#0F2027] p-4 flex justify-between items-center'>
        <div className=''>
          <Link to="/"><img src={logo} alt="logo" className='w-[98px]'/></Link>
        </div>
        <div className='w-1/4'>
          <div className='flex justify-end mr-4'>
            {isMobile ? 
              <FaBars className='text-[36px] cursor-pointer' onClick={handleClick}/> :
              <div className='flex justify-evenly items-center'>
                <a className='hover:text-accent' href='#gallery'>Gallery</a>
                <Link className='ml-6 hover:text-accent' to="/products">Products</Link>
                <a className='ml-6 hover:text-accent' href="#reviews">Reviews</a>
                <Link className='ml-6 hover:text-accent' to="/cart"><FaCartShopping className='text-[32px]'/></Link>
              </div>
            }
          </div>

          {toggleMenu && isMobile ? 
            <div className='toggleMenuBg absolute w-[150px] h-[250px] z-10 right-0 mr-8 mt-8 border rounded-lg py-8 px-12'>
              <div className='flex flex-col text-bold items-start justify-evenly'>
                <a href='#gallery' className='hover:text-accent'>Gallery</a>
                <Link className='mt-6 hover:text-accent' to="/products">Products</Link>
                <a className='mt-6 hover:text-accent' href="#reviews">Reviews</a>
                <Link className='mt-6 hover:text-accent' to="/cart"><FaCartShopping className='text-[32px]'/></Link>
              </div>
            </div> : 
            null
          }
        </div>
      </div>
  )
}

export default Navbar