'use client'
import React, { useState } from 'react'
import { Icons } from '@/app/data/Imports';
import Link from 'next/link';

const page = () => {
    const [inputValue, setInputValue] = useState('');
    const clearInput = () => {
        setInputValue('');
    };
    return (
        <div className='bg-[#FFFFFF] h-screen py-3'>
            <div className="flex flex-col items-center gap-5">
                <div className="">
                    <figure className='w-[100px]'>
                        <img src="/images/header/amazonLogo2.png" alt="amazonLogo" className='w-full h-auto' />
                    </figure>
                </div>
                <div className="border border-gray-300 p-5 rounded-xl max-w-[350px]">
                    <form action="" className='flex flex-col gap-3'>
                        <h2>Sign in or create account</h2>

                        <div className="flex flex-col gap-2">
                            <h3 className='font-semibold'>Enter mobile number or email</h3>
                            <div className="relative">
                                <input type="text" className='border rounded w-full p-1' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                                {inputValue && (
                                    <Icons.cross
                                        size={20}
                                        className="absolute top-2 right-1 cursor-pointer"
                                        onClick={clearInput}
                                    />
                                )}
                            </div>
                            <button className="btn1">Continue</button>

                        </div>

                        <p>By continuing, you agree to Amazon's <Link href="/" className="text-blue-600 underline">Conditions of Use</Link> and <Link href="/" className="text-blue-600 underline">Privacy Notice</Link>.</p>

                        <p><Link href="/" className="text-blue-600">Need help?</Link></p>

                        <hr className='border-gray-300' />

                        <div className="">
                            <h3 className='font-semibold'>Buying for work?</h3>
                            <p><Link href="/" className="text-blue-600">Create a free business account</Link></p>
                        </div>
                    </form>
                </div>

            </div>

            <div className="border-t-2 border-gray-300 flex flex-col items-center text-[12px] mt-20 pt-6">
                <span className='flex gap-6'>
                    <span><Link href="/" className="text-blue-600">Condition of Use</Link></span>
                    <span><Link href="/" className="text-blue-600">Privacy Notice</Link></span>
                    <span><Link href="/" className="text-blue-600">Help</Link></span>
                </span>
                <span className='text-gray-500'>© 1996-2025, Amazon.com, Inc. or its affiliates</span>
            </div>
        </div>
    )
}

export default page