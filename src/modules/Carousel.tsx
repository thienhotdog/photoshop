import { DotPosition } from "antd/es/carousel";
import { useState } from "react";
import { Carousel, Col, Row } from "antd";
import before_1959 from "./../assets/Photo editing/91591.jpg";
import after_1959 from "./../assets/Photo editing/91592.jpg";
import after_11245 from "./../assets/Day to Twilight/11245.jpg";
import before_11245 from "./../assets/Day to Twilight/11245S.jpg";
import before_55 from "./../assets/Retouching/55.jpg";
import after_55 from "./../assets/Retouching/56.jpg";
import before_1 from "./../assets/Virtual Staging/Virtual Staging/02.jpg";
import after_1 from "./../assets/Virtual Staging/Virtual Staging/01.jpg";
import before_product from "./../assets/Clipping Path/S31.jpg";
import after_product from "./../assets/Clipping Path/S32.jpg";
const Carousels = () => {
  return (
    <div>
      <Carousel autoplay dotPosition={"top"}>
        <div className="w-full  ">
          <div className="flex justify-between">
            <div className="w-[49.85%]">
              <img src={before_1959} alt="" className="w-full" />
              <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                <p className="text-[18px] font-bold">BEFORE</p>
              </div>
            </div>
            <div className="w-[49.85%] ">
              <img src={after_1959} alt="" className="w-full" />
              <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                <p className="text-[18px] font-bold">
                  Real Estate Photo editing
                </p>

                <div className="flex ">
                  <p className="text-[18px] font-bold">AFTER</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full  ">
          <div className="flex justify-between">
            <div className="w-[49.85%]">
              <img src={before_11245} alt="" className="w-full" />
              <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                <p className="text-[18px] font-bold">BEFORE</p>
              </div>
            </div>
            <div className="w-[49.85%] ">
              <img src={after_11245} alt="" className="w-full" />
              <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                <p className="text-[18px] font-bold">Convert Day To Twilight</p>

                <div className="flex ">
                  <p className="text-[18px] font-bold">AFTER</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  ">
          <div className="flex justify-between">
            <div className="w-[49.85%]">
              <img src={before_55} alt="" className="w-full" />
              <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                <p className="text-[18px] font-bold">BEFORE</p>
              </div>
            </div>
            <div className="w-[49.85%] ">
              <img src={after_55} alt="" className="w-full" />
              <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                <p className="text-[18px] font-bold">Product Retouching</p>

                <div className="flex ">
                  <p className="text-[18px] font-bold">AFTER</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  ">
          <div className="flex justify-between">
            <div className="w-[49.85%]">
              <img src={before_1} alt="" className="w-full" />
              <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                <p className="text-[18px] font-bold">BEFORE</p>
              </div>
            </div>
            <div className="w-[49.85%] ">
              <img src={after_1} alt="" className="w-full" />
              <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                <p className="text-[18px] font-bold">Virtual Staging</p>

                <div className="flex ">
                  <p className="text-[18px] font-bold">AFTER</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  ">
          <div className="flex justify-between">
            <div className="w-[49.85%]">
              <img src={before_product} alt="" className="w-full" />
              <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                <p className="text-[18px] font-bold">BEFORE</p>
              </div>
            </div>
            <div className="w-[49.85%] ">
              <img src={after_product} alt="" className="w-full" />
              <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                <p className="text-[18px] font-bold">Clipping Path</p>

                <div className="flex ">
                  <p className="text-[18px] font-bold">AFTER</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  ">
          <div className="flex justify-between">
            <div className="w-[49.85%]">
              <img src={before_product} alt="" className="w-full" />
              <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                <p className="text-[18px] font-bold">BEFORE</p>
              </div>
            </div>
            <div className="w-[49.85%] ">
              <img src={after_product} alt="" className="w-full" />
              <div className="bg-[#008000] text-white flex justify-between w-full p-2 px-5 ">
                <p className="text-[18px] font-bold">360 panarama</p>

                <div className="flex ">
                  <p className="text-[18px] font-bold">AFTER</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Carousels;
