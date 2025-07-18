'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import './swipper.css'

import { Navigation } from 'swiper/modules';

const Swipper = ({ data }) => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} loop={true} className="mySwiper">
                {data.map((item) => (
                    <SwiperSlide key={item.id}>
                        <img src={item.src} alt={`Slide ${item.id}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Swipper