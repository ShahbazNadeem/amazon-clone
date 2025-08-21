'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { Icons } from '@/app/data/Imports';

const WiseSideBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <span className='cursor pointer'><Icons.burger size={28} onClick={() => setIsOpen(true)} /></span>

            {isOpen && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
                    onClick={() => setIsOpen(false)}>
                </div>
            )}

            {/* Off-Canvas Drawer */}
            <div className={`bg-[#F8F8F8] fixed top-0 left-0 z-50 h-screen p-4 overflow-y-auto w-[100%] transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex justify-between items-center px-4 py-2 border-b-[1px] border-gray-400">
                    <img
                        src="/images/wise/wiseLogo.png"
                        alt="Wise Logo"
                        className="w-20 h-auto"
                    />
                    <span onClick={() => setIsOpen(false)} className=" text-gray-400 ">
                        <Icons.cross size={28} />
                    </span>
                </div>

                <div className="py-10 px-2 flex flex-col gap-10">
                    <div className="flex items-center gap-4 text-md text-green-950 font-semibold ">
                        <button className="px-4 py-1 rounded-full bg-[#b0e591]">Personal</button>
                        <a href="#" className="hover:bg-[#16330014] px-4 py-1 rounded-full">Business</a>
                        <a href="#" className="hover:bg-[#16330014] px-4 py-1 rounded-full">Platform</a>
                    </div>

                    <ul className="flex flex-col gap-5 font-marcellus text-[16]">
                        <li><Link href='/'>Features</Link></li>
                        <li><Link href='/recruiter-dashboard/home'>Pricing</Link></li>
                        <li><Link href='/recruiter-dashboard/postjob'>Help</Link></li>
                        <li className='flex justify-between items-center'>
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
    )
}

export default WiseSideBar