import { Col, Row } from "antd";
import Investors from "../../modules/Investors";
import ThisWhatWeDo from "../../modules/ThisWhatWeDo";
import Carousels from "../../modules/Carousel";
import LayoutHeader from "../../layouts/Layout.header";
import LayoutFooter from "../../layouts/Layout.footer";
import time from "./../../assets/24h.png";
import no from "./../../assets/no.png";
import change from "./../../assets/change.png";
import real from "./../../assets/real.png";
import copy from "./../../assets/copy.png";
import free from "./../../assets/free.png";
import Style from "./../../layouts/Layout.css.module.css";

const VirtualStaging = () => {
  return (
    <>
      <LayoutHeader title="" title2="virtual_staging" />
      {/* banner */}
      <Carousels />
      {/* Professional Photo Editing, Virtual Staging, Floor Plan Redraws, &Renders at Unbeatable Prices */}
      <div className="my-10 mx-[9%] ">
        <div className="text-center text-[28px]  ">
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
              lg={{ span: 3 }}
              className="pb-5"
            >
              <div>
                <div className="flex justify-center	">
                  <img src={time} alt="" className="w-[116px] h-[111px] " />
                </div>
                <h3 className="text-[#ec1c38] text-[19px]">FAST</h3>
                <p className="text-[#686a72] text-[15px]">
                  24 hour turn around
                </p>
                <p className="text-[#686a72] text-[15px]">
                  (48 hours for virtual staging)
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
                  <img src={no} alt="" className="w-[116px] h-[111px] " />
                </div>
                <h3 className="text-[#ec1c38] text-[19px]">NO SUBSCRIPTIONS</h3>
                <p className="text-[#686a72] text-[15px]">
                  Pay only for what you use with no subscriptions – just pay one
                  fixed low rate per image
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
                  <img src={change} alt="" className="w-[116px] h-[111px] " />
                </div>
                <h3 className="text-[#ec1c38] text-[19px]">
                  UNLIMITED CHANGES
                </h3>
                <p className="text-[#686a72] text-[15px]">
                  100% satisfaction with our unlimited change guarantee
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
                  <img src={real} alt="" className="w-[116px] h-[111px] " />
                </div>
                <h3 className="text-[#ec1c38] text-[19px]">REAL SERVICE</h3>
                <p className="text-[#686a72] text-[15px]">
                  100% satisfaction with our unlimited change guarantee
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
                  <img src={copy} alt="" className="w-[116px] h-[111px] " />
                </div>
                <h3 className="text-[#ec1c38] text-[19px]">NO COPYRIGHT</h3>
                <p className="text-[#686a72] text-[15px]">
                  We edit your images and return them to you – no ownership
                  taken
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
                  <img src={free} alt="" className="w-[116px] h-[111px] " />
                </div>
                <h3 className="text-[#ec1c38] text-[19px]">FREE TRIAL</h3>
                <p className="text-[#686a72] text-[15px]">
                  Receive <strong>3 image enhancements</strong> and{" "}
                  <strong>1 day to dusk</strong> edit on sign up
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      {/* GET STARTED IN UNDER 60 SECONDS */}
      <div>
        <div className="flex">
          <div className=" p-[15px] md:p-[30px]  bg-[#999999] w-1/2 text-end  ">
            <p className="text-[#ec1c38] md:text-[30px] lg:text-[40px]">
              GET STARTED IN UNDER
            </p>
            <p className="text-[#ffffff] md:text-[50px] lg:text-[60px] ">
              60 SECONDS
            </p>
          </div>
          <div className=" bg-black border-b-2 border-b-indigo-500  w-1/2  ">
            <p>First Name</p>
          </div>
        </div>
        <ThisWhatWeDo />
        <div className="py-5 text-center text-[36px] border-b-[1px] border-gray-500">
          <h2>FEATURED IN</h2>
          <Row justify="space-between" className="px-[15%] ">
            <Col
              lg={{ span: 6 }}
              md={{ span: 8 }}
              sm={{ span: 12 }}
              xs={{ span: 24 }}
              className="py-5"
            >
              <img
                src="https://d1dbtne32ilur4.cloudfront.net/img/press/featured09.png"
                alt=""
              />
            </Col>
            <Col
              lg={{ span: 6 }}
              md={{ span: 8 }}
              sm={{ span: 12 }}
              xs={{ span: 24 }}
              className="py-5"
            >
              <img
                src="https://d1dbtne32ilur4.cloudfront.net/img/press/featured02.png"
                alt=""
              />
            </Col>
            <Col
              lg={{ span: 6 }}
              md={{ span: 8 }}
              sm={{ span: 12 }}
              xs={{ span: 24 }}
              className="py-5"
            >
              <img
                src="https://d1dbtne32ilur4.cloudfront.net/img/press/featured03.png"
                alt=""
              />
            </Col>
            <Col
              lg={{ span: 6 }}
              md={{ span: 8 }}
              sm={{ span: 12 }}
              xs={{ span: 24 }}
              className="py-5"
            >
              <img
                src="https://d1dbtne32ilur4.cloudfront.net/img/press/featured04.png"
                alt=""
              />
            </Col>
            <Col
              lg={{ span: 6 }}
              md={{ span: 8 }}
              sm={{ span: 12 }}
              xs={{ span: 24 }}
              className="py-5"
            >
              <img
                src="https://d1dbtne32ilur4.cloudfront.net/img/press/featured05.png"
                alt=""
              />
            </Col>
            <Col
              lg={{ span: 6 }}
              md={{ span: 8 }}
              sm={{ span: 12 }}
              xs={{ span: 24 }}
              className="py-5"
            >
              <img
                src="https://d1dbtne32ilur4.cloudfront.net/img/press/featured06.png"
                alt=""
              />
            </Col>
            <Col
              lg={{ span: 6 }}
              md={{ span: 8 }}
              sm={{ span: 12 }}
              xs={{ span: 24 }}
              className="py-5"
            >
              <img
                src="https://d1dbtne32ilur4.cloudfront.net/img/press/featured07.png"
                alt=""
              />
            </Col>
            <Col
              lg={{ span: 6 }}
              md={{ span: 8 }}
              sm={{ span: 12 }}
              xs={{ span: 24 }}
              className="py-5"
            >
              <img
                src="https://d1dbtne32ilur4.cloudfront.net/img/press/featured08.png"
                alt=""
              />
            </Col>
          </Row>
        </div>
        <Investors />
        <div className="border-b-[1px] border-gray-500 py-3 bg-[#f6f6f6]" />
        <div className="bg-[#f6f6f6] py-3 ">
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
                    src="https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien.jpeg"
                    alt=""
                    width={120}
                    height={111}
                  />
                </div>
                <b className="text-red-500">STEP 1</b>
                <h3 className="text-[20px]">UPLOAD</h3>
                <p className="mx-3">
                  Upload your photos from your mobile, tablet or desktop
                  computer.
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
                    src="https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien.jpeg"
                    alt=""
                    width={120}
                    height={111}
                  />
                </div>
                <b className="text-red-500">STEP 1</b>
                <h3 className="text-[20px]">UPLOAD</h3>
                <p className="mx-3">
                  Upload your photos from your mobile, tablet or desktop
                  computer.
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
                    src="https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien.jpeg"
                    alt=""
                    width={120}
                    height={111}
                  />
                </div>
                <b className="text-red-500">STEP 1</b>
                <h3 className="text-[20px]">UPLOAD</h3>
                <p className="mx-3">
                  Upload your photos from your mobile, tablet or desktop
                  computer.
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
                    src="https://vapa.vn/wp-content/uploads/2022/12/anh-3d-thien-nhien.jpeg"
                    alt=""
                    width={120}
                    height={111}
                  />
                </div>
                <b className="text-red-500">STEP 1</b>
                <h3 className="text-[20px]">UPLOAD</h3>
                <p className="mx-3">
                  Upload your photos from your mobile, tablet or desktop
                  computer.
                </p>
              </Col>
            </Row>
          </div>
        </div>
        <div className="border-b-[1px] border-gray-500 py-3 bg-[#f6f6f6]" />
      </div>
      {/* ABOUT US */}

      <div className={`${Style.media} 2xl:mx-[9%] xl:mx-[5%] xl:mx-[1.5%]`}>
        <Row justify="space-between">
          <Col xl={{ span: 12 }} lg={0}>
            <div className="mt-20">
              <img
                src="https://d1dbtne32ilur4.cloudfront.net/img/about-img-001.jpg"
                alt=""
                className="absolute z-0 "
              />
              <img
                src="https://d1dbtne32ilur4.cloudfront.net/img/about-img-002.jpg"
                alt=""
                className="absolute z-10 mt-[160px] ml-[250px] "
              />
              <img
                src="https://d1dbtne32ilur4.cloudfront.net/img/about-img-003.jpg"
                alt=""
                className="absolute z-20 mt-[380px] ml-[-50px] "
              />
            </div>
          </Col>
          <Col lg={{ span: 24 }} xl={{ span: 12 }}>
            <div className="mt-10 text-start mx-[10%]">
              <h2 className="mb-[24px] text-[28px] mb-[22px] text-[26px]">
                ABOUT US
              </h2>
              <p className="mb-[24px] text-[24px] mb-[22px] text-[26px]">
                BoxBrownie.com is the leading online hub for all things digital.
                Our global team of professional editing experts are ready to
                transform your photos into eye-catching professional images.
              </p>
              <p className="mb-[24px]  text-[24px] mb-[22px] text-[26px]">
                Simply upload your photos and let our professionals take care of
                the rest. We offer a wide range of services including, photo
                editing, virtual staging, floor plan redraws, renders, and
                virtual renovations. The process is fast, easy-to-use and
                extremely affordable.
              </p>
              <p className="mb-[24px]  text-[24px] mb-[22px] text-[26px]">
                Are you in the residential or commercial real estate industry
                and need high-quality images to showcase your listings? Or are
                you in the retail industry and want clean and professional
                images to display your products? BoxBrownie.com will work with
                your images to get you the best results to meet your needs but
                standout from your competitors.
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <LayoutFooter />
    </>
  );
};
export default VirtualStaging;
