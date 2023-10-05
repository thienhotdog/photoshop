import LayoutFooter from "../../layouts/Layout.footer";
import LayoutHeader from "../../layouts/Layout.header";
import Carousels from "../../modules/Carousel";
import Investors from "../../modules/Investors";
import ProductPortfolio from "../../modules/Product";
import ProductByCategory from "../../modules/ProductByCategory";
import ThisWhatWeDo from "../../modules/ThisWhatWeDo";
import style from "./../css/DaytoTwilight.module.css";
import time from "./../../assets/24h.png";
import no from "./../../assets/no.png";
import change from "./../../assets/change.png";
import real from "./../../assets/real.png";
import copy from "./../../assets/copy.png";
import free from "./../../assets/free.png";
import { useState } from "react";
import { Col, Modal, Row } from "antd";
import CarouselHiden from "../../modules/CarouselHiden";
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
const RetouchingCategory = () => {
  const [show, setShow] = useState<boolean>(false);
  const showMenus = () => {
    console.log("dsg");
    setShow(true);
  };
  return (
    <div>
      <Modal
        open={show}
        centered
        footer={null}
        width={"80%"}
        onCancel={() => setShow(false)}
      >
        <CarouselHiden />
      </Modal>

      <LayoutHeader title="COMMERCIAL" title2="retouching" />
      {/* banner */}
      <Carousels />
      {/* Professional Photo Editing, Virtual Staging, Floor Plan Redraws, &Renders at Unbeatable Prices */}
      <div className="my-10 mx-[9%] ">
        <div className={style.text_title}>
          <h1>
            Professional Photo Editing, Virtual Staging, Floor Plan Redraws, &
          </h1>
          <h1> Renders at Unbeatable Prices</h1>
        </div>
        <div>
          <Row justify="space-between" className="text-center mt-5">
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 8 }}
              xl={{ span: 3 }}
              className="pb-5"
            >
              <div>
                <div className="flex justify-center	">
                  <img src={time} alt="" className="w-[116px] h-[111px] " />
                </div>
                <h3 className={style.text_list_title}>FAST</h3>
                <p className={style.text_title_p}>24 hour turn around</p>
                <p className={style.text_title_p}>
                  (48 hours for virtual staging)
                </p>
              </div>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 8 }}
              xl={{ span: 3 }}
              className="pb-5"
            >
              <div>
                <div className="flex justify-center	">
                  <img src={no} alt="" className="w-[116px] h-[111px] " />
                </div>
                <h3 className={style.text_list_title}>NO SUBSCRIPTIONS</h3>
                <p className={style.text_title_p}>
                  Pay only for what you use with no subscriptions – just pay one
                  fixed low rate per image
                </p>
              </div>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 8 }}
              xl={{ span: 3 }}
              className="pb-5"
            >
              <div>
                <div className="flex justify-center	">
                  <img src={change} alt="" className="w-[116px] h-[111px] " />
                </div>
                <h3 className={style.text_list_title}>UNLIMITED CHANGES</h3>
                <p className={style.text_title_p}>
                  100% satisfaction with our unlimited change guarantee
                </p>
              </div>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 8 }}
              xl={{ span: 3 }}
              className="pb-5"
            >
              <div>
                <div className="flex justify-center	">
                  <img src={real} alt="" className="w-[116px] h-[111px] " />
                </div>
                <h3 className={style.text_list_title}>REAL SERVICE</h3>
                <p className={style.text_title_p}>
                  100% satisfaction with our unlimited change guarantee
                </p>
              </div>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 8 }}
              xl={{ span: 3 }}
              className="pb-5"
            >
              <div>
                <div className="flex justify-center	">
                  <img src={copy} alt="" className="w-[116px] h-[111px] " />
                </div>
                <h3 className={style.text_list_title}>NO COPYRIGHT</h3>
                <p className={style.text_title_p}>
                  We edit your images and return them to you – no ownership
                  taken
                </p>
              </div>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 8 }}
              xl={{ span: 3 }}
              className="pb-5"
            >
              <div>
                <div className="flex justify-center	">
                  <img src={free} alt="" className="w-[116px] h-[111px] " />
                </div>
                <h3 className={style.text_list_title}>FREE TRIAL</h3>
                <p className={style.text_title_p}>
                  Receive <strong>3 image enhancements </strong> and
                  <strong> 1 day to dusk</strong> edit on sign up
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* GET STARTED IN UNDER 60 SECONDS */}

      <ThisWhatWeDo title="Retouching" showMenus={() => showMenus()} />

      <LayoutFooter />
    </div>
  );
};

export default RetouchingCategory;
