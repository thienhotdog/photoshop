import { Col, Row } from "antd";

import time from "./../assets/icon-2.png";
import no from "./../assets/icon-3.png";
import change from "./../assets/icon-1.png";
import real from "./../assets/icon-4.png";
import copy from "./../assets/icon-5.png";
import free from "./../assets/icon-6.png";
import Style from "./css/renders.module.css";
import LayoutFooter from "../layouts/Layout.footer";
import LayoutHeader from "../layouts/Layout.header";
import Carousels from "../modules/Carousel";
import ThisWhatWeDo from "../modules/ThisWhatWeDo";
import about from "./../assets/344165734_2693164097508508_5567145660358150876_n.jpg";
import Investors from "../modules/Investors";
import upload from "./../assets/upload.png";
import edit from "./../assets/edit.jpg";
import review from "./../assets/review.jpg";
import dowload from "./../assets/dowload.png";
import vp from "./../assets/vp.jpg";
import { Link } from "react-router-dom";
const Renders = () => {
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
  return (
    <>
      <LayoutHeader title="RENDERS" />
      {/* <Carousels /> */}

      <div className={Style.banner_hero_content}>
        <img
          src="https://www.w3schools.com/css/img_5terre_wide.jpg"
          alt=""
          className={Style.banner_hero_image}
        />
        <div className={Style.banner_hero_inner}>
          <h1 className={Style.banner_hero_title}>How does it work?</h1>
          <div className={Style.banner_hero_desc}>
            <p>
              Sign up for a free and have your product images edited in a few
              simple steps.
            </p>
            <p>
              Control everything online from your personal account and get the
              results you expect
            </p>
          </div>
          <Link to={""} className={Style.banner_hero_btn}>
            GET START
          </Link>
        </div>
      </div>

      {/* <ProductPortfolio title="Why Enhance Your Listing Photos?" data={data} /> */}
      {/* 
      <ThisWhatWeDo /> */}

      <div className="my-10 mx-[9%] ">
        <div className="text-center text-[28px]  ">
          <h1 className="text-[40px] font-bold">Why Choose Us?</h1>
          <div className="flex justify-center py-3">
            <div className="h-[5px] w-[20px] bg-green-500" />
            <div className="h-[5px] w-[20px] bg-green-500 ml-2 mr-2" />
            <div className="h-[5px] w-[20px] bg-green-500" />
          </div>
          <h1> Quality- Economy – Fast Turn around</h1>
          <h1>High volume Capacity – Privacy & Security – Service 24/7</h1>
        </div>
        <div className="py-10">
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
                  <img
                    src={time}
                    alt=""
                    className="w-[100px] h-[100px] object-contain		"
                  />
                </div>
                <h3 className="text-[#333] font-bold text-[21px] pt-5 pb-2">
                  Quality
                </h3>
                <p className="text-[#4f4f4f] text-[18px] font-normal	">
                  We always cater our photo retouching service to each client’s
                  taste
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
                  <img
                    src={no}
                    alt=""
                    className="w-[100px] h-[100px] object-contain	"
                  />
                </div>
                <h3 className="text-[#333] font-bold text-[21px] pt-5 pb-2">
                  Economy
                </h3>
                <p className="text-[#4f4f4f] text-[18px] font-normal	">
                  Competitive price and discount for bulk order and for regular
                  customers
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
                  <img
                    src={change}
                    alt=""
                    className="w-[100px] h-[100px] object-contain	"
                  />
                </div>
                <h3 className="text-[#333] font-bold text-[21px] pt-5 pb-2">
                  Fast Turnaround
                </h3>
                <p className="text-[#4f4f4f] text-[18px] font-normal	">
                  Turnaround timematter. That’s why we deliver 99.8% of all
                  order ontime
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
                  <img
                    src={real}
                    alt=""
                    className="w-[100px] h-[100px] object-contain	"
                  />
                </div>
                <h3 className="text-[#333] font-bold text-[21px] pt-5 pb-2">
                  High Volume Capacity
                </h3>
                <p className="text-[#4f4f4f] text-[18px] font-normal	">
                  We dispose more 5000 images per day with the best results,
                  unlimited free reversion if you are not satisfied
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
                  <img
                    src={copy}
                    alt=""
                    className="w-[100px] h-[100px] object-contain	"
                  />
                </div>
                <h3 className="text-[#333] font-bold text-[21px] pt-5 pb-2">
                  Privacy & Security
                </h3>
                <p className="text-[#4f4f4f] text-[18px] font-normal">
                  Your photos will not be published to any third party without
                  your permission
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
                  <img
                    src={free}
                    alt=""
                    className="w-[100px] h-[100px] object-contain	"
                  />
                </div>
                <h3 className="text-[#333] font-bold text-[21px] pt-5 pb-2">
                  Service 24/7
                </h3>
                <p className="text-[#4f4f4f] text-[18px] font-normal	">
                  We are available 24/7 to find a solutionfor your photos as
                  quickly as possible
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className="bg-[#f6f6f6] py-[80px] ">
        <div className="mx-[6%] ">
          <Row justify="space-between">
            <Col
              xs={{ span: 24 }}
              sm={{ span: 11 }}
              lg={{ span: 5 }}
              className="py-5 bg-white text-center mt-3	border-solid	border-1 border-[#e9e9ea] shadow "
            >
              <div className="flex justify-center pb-3">
                <img
                  src={upload}
                  alt=""
                  width={120}
                  height={111}
                  className="object-contain	"
                />
              </div>
              <b className="text-red-500 font-bold text-[21px] font-bold">
                STEP 1
              </b>
              <h3 className="text-[21px] font-bold mb-5">UPLOAD</h3>
              <p className="mx-3 text-[#4f4f4f] text-[18px] font-normal">
                Upload your photos from your mobile, tablet or desktop computer.
              </p>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 11 }}
              lg={{ span: 5 }}
              className="py-5 bg-white text-center mt-3	border-solid	border-1 border-[#e9e9ea] shadow "
            >
              <div className="flex justify-center pb-3">
                <img
                  src={edit}
                  alt=""
                  width={120}
                  height={111}
                  className="object-contain	"
                />
              </div>
              <b className="text-red-500 font-bold text-[21px] font-bold">
                STEP 2
              </b>
              <h3 className="text-[21px] font-bold mb-5">WE EDIT</h3>
              <p className="mx-3 text-[#4f4f4f] text-[18px] font-normal">
                Our global team of photo editing experts will enhance your
                images within 12 hours. 99.8% satisfaction guaranteed.
              </p>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 11 }}
              lg={{ span: 5 }}
              className="py-5 bg-white text-center mt-3	border-solid	border-1 border-[#e9e9ea] shadow"
            >
              <div className="flex justify-center pb-3">
                <img
                  src={review}
                  alt=""
                  width={120}
                  height={111}
                  className="object-contain	"
                />
              </div>
              <b className="text-red-500 font-bold text-[21px] font-bold">
                STEP 3
              </b>
              <h3 className="text-[21px] font-bold mb-5">QUALITY ASSURANCE</h3>
              <p className="mx-3 text-[#4f4f4f] text-[18px] font-normal">
                We have a dedicated quality control team to ensure editing is
                performed to the highest of standards.
              </p>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 11 }}
              lg={{ span: 5 }}
              className="py-5 bg-white text-center mt-3	border-solid	border-1 border-[#e9e9ea] shadow "
            >
              <div className="flex justify-center pb-3">
                <img
                  src={dowload}
                  alt=""
                  width={120}
                  height={111}
                  className="object-contain	"
                />
              </div>
              <b className="text-red-500 font-bold text-[21px] font-bold">
                STEP 4
              </b>
              <h3 className="text-[21px] font-bold mb-5">READY!</h3>
              <p className="mx-3 text-[#4f4f4f] text-[18px] font-normal">
                Download the professionally edited images from your account as
                soon as they are complete.
              </p>
            </Col>
          </Row>
        </div>
      </div>
      {/* <div className={Style.container}>
        <div className={Style.containers}>
          <div className={Style.contact_cta_box}>
            <div className={Style.contact_cta_slogan}>
              Ready To Place First Order?
            </div>
            <a href="">Contact Us</a>
          </div>
        </div>
        <div className={Style.contact_cta_background}>
          <img
            src="https://fotosolution.com/_next/static/media/contact-cta-bg.91e5f46f.svg"
            alt=""
          />
        </div>
      </div> */}
      <div className={`${Style.banner_hero_content} py-10`}>
        <img
          src="https://fotosolution.com/_next/static/media/contact-cta-bg.91e5f46f.svg"
          alt=""
          className={Style.banner_hero_imagess}
        />
        <div className={Style.banner_hero_inners}>
          <div className={Style.contact_cta_box}>
            <div className={Style.contact_cta_slogan}>
              Ready To Place First Order?
            </div>
            <Link to="/" className={Style.btn}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <LayoutFooter />
    </>
  );
};

export default Renders;
