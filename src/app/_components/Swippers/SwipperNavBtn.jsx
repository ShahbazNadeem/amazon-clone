import React from 'react';
import { useSwiper } from 'swiper/react';
import { Icons } from '@/app/data/Imports';
import './swipper.css'

export const SwiperNavBtn = () => {
    const swiper = useSwiper();

    return (
        <div className="swiper-nav-btns flex justify-between items-center gap-[10px]">
            <span className='cursor-pointer md:flex justify-center items-center bg-[#E4E4E4] mt-[-180px] transition-all duration-500 px-[15px] py-[25px] text-[#1A2B48] z-[1] opacity-0 hidden' onClick={() => swiper.slidePrev()}><Icons.leftArrowSmall size={30} /></span>
            <span className='cursor-pointer md:flex justify-center items-center bg-[#E4E4E4] mt-[-180px] transition-all duration-500 px-[15px] py-[25px] text-[#1A2B48] z-[1] opacity-0 hidden' onClick={() => swiper.slideNext()}><Icons.rightArrowSmall size={30} /></span>
        </div>
    );
};