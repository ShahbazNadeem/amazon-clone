'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import './swipper.css'

import { Navigation } from 'swiper/modules';
import FourBox from '../FourBox';
import { handbags, jewelry, lawnImages, backyardOasis } from '@/app/data/Imports';

const Swipper = ({ data, data1 }) => {
    return (
        <div className='relative'>
            <Swiper navigation={true} modules={[Navigation]} loop={true} className="mySwiper">
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <figure className=''>
                            <img src={item.src} alt={`Slide ${item.id}`} className='w-full h-auto' />
                        </figure>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className="absolute md:top-40 lg:top-60 xl:top-79 z-10  flex justify-center flex-wrap gap-1 md:gap-3">
                <div className="basis-[48%] md:basis-[32%] lg:basis-[24%]"><FourBox data={handbags} title='Hand bags for you' /></div>
                <div className="basis-[48%] md:basis-[32%] lg:basis-[24%]"><FourBox data={jewelry} title='Discover pre-loved jewelry' /></div>
                <div className="basis-[48%] md:basis-[32%] lg:basis-[24%]"><FourBox data={lawnImages} title='Lawn helpfll things' /></div>
                <div className="md:hidden lg:block basis-[48%] md:basis-[32%] lg:basis-[24%]"><FourBox data={backyardOasis} title='Backyard helpfll things' /></div>
            </div>
        </div>
    )
}

export default Swipper