import LayoutFooter from "../layouts/Layout.footer";
import LayoutHeader from "../layouts/Layout.header";
import CarouselsOne from "../modules/CarouselOne";
import Investors from "../modules/Investors";
import ProductPortfolio from "../modules/Product";
import ProductByCategory from "../modules/ProductByCategory";
import ThisWhatWeDo from "../modules/ThisWhatWeDo";
import style from "./css/servives.module.css";
const data = [
  {
    textTitle: "SELL PROPERTIES 50% FASTER",
    text: "Professional quality photos are statistically proven to sell listings 50% faster."
  },
  {
    textTitle: "INCREASE SALE PRICE",
    text: "Including professional quality photos has been proven to drastically increase the sale price of a property."
  },
  {
    textTitle: "INCREASE PROSPECTS AND BUYER INTEREST",
    text: "Professional quality images have been shown to generate up to 118% more online views."
  },
  {
    textTitle: "HOME BUYERS WANT TO SEE BEAUTIFUL PHOTO",
    text: "Home buyers spend 60% of their time viewing photos, while only 20% on the property description and 83% of buyers deem photos to be important listing information."
  }
];
const Categories = () => {
  return (
    <>
      <LayoutHeader title="COMMERCIAL" />
      <CarouselsOne />
      {/* <ProductPortfolio title="Why Enhance Your Listing Photos?" data={data} /> */}
      <div className={style.parent}>
        <div className={style.child}>
          <h1 className={style.h1}>Our Service</h1>
          <p className={style.p}>
            Based on safety production and with high quality, fast turnaround
            time, educated and hard-workingstaff as well updated and advanced
            technology, we are willing to provide you the complete
            online-marketing solutions for real estate agencies.
          </p>
        </div>
      </div>
      <ProductByCategory />
      <div className="pt-10">
        <Investors />
      </div>
      <ThisWhatWeDo />
      <LayoutFooter />
    </>
  );
};

export default Categories;
