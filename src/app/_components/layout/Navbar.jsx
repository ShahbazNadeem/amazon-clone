import { Icons } from '@/app/data/Imports'
import React from 'react'

const Navbar = () => {
  return (
    <div className='bg-[#232F3E] text-white md:px-6 py-2 '>
      <ul className="flex gap-5 items-center overflow-x-auto hide-scrollbar md:overflow-x-hidden whitespace-nowrap px-2 [&>li]:cursor-pointer">
        <li className="md:flex gap-2 items-center hidden"><Icons.burger />All</li>
        {/* <li>Amazon Haul</li>
        <li>Medical Care</li>
        <li>Saks</li>
        <li>Best Sellers</li>
        <li>Amazon Basics</li>
        <li>New Releases</li>
        <li>Today's Deals</li>
        <li>Registry</li>
        <li>Groceries</li>
        <li>Prime</li>
        <li>Gift Cards</li>
        <li>Smart Home</li>
        <li>Customer Service</li>
        <li>Luxury Stores</li>
        <li>Pharmacy</li>
        <li>Books</li>
        <li>Amazon Home</li>
        <li>Shop By Interest</li> */}
        <li>Today's Deals</li>
        <li>Registry</li>
        <li>Groceries</li>
        <li>Prime</li>
        <li>Gift Cards</li>
        <li>Customer Service</li>
      </ul>

    </div>
  )
}

export default Navbar;
