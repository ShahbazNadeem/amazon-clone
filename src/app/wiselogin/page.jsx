'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import Lottie from 'lottie-react'
import { Icons } from '../data/Imports'
import Loading from '@/lottie/Loading.json'

const page = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  // const [step, setStep] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return

    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      // setStep(2)
    }, 3000)
  }
  return (
    <div className='bg-white min-h-screen'>
      <section className='border border-b border-gray-400'>
        <div className="max-w-6xl mx-auto flex justify-between items-center px-9 py-9">
          <Link href='/payments'><figure className='w-[100px] h-auto'><img src="/images/wise/wiseLogo.png" alt="Wise Logo" className="w-full h-auto" /></figure></Link>
          <Link href='/payments' className='hover:bg-[#16330014] px-2 py-2 rounded-full'><Icons.cross size={30} /></Link>
        </div>
      </section>

      <section className='mt-10 md:mt-20'>
        <div className="flex flex-col gap-6 max-w-[530px] mx-auto">
          <span className='text-center text-2xl font-bold'>Welcome back</span>

          <span className='text-center text-gray-500 font-medium'>
            New to Wise? <Link className='font-semibold underline text-black' href='/wisesignup'>Sign up</Link>
          </span>

          <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
            <span>
              <span className='text-gray-500 font-medium'>Your email address</span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className='w-full rounded-2xl px-3 py-3.5 border border-gray-600 focus:border-black focus:ring-2 focus:ring-black outline-none transition-all duration-200 ease-in-out'
              />
            </span>
            <span>
              <span className='text-gray-500 font-medium'>Your password</span>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className='w-full rounded-2xl px-3 py-3.5 border border-gray-600 focus:border-black focus:ring-2 focus:ring-black outline-none transition-all duration-200 ease-in-out'
              />
            </span>
            <button
              type="submit"
              disabled={loading}
              className='bg-[#A3E46B] w-full rounded-full py-3.5 transition-all duration-300 ease-in-out hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed relative cursor-pointer'
            >
              Login
              <span className='absolute left-2 top-0 '>{loading && <Lottie animationData={Loading} loop={true} style={{ width: 50, height: 50 }} />}</span>
            </button>
          </form>

          <span className='text-gray-500 text-sm font-medium'>Or log in with</span>

          <div className="flex justify-between flex-wrap gap-3">
            {['google', 'facebook', 'apple'].map((provider) => (
              <span key={provider} className='px-14 md:px-18 py-2 border border-gray-400 rounded-full flex justify-center items-center'>
                <figure className='w-[20px] h-auto'>
                  <img src={`/images/wise/${provider}.png`} alt={`${provider} sign in`} className='w-full h-auto' />
                </figure>
              </span>
            ))}
          </div>

        </div>
      </section>
    </div>
  )
}

export default page