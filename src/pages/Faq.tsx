import { Link } from "react-router-dom";
import LayoutHeader from "../layouts/Layout.header";
import Style from "./css/faq.module.css";
const Faq = () => {
  return (
    <>
      <LayoutHeader title="FAQ" />
      <div className={Style.banner_hero_content}>
        <img
          src="https://www.w3schools.com/css/img_5terre_wide.jpg"
          alt=""
          className={Style.banner_hero_image}
        />
        <div className={Style.banner_hero_inner}>
          <h1 className={Style.banner_hero_title}>Support</h1>
          <div className={Style.banner_hero_desc}>
            <p>We’re happy to have you here. Please spend a few minutes</p>
            <p>going through this guide to learn some basic.</p>
          </div>
        </div>
      </div>
      <div className="p-[80px]">
        <div className={Style.container}>
          {/* <div className={Style.row}>
            <div className={Style.col}>
              <div>
                <div>FAQ</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Faq;
