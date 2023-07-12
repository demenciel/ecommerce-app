import React, { useState, useEffect, useContext } from 'react';
import { FaCartShopping, FaBars, FaUserAstronaut } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { Products} from '../pages/home';
import { ShoppingCart } from '../pages/shoppingcart';

import { addedToCartContext } from '../App';

import logo from '../assets/Shop.png';
import '../index.css';


const Navbar = () => {

  const { itemsInCart, setItemsInCart } = useContext(addedToCartContext);
  const [isMobile, setisMobile] = useState(false);
  const [toggleMenu, settoggleMenu] = useState(true);

  // to handle the resizing of the navbar
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
      setItemsInCart(cart.length);
    }
    
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

  // to handle the pill of the cart

    
  return (
      <div className='sticky top-0 z-50 text-[#0F2027] px-6 flex bg-white'>
        <div className='w-full'>
          <div className='w-full flex justify-between items-center'>
            {isMobile ? 
              <div className='w-full flex justify-between items-center'>
                <div id='middle'>
                  <Link to="/"><img src={logo} alt="logo" className='w-[98px]'/></Link>
                </div>
                <div className='flex-end'>
                  <FaBars className='text-[36px] cursor-pointer' onClick={handleClick}/> 
                </div>
              </div>
              :
              <div className='w-full flex justify-between items-center'>
                <div id='start' className='flex-start'>
                  <a className='hover:text-accent' href='#gallery'>Gallery</a>
                  <Link className='ml-6 hover:text-accent' to="/products">Products</Link>
                  <a className='ml-6 hover:text-accent' href="#reviews">Reviews</a>
                </div>
                <div id='middle'>
                  <Link to="/"><img src={logo} alt="logo" className='w-[98px]'/></Link>
                </div>
                <div id='end' className='flex flex-end'>
                <Link className='hover:text-accent' to="/cart">
                  <div className='relative' style={{ width: 32, height: 32 }}>
                    <FaCartShopping className='text-[32px]'/>
                    {
                      localStorage.getItem('cart') && 
                      <div className='absolute bottom-[-5px] right-[-5px] w-[20px] h-[20px] flex items-center justify-center bg-accent text-white rounded-full'>{itemsInCart}</div>
                    }
                  </div>
                </Link>

                  <Link className='ml-8 hover:text-accent' to="/cart"><FaUserAstronaut className='text-[32px]'/></Link>
                </div>
              </div>
            }
          </div>

          {toggleMenu && isMobile ? 
            <div className='toggleMenuBg absolute w-[150px] h-[285px] z-10 right-0 mr-8 mt-8 border rounded-lg py-8 px-12'>
              <div className='flex flex-col text-bold items-start justify-evenly'>
                <a href='#gallery' className='hover:text-accent'>Gallery</a>
                <Link className='mt-6 hover:text-accent' to="/products">Products</Link>
                <a className='mt-6 hover:text-accent' href="#reviews">Reviews</a>
                <Link className='mt-6 hover:text-accent' to="/cart"><FaCartShopping className='text-[24px]'/></Link>
                <Link className='mt-6 hover:text-accent' to="/cart"><FaUserAstronaut className='text-[24px]'/></Link>
              </div>
            </div> : 
            null
          }
        </div>
      </div>
  )
}

export default Navbar