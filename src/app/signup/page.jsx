'use client'
import React, { useState } from 'react'
import BusinessHeader from '../_components/layout/BusinessHeader'
import Link from 'next/link'
import { Icons } from '../data/Imports'
import { useRouter } from 'next/navigation'

const page = () => {
  const router = useRouter()
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [error, setError] = useState(false)

  const getStarted = (e) => {
    e.preventDefault();
    setEmail(inputEmail);
  };

  const submitSignup = async (e) => {
    e.preventDefault();

    if (password === passwordCheck) {
      setError(false);

      const userData = {
        name,
        email,
        password,
      };

      try {
        const response = await fetch('https://67ffac3db72e9cfaf7257b92.mockapi.io/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(userData),
        });

        if (!response.ok) {
          throw new Error('Something went wrong');
        } else {
          setEmail('')
          setPassword('')
          setName('')
          setPasswordCheck('')
          alert('signed up successfully now login first')
          setTimeout(() => {
            router.push('/signin')
          }, 400);
        }

      } catch (error) {
        console.error('Error during signup:', error);
      }
    } else {
      setError(true);
    }
  };

  return (
    <div className='bg-[#FFFFFF] h-screen flex flex-col justify-between'>
      <div>
        <BusinessHeader />
        {email === '' ?
          <div className="flex justify-center gap-5 md:gap-0 flex-col md:flex-row mt-5 md:mt-16 max-w-[900px] mx-auto">

            <div className="border border-gray-300 mx-2 md:mx-0 py-7 px-5 md:px-10 flex flex-col gap-5 basis-full md:basis-[50%]">
              <span className='text-[24px] font-bold'>Lets create your free Amazon Business account</span>

              <div className="flex flex-col gap-2">
                <span>Enter an email. Work email preferred.</span>
                <input type="email" placeholder='Enter email' required className='border rounded w-full p-1' value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} />
                <button className='bg-orange-400 py-2' onClick={getStarted}>Get started</button>
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
          :
          <div className='max-w-[350px] mx-auto mt-5 md:mt-12 p-4'>
            <div className="flex flex-col gap-4">
              <span className='text-[28px] font-semibold'>Enter your full name and choose your business password</span>
              <form onSubmit={submitSignup} className='flex flex-col gap-2'>
                <div className="flex flex-col">
                  <label htmlFor="name">Your name</label>
                  <input id='name' className='border border-gray-400 rounded p-1' type="text" placeholder='First and last name' value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="email">Email</label>
                  <input id='email' className='border border-gray-400 rounded p-1' type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="password">Password</label>
                  <input id='password' className='border border-gray-400 rounded p-1' type="text" placeholder='First and last name' value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div className="flex gap-1 items-center">
                  <span><Icons.infoCircle /></span>
                  <span className='text-[12px]'>Passwords must be at least 6 characters</span>
                </div>
                {error && <span className='text-red-400 text-[12px]'>Password mis-match</span>}

                <div className="flex flex-col">
                  <label htmlFor="passwordCheck">Re-enter password</label>
                  <input id='passwordCheck' className='border border-gray-400 rounded p-1' type="text" placeholder='First and last name' value={passwordCheck} onChange={(e) => setPasswordCheck(e.target.value)} />
                </div>

                <span className='w-full'>
                  <button className='btn1'>Submit</button>
                </span>
              </form>

              <p className='text-[12px]'>By creating an account, you agree to Amazon’s <Link href='/' className='text-blue-600 underline'>Conditions of Use</Link>, <Link href='/' className='text-blue-600 underline'>Privacy Notice</Link>, and the <Link href='/' className='text-blue-600 underline'>Amazon Business Terms and Conditions</Link>. You agree that you are creating this business account on behalf of your organization and have authority to bind your organization.</p>
            </div>
          </div>
        }
      </div>

      <div className="bg-[#F5F3EF] flex flex-col gap-2 py-3 px-2 md:px-20 text-[12px] w-full">
        <span>Need help? Contact <Link href='/' className='text-blue-600'>business customer service.</Link> Read our <Link href='/' className='text-blue-600'>conditions of use</Link> and <Link href='/' className='text-blue-600'>privacy notice</Link>.</span>
        <span>© 1996–2025, Amazon.com Inc. or its affiliates</span>
      </div>
    </div>
  )
}

export default page