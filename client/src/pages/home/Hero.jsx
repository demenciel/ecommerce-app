import React from 'react';

import { FaTruckMoving, FaBoxOpen, FaRegCreditCard } from "react-icons/fa";

import bag from '../../assets/hero-bag.jpg';
import { FeaturesHome } from '../../components';

const Hero = () => {

  function clearCart() {
    localStorage.clear();
  }

  return (
    <div className='w-full relative'>
      <img src={bag} alt="bag" className='w-full relative z-0 lg:h-[850px] md:h-[650px] xl:h-[1150px]'/>
      <div className='absolute md:top-1/4 top-1/4 left-[75px] w-[250px] lg:w-[350px] lg:left-[125px]'>
        <h1 className='text-textColor text-xl md:text-4xl font-black mb-8'>Unleash Your Adventure with Our Premium Backpacks</h1>
        <a href="#products">
          <button onClick={clearCart} className='rounded bg-[#2C5364] py-4 px-6 text-white hover:bg-[#0F2027] text-[12px] md:text-[18px]'> Start your adventure</button>
        </a>
      </div>
      <div className='w-full bg-white md:h-[175px] h-[100px] flex flex-row justify-evenly items-center border-b'>
        <FeaturesHome title={"Free Shipping"} text={"Free shipping on all order above $200"} icon={<FaTruckMoving className='md:text-[64px] text-[32px]'/>} check={true}/>
        <FeaturesHome title={"30 Days Return"} text={"Simply return it within 30 days for an exchange"} icon={<FaBoxOpen className='md:text-[64px] text-[32px]'/>} check={true}/>
        <FeaturesHome title={"100% Payment Secure"} text={"Simply return it within 30 days for an exchange"} icon={<FaRegCreditCard className='md:text-[64px] text-[32px]'/>} check={false}/>
      </div>
    </div>
  )
}

export default Hero