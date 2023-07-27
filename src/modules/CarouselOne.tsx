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
    <div className="mt-10 hover:cursor-pointer	">
      <Carousel draggable autoplay dotPosition="top">
        <div>
          <img src={img_1} alt="" className=" w-[60%] ml-[20%]" />
        </div>

        <div>
          <img src={img_8886} alt="" className="w-[60%] ml-[20%]" />
        </div>
        <div>
          <img src={img_8891} alt="" className="w-[60%] ml-[20%]" />
        </div>
        <div>
          <img src={img_11139} alt="" className="w-[60%] ml-[20%]" />
        </div>
        <div>
          <img src={img_11147} alt="" className="w-[60%]  ml-[20%]" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselsOne;
