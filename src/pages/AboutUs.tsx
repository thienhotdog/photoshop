import { Link } from "react-router-dom";
import LayoutHeader from "../layouts/Layout.header";
import Style from "./css/about.module.css";

import LayoutFooter from "../layouts/Layout.footer";
import { Col, Row } from "antd";

const AboutUs = () => {
  return (
    <>
      <LayoutHeader title="ABOUTUS" />
      <div className={Style.banner_hero_content}>
        <img
          src="https://www.w3schools.com/css/img_5terre_wide.jpg"
          alt=""
          className={Style.banner_hero_image}
        />
        <div className={Style.banner_hero_inner}>
          <h1 className={Style.banner_hero_title}>Our Story</h1>
          <div className={Style.banner_hero_desc}>
            <p>
              We are specializing in complete online-marketing solutions for
              real estate agencies around the world.
            </p>
            <p>
              Based on low cost production but with high quality, fast
              turnaround time
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="pt-[100px] pb-10 flex justify-center">
          <div className="flex justify-between  max-w-[1344px]">
            <div className="w-[50%] ">
              <img
                src="https://fotosolution.com/_next/image?url=https%3A%2F%2Fadmin.fotosolution.com%2Fwp-content%2Fuploads%2F2022%2F11%2FMA109728.jpg&w=640&q=75"
                alt=""
              />
            </div>
            <div className="w-[50%] pt-[32px] pl-[12px] pr-[12px]">
              <h1 className={Style.text_date}> About Us</h1>

              <p className={Style.text_desc}>
                Photo Solution Digital Company located in Ha Noi, Viet Nam with
                9 years operating in computer based graphic design services such
                as: Color correction, Image manipulation, Image retouching, Drop
                shadow, Change sky, Create Panorama photos, Real Estate photos,
                edit…
              </p>
              <p className={Style.text_desc}>
                We are specializing in complete online-marketing solutions for
                real estate agencies around the world. Based on low cost
                production but with high quality, fastturnaround time, educated
                and hard-working staff as well as updated and advanced
                technology, we are willing to provide you the best quality and
                inexpensive graphic packages accelerating your brokering
                services. To receive free test sample, details of our quotation
                or any further information/ clarification, please do not
                hesitate to contact us.
              </p>
            </div>
          </div>
        </div>
      </div>

      <LayoutFooter />
    </>
  );
};

export default AboutUs;
