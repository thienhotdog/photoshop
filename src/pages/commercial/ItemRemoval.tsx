import LayoutFooter from "../../layouts/Layout.footer";
import LayoutHeader from "../../layouts/Layout.header";
import Carousels from "../../modules/Carousel";
import Investors from "../../modules/Investors";
import ProductPortfolio from "../../modules/Product";
import ProductByCategory from "../../modules/ProductByCategory";
import ThisWhatWeDo from "../../modules/ThisWhatWeDo";

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
const ItemRemoval = () => {
  return (
    <>
      <LayoutHeader title="COMMERCIAL" title2="ItemRemoval" />
      <Carousels />
      <ProductPortfolio title="Why Enhance Your Listing Photos?" data={data} />
      <ProductByCategory />
      <div className="pt-10">
        <Investors />
      </div>
      <ThisWhatWeDo />
      <LayoutFooter />
    </>
  );
};

export default ItemRemoval;
