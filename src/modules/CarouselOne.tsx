import { DotPosition } from "antd/es/carousel";
import { useState } from "react";
import { Carousel, Col, Row } from "antd";
import img_1 from "./../assets/dsc_0386-dsc_0388.jpg";
import img_8886 from "./../assets/IMG_8886.jpg";
import img_8891 from "./../assets/IMG_8891.jpg";
import img_11139 from "./../assets/2018-08-11 139.jpg";
import img_11147 from "./../assets/2018-08-11 147.jpg";
const CarouselsOne = () => {
  return (
    <div className="mt-10 hover:cursor-pointer">
      <Carousel draggable autoplay dotPosition="top">
        <div className="w-full">
          <div className="md:max-w-[60%] sm:max-w-[70%] lg:max-w-[50%] pl-[10px] w-full  pr-[10px] h-auto mx-auto">
            <img src={img_1} alt="" className="w-full h-full object-contain	 " />
          </div>
        </div>
        <div className="w-full">
          <div className="md:max-w-[60%] sm:max-w-[70%] lg:max-w-[50%]  pl-[10px] pr-[10px] w-full h-auto mx-auto">
            <img
              src={img_8886}
              alt=""
              className="w-full h-full object-contain	 "
            />
          </div>
        </div>
        <div className="w-full">
          <div className="md:max-w-[60%] sm:max-w-[70%] lg:max-w-[50%]  pl-[10px] pr-[10px] w-full h-auto mx-auto">
            <img
              src={img_8891}
              alt=""
              className="w-full h-full  object-contain	"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="md:max-w-[60%] sm:max-w-[70%] lg:max-w-[50%]  pl-[10px] pr-[10px] w-full h-auto mx-auto">
            <img
              src={img_11139}
              alt=""
              className="w-full h-full object-contain	 "
            />
          </div>
        </div>
        <div className="w-full">
          <div className="md:max-w-[60%] sm:max-w-[70%] lg:max-w-[50%]  pl-[10px] pr-[10px] w-full h-auto mx-auto">
            <img
              src={img_11147}
              alt=""
              className="w-full h-full object-contain	 "
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselsOne;
