'use client'
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';

import { Scrollbar } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import { SwiperNavBtn } from './SwipperNavBtn';
// import { Pagination, Scrollbar } from 'swiper/modules';

const SwipperBox = ({ data }) => {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                scrollbar={{
                    el: '.swiper-scrollbar',
                    draggable: true,
                }}
                // navigation={true}
                breakpoints={{
                    375: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 5,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 50,
                    },
                }}
                modules={[Scrollbar]}
                className="mySwiper swipperbox"
            >
                <SwiperNavBtn />
                {data.map((item) => (
                    <>
                        <SwiperSlide key={item.id}>
                            <figure className='w-fit h-[200px]'>
                                <img src={item.src} alt={`Slide ${item.id}`} className='w-full h-full' />
                            </figure>
                        </SwiperSlide>
                    </>
                ))}
            </Swiper>
            <div className="swiper-scrollbar"></div>

        </>
    )
}

export default SwipperBox;