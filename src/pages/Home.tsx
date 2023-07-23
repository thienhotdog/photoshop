import { Carousel, Col, Row } from "antd";
import { DotPosition } from "antd/es/carousel";
import { useState } from "react";
import time from "./../assets/icon-2.png";
import no from "./../assets/icon-3.png";
import change from "./../assets/icon-1.png";
import real from "./../assets/icon-4.png";
import copy from "./../assets/icon-5.png";
import free from "./../assets/icon-6.png";
import Style from "./../layouts/Layout.css.module.css";
import LayoutFooter from "../layouts/Layout.footer";
import LayoutHeader from "../layouts/Layout.header";
import Carousels from "../modules/Carousel";
import ThisWhatWeDo from "../modules/ThisWhatWeDo";
import about from "./../assets/344165734_2693164097508508_5567145660358150876_n.jpg";
import Investors from "../modules/Investors";

const Home = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <>
      <LayoutHeader title="" />
      {/* banner */}
      <Carousels />
      {/* Professional Photo Editing, Virtual Staging, Floor Plan Redraws, &Renders at Unbeatable Prices */}
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
              lg={{ span: 3 }}
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
              lg={{ span: 3 }}
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
              lg={{ span: 3 }}
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
              lg={{ span: 3 }}
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
              lg={{ span: 3 }}
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
                <p className="text-[#4f4f4f] text-[18px] font-normal	">
                  Your photos will not be published to any third party without
                  your permission
                </p>
              </div>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 8 }}
              lg={{ span: 3 }}
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

      {/* GET STARTED IN UNDER 60 SECONDS */}
      <div>
        <ThisWhatWeDo />
      </div>
      {/* ABOUT US */}

      <div className={`${Style.media} 2xl:mx-[9%] xl:mx-[5%] xl:mx-[1.5%]`}>
        <Row justify="space-between">
          <Col lg={{ span: 24 }} xl={{ span: 12 }}>
            <div className="mt-10 text-start mx-[10%]">
              <h2 className="mb-[24px]  mb-[22px] text-[40px] font-bold">
                ABOUT US
              </h2>
              <p className="mb-[24px] mb-[22px] text-[#4f4f4f] text-[18px] font-normal	 ">
                BoxBrownie.com is the leading online hub for all things digital.
                Our global team of professional editing experts are ready to
                transform your photos into eye-catching professional images.
              </p>
              <p className="mb-[24px]  mb-[22px]  text-[#4f4f4f] text-[18px] font-normal	">
                Simply upload your photos and let our professionals take care of
                the rest. We offer a wide range of services including, photo
                editing, virtual staging, floor plan redraws, renders, and
                virtual renovations. The process is fast, easy-to-use and
                extremely affordable.
              </p>
              <p className="mb-[24px] mb-[22px] text-[#4f4f4f] text-[18px] font-normal	">
                Are you in the residential or commercial real estate industry
                and need high-quality images to showcase your listings? Or are
                you in the retail industry and want clean and professional
                images to display your products? BoxBrownie.com will work with
                your images to get you the best results to meet your needs but
                standout from your competitors.
              </p>
            </div>
          </Col>
          <Col xl={{ span: 12 }} lg={0}>
            <div className="mt-10  overflow-hidden">
              <img
                src={about}
                alt=""
                className="transition duration-1000  hover:scale-110 "
              />
            </div>
          </Col>
        </Row>
      </div>
      <LayoutFooter />
    </>
  );
};

export default Home;
