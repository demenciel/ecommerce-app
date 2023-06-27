import React from 'react';
import bag from '../assets/hero-bag.jpg';

const Hero = () => {
  return (
    <div className='w-full relative'>
      <img src={bag} alt="bag" className='w-full relative z-0 lg:h-[850px] md:h-[650px] xl:h-[1150px]'/>
      <div className='absolute md:top-1/4 top-1/4 left-[75px] w-[250px] lg:w-[350px] lg:left-[125px]'>
        <h1 className='text-[#0F2027] text-xl md:text-4xl font-black mb-8'>Unleash Your Adventure with Our Premium Backpacks</h1>
        <a href="#products">
          <button className='rounded-xl bg-[#2C5364] py-4 px-6 text-white hover:bg-[#0F2027] text-[12px] md:text-[18px]'> Start your adventure</button>
        </a>
      </div>
    </div>
  )
}

export default Hero