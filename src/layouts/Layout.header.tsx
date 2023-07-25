import { Link, useNavigate } from "react-router-dom";
import style from "./Layout.css.module.css";
import logo from "./../assets/anh mau/lo go/Lo go An Binh.png";
import { useEffect, useState } from "react";
type Props = {
  title: string;
  title2?: string;
};

const LayoutHeader = (props: Props) => {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // for smoothly scrolling
    });
  };
  return (
    <header className={style.header}>
      {/* header */}
      <div
        className="py-3 bg-white h-[80px]"
        style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 5px" }}
      >
        <div className="px-2  gap-x-10	absolute w-full ">
          <div className="flex justify-between items-center">
            <ul className="flex cursor-pointer text-[20px] font-bold ">
              <li>
                <Link to="/">
                  <img src={logo} alt="" className="w-[72px]" />
                </Link>
              </li>
              {props.title == "" || !props.title ? (
                <li className="px-10 mx-3 text-green-500	">
                  <Link to="/" onClick={scrollToTop}>
                    <p className="mt-5 ">HOME</p>
                  </Link>
                </li>
              ) : (
                <li className="px-10 mx-3 hover:text-[#ec1c38] text-black ">
                  <Link to="/" onClick={scrollToTop}>
                    <p className="mt-5 ">HOME</p>
                  </Link>
                </li>
              )}
              {props.title == "COMMERCIAL" ? (
                <li className="px-10 mx-3 text-green-500   	">
                  <Link to="/category" onClick={scrollToTop}>
                    <p className="mt-5">SERVIVES</p>
                  </Link>
                </li>
              ) : (
                <li className="px-10 mx-3 hover:text-[#ec1c38] text-black   	">
                  <Link to="/category" onClick={scrollToTop}>
                    <p className="mt-5">SERVIVES</p>
                  </Link>
                </li>
              )}

              {props.title == "RENDERS" ? (
                <li className="px-10 mx-3 text-green-500  	">
                  <Link to="/renders" onClick={scrollToTop}>
                    <p className="mt-5">HOW IT WORKS</p>
                  </Link>
                </li>
              ) : (
                <li className="px-10 mx-3 hover:text-[#ec1c38] text-black   	">
                  <Link to="/renders" onClick={scrollToTop}>
                    <p className="mt-5">HOW IT WORKS</p>
                  </Link>
                </li>
              )}

              {props.title == "ONLINE" ? (
                <li className="px-10 mx-3 text-green-500  	">
                  <Link to="/" onClick={scrollToTop}>
                    <p className="mt-5">FAQ</p>
                  </Link>
                </li>
              ) : (
                <li className="px-10 mx-3 hover:text-[#ec1c38] text-black   	">
                  <Link to="/" onClick={scrollToTop}>
                    <p className="mt-5">FAQ</p>
                  </Link>
                </li>
              )}
              {props.title == "AUTOMOTIVE" ? (
                <li className="px-10 mx-3 text-green-500  	">
                  <Link to="" onClick={scrollToTop}>
                    <p className="mt-5">BLOGS</p>
                  </Link>
                </li>
              ) : (
                <li className="px-10 mx-3 hover:text-[#ec1c38] text-black   	">
                  <Link to="" onClick={scrollToTop}>
                    <p className="mt-5">BLOGS</p>
                  </Link>
                </li>
              )}
              {props.title == "ABOUTUS" ? (
                <li className="px-10 mx-3 text-green-500  	">
                  <Link to="" onClick={scrollToTop}>
                    <p className="mt-5">ABOUT US</p>
                  </Link>
                </li>
              ) : (
                <li className="px-10 mx-3 hover:text-[#ec1c38] text-black   	">
                  <Link to="" onClick={scrollToTop}>
                    <p className="mt-5">ABOUT US</p>
                  </Link>
                </li>
              )}
              {props.title == "CONTACTUS" ? (
                <li className="px-10 mx-3 text-green-500 	">
                  <Link to="" onClick={scrollToTop}>
                    <p className="mt-5">CONTACT US</p>
                  </Link>
                </li>
              ) : (
                <li className="px-10 mx-3 hover:text-[#ec1c38] text-black   	">
                  <Link to="" onClick={scrollToTop}>
                    <p className="mt-5">CONTACT US</p>
                  </Link>
                </li>
              )}
            </ul>

            <ul className="flex cursor-pointer items-center	">
              <li className="text-white">
                <p className="mt-5">LOGIN</p>
              </li>
              <li className="px-4 mx-2 transition duration-300 hover:text-[#ec1c38] hover:bg-gray-600 bg-[#ec1c38] text-white mt-[-5px] h-[36px] w-[120px] text-center">
                <p className="mt-2">SIGN UP</p>
              </li>
              <li className="px-2 mt-[-3px]">
                <img
                  src="https://d1dbtne32ilur4.cloudfront.net/img/flags/US.svg"
                  alt=""
                  width={36}
                  className="rounded-full"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* header2 */}
      <div
        className="py-3 bg-[#008000] "
        style={{ boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 5px" }}
      >
        <div className="px-2  gap-x-10	 w-full ">
          <div className="flex justify-between items-center">
            {(props.title == "" || !props.title) && (
              <ul className="flex cursor-pointer ">
                {props?.title2 == "photoediting" ? (
                  <li className="px-10 text-[#ec1c38] text-white  	">
                    <Link to="/home/photoediting" onClick={scrollToTop}>
                      <div className="text-[#ec1c38]">
                        <div className="leading-[22px] text-[16px]  font-normal	">
                          Real Estate
                        </div>
                        <div className="leading-[25px] text-[20px]  font-medium	">
                          Photo editing
                        </div>
                      </div>
                    </Link>
                  </li>
                ) : (
                  <li className="px-10 hover:text-[#ec1c38] text-white    	">
                    <Link to="/home/photoediting" onClick={scrollToTop}>
                      <div className="text-[#fff] hover:text-[#ec1c38]">
                        <div className="leading-[22px] text-[16px]  font-normal	">
                          Real Estate
                        </div>
                        <div className="leading-[25px] text-[20px]  font-medium	">
                          Photo editing
                        </div>
                      </div>
                    </Link>
                  </li>
                )}
                {props?.title2 == "daytotwilight" ? (
                  <li className="px-10 text-[#ec1c38] text-white ">
                    <Link to="/home/day_to_twilight" onClick={scrollToTop}>
                      <div className="text-[#ec1c38]">
                        <div className="leading-[22px] text-[16px]  font-normal	">
                          Convert
                        </div>
                        <div className="leading-[25px] text-[20px]  font-medium	">
                          Day to Twilight
                        </div>
                      </div>
                    </Link>
                  </li>
                ) : (
                  <li className="px-10 hover:text-[#ec1c38] text-white ">
                    <Link to="/home/day_to_twilight" onClick={scrollToTop}>
                      <div className="text-[#fff] hover:text-[#ec1c38]">
                        <div className="leading-[22px] text-[16px]  font-normal	">
                          Convert
                        </div>
                        <div className="leading-[25px] text-[20px]  font-medium	">
                          Day to Twilight
                        </div>
                      </div>
                    </Link>
                  </li>
                )}
                {props?.title2 == "retouching" ? (
                  <li className="px-10 text-[#ec1c38] text-white">
                    <Link to="/home/retouching" onClick={scrollToTop}>
                      <div className="text-[#ec1c38]">
                        <div className="leading-[22px] text-[16px]  font-normal	">
                          Product
                        </div>
                        <div className="leading-[25px] text-[20px]  font-medium	">
                          Retouching
                        </div>
                      </div>
                    </Link>
                  </li>
                ) : (
                  <li className="px-10 hover:text-[#ec1c38] text-white">
                    <Link to="/home/retouching" onClick={scrollToTop}>
                      <div className="text-[#fff] hover:text-[#ec1c38]">
                        <div className="leading-[22px] text-[16px]  font-normal	">
                          Product
                        </div>
                        <div className="leading-[25px] text-[20px]  font-medium	">
                          Retouching
                        </div>
                      </div>
                    </Link>
                  </li>
                )}
                {props?.title2 == "virtual_staging" ? (
                  <li className="px-10 text-[#ec1c38] text-white">
                    <Link to="/home/virtual_staging" onClick={scrollToTop}>
                      <div className="text-[#ec1c38]">
                        <div className="leading-[22px] text-[16px]  font-normal	">
                          Virtual
                        </div>
                        <div className="leading-[25px] text-[20px]  font-medium	">
                          Staging
                        </div>
                      </div>
                    </Link>
                  </li>
                ) : (
                  <li className="px-10 hover:text-[#ec1c38] text-white">
                    <Link to="/home/virtual_staging" onClick={scrollToTop}>
                      <div className="text-[#fff] hover:text-[#ec1c38]">
                        <div className="leading-[22px] text-[16px]  font-normal	">
                          Virtual
                        </div>
                        <div className="leading-[25px] text-[20px]  font-medium	">
                          Staging
                        </div>
                      </div>
                    </Link>
                  </li>
                )}
                {props?.title2 == "clipping_path" ? (
                  <li className="px-10 text-[#ec1c38] text-white">
                    <Link to="/home/clipping_path" onClick={scrollToTop}>
                      <div className="text-[#ec1c38]">
                        <div className="leading-[22px] text-[16px]  font-normal	">
                          Clipping
                        </div>
                        <div className="leading-[25px] text-[20px]  font-medium	">
                          Path
                        </div>
                      </div>
                    </Link>
                  </li>
                ) : (
                  <li className="px-10 hover:text-[#ec1c38] text-white">
                    <Link to="/home/clipping_path" onClick={scrollToTop}>
                      <div className="text-[#fff] hover:text-[#ec1c38]">
                        <div className="leading-[22px] text-[16px]  font-normal	">
                          Clipping
                        </div>
                        <div className="leading-[25px] text-[20px]  font-medium	">
                          Path
                        </div>
                      </div>
                    </Link>
                  </li>
                )}
                {props?.title2 == "720_panarama" ? (
                  <li className="px-10 text-[#ec1c38] text-white">
                    <Link to="/home/720_panarama" onClick={scrollToTop}>
                      <div className="text-[#ec1c38]">
                        <div className="leading-[22px] text-[16px]  font-normal	">
                          360
                        </div>
                        <div className="leading-[25px] text-[20px]  font-medium	">
                          panarama
                        </div>
                      </div>
                    </Link>
                  </li>
                ) : (
                  <li className="px-10 hover:text-[#ec1c38] text-white">
                    <Link to="/home/720_panarama" onClick={scrollToTop}>
                      <div className="text-[#fff] hover:text-[#ec1c38]">
                        <div className="leading-[22px] text-[16px]  font-normal	">
                          360
                        </div>
                        <div className="leading-[25px] text-[20px]  font-medium	">
                          panarama
                        </div>
                      </div>
                    </Link>
                  </li>
                )}
                {props?.title2 == "video_editing" ? (
                  <li className="px-10 text-[#ec1c38] text-white">
                    <Link to="/home/video_editing" onClick={scrollToTop}>
                      <div className="text-[#ec1c38]">
                        <div className="leading-[22px] text-[16px]  font-normal	">
                          Video
                        </div>
                        <div className="leading-[25px] text-[20px]  font-medium	">
                          editing
                        </div>
                      </div>
                    </Link>
                  </li>
                ) : (
                  <li className="px-10 hover:text-[#ec1c38] text-white">
                    <Link to="/home/video_editing" onClick={scrollToTop}>
                      <div className="text-[#fff] hover:text-[#ec1c38]">
                        <div className="leading-[22px] text-[16px]  font-normal	">
                          Video
                        </div>
                        <div className="leading-[25px] text-[20px]  font-medium	">
                          editing
                        </div>
                      </div>
                    </Link>
                  </li>
                )}
              </ul>
            )}
            {props.title == "COMMERCIAL" && (
              <ul className="flex cursor-pointer ">
                {props?.title2 == "photoediting" ? (
                  <li className="px-10 text-[#ec1c38] text-white  	">
                    <Link to="/home/photoediting" onClick={scrollToTop}>
                      <div className="text-[#ec1c38]">
                        <div className="leading-[22px] text-[16px]  font-normal	">
                          Real Estate
                        </div>
                        <div className="leading-[25px] text-[20px]  font-medium	">
                          Photo editing
                        </div>
                      </div>
                    </Link>
                  </li>
                ) : (
                  <li className="px-10 hover:text-[#ec1c38] text-white    	">
                    <Link to="/home/photoediting" onClick={scrollToTop}>
                      <div className="text-[#fff] hover:text-[#ec1c38]">
                        <div className="leading-[22px] text-[16px]  font-normal	">
                          Real Estate
                        </div>
                        <div className="leading-[25px] text-[20px]  font-medium	">
                          Photo editing
                        </div>
                      </div>
                    </Link>
                  </li>
                )}
                {props?.title2 == "daytotwilight" ? (
                  <li className="px-10 text-[#ec1c38] text-white ">
                    <Link to="/home/day_to_twilight" onClick={scrollToTop}>
                      <div className="text-[#ec1c38]">
                        <div className="leading-[22px] text-[16px]  font-normal	">
                          Convert
                        </div>
                        <div className="leading-[25px] text-[20px]  font-medium	">
                          Day to Twilight
                        </div>
                      </div>
                    </Link>
                  </li>
                ) : (
                  <li className="px-10 hover:text-[#ec1c38] text-white ">
                    <Link to="/home/day_to_twilight" onClick={scrollToTop}>
                      <div className="text-[#fff] hover:text-[#ec1c38]">
                        <div className="leading-[22px] text-[16px]  font-normal	">
                          Convert
                        </div>
                        <div className="leading-[25px] text-[20px]  font-medium	">
                          Day to Twilight
                        </div>
                      </div>
                    </Link>
                  </li>
                )}
                {props?.title2 == "retouching" ? (
                  <li className="px-10 text-[#ec1c38] text-white">
                    <Link to="/home/retouching" onClick={scrollToTop}>
                      <div className="text-[#ec1c38]">
                        <div className="leading-[22px] text-[16px]  font-normal	">
                          Product
                        </div>
                        <div className="leading-[25px] text-[20px]  font-medium	">
                          Retouching
                        </div>
                      </div>
                    </Link>
                  </li>
                ) : (
                  <li className="px-10 hover:text-[#ec1c38] text-white">
                    <Link to="/home/retouching" onClick={scrollToTop}>
                      <div className="text-[#fff] hover:text-[#ec1c38]">
                        <div className="leading-[22px] text-[16px]  font-normal	">
                          Product
                        </div>
                        <div className="leading-[25px] text-[20px]  font-medium	">
                          Retouching
                        </div>
                      </div>
                    </Link>
                  </li>
                )}
                {props?.title2 == "virtual_staging" ? (
                  <li className="px-10 text-[#ec1c38] text-white">
                    <Link to="/home/virtual_staging" onClick={scrollToTop}>
                      <div className="text-[#ec1c38]">
                        <div className="leading-[22px] text-[16px]  font-normal	">
                          Virtual
                        </div>
                        <div className="leading-[25px] text-[20px]  font-medium	">
                          Staging
                        </div>
                      </div>
                    </Link>
                  </li>
                ) : (
                  <li className="px-10 hover:text-[#ec1c38] text-white">
                    <Link to="/home/virtual_staging" onClick={scrollToTop}>
                      <div className="text-[#fff] hover:text-[#ec1c38]">
                        <div className="leading-[22px] text-[16px]  font-normal	">
                          Virtual
                        </div>
                        <div className="leading-[25px] text-[20px]  font-medium	">
                          Staging
                        </div>
                      </div>
                    </Link>
                  </li>
                )}
                {props?.title2 == "clipping_path" ? (
                  <li className="px-10 text-[#ec1c38] text-white">
                    <Link to="/home/clipping_path" onClick={scrollToTop}>
                      <div className="text-[#ec1c38]">
                        <div className="leading-[22px] text-[16px]  font-normal	">
                          Clipping
                        </div>
                        <div className="leading-[25px] text-[20px]  font-medium	">
                          Path
                        </div>
                      </div>
                    </Link>
                  </li>
                ) : (
                  <li className="px-10 hover:text-[#ec1c38] text-white">
                    <Link to="/home/clipping_path" onClick={scrollToTop}>
                      <div className="text-[#fff] hover:text-[#ec1c38]">
                        <div className="leading-[22px] text-[16px]  font-normal	">
                          Clipping
                        </div>
                        <div className="leading-[25px] text-[20px]  font-medium	">
                          Path
                        </div>
                      </div>
                    </Link>
                  </li>
                )}
                {props?.title2 == "720_panarama" ? (
                  <li className="px-10 text-[#ec1c38] text-white">
                    <Link to="/home/720_panarama" onClick={scrollToTop}>
                      <div className="text-[#ec1c38]">
                        <div className="leading-[22px] text-[16px]  font-normal	">
                          360
                        </div>
                        <div className="leading-[25px] text-[20px]  font-medium	">
                          panarama
                        </div>
                      </div>
                    </Link>
                  </li>
                ) : (
                  <li className="px-10 hover:text-[#ec1c38] text-white">
                    <Link to="/home/720_panarama" onClick={scrollToTop}>
                      <div className="text-[#fff] hover:text-[#ec1c38]">
                        <div className="leading-[22px] text-[16px]  font-normal	">
                          360
                        </div>
                        <div className="leading-[25px] text-[20px]  font-medium	">
                          panarama
                        </div>
                      </div>
                    </Link>
                  </li>
                )}
                {props?.title2 == "video_editing" ? (
                  <li className="px-10 text-[#ec1c38] text-white">
                    <Link to="/home/video_editing" onClick={scrollToTop}>
                      <div className="text-[#ec1c38]">
                        <div className="leading-[22px] text-[16px]  font-normal	">
                          Video
                        </div>
                        <div className="leading-[25px] text-[20px]  font-medium	">
                          editing
                        </div>
                      </div>
                    </Link>
                  </li>
                ) : (
                  <li className="px-10 hover:text-[#ec1c38] text-white">
                    <Link to="/home/video_editing" onClick={scrollToTop}>
                      <div className="text-[#fff] hover:text-[#ec1c38]">
                        <div className="leading-[22px] text-[16px]  font-normal	">
                          Video
                        </div>
                        <div className="leading-[25px] text-[20px]  font-medium	">
                          editing
                        </div>
                      </div>
                    </Link>
                  </li>
                )}
              </ul>
            )}
            {props.title == "RENDERS" && (
              <ul className="flex cursor-pointer ">
                <li className="px-10 hover:text-[#ec1c38] text-white  h-[43px] 	">
                  <Link to="/category" onClick={scrollToTop}>
                    <p className="mt-2">EXTERIOR RENDERS</p>
                  </Link>
                </li>
                <li className="px-10 hover:text-[#ec1c38] text-white ">
                  <Link to="/category" onClick={scrollToTop}>
                    <p className="mt-2">INTERIOR RENDERS</p>
                  </Link>
                </li>
                <li className="px-10 hover:text-[#ec1c38] text-white">
                  <Link to="/category" onClick={scrollToTop}>
                    <p className="mt-2">360° RENDERS </p>
                  </Link>
                </li>
                <li className="px-10 hover:text-[#ec1c38] text-white">
                  <Link to="/category" onClick={scrollToTop}>
                    <p className="mt-2">360° VIRTUAL TOURS</p>
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default LayoutHeader;
