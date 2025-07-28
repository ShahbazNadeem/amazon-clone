import React from 'react'
import BusinessHeader from '../_components/layout/BusinessHeader'
import Link from 'next/link'
import { Icons } from '../data/Imports'

const page = () => {
  return (
    <div className='bg-[#FFFFFF] h-screen flex flex-col justify-between'>
      <div>
        <BusinessHeader />
        <div className="flex justify-center gap-5 md:gap-0 flex-col md:flex-row mt-5 md:mt-10 max-w-[900px] mx-auto">

          <div className="border border-gray-300 mx-2 md:mx-0 py-7 px-5 md:px-10 flex flex-col gap-5 basis-full md:basis-[50%]">
            <span className='text-[24px] font-bold'>Lets create your free Amazon Business account</span>

            <div className="flex flex-col gap-2">
              <span>Enter an email. Work email preferred.</span>
              <input type="email" placeholder='Enter email' className='border rounded w-full p-1' />
              <button className='bg-orange-400 py-2'>Get started</button>
            </div>
            <span>Already an Amazon Business customer? <Link href='/signin' className="text-blue-600 hover:text-orange-500 hover:underline">Sign in</Link></span>

          </div>

          <div className="border mx-2 md:mx-0 border-gray-300 bg-[#F5F3EF] basis-[50%]">
            <div className="flex flex-col gap-2 px-3 md:px-7 py-4">
              <span className='text-[28px]'>Added value for every type of organization</span>

              <div className="flex flex-col gap-2">
                <div className="flex gap-2 items-center">
                  <span className='p-1'>
                    <Icons.priceTag size={30} />
                  </span>
                  <div className='flex flex-col gap-1'>
                    <span className='text-[20px] font-semibold'>Buy more, save more</span>
                    <span className='text-[12px]'>From commerce to education, save on over 60 million products when you buy two or more.</span>
                  </div>
                </div>

                <div className="flex gap-2 items-center">
                  <span className='p-1'>
                    <Icons.userPlus size={30} />
                  </span>
                  <div className='flex flex-col gap-1'>
                    <span className='text-[20px] font-semibold'>Connect your people</span>
                    <span className='text-[12px]'>Create groups, share payment methods, and manage supplies across locations.</span>
                  </div>
                </div>

                <div className="flex gap-2 items-center">
                  <span className='p-1'>
                    <Icons.pakage size={30} />
                  </span>
                  <div className='flex flex-col gap-1'>
                    <span className='text-[20px] font-semibold'>Get fast, FREE shipping with Business Prime</span>
                    <span className='text-[12px]'>Just one Business Prime membership covers unlimited free shipping on eligible orders for your entire organization.</span>
                  </div>
                </div>

              </div>
            </div>

            <span className='flex justify-center hover:text-orange-400 hover:underline mt-10 mb-2 text-[12px] cursor-pointer'>
              Learn more about Amazon Business
            </span>
          </div>

        </div>
      </div>

      <div className="bg-[#F5F3EF] flex flex-col gap-2 py-3 px-2 md:px-20 text-[12px] w-full">
        <span>Need help? Contact <Link href='/' className='text-blue-600'>business customer service.</Link> Read our <Link href='/' className='text-blue-600'>conditions of use</Link> and <Link href='/' className='text-blue-600'>privacy notice</Link>.</span>
        <span>© 1996–2025, Amazon.com Inc. or its affiliates</span>
      </div>
    </div>
  )
}

export default page