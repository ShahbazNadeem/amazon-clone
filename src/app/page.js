import Layout from "./_components/layout/Layout";
import Swipper from "./_components/Swippers/Swipper";
import { swipperImages } from "./data/Imports";

export default function Home() {
  return (
    <Layout>
      {/* Amazon */}
      <section>
        <div className="wrapper">
          <div className="container">
            <Swipper data={swipperImages}/>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="bg-white md:mx-5 mt-5">
            <h2>Best Sellers in Home & Kitchen</h2>
          </div>
        </div>
      </section>
    </Layout>
  );
}
