'use client';
import React from 'react'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { FaSearch } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegUser } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";


const header = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('addToCart(FDA)') || '[]');
    setCartCount(cart.length);
  }, []);
  return (
    <header className="bg-[#131921] text-white px-4 py-2">
      <div className="hidden md:flex items-center space-x-5 lg:space-x-7">



        <Link href="/" className="text-xl font-bold text-white">
          <span className="border-black hover:border-white p-2 md:text-[14px]">Amazan</span>
        </Link>

        <div className="flex items-center gap-2 text-xs border py-2 px-4 border-black hover:border-white cursor-pointer">
          <div className=""><IoLocationOutline className="h-4 w-4 text-white" /></div>
          <div className="flex flex-col md:text-[10px]">
            <span className="text-gray-300">Deliver to</span>
            <span className="font-bold">Pakistan</span>
          </div>
        </div>


        <div className="flex flex-1 ">
          <form className="">
            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-s-lg  focus:border-yellow-400 block w-full p-2.5">
              <option selected>All</option>
              <option value="US">United States</option>
              <option value="CA">Canada</option>
              <option value="FR">France</option>
              <option value="DE">Germany</option>
            </select>
          </form>

          <input
            type="text"
            placeholder="Search Amazon"
            className="flex-grow px-4 py-2 outline-none text-black bg-white"
          />
          <button className="bg-yellow-400 px-4 py-2 rounded-r-md hover:bg-yellow-500">
            <FaSearch className='text-black' />
          </button>
        </div>

        {/* Account */}
        <div className="text-xs hover:underline cursor-pointer block">
          <span>Hello, Shahbaz</span>
          <br />
          <strong>Account & Lists</strong>
        </div>

        {/* Orders */}
        <div className="text-xs hover:underline cursor-pointer block">
          <span>Returns</span>
          <br />
          <strong>& Orders</strong>
        </div>

        {/* Cart */}
        <Link href="/cart" className="relative md:flex items-center ">
          <FiShoppingCart className="h-8 w-8 text-white" />
          <span className="absolute top-0 right-0 text-xs bg-yellow-400 text-black px-1 rounded-full">
            {cartCount}
          </span>
        </Link>
      </div>
      {/* /////////////////////////////////////////////////////////////////////// */}
      {/* for mobile view */}
      <div className="flex justify-between md:hidden">
        <div className="flex gap-2 items-center">
          <span className=''><GiHamburgerMenu size={20} /></span>
          <Link href="/" className="text-xl font-bold text-white">
            <span className="border-black hover:border-white p-2 md:text-[14px]">Amazan</span>
          </Link>
        </div>

        <div className="flex gap-2">
          {/* profile */}
          <div className=" flex items-center">
            <span className='flex items-center'>Sign in <IoIosArrowForward /></span> <FaRegUser size={23}/>
          </div>
          {/* Cart */}
          <Link href="/cart" className="relative flex items-center">
            <FiShoppingCart className="h-8 w-8 text-white" />
            <span className="absolute top-0 right-0 text-xs bg-yellow-400 text-black px-1 rounded-full">
              {cartCount}
            </span>
          </Link>
        </div>
      </div>
      <div className="md:hidden flex mt-4">
        <input
          type="text"
          placeholder="Search Amazon"
          className="flex-grow px-4 py-2 outline-none rounded-l-md text-black bg-white w-full"
        />
        <button className="bg-yellow-400 px-4 py-2 rounded-r-md hover:bg-yellow-500">
          <FaSearch className='text-black' />
        </button>
      </div>
      {/* /////////////////////////////////////////////////////////////////////// */}
    </header>
  )
}

export default header