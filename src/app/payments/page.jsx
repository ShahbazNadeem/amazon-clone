import Link from 'next/link'
import React from 'react'

const WiseSignup = () => {
  return (
    <div className='bg-[#A3E46B] min-h-screen'>
      <section>
        <div className='container'>
          <nav className="px-8 py-6">
            <div className="container mx-auto flex justify-between items-center">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <img
                    src="/images/wise/wiseLogo.png"
                    alt="Wise Logo"
                    className="w-20 h-auto"
                  />
                </div>

                <div className="flex items-center gap-4 text-md text-green-950 font-semibold">
                  <button className="px-4 py-1 rounded-full bg-[#84c55d] border-[1px] border-gray-400">Personal</button>
                  <a href="#" className="hover:bg-[#16330014] px-4 py-1 rounded-full">Business</a>
                  <a href="#" className="hover:bg-[#16330014] px-4 py-1 rounded-full">Platform</a>
                </div>
              </div>

              {/* Right Side */}
              <div className="flex items-center gap-4 text-md font-semibold text-green-950">
                <div className="relative group">
                  <button className="">Features ▾</button>
                  {/* Dropdown */}
                </div>
                <a href="#" className="hover:bg-[#16330014] px-4 py-1 rounded-full">Pricing</a>
                <a href="#" className="hover:bg-[#16330014] px-4 py-1 rounded-full">Help</a>

                <div className="flex items-center gap-1">
                  <img
                    src="/images/wise/usFlag.svg"
                    alt="US Flag"
                    className="w-6 h-6 rounded-full"
                  />
                  <span>EN</span>
                </div>

                <Link href="/wiselogin" className="hover:bg-[#16330014] px-4 py-1 rounded-full">Log in</Link>
                <Link href='/wisesignup' className="bg-green-950 text-[#a1df6b] px-4 py-1 rounded-full">
                  Register
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </section>

      <section>
        <div className='container'>
          <div className="flex flex-col gap-10 items-center text-center max-w-[940px] mx-auto mt-10 md:mt-20">
            <h1 className='text-green-950 lg:text-[66px] xl:text-[88px] font-extrabold lg:leading-16 xl:leading-18 tracking-tighter'>THE FAST WAY TO SEND MONEY ABROAD</h1>
            <span className='text-green-950 font-semibold text-[18px] max-w-[600px]'>Move your money where it matters. Save on international transfers in over 50 currencies, without any hidden fees.</span>
            <span><Link href='/wisesignup' className="bg-green-950 text-[#a1df6b] px-5 py-2 rounded-full">
              Signup
            </Link></span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WiseSignup