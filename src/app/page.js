import Link from "next/link";
import FourBox from "./_components/FourBox";
import Layout from "./_components/layout/Layout";
import Swipper from "./_components/Swippers/Swipper";
import SwipperBox from "./_components/Swippers/SwipperBox";
import { swipperImages, swipperBoxImages1, shophome, schoolEssentials, fashion, homeArrivals, handbags, electronics, getFit, toys, history } from "./data/Imports";

export default function Home() {
  return (
    <Layout>
      <section className="hidden md:block md:mb-48 lg:mb-34 xl:mb-20">
        <div className="container">
          <Swipper data={swipperImages} data1={handbags} />
        </div>
      </section>

      <section className="mt-5">
        <div className="container flex flex-col gap-3">
          <div className="flex justify-center flex-wrap gap-1 md:gap-3">
            <div className="basis-[48%] md:basis-[32%] lg:basis-[24%]"><FourBox data={shophome} title='Shop for your home essentials' /></div>
            <div className="basis-[48%] md:basis-[32%] lg:basis-[24%]"><FourBox data={schoolEssentials} title='Save big on school essentials' /></div>
            <div className="basis-[48%] md:basis-[32%] lg:basis-[24%]"><FourBox data={fashion} title='Fashion trends you like' /></div>
            <div className="basis-[48%] md:basis-[32%] lg:basis-[24%]"><FourBox data={homeArrivals} title='New home arrivals under $50' /></div>
            <div className="hidden md:block lg:hidden basis-[48%] md:basis-[32%] lg:basis-[24%]"><FourBox data={handbags} title='Toys for all ages' /></div>
            <div className="hidden md:block lg:hidden basis-[48%] md:basis-[32%] lg:basis-[24%]"><FourBox data={handbags} title='Elevate your Electronics' /></div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="bg-white md:mx-3 mt-5 p-5">
            <span className="text-lg font-semibold mb-4">Best Sellers in Home & Kitchen</span>
            <SwipperBox data={swipperBoxImages1} id='first' />
          </div>
        </div>
      </section>

      <section className="mt-5">
        <div className="container flex flex-col gap-3">
          <div className="flex justify-center flex-wrap gap-1 md:gap-3">
            <div className="basis-[48%] md:basis-[32%] lg:basis-[24%]"><FourBox data={electronics} title='Elevate your Electronics' /></div>
            <div className="basis-[48%] md:basis-[32%] lg:basis-[24%]"><FourBox data={schoolEssentials} title='Save big on school essentials' /></div>
            <div className="basis-[48%] md:basis-[32%] lg:basis-[24%]"><FourBox data={fashion} title='Fashion trends you like' /></div>
            <div className="basis-[48%] md:basis-[32%] lg:basis-[24%]"><FourBox data={homeArrivals} title='New home arrivals under $50' /></div>
            <div className="hidden md:block lg:hidden basis-[48%] md:basis-[32%] lg:basis-[24%]"><FourBox data={toys} title='Toys for all ages' /></div>
            <div className="hidden md:block lg:hidden basis-[48%] md:basis-[32%] lg:basis-[24%]"><FourBox data={getFit} title=' Gear up to get fit' /></div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="bg-white md:mx-3 mt-5 p-5">
            <span className="text-lg font-semibold mb-4">Best Sellers in Clothing, Shoes & Jewelry</span>
            <SwipperBox data={swipperBoxImages1} id='second' />
          </div>
        </div>
      </section>

      <section>
        <div>
          <div className="bg-white mt-5 p-5">
            <span className="text-lg font-semibold mb-4">Customers who viewed items in your browsing history also viewed</span>
            <SwipperBox data={history} id='third' />
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="flex flex-col gap-0.5 items-center">
          <span className="text-lg font-semibold">See personalized recommendations</span>
          <span><button className="btn1">Sign in</button></span>
          <span>New customer? <Link href="/" className="text-blue-600 underline">Start here</Link></span>
        </div>
      </section>

    </Layout>
  );
}
