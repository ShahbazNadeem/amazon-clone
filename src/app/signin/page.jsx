'use client'
import React, { useState } from 'react'
import { Icons } from '@/app/data/Imports';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const page = () => {
    const router = useRouter()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const clearInput = () => {
        setEmail('');
    };

    const submitSignin = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://67ffac3db72e9cfaf7257b92.mockapi.io/signup');
            const users = await response.json();

            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                const { password, ...userWithoutPassword } = user;

                localStorage.setItem('amazonUser', JSON.stringify(userWithoutPassword));
                alert('Login successful!');
                console.log('Stored user:', userWithoutPassword);
                router.push('/');
            } else {
                alert('Invalid email or password!');
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('Something went wrong. Please try again.');
        }
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
                    <div className='flex flex-col gap-3'>
                        <h2>Sign in or create account</h2>

                        <div className="flex flex-col gap-2">
                            <form onSubmit={submitSignin} className='flex flex-col gap-2'>
                                <div className="relative">
                                    <label htmlFor="email" className='font-semibold'>Enter mobile number or email</label>
                                    <input id='email' type="email" className='border border-gray-400 rounded w-full p-1' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />
                                    {email && (
                                        <Icons.cross
                                            size={20}
                                            className="absolute top-2 right-1 cursor-pointer"
                                            onClick={clearInput}
                                        />
                                    )}
                                </div>
                                <div className="flex flex-col">
                                    <label htmlFor="password" className='font-semibold'>Password</label>
                                    <input id='password' className='border border-gray-400 rounded p-1' type="text" placeholder='enter password' value={password} onChange={(e) => setPassword(e.target.value)} />
                                </div>
                                <button className="btn1">Sign in</button>
                            </form>

                        </div>

                        <p>By continuing, you agree to Amazon's <Link href="/" className="text-blue-600 underline">Conditions of Use</Link> and <Link href="/" className="text-blue-600 underline">Privacy Notice</Link>.</p>

                        <p><Link href="/" className="text-blue-600">Need help?</Link></p>

                        <hr className='border-gray-300' />

                        <div className="">
                            <h3 className='font-semibold'>Buying for work?</h3>
                            <p><Link href="/signup" className="text-blue-600">Create a free business account</Link></p>
                        </div>
                    </div>
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