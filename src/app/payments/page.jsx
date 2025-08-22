'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import WiseSideBar from '../_components/layout/WiseSideBar'
import { Icons } from '../data/Imports'

const WiseSignup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const flags = ["gb", "us", "in", "ca", "es", "mx", "th"];

  return (
    <div className='min-h-screen'>
      <section className='bg-[#A3E46B]'>
        <div className='container'>
          <nav className="px-8 py-6">
            <div className="mx-auto flex justify-between items-center">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <img
                    src="/images/wise/wiseLogo.png"
                    alt="Wise Logo"
                    className="w-20 h-auto hidden xl:block"
                  />
                  <img
                    src="/images/wise/wiseminilogo.png"
                    alt="Wise Logo"
                    className="w-10 h-auto block xl:hidden"
                  />
                </div>

                <div className="hidden xl:flex items-center gap-4 text-md text-green-950 font-semibold ">
                  <button className="px-4 py-1 rounded-full bg-[#84c55d] border-[1px] border-gray-400">Personal</button>
                  <a href="#" className="hover:bg-[#16330014] px-4 py-1 rounded-full">Business</a>
                  <a href="#" className="hover:bg-[#16330014] px-4 py-1 rounded-full">Platform</a>
                </div>
              </div>

              {/* Right Side */}
              <div className="flex items-center gap-4 text-md font-semibold text-green-950">
                <div className="relative group hidden xl:block">
                  <button className="">Features ▾</button>
                  {/* Dropdown */}
                </div>
                <a href="#" className="hover:bg-[#16330014] px-4 py-1 rounded-full hidden xl:block">Pricing</a>
                <a href="#" className="hover:bg-[#16330014] px-4 py-1 rounded-full hidden xl:block">Help</a>

                <div className="hidden xl:flex items-center gap-1">
                  <img
                    src="/images/wise/usFlag.svg"
                    alt="US Flag"
                    className="w-6 h-6 rounded-full"
                  />
                  <span>EN</span>
                </div>

                <Link href="/wiselogin" className="hover:bg-[#16330014] px-4 py-1 rounded-full hidden xl:block">Log in</Link>
                <Link href='/wisesignup' className="bg-green-950 text-[#a1df6b] px-4 py-1 rounded-full">
                  Register
                </Link>
                <div className="block xl:hidden">
                  <WiseSideBar />
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>

      <section className='bg-[#A3E46B]'>
        <div className='container'>
          <div className="relative flex flex-col gap-10 items-center text-center max-w-[940px] mx-auto py-10 md:py-20">
            <h1 className='text-green-950 lg:text-[66px] xl:text-[88px] font-extrabold lg:leading-16 xl:leading-18 tracking-tighter'>THE FAST WAY TO SEND MONEY ABROAD</h1>
            <span className='text-green-950 font-semibold text-[18px] max-w-[650px]'>Send money to family and friends. Make transfers with more certainty. Most arrive in under 20 seconds.1 Deliver to 140+ countries.</span>
            <span><Link href='/wisesignup' className="bg-green-950 text-[#a1df6b] px-5 py-2 rounded-full">
              Signup
            </Link></span>

            <div className="flex flex-wrap gap-2 absolute bottom-[-20px] md:bottom-[-5%]">
              {flags.map((code, index) => (
                <React.Fragment key={code}>
                  {/* Flag */}
                  <figure
                    onClick={() => setIsOpen(true)}
                    className="rounded-full border-3 sm:border-4 md:border-6 border-white cursor-pointer w-[40px] sm:w-[60px] md:w-[80px]"
                  >
                    <img src={`/images/wise/${code}.svg`} alt={code} className='w-full h-auto'/>
                  </figure>

                  {index === 0 && (
                    <span className="hidden rounded-full bg-[#E2F6D5] md:flex justify-end items-center w-[120px] px-2">
                      <span className="bg-green-950 p-5 rounded-full">
                        <Icons.fullRightArrow
                          size={20}
                          className="text-[#A3E46B]"
                        />
                      </span>
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
            {/* modelleft  */}
            <div>

              {isOpen && (
                <div className="fixed inset-0 bg-black/50  transition-opacity duration-300"
                  onClick={() => setIsOpen(false)}>
                </div>
              )}

              {/* Off-Canvas Drawer */}
              <div
                className={`bg-[#F8F8F8] fixed top-0 right-0 z-50 h-screen p-4 overflow-y-auto w-[35%] transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"
                  }`}
              >
                <div className="flex justify-between items-center px-4 py-2 border-b-[1px] border-gray-400">
                  <img
                    src="/images/wise/wiseLogo.png"
                    alt="Wise Logo"
                    className="w-20 h-auto"
                  />
                  <span
                    onClick={() => setIsOpen(false)}
                    className=" text-gray-400 cursor-pointer"
                  >
                    <Icons.cross size={28} />
                  </span>
                </div>

                <div className="py-10 px-2 flex flex-col gap-10">
                  <div className="flex items-center gap-4 text-md text-green-950 font-semibold ">
                    <button className="px-4 py-1 rounded-full bg-[#b0e591]">Personal</button>
                    <a href="#" className="hover:bg-[#16330014] px-4 py-1 rounded-full">
                      Business
                    </a>
                    <a href="#" className="hover:bg-[#16330014] px-4 py-1 rounded-full">
                      Platform
                    </a>
                  </div>

                  <ul className="flex flex-col gap-5 font-marcellus text-[16px]">
                    <li>
                      <Link href="/">Features</Link>
                    </li>
                    <li>
                      <Link href="/recruiter-dashboard/home">Pricing</Link>
                    </li>
                    <li>
                      <Link href="/recruiter-dashboard/postjob">Help</Link>
                    </li>
                    <li className="flex justify-between items-center">
                      <img
                        src="/images/wise/usFlag.svg"
                        alt="US Flag"
                        className="w-6 h-6 rounded-full"
                      />
                      <span>EN</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section></section>
    </div>
  )
}

export default WiseSignup