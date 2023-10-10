import { Col, Row } from "antd";
import before_9045 from "./../assets/Photoediting/9045.jpg";
import after_9045 from "./../assets/Photoediting/9046.jpg";
import before_19141 from "./../assets/DaytoTwilight/19141.jpg";
import after_19141 from "./../assets/DaytoTwilight/19143.jpg";
import before_26443 from "./../assets/Retouching/2 day-26443.jpg";
import after_26443 from "./../assets/Retouching/2 day-264.jpg";
import before_vr03 from "./../assets/VirtualStaging/Virtual Staging/Virtual Staging 03.jpg";
import after_vr03 from "./../assets/VirtualStaging/Virtual Staging/Virtual Staging 04.jpg";
import after_20230207 from "./../assets/ClippingPath/20230207-DYConsultants-Entela-001.jpg";
import before_20230207 from "./../assets/ClippingPath/20230207-DYConsultants-Entela-001_1.jpg";
import before_20230207_joanna from "./../assets/ClippingPath/20230207-DYConsultants-Joanna-002.jpg";
import after_20230207_joanna from "./../assets/ClippingPath/20230207-DYConsultants-Joanna-002_1.jpg";
import style from "./css/ThisWhatWeDo.module.css";
import { Link } from "react-router-dom";
import CtaBox from "./CtaBox";
type Props = {
  showMenus?: () => void;
  title?: string;
  home?: string;
};
const ThisWhatWeDo = (props: Props) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // for smoothly scrolling
    });
  };
  console.log(props?.showMenus, "asg");
  return (
    <div>
      {/* <h3 className="pt-[60px] text-center  text-[40px] font-bold">
        {props?.title == "photoEditing"
          ? "Real Estate Photo editing"
          : "This what we do"}
      </h3> */}
      {props?.title == "photoEditing" && (
        <h3 className={style.h3}>Real Estate Photo editing</h3>
      )}
      {props?.title == "DaytoTwilight" && (
        <h3 className={style.h3}>Convert Day to Twilight</h3>
      )}
      {props?.title == "ClippingPath" && (
        <h3 className={style.h3}>Clipping Path</h3>
      )}
      {props?.title == "Panarama" && <h3 className={style.h3}>360 panarama</h3>}
      {props?.title == "Retouching" && (
        <h3 className={style.h3}>Product Retouching</h3>
      )}
      {props?.title == "VideoEditing" && (
        <h3 className={style.h3}>Video Editing</h3>
      )}
      {props?.title == "VirtuaStaging" && (
        <h3 className={style.h3}>Virtual Staging</h3>
      )}
      {!props?.title && <h3 className={style.h3}>This What We Do</h3>}
      <div className={style.container}>
        <Row gutter={32}>
          <Col
            md={{ span: 24 }}
            lg={{ span: 12 }}
            className="max-w-[1344px] py-3"
          >
            {!props?.showMenus ? (
              <>
                <Link to="/home/photoediting" onClick={() => scrollToTop()}>
                  <div className="w-full overflow-hidden cursor-pointer">
                    <div className="flex justify-between  transition duration-1000  hover:scale-110 ">
                      <div className="max-w-[49.85%]">
                        <img src={before_9045} alt="" />
                      </div>
                      <div className="max-w-[49.85%] ">
                        <img src={after_9045} alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="flex justify-between">
                      <div className="w-[49.85%]">
                        <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white font-bold">
                          <p className="w-[15px] h-[15px] bg-red-500 mr-2" />
                          <p className={style.text_p}>BEFORE</p>
                        </div>
                      </div>
                      <div className="w-[49.85%] ">
                        <div className="bg-[#008000] text-white flex justify-end w-full p-2 px-5 ">
                          <div className="flex items-center font-bold">
                            <p className={style.text_p}>AFTER</p>
                            <p className="w-[15px] h-[15px] bg-red-500 ml-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="py-2 text-black font-bold">
                  <p className={style.text_title}>Real Estate Photo editing</p>
                  <p className={style.text_title_p}>
                    Perfect for real estate photo editing so you can present
                    your listing with top-notch, retouched professional-looking
                    photos.
                  </p>
                </div>
              </>
            ) : (
              <div>
                <div
                  className="w-full overflow-hidden cursor-pointer"
                  onClick={() =>
                    props?.showMenus != undefined && props?.showMenus()
                  }
                >
                  <div className="flex justify-between  transition duration-1000  hover:scale-110 ">
                    <div className="max-w-[49.85%] max-h-[500px]">
                      <img src={before_9045} alt="" />
                    </div>
                    <div className="max-w-[49.85%] ">
                      <img src={after_9045} alt="" />
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="w-[49.85%]">
                      <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white font-bold">
                        <p className="w-[15px] h-[15px] bg-red-500 mr-2" />
                        <p className={style.text_p}>BEFORE</p>
                      </div>
                    </div>
                    <div className="w-[49.85%] ">
                      <div className="bg-[#008000] text-white flex justify-end w-full p-2 px-5 ">
                        <div className="flex items-center font-bold">
                          <p className={style.text_p}>AFTER</p>
                          <p className="w-[15px] h-[15px] bg-red-500 ml-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Col>
          <Col
            md={{ span: 24 }}
            lg={{ span: 12 }}
            className="cursor-pointer py-3  "
          >
            {!props?.showMenus ? (
              <>
                <Link to="/home/day_to_twilight" onClick={() => scrollToTop()}>
                  <div className="w-full overflow-hidden cursor-pointer">
                    <div className="flex justify-between  transition duration-1000  hover:scale-110 ">
                      <div className="max-w-[49.85%] max-h-[500px]">
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
                        <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white font-bold">
                          <p className="w-[15px] h-[15px] bg-red-500 mr-2" />
                          <p className={style.text_p}>BEFORE</p>
                        </div>
                      </div>
                      <div className="w-[49.85%] ">
                        <div className="bg-[#008000] text-white flex justify-end w-full p-2 px-5 ">
                          <div className="flex items-center font-bold">
                            <p className={style.text_p}>AFTER</p>
                            <p className="w-[15px] h-[15px] bg-red-500 ml-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="py-2 text-black font-bold">
                  <p className={style.text_title}>Convert Day to Twilight</p>
                  <p className={style.text_title_p}>
                    Our photo retouching service will take your exterior
                    property photo from drab to fab by replacing your sky with a
                    beautiful dusk setting.
                  </p>
                </div>
              </>
            ) : (
              <div>
                <div
                  className="w-full overflow-hidden cursor-pointer"
                  onClick={() =>
                    props?.showMenus != undefined && props?.showMenus()
                  }
                >
                  <div className="flex justify-between  transition duration-1000  hover:scale-110 ">
                    <div className="max-w-[49.85%] max-h-[500px]">
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
                      <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white font-bold">
                        <p className="w-[15px] h-[15px] bg-red-500 mr-2" />
                        <p className={style.text_p}>BEFORE</p>
                      </div>
                    </div>
                    <div className="w-[49.85%] ">
                      <div className="bg-[#008000] text-white flex justify-end w-full p-2 px-5 ">
                        <div className="flex items-center font-bold">
                          <p className={style.text_p}>AFTER</p>
                          <p className="w-[15px] h-[15px] bg-red-500 ml-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Col>
          <Col
            md={{ span: 24 }}
            lg={{ span: 12 }}
            className=" cursor-pointer py-3 "
          >
            {!props?.showMenus ? (
              <>
                <Link to="/home/retouching" onClick={() => scrollToTop()}>
                  <div className="w-full overflow-hidden cursor-pointer">
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
                        <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white font-bold">
                          <p className="w-[15px] h-[15px] bg-red-500 mr-2" />
                          <p className={style.text_p}>BEFORE</p>
                        </div>
                      </div>
                      <div className="w-[49.85%] ">
                        <div className="bg-[#008000] text-white flex justify-end w-full p-2 px-5 ">
                          <div className="flex items-center font-bold">
                            <p className={style.text_p}>AFTER</p>
                            <p className="w-[15px] h-[15px] bg-red-500 ml-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="py-2 text-black font-bold">
                  <p className={style.text_title}>Product Retouching</p>
                  <p className={style.text_title_p}>
                    Perfect for real estate photo editing so you can present
                    your listing with top-notch, retouched professional-looking
                    photos.
                  </p>
                </div>
              </>
            ) : (
              <div>
                <div
                  className="w-full overflow-hidden cursor-pointer"
                  onClick={() =>
                    props?.showMenus != undefined && props?.showMenus()
                  }
                >
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
                      <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white font-bold">
                        <p className="w-[15px] h-[15px] bg-red-500 mr-2" />
                        <p className={style.text_p}>BEFORE</p>
                      </div>
                    </div>
                    <div className="w-[49.85%] ">
                      <div className="bg-[#008000] text-white flex justify-end w-full p-2 px-5 ">
                        <div className="flex items-center font-bold">
                          <p className={style.text_p}>AFTER</p>
                          <p className="w-[15px] h-[15px] bg-red-500 ml-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Col>
          <Col
            md={{ span: 24 }}
            lg={{ span: 12 }}
            className="cursor-pointer py-3 "
          >
            {!props?.showMenus ? (
              <>
                <Link to="/home/virtual_staging" onClick={() => scrollToTop()}>
                  <div className="w-full overflow-hidden cursor-pointer">
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
                        <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white font-bold">
                          <p className="w-[15px] h-[15px] bg-red-500 mr-2" />
                          <p className={style.text_p}>BEFORE</p>
                        </div>
                      </div>
                      <div className="w-[49.85%] ">
                        <div className="bg-[#008000] text-white flex justify-end w-full p-2 px-5 ">
                          <div className="flex items-center font-bold">
                            <p className={style.text_p}>AFTER</p>
                            <p className="w-[15px] h-[15px] bg-red-500 ml-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="py-2 text-black font-bold">
                  <p className={style.text_title}>Virtual Staging</p>
                  <p className={style.text_title_p}>
                    Our team can add furniture to real estate photography to
                    show potential buyers just how versatile the space is.
                  </p>
                </div>
              </>
            ) : (
              <div>
                <div
                  className="w-full overflow-hidden cursor-pointer"
                  onClick={() =>
                    props?.showMenus != undefined && props?.showMenus()
                  }
                >
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
                      <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white font-bold">
                        <p className="w-[15px] h-[15px] bg-red-500 mr-2" />
                        <p className={style.text_p}>BEFORE</p>
                      </div>
                    </div>
                    <div className="w-[49.85%] ">
                      <div className="bg-[#008000] text-white flex justify-end w-full p-2 px-5 ">
                        <div className="flex items-center font-bold">
                          <p className={style.text_p}>AFTER</p>
                          <p className="w-[15px] h-[15px] bg-red-500 ml-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Col>
          <Col
            md={{ span: 24 }}
            lg={{ span: 12 }}
            className="cursor-pointer py-3 "
          >
            {!props?.showMenus ? (
              <>
                <Link to="/home/clipping_path" onClick={() => scrollToTop()}>
                  <div className="w-full overflow-hidden cursor-pointer">
                    <div className="flex justify-between  transition duration-1000  hover:scale-110 ">
                      <div className="max-w-[49.85%] max-h-[500px]">
                        <img src={before_20230207} alt="" />
                      </div>
                      <div className="max-w-[49.85%] ">
                        <img src={after_20230207} alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="flex justify-between">
                      <div className="w-[49.85%]">
                        <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white font-bold">
                          <p className="w-[15px] h-[15px] bg-red-500 mr-2" />
                          <p className={style.text_p}>BEFORE</p>
                        </div>
                      </div>
                      <div className="w-[49.85%] ">
                        <div className="bg-[#008000] text-white flex justify-end w-full p-2 px-5 ">
                          <div className="flex items-center font-bold">
                            <p className={style.text_p}>AFTER</p>
                            <p className="w-[15px] h-[15px] bg-red-500 ml-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="py-2 text-black font-bold">
                  <p className={style.text_title}>Clipping Path</p>
                  <p className={style.text_title_p}>
                    Perfect for real estate photo editing so you can present
                    your listing with top-notch, retouched professional-looking
                    photos.
                  </p>
                </div>
              </>
            ) : (
              <div>
                <div
                  className="w-full overflow-hidden cursor-pointer"
                  onClick={() =>
                    props?.showMenus != undefined && props?.showMenus()
                  }
                >
                  <div className="flex justify-between  transition duration-1000  hover:scale-110 ">
                    <div className="max-w-[49.85%] max-h-[500px]">
                      <img src={before_20230207} alt="" />
                    </div>
                    <div className="max-w-[49.85%] ">
                      <img src={after_20230207} alt="" />
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="w-[49.85%]">
                      <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white font-bold">
                        <p className="w-[15px] h-[15px] bg-red-500 mr-2" />
                        <p className={style.text_p}>BEFORE</p>
                      </div>
                    </div>
                    <div className="w-[49.85%] ">
                      <div className="bg-[#008000] text-white flex justify-end w-full p-2 px-5 ">
                        <div className="flex items-center font-bold">
                          <p className={style.text_p}>AFTER</p>
                          <p className="w-[15px] h-[15px] bg-red-500 ml-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Col>
          <Col
            md={{ span: 24 }}
            lg={{ span: 12 }}
            className="cursor-pointer py-3 "
          >
            {!props?.showMenus ? (
              <>
                <Link to="/home/720_panarama" onClick={() => scrollToTop()}>
                  <div className="w-full overflow-hidden cursor-pointer">
                    <div className="flex justify-between  transition duration-1000  hover:scale-110 ">
                      <div className="max-w-[49.85%] max-h-[500px]">
                        <img src={before_20230207_joanna} alt="" />
                      </div>
                      <div className="max-w-[49.85%] ">
                        <img src={after_20230207_joanna} alt="" />
                      </div>
                    </div>
                  </div>

                  <div className="w-full">
                    <div className="flex justify-between">
                      <div className="w-[49.85%]">
                        <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white font-bold">
                          <p className="w-[15px] h-[15px] bg-red-500 mr-2" />
                          <p className={style.text_p}>BEFORE</p>
                        </div>
                      </div>
                      <div className="w-[49.85%] ">
                        <div className="bg-[#008000] text-white flex justify-end w-full p-2 px-5 ">
                          <div className="flex items-center font-bold">
                            <p className={style.text_p}>AFTER</p>
                            <p className="w-[15px] h-[15px] bg-red-500 ml-2" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
                <div className="py-2 text-black font-bold">
                  <p className={style.text_title}>360 panarama</p>
                  <p className={style.text_title_p}>
                    Perfect for real estate photo editing so you can present
                    your listing with top-notch, retouched professional-looking
                    photos.
                  </p>
                </div>
              </>
            ) : (
              <div>
                <div
                  className="w-full overflow-hidden cursor-pointer"
                  onClick={() =>
                    props?.showMenus != undefined && props?.showMenus()
                  }
                >
                  <div className="flex justify-between  transition duration-1000  hover:scale-110 ">
                    <div className="max-w-[49.85%] max-h-[500px]">
                      <img src={before_20230207_joanna} alt="" />
                    </div>
                    <div className="max-w-[49.85%] ">
                      <img src={after_20230207_joanna} alt="" />
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="flex justify-between">
                    <div className="w-[49.85%]">
                      <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white font-bold">
                        <p className="w-[15px] h-[15px] bg-red-500 mr-2" />
                        <p className={style.text_p}>BEFORE</p>
                      </div>
                    </div>
                    <div className="w-[49.85%] ">
                      <div className="bg-[#008000] text-white flex justify-end w-full p-2 px-5 ">
                        <div className="flex items-center font-bold">
                          <p className={style.text_p}>AFTER</p>
                          <p className="w-[15px] h-[15px] bg-red-500 ml-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Col>
        </Row>
      </div>
      {props?.home != "home" && <CtaBox />}
    </div>
  );
};
export default ThisWhatWeDo;
