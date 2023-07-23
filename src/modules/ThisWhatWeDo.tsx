import { Col, Row } from "antd";
import before_9045 from "./../assets/Photo editing/DSC_9045.jpg";
import after_9045 from "./../assets/Photo editing/DSC_9046.jpg";
import before_19141 from "./../assets/Day to Twilight/19141.jpg";
import after_19141 from "./../assets/Day to Twilight/19143.jpg";

import before_26443 from "./../assets/Retouching/2 day-26443.jpg";
import after_26443 from "./../assets/Retouching/2 day-264.jpg";

import before_vr03 from "./../assets/Virtual Staging/Virtual Staging/Virtual Staging 03.jpg";
import after_vr03 from "./../assets/Virtual Staging/Virtual Staging/Virtual Staging 04.jpg";

import after_20230207 from "./../assets/Clipping Path/20230207-DYConsultants-Entela-001.jpg";
import before_20230207 from "./../assets/Clipping Path/20230207-DYConsultants-Entela-001_1.jpg";
import before_20230207_joanna from "./../assets/Clipping Path/20230207-DYConsultants-Joanna-002.jpg";
import after_20230207_joanna from "./../assets/Clipping Path/20230207-DYConsultants-Joanna-002_1.jpg";

import { Link } from "react-router-dom";

const ThisWhatWeDo = () => {
  return (
    <div className=" pb-2">
      <h3 className="pt-[60px] text-center  text-[40px] font-bold">
        THIS IS WHAT WE DO
      </h3>
      <div className="mx-[6%] mt-10">
        <Row gutter={32}>
          <Col md={{ span: 24 }} lg={{ span: 12 }} className="py-5   ">
            <div className="w-full overflow-hidden cursor-pointer">
              <Link to="/home/photoediting">
                <div className="flex justify-between  transition duration-1000  hover:scale-110 ">
                  <div className="max-w-[49.85%] max-h-[500px]">
                    <img src={before_9045} alt="" />
                  </div>
                  <div className="max-w-[49.85%] ">
                    <img src={after_9045} alt="" />
                  </div>
                </div>
              </Link>
            </div>

            <div className="w-full">
              <div className="flex justify-between">
                <div className="w-[49.85%]">
                  <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                    <p className="w-[20px] h-[20px] bg-red-500 mr-2" />
                    <p>BEFORE</p>
                  </div>
                </div>
                <div className="w-[49.85%] ">
                  <div className="bg-[#008000] text-white flex justify-end w-full p-2 px-5 ">
                    <div className="flex ">
                      <p>AFTER</p>
                      <p className="w-[20px] h-[20px] bg-red-500 ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-2 text-black font-bold">
              <p className="text-[#333] font-bold text-[21px]">
                Real Estate Photo editing
              </p>
              <p className="text-[#4f4f4f] text-[18px] font-normal">
                Perfect for real estate photo editing so you can present your
                listing with top-notch, retouched professional-looking photos.
              </p>
            </div>
          </Col>
          <Col
            md={{ span: 24 }}
            lg={{ span: 12 }}
            className="py-5 cursor-pointer  "
          >
            <div className="w-full overflow-hidden">
              <div className="flex justify-between  transition duration-1000  hover:scale-110 ">
                <div className="max-w-[49.85%] ">
                  <img src={before_19141} alt="" />
                </div>
                <div className="max-w-[49.85%] ">
                  <img src={after_19141} alt="" />
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="flex justify-between">
                <div className="w-[49.85%]">
                  <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                    <p className="w-[20px] h-[20px] bg-red-500 mr-2" />
                    <p>BEFORE</p>
                  </div>
                </div>
                <div className="w-[49.85%] ">
                  <div className="bg-[#008000] text-white flex justify-end w-full p-2 px-5 ">
                    <div className="flex ">
                      <p>AFTER</p>
                      <p className="w-[20px] h-[20px] bg-red-500 ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-2 text-black font-bold">
              <p className="text-[#333] font-bold text-[21px]">
                Convert Day to Twilight
              </p>
              <p className="text-[#4f4f4f] text-[18px] font-normal">
                Our photo retouching service will take your exterior property
                photo from drab to fab by replacing your sky with a beautiful
                dusk setting.
              </p>
            </div>
          </Col>
          <Col
            md={{ span: 24 }}
            lg={{ span: 12 }}
            className="py-5 cursor-pointer  "
          >
            <div className="w-full overflow-hidden">
              <div className="flex justify-between  transition duration-1000  hover:scale-110 ">
                <div className="max-w-[49.85%] max-h-[500px]">
                  <img src={before_26443} alt="" />
                </div>
                <div className="max-w-[49.85%] ">
                  <img src={after_26443} alt="" />
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="flex justify-between">
                <div className="w-[49.85%]">
                  <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                    <p className="w-[20px] h-[20px] bg-red-500 mr-2" />
                    <p>BEFORE</p>
                  </div>
                </div>
                <div className="w-[49.85%] ">
                  <div className="bg-[#008000] text-white flex justify-end w-full p-2 px-5 ">
                    <div className="flex ">
                      <p>AFTER</p>
                      <p className="w-[20px] h-[20px] bg-red-500 ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-2 text-black font-bold">
              <p className="text-[#333] font-bold text-[21px]">
                Product Retouching
              </p>
              <p className="text-[#4f4f4f] text-[18px] font-normal">
                Perfect for real estate photo editing so you can present your
                listing with top-notch, retouched professional-looking photos.
              </p>
            </div>
          </Col>
          <Col
            md={{ span: 24 }}
            lg={{ span: 12 }}
            className="py-5 cursor-pointer  "
          >
            <div className="w-full overflow-hidden">
              <div className="flex justify-between  transition duration-1000  hover:scale-110 ">
                <div className="max-w-[49.85%] max-h-[500px]">
                  <img src={before_vr03} alt="" />
                </div>
                <div className="max-w-[49.85%] ">
                  <img src={after_vr03} alt="" />
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="flex justify-between">
                <div className="w-[49.85%]">
                  <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                    <p className="w-[20px] h-[20px] bg-red-500 mr-2" />
                    <p>BEFORE</p>
                  </div>
                </div>
                <div className="w-[49.85%] ">
                  <div className="bg-[#008000] text-white flex justify-end w-full p-2 px-5 ">
                    <div className="flex ">
                      <p>AFTER</p>
                      <p className="w-[20px] h-[20px] bg-red-500 ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-2 text-black font-bold">
              <p className="text-[#333] font-bold text-[21px]">
                Virtual Staging
              </p>
              <p className="text-[#4f4f4f] text-[18px] font-normal">
                Our team can add furniture to real estate photography to show
                potential buyers just how versatile the space is.
              </p>
            </div>
          </Col>
          <Col
            md={{ span: 24 }}
            lg={{ span: 12 }}
            className="py-5 cursor-pointer  "
          >
            <div className="w-full overflow-hidden">
              <div className="flex justify-between  transition duration-1000  hover:scale-110 ">
                <div className="w-[49.85%] ">
                  <img src={before_20230207} alt="" />
                </div>
                <div className="w-[49.85%]">
                  <img src={after_20230207} alt="" />
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="flex justify-between">
                <div className="w-[49.85%]">
                  <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                    <p className="w-[20px] h-[20px] bg-red-500 mr-2" />
                    <p>BEFORE</p>
                  </div>
                </div>
                <div className="w-[49.85%] ">
                  <div className="bg-[#008000] text-white flex justify-end w-full p-2 px-5 ">
                    <div className="flex ">
                      <p>AFTER</p>
                      <p className="w-[20px] h-[20px] bg-red-500 ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-2 text-black font-bold">
              <p className="text-[#333] font-bold text-[21px]">Clipping Path</p>
              <p className="text-[#4f4f4f] text-[18px] font-normal">
                Perfect for real estate photo editing so you can present your
                listing with top-notch, retouched professional-looking photos.
              </p>
            </div>
          </Col>
          <Col
            md={{ span: 24 }}
            lg={{ span: 12 }}
            className="py-5 cursor-pointer  "
          >
            <div className="w-full overflow-hidden">
              <div className="flex justify-between  transition duration-1000  hover:scale-110 ">
                <div className="w-[49.85%] ">
                  <img src={before_20230207_joanna} alt="" />
                </div>
                <div className="w-[49.85%]">
                  <img src={after_20230207_joanna} alt="" />
                </div>
              </div>
            </div>

            <div className="w-full">
              <div className="flex justify-between">
                <div className="w-[49.85%]">
                  <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white">
                    <p className="w-[20px] h-[20px] bg-red-500 mr-2" />
                    <p>BEFORE</p>
                  </div>
                </div>
                <div className="w-[49.85%] ">
                  <div className="bg-[#008000] text-white flex justify-end w-full p-2 px-5 ">
                    <div className="flex ">
                      <p>AFTER</p>
                      <p className="w-[20px] h-[20px] bg-red-500 ml-2" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="py-2 text-black font-bold">
              <p className="text-[#333] font-bold text-[21px]">360 panarama</p>
              <p className="text-[#4f4f4f] text-[18px] font-normal">
                Perfect for real estate photo editing so you can present your
                listing with top-notch, retouched professional-looking photos.
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default ThisWhatWeDo;
