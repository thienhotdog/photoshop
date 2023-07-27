import { DotPosition } from "antd/es/carousel";
import { createRef, useState } from "react";
import { Carousel, Col, Row } from "antd";
import style from "./css/CarouselHiden.module.css";
import before_1959 from "./../assets/Photoediting/91561.jpg";
import after_1959 from "./../assets/Photoediting/91592.jpg";
import after_11245 from "./../assets/DaytoTwilight/11245.jpg";
import before_11245 from "./../assets/DaytoTwilight/11245S.jpg";
import before_55 from "./../assets/Retouching/55.jpg";
import after_55 from "./../assets/Retouching/56.jpg";
import before_1 from "./../assets/VirtualStaging/Virtual Staging/02.jpg";
import after_1 from "./../assets/VirtualStaging/Virtual Staging/01.jpg";
import before_product from "./../assets/ClippingPath/S31.jpg";
import after_product from "./../assets/ClippingPath/S32.jpg";
import left from "./../assets/left.png";
import right from "./../assets/right.png";

const CarouselHiden = () => {
  const SamplePrevArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          zIndex: 2,
          left: 5,
          width: 50,
          height: 50
        }}
        onClick={onClick}
      >
        <img src={left} alt="" width={50} height={50} />
      </div>
    );
  };
  const SampleNextArrow = (props: any) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          right: 5,
          width: 50,
          height: 50
        }}
        onClick={onClick}
      >
        <img src={right} alt="" />
      </div>
    );
  };

  const settings = {
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div>
      <Row justify="center">
        <Col span={24}>
          <Carousel dots={false} arrows={true} draggable={true}>
            <div>
              <div className="flex justify-between">
                <div className="w-[49.85%]">
                  <img src={before_1959} alt="" className="w-full" />
                  <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                    <p className={style.text_banner}>BEFORE</p>
                  </div>
                </div>
                <div className="w-[49.85%] ">
                  <img src={after_1959} alt="" className="w-full" />
                  <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                    <p className={style.text_banner}>
                      Real Estate Photo editing
                    </p>

                    <div className="flex ">
                      <p className={style.text_banner}>AFTER</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-between">
                <div className="w-[49.85%]">
                  <img src={before_11245} alt="" className="w-full" />
                  <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                    <p className={style.text_banner}>BEFORE</p>
                  </div>
                </div>
                <div className="w-[49.85%] ">
                  <img src={after_11245} alt="" className="w-full" />
                  <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                    <p className={style.text_banner}>Convert Day To Twilight</p>

                    <div className="flex ">
                      <p className={style.text_banner}>AFTER</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <div className="w-[49.85%]">
                  <img src={before_55} alt="" className="w-full" />
                  <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                    <p className={style.text_banner}>BEFORE</p>
                  </div>
                </div>
                <div className="w-[49.85%] ">
                  <img src={after_55} alt="" className="w-full" />
                  <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                    <p className={style.text_banner}>Product Retouching</p>

                    <div className="flex ">
                      <p className={style.text_banner}>AFTER</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <div className="w-[49.85%]">
                  <img src={before_1} alt="" className="w-full" />
                  <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                    <p className={style.text_banner}>BEFORE</p>
                  </div>
                </div>
                <div className="w-[49.85%] ">
                  <img src={after_1} alt="" className="w-full" />
                  <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                    <p className={style.text_banner}>Virtual Staging</p>

                    <div className="flex ">
                      <p className={style.text_banner}>AFTER</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <div className="w-[49.85%]">
                  <img src={before_product} alt="" className="w-full" />
                  <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                    <p className={style.text_banner}>BEFORE</p>
                  </div>
                </div>
                <div className="w-[49.85%] ">
                  <img src={after_product} alt="" className="w-full" />
                  <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                    <p className={style.text_banner}>Clipping Path</p>

                    <div className="flex ">
                      <p className={style.text_banner}>AFTER</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between">
                <div className="w-[49.85%]">
                  <img src={before_product} alt="" className="w-full" />
                  <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                    <p className={style.text_banner}>BEFORE</p>
                  </div>
                </div>
                <div className="w-[49.85%] ">
                  <img src={after_product} alt="" className="w-full" />
                  <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                    <p className={style.text_banner}>360 panarama</p>

                    <div className="flex ">
                      <p className={style.text_banner}>AFTER</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Carousel>
        </Col>
      </Row>
    </div>
  );
};

export default CarouselHiden;
