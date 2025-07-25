import React from 'react'
import BusinessHeader from '../_components/layout/BusinessHeader'
import Link from 'next/link'

const page = () => {
  return (
    <div className='bg-[#FFFFFF] h-screen'>
      <BusinessHeader />
      <div className="flex justify-center mt-10">

        <div className="border border-gray-300 p-5 flex flex-col gap-5">
          <span className='text-[24px] font-bold'>Lets create your free Amazon Business account</span>

          <div className="flex flex-col gap-2">
            <span>Enter an email. Work email preferred.</span>
            <input type="email" placeholder='Enter email' className='border rounded w-full p-1' />
            <button className='bg-orange-400 py-2'>Get started</button>
          </div>
          <span>Already an Amazon Business customer? <Link href='/signin' className="text-blue-600 hover:text-orange-500 hover:underline">Sign in</Link></span>

        </div>

        <div className="border border-gray-300 p-5 bg-[#F5F3EF]">
          <h2>Added value for every type of organization</h2>
        </div>

      </div>
    </div>
  )
}

export default page