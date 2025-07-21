import FourBox from "./_components/FourBox";
import Layout from "./_components/layout/Layout";
import Swipper from "./_components/Swippers/Swipper";
import SwipperBox from "./_components/Swippers/SwipperBox";
import { swipperImages, swipperBoxImages1, handbags } from "./data/Imports";

export default function Home() {
  return (
    <Layout>
      <section>
        <div className="wrapper">
          <div className="container">
            <Swipper data={swipperImages} />
          </div>
        </div>
      </section>

      <section>
        <div className="container flex flex-col gap-3">
          <div className="flex justify-center flex-wrap gap-3">
            <FourBox data={handbags} title='Discover pre-loved jewelry' />
            <FourBox data={handbags} title='Discover pre-loved jewelry' />
            <FourBox data={handbags} title='Discover pre-loved jewelry' />
            <FourBox data={handbags} title='Discover pre-loved jewelry' />
          </div>
          <div className="flex justify-center flex-wrap gap-3">
            <FourBox data={handbags} title='Discover pre-loved jewelry' />
            <FourBox data={handbags} title='Discover pre-loved jewelry' />
            <FourBox data={handbags} title='Discover pre-loved jewelry' />
            <FourBox data={handbags} title='Discover pre-loved jewelry' />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="bg-white md:mx-5 mt-5 p-5">
            <h2 className="text-lg font-semibold mb-4">Best Sellers in Home & Kitchen</h2>
            <SwipperBox data={swipperBoxImages1} id='first' />
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="bg-white md:mx-5 mt-5 p-5">
            <h2 className="text-lg font-semibold mb-4">Best Sellers in Clothing, Shoes & Jewelry</h2>
            <SwipperBox data={swipperBoxImages1} id='second' />
          </div>
        </div>
      </section>

    </Layout>
  );
}
