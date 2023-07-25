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
      <div className={style.header_1}>
        <div className={style.header_nav}>
          <div className="flex items-center">
            <div className={style.img}>
              <Link to="">
                <img src={logo} alt="" className={style.img} />
              </Link>
            </div>

            <ul className={style.list_nav_item}>
              {props.title == "" || !props.title ? (
                <li className={style.nav_item}>
                  <Link to="/" onClick={scrollToTop}>
                    <p>HOME</p>
                  </Link>
                </li>
              ) : (
                <li className={style.nav_item_hover}>
                  <Link to="/" onClick={scrollToTop}>
                    <p>HOME</p>
                  </Link>
                </li>
              )}
              {props.title == "COMMERCIAL" ? (
                <li className={style.nav_item}>
                  <Link to="/servives" onClick={scrollToTop}>
                    <p>SERVIVES</p>
                  </Link>
                </li>
              ) : (
                <li className={style.nav_item_hover}>
                  <Link to="/servives" onClick={scrollToTop}>
                    <p>SERVIVES</p>
                  </Link>
                </li>
              )}

              {props.title == "RENDERS" ? (
                <li className={style.nav_item}>
                  <Link to="/renders" onClick={scrollToTop}>
                    <p>HOW IT WORKS</p>
                  </Link>
                </li>
              ) : (
                <li className={style.nav_item_hover}>
                  <Link to="/renders" onClick={scrollToTop}>
                    <p>HOW IT WORKS</p>
                  </Link>
                </li>
              )}

              {props.title == "ONLINE" ? (
                <li className={style.nav_item}>
                  <Link to="/" onClick={scrollToTop}>
                    <p>FAQ</p>
                  </Link>
                </li>
              ) : (
                <li className={style.nav_item_hover}>
                  <Link to="/" onClick={scrollToTop}>
                    <p>FAQ</p>
                  </Link>
                </li>
              )}
              {props.title == "AUTOMOTIVE" ? (
                <li className={style.nav_item}>
                  <Link to="" onClick={scrollToTop}>
                    <p>BLOGS</p>
                  </Link>
                </li>
              ) : (
                <li className={style.nav_item_hover}>
                  <Link to="" onClick={scrollToTop}>
                    <p>BLOGS</p>
                  </Link>
                </li>
              )}
              {props.title == "ABOUTUS" ? (
                <li className={style.nav_item}>
                  <Link to="" onClick={scrollToTop}>
                    <p>ABOUT US</p>
                  </Link>
                </li>
              ) : (
                <li className={style.nav_item_hover}>
                  <Link to="" onClick={scrollToTop}>
                    <p>ABOUT US</p>
                  </Link>
                </li>
              )}
              {props.title == "CONTACTUS" ? (
                <li className={style.nav_item}>
                  <Link to="" onClick={scrollToTop}>
                    <p>CONTACT US</p>
                  </Link>
                </li>
              ) : (
                <li className={style.nav_item_hover}>
                  <Link to="" onClick={scrollToTop}>
                    <p>CONTACT US</p>
                  </Link>
                </li>
              )}
            </ul>
          </div>

          <ul className={style.list_nav_item}>
            <li className={style.nav_item_hover}>
              <p>LOGIN</p>
            </li>
            <li className={style.nav_item_hover}>
              <p>SIGN UP</p>
            </li>

            <div className="flex items-center">
              <Link to="">
                <img
                  src="https://d1dbtne32ilur4.cloudfront.net/img/flags/US.svg"
                  alt=""
                  width={36}
                />
              </Link>
              <span className={style.span}> United States</span>
            </div>
          </ul>
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
                  <Link to="/servives" onClick={scrollToTop}>
                    <p className="mt-2">EXTERIOR RENDERS</p>
                  </Link>
                </li>
                <li className="px-10 hover:text-[#ec1c38] text-white ">
                  <Link to="/servives" onClick={scrollToTop}>
                    <p className="mt-2">INTERIOR RENDERS</p>
                  </Link>
                </li>
                <li className="px-10 hover:text-[#ec1c38] text-white">
                  <Link to="/servives" onClick={scrollToTop}>
                    <p className="mt-2">360° RENDERS </p>
                  </Link>
                </li>
                <li className="px-10 hover:text-[#ec1c38] text-white">
                  <Link to="/servives" onClick={scrollToTop}>
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
