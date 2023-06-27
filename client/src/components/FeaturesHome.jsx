import React, { useState } from 'react';

const FeaturesHome = ({title, text, icon, check}) => {

    return (
        <div className={`w-full h-full text-textColor flex flex-col md:flex-row justify-evenly items-center p-6 ${check ? 'border-r' : ''}`}>
            <div className='w-1/2 h-full flex justify-center items-center text-[#FFD700]'>
                {icon}
            </div>
            <div className='flex flex-col'>
                <h3 className='mb-3 font-extrabold text-[12px] md:text-[18px]'>{title}</h3>
                <p className='hidden md:flex '>{text}</p>
            </div>
        </div>
    )
}

export default FeaturesHome