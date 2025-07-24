'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/scrollbar';

import { Scrollbar } from 'swiper/modules';
import { SwiperNavBtn } from './SwipperNavBtn';

const SwipperBox = ({ data, id }) => {
    const scrollbarClass = `swiper-scrollbar-${id}`;

    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                scrollbar={{
                    el: `.${scrollbarClass}`,
                    draggable: true,
                }}
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
                    <SwiperSlide key={item.id}>
                       <div className="flex flex-col ">
                         <figure className='w-fit h-[200px]'>
                            <img src={item.src} alt={`Slide ${item.id}`} className='w-full h-full' />
                        </figure>
                        <a href="/" className='flex justify-baseline text-blue-700 hover:underline'>{item?.link}</a>
                        <span className='flex justify-baseline'>{item?.price}</span>
                        <span className='flex justify-baseline'>{item?.name}</span>
                       </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className={`swiper-scrollbar ${scrollbarClass}`}></div>
        </>
    )
}

export default SwipperBox;