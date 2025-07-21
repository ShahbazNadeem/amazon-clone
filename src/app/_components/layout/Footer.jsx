import React from 'react'

const Footer = () => {
  return (
    <div className='h-screen'>
      <div className="bg-[#485769] py-2 flex justify-center items-center text-white">Back to top</div>

      <div className="bg-[#232F3E]">
        <div className="flex justify-between max-w-[1024px] mx-auto border text-white">
          <div className="">
            <span className='text-base leading-[16.8px] font-bold'>
              Get to Know Us
            </span>
            <ul>
              <li>Careers</li>
              <li>Blogs</li>
              <li>About Amazon</li>
              <li>Invester Relations</li>
              <li>Amazon Devices</li>
              <li>Amazon Science</li>
            </ul>
          </div>
          <div className="">
            <span className='text-base leading-[16.8px] font-bold'>
              Make Money with Us
            </span>
            <ul>
              <li>Sell products on Amazon</li>
              <li>Sell on Amazon Business</li>
              <li>Sell apps on Amazon</li>
              <li>Become an Affiliate</li>
              <li>Advertise Your Products</li>
              <li>Self-Publish with Us</li>
              <li>Host an Amazon Hub</li>
              <li>See More Make Money with Us</li>
            </ul>
          </div>
          <div className="">
            <span className='text-base leading-[16.8px] font-bold'>
              Amazon Payment Products
            </span>
            <ul>
              <li>Amazon Business Card</li>
              <li>Shop with Points</li>
              <li>Reload Your Balance</li>
              <li>Amazon Currency Converter</li>
            </ul>
          </div>
          <div className="">
            <span className='text-base leading-[16.8px] font-bold'>
              Let Us Help You
            </span>
            <ul>
              <li>Amazon and COVID-19</li>
              <li>Your Account</li>
              <li>Your Account</li>
              <li>Your Orders</li>
              <li>Shipping Rates & Policies</li>
              <li>Returns & Replacements</li>
              <li>Manage Your Content and Devices</li>
              <li>Help</li>
            </ul>
          </div>

        </div>
      </div>
      <div className="">Amazon Music</div>
    </div>
  )
}

export default Footer