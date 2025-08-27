'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import WiseSideBar from '../_components/layout/WiseSideBar'
import { Icons } from '../data/Imports'
import Image from 'next/image'
import CurrencySelect from '../_components/CurrencySelect'

const WiseSignup = () => {
  const [isOpen, setIsOpen] = useState(false);

  const flags = ["gb", "us", "in", "ca", "es", "mx", "th"];
  const providers = [
    {
      name: "Wise",
      logo: "/images/wise/wiseminilogo.png",
      bg: "bg-[#9FE870]", // special background
      values: ["850.42 EUR", "0.855103", "0 USD ?", "5.48 USD", "5.48 USD"],
    },
    {
      name: "Bank of America",
      logo: "/images/wise/bank-of-america-mark.svg",
      values: ["850.42 EUR", "0.855103", "0 USD ?", "5.48 USD", "5.48 USD"],
    },
    {
      name: "Wells Fargo",
      logo: "/images/wise/wells-fargo-mark.svg",
      values: ["850.42 EUR", "0.855103", "0 USD ?", "5.48 USD", "5.48 USD"],
    },
    {
      name: "Chase US",
      logo: "/images/wise/chase-mark.svg",
      values: ["850.42 EUR", "0.855103", "0 USD ?", "5.48 USD", "5.48 USD"],
    },
  ];
  const getWise = [
    {
      name: "Recieve money fast",
      pic: "/images/wise/bankDetails.svg",
      detail: 'Get paid easily in other countries with global account details',
      detail2: '23 curriences',
      button: 'Explore getting paid',
      link: ''
    },
    {
      name: "Save on spending abroad",
      pic: "/images/wise/personal_green_wise_.webp",
      detail: 'Pay and withdraw cash worldwide with out any foreign transation fees.',
      detail2: '215 contries',
      button: 'Learn about Wise cards',
      link: ''
    },
    {
      name: "Recieve interest*",
      pic: "/images/wise/Screenshot_3.png",
      detail: 'Opt in and get passthrough FDIC insurance up to  $250,000 through Program Bank.',
      detail2: 'USD, GBP and EUR',
      button: 'See our interest features',
      link: ''
    },
  ]
  const features = [
    {
      icon: <Icons.universal size={20} />,
      title: "Federally regulated",
      desc: "Regulated nationwide, with 65 licenses worldwide to keep your money moving.",
    },
    {
      icon: <Icons.shield size={20} />,
      title: "Safeguarded funds",
      desc: "Your money is protected in a safeguarded, separate account.",
    },
    {
      icon: <Icons.mobile size={20} />,
      title: "Specialized anti-fraud tech",
      desc: "Over 1,000 experts and our smart systems run 7 million checks every day to spot and stop fraud.",
    },
  ];


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
                    <img src={`/images/wise/${code}.svg`} alt={code} className='w-full h-auto' />
                  </figure>

                  {index === 0 && (
                    <span className="hidden rounded-full bg-[#E2F6D5] md:flex justify-end items-center w-[140px] px-2">
                      <span className="bg-green-950 p-5 rounded-full">
                        <Icons.fullRightArrow
                          size={28}
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

      <section className='bg-white pt-10 md:pt-20'>
        <div className="container">
          <div className="flex flex-col sm:flex-row gap-5 justify-between mx-5 md:mx-0">
            <span className="flex flex-col gap-2 basis-[33%] items-start ">
              <span className='p-3 md:p-5 rounded-full bg-gray-200'><Icons.headset size={25} /></span>
              <span className='font-semibold text-[18px] md:text-[20px]'>Instant, secure transfer</span>
              <span className='sm:max-w-[180px] md:max-w-[360px] text-gray-600 font-semibold text-[14px] md:text-[16px]'>Design to deliver. 64% of transfer arrive in under 20 seconds, and 95% in a day.</span>
            </span>
            <span className="flex flex-col gap-2 basis-[33%] items-start ">
              <span className='p-3 md:p-5 rounded-full bg-gray-200'><Icons.doubleArrow size={25} /></span>
              <span className='font-semibold text-[18px] md:text-[20px]'>An exchange rate that won’t change</span>
              <span className='sm:max-w-[180px] md:max-w-[360px] text-gray-600 font-semibold text-[14px] md:text-[16px]'>Lock in exactly what your recipient will get for up to 24 hours. If the rate drops, you won’t lose out.</span>
            </span>
            <span className="flex flex-col gap-2 basis-[33%] items-start ">
              <span className='p-3 md:p-5 rounded-full bg-gray-200'><Icons.share size={25} /></span>
              <span className='font-semibold text-[18px] md:text-[20px]'>Instant, secure transfer</span>
              <span className='sm:max-w-[180px] md:max-w-[360px] text-gray-600 font-semibold text-[14px] md:text-[16px]'>Get help from our experts by phone, email or chat any time.</span>
            </span>

          </div>
          <div className="mx-5 md:mx-0 py-10 md:py-20">
            <video src="/videos/wise/Wise.webm"
              type="video/mp4"
              width="100%"
              autoPlay
              loop
              muted
              className="rounded-lg shadow-lg" />
          </div>
        </div>
      </section>

      <section className='hidden xl:block'>
        <div className="container">
          <div className='flex flex-col gap-5 items-center mx-5 md:mx-0 py-10'>
            <h2 className='font-bold uppercase '>100% transparent pricing</h2>
            <span className='text-gray-700 text-[16px] md:text-[20px] max-w-[550px] font-semibold text-center'>Banks and other providers inflate the mid-market exchange rate to hide fees and make you pay more. Not Wise. You’ll always get our stand-out rate, like the one on Google.</span>
            <span>
              <button className='btn-wise font-semibold'>
                Send money now
              </button>
            </span>
            <div className="w-[1200px] rounded-4xl p-8 bg-white shadow-md flex flex-col gap-10">
              <div className="flex gap-8">
                <span className='basis-[33%] flex flex-col'>
                  <span className='font-semibold'>Amount</span>
                  <input type="number" placeholder='0' className="border-2 border-gray-500 rounded-md py-2 px-3 transition-all duration-300 ease-in-out hover:border-gray-950" />
                </span>
                <span className='basis-[33%]'>
                  <span className='font-semibold'>From</span>
                  <CurrencySelect />
                </span>
                <span className='basis-[33%]'>
                  <span className='font-semibold'>To</span>
                  <CurrencySelect />
                </span>
              </div>

              <div className="flex gap-2">
                <div className="basis-[20%] flex items-end p-3">
                  <span className="flex flex-col gap-5">
                    <span>Recipient gets (Total after fees)</span>
                    <span>Exchange rate (1 USD - EUR)</span>
                    <span>Exchange rate markup</span>
                    <span>Transfer fee</span>
                    <span>Total transfer cost</span>
                  </span>
                </div>

                {providers?.map(({ name, logo, values, bg }, idx) => {
                  return (
                    <div
                      key={idx}
                      className={`basis-[19%] text-center flex flex-col gap-4 p-3 rounded-2xl ${bg || ""
                        }`}
                    >
                      <span className="flex flex-col items-center gap-2 border-b border-gray-400 py-2">
                        <figure className="w-[50px]">
                          <img src={logo} alt={name} className="w-full h-auto" />
                        </figure>
                        <span>{name}</span>
                      </span>

                      <span className="flex flex-col gap-6">
                        {values.map((val, i) => (
                          <span key={i}>{val}</span>
                        ))}
                      </span>
                    </div>
                  )
                }
                )}
              </div>

              <div className="border-t border-gray-400 text-center pt-4 underline text-green-950 text-[14px] font-semibold">Show more providers</div>
            </div>

            <span className='text-[14px] font-semibold text-gray-600'>This applies when you pay in via ACH payments. <span className='underline text-green-950 '>How do we collect this data</span></span>
          </div>
        </div>
      </section>

      <section className='bg-white min-h-screen xl:pt-10'>
        <div className="container">
          <div className="flex flex-col gap-5 items-center mx-5 md:mx-0">
            <h2 className='font-bold uppercase max-w-[250] sm:max-w-[380px] md:max-w-[550px] xl:max-w-[600px] text-center'>Make your money do more</h2>
            <span className='text-gray-700 text-[16px] md:text-[20px] font-semibold'>Spend, receive and manage money internationally, as easily as you do at home.</span>
            <span>
              <button className='btn-wise font-semibold'>
                Get Wise
              </button>
            </span>

            <div className="flex flex-col md:flex-row justify-center flex-wrap gap-5">
              {getWise?.map(({ name, pic, detail, detail2, button, link }, idx) => {
                return (
                  <div className="basis-[100%] md:basis-[48%] xl:basis-[28%] p-5 flex flex-col justify-between items-center gap-10 bg-[#EDEFEB] rounded-2xl">
                    <figure className='w-[200px]'><img src={pic} alt="pic" className='w-full h-auto' /></figure>

                    <div className="flex flex-col gap-5 items-center text-center">
                      <span>{name}</span>
                      <span>{detail}</span>
                      <span className='font-semibold text-green-950 flex items-center gap-3'>
                        <Icons.check />
                        {detail2}
                      </span>
                    </div>

                    <span>
                      <button className='border-[1px] border-green-950 hover:border-[#A3E46B] hover:bg-[#A3E46B] transition-all duration-300 ease-in-out font-semibold text-green-950 rounded-full p-3'>{button}</button>
                    </span>

                  </div>
                )
              }
              )}
            </div>
          </div>
        </div>
      </section>

      <section className='bg-white pt-10 px-5 md:px-0'>
        <div className="container">
          <div className="flex md:flex-row flex-col gap-10">
            <div className="basis-[100%] md:basis-[50%]">
              <figure classNAme='w-[100px] md:w-[200px]'><img src="/images/wise/securityImage.jpg" alt="securityImage" className='w-fit h-auto' /></figure>
            </div>
            <div className="basis-[100%] md:basis-[50%] flex flex-col justify-between py-10 gap-5">
              <span className='flex flex-col gap-5'>
                <h2 className='font-bold uppercase'>Safe at every step</h2>
                <span className='text-gray-600 text-[16px] md:text-[20px] max-w-[550px] font-semibold'>14.8 customers, businesses and banks use Wise every day. They move $10 billion every month. Here’s how we keep each dollar safe.
                </span>
              </span>

              <div>
                {features.map(({ icon, title, desc }, idx) => (
                  <span
                    key={idx}
                    className="flex gap-5 p-4 border-t border-gray-300 max-w-[600px]"
                  >
                    <span className="p-3 border border-gray-300 rounded-full h-fit">
                      {icon}
                    </span>
                    <span className="flex flex-col gap-1 font-semibold">
                      <span className="text-[16px] md:text-[20px]">{title}</span>
                      <span className="text-gray-600 text-[14px] md:text-[18px]">
                        {desc}
                      </span>
                    </span>
                  </span>
                ))}
              </div>

              <span>
                <button className='btn-wise font-semibold'>See our security</button>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WiseSignup