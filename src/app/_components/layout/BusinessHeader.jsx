import React from 'react'
import { Icons } from '@/app/data/Imports';

const BusinessHeader = () => {
    return (
        <div className='bg-[#F5F3EF]'>
            <div className="max-w-[1024px] mx-auto flex justify-between p-5 flex-wrap shadow-md md:shadow-none">
                <figure className='w-[130px] md:w-[180px]'>
                    <img src="/images/header/amazonBusiness.png" alt="amazonLogo" className='w-full h-auto' />
                </figure>

                <ul className='flex gap-1 md:gap-4 text-[12px] md:text-[14px] mt-5 md:mt-0'>
                    <li className='flex gap-1 items-center'>
                        <span><Icons.oneFill size={20} /></span>
                        <span className='font-semibold'>ACCOUNT CREATION</span>
                    </li>
                    <li className='flex gap-1 items-center'>
                        <span><Icons.two size={20} /></span>
                        <span>BUSINESS DETAILS</span>
                    </li>
                    <li className='flex gap-1 items-center'>
                        <span><Icons.three size={20} /></span>
                        <span>FINISH</span>
                    </li>
                </ul>
            </div>

        </div>
    )
}

export default BusinessHeader