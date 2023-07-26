import { Link, useNavigate } from "react-router-dom";
import style from "./Layout.css.module.css";
import logo from "./../assets/anh mau/lo go/Lo go An Binh.png";
import { useEffect, useState } from "react";
import menu from "./../assets/menu.png";
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
          <div className="flex items-center">
            <ul className={style.list_nav_items}>
              <li className={style.nav_item_hover}>
                <Link to="/" onClick={scrollToTop}>
                  <p>LOGIN</p>
                </Link>
              </li>
              <li className={style.nav_item_hover}>
                <Link to="/" onClick={scrollToTop}>
                  <p>SIGN UP</p>
                </Link>
              </li>
            </ul>
            <div className="flex items-center">
              <img src={menu} alt="" className={style.imgs} />
              <Link to="">
                <img
                  src="https://d1dbtne32ilur4.cloudfront.net/img/flags/US.svg"
                  alt=""
                  width={36}
                />
              </Link>
              <span className={style.span}> United States</span>
            </div>
          </div>
        </div>
      </div>
      {/* header2 */}
      <div className={style.header_2}>
        <div className={style.header_2_nav}>
          <div className={style.header_2_nav_div}>
            {(props.title == "" || !props.title) && (
              <ul className={style.list_nav2_item}>
                {props?.title2 == "photoediting" ? (
                  <li className={style.nav2_item}>
                    <Link to="/home/photoediting" onClick={scrollToTop}>
                      <div>
                        <div className={style.nav2_item_1}>Real Estate</div>
                        <div className={style.nav2_item_2}>Photo editing</div>
                      </div>
                    </Link>
                  </li>
                ) : (
                  <li className={style.nav2_item_hover}>
                    <Link to="/home/photoediting" onClick={scrollToTop}>
                      <div>
                        <div className={style.nav2_item_1}>Real Estate</div>
                        <div className={style.nav2_item_2}>Photo editing</div>
                      </div>
                    </Link>
                  </li>
                )}
                {props?.title2 == "daytotwilight" ? (
                  <li className={style.nav2_item}>
                    <Link to="/home/day_to_twilight" onClick={scrollToTop}>
                      <div>
                        <div className={style.nav2_item_1}>Convert</div>
                        <div className={style.nav2_item_2}>Day to Twilight</div>
                      </div>
                    </Link>
                  </li>
                ) : (
                  <li className={style.nav2_item_hover}>
                    <Link to="/home/day_to_twilight" onClick={scrollToTop}>
                      <div>
                        <div className={style.nav2_item_1}>Convert</div>
                        <div className={style.nav2_item_2}>Day to Twilight</div>
                      </div>
                    </Link>
                  </li>
                )}
                {props?.title2 == "retouching" ? (
                  <li className={style.nav2_item}>
                    <Link to="/home/retouching" onClick={scrollToTop}>
                      <div>
                        <div className={style.nav2_item_1}>Product</div>
                        <div className={style.nav2_item_2}>Retouching</div>
                      </div>
                    </Link>
                  </li>
                ) : (
                  <li className={style.nav2_item_hover}>
                    <Link to="/home/retouching" onClick={scrollToTop}>
                      <div>
                        <div className={style.nav2_item_1}>Product</div>
                        <div className={style.nav2_item_2}>Retouching</div>
                      </div>
                    </Link>
                  </li>
                )}
                {props?.title2 == "virtual_staging" ? (
                  <li className={style.nav2_item}>
                    <Link to="/home/virtual_staging" onClick={scrollToTop}>
                      <div>
                        <div className={style.nav2_item_1}>Virtual</div>
                        <div className={style.nav2_item_2}>Staging</div>
                      </div>
                    </Link>
                  </li>
                ) : (
                  <li className={style.nav2_item_hover}>
                    <Link to="/home/virtual_staging" onClick={scrollToTop}>
                      <div>
                        <div className={style.nav2_item_1}>Virtual</div>
                        <div className={style.nav2_item_2}>Staging</div>
                      </div>
                    </Link>
                  </li>
                )}
                {props?.title2 == "clipping_path" ? (
                  <li className={style.nav2_item}>
                    <Link to="/home/clipping_path" onClick={scrollToTop}>
                      <div>
                        <div className={style.nav2_item_1}>Clipping</div>
                        <div className={style.nav2_item_2}>Path</div>
                      </div>
                    </Link>
                  </li>
                ) : (
                  <li className={style.nav2_item_hover}>
                    <Link to="/home/clipping_path" onClick={scrollToTop}>
                      <div>
                        <div className={style.nav2_item_1}>Clipping</div>
                        <div className={style.nav2_item_2}>Path</div>
                      </div>
                    </Link>
                  </li>
                )}
                {props?.title2 == "720_panarama" ? (
                  <li className={style.nav2_item}>
                    <Link to="/home/720_panarama" onClick={scrollToTop}>
                      <div>
                        <div className={style.nav2_item_1}>360</div>
                        <div className={style.nav2_item_2}>panarama</div>
                      </div>
                    </Link>
                  </li>
                ) : (
                  <li className={style.nav2_item_hover}>
                    <Link to="/home/720_panarama" onClick={scrollToTop}>
                      <div>
                        <div className={style.nav2_item_1}>360</div>
                        <div className={style.nav2_item_2}>panarama</div>
                      </div>
                    </Link>
                  </li>
                )}
                {props?.title2 == "video_editing" ? (
                  <li className={style.nav2_item}>
                    <Link to="/home/video_editing" onClick={scrollToTop}>
                      <div>
                        <div className={style.nav2_item_1}>Video</div>
                        <div className={style.nav2_item_2}>editing</div>
                      </div>
                    </Link>
                  </li>
                ) : (
                  <li className={style.nav2_item_hover}>
                    <Link to="/home/video_editing" onClick={scrollToTop}>
                      <div>
                        <div className={style.nav2_item_1}>Video</div>
                        <div className={style.nav2_item_2}>editing</div>
                      </div>
                    </Link>
                  </li>
                )}
              </ul>
            )}
            {props.title == "COMMERCIAL" && (
              <ul className={style.list_nav2_item}>
                {props?.title2 == "photoediting" ? (
                  <li className={style.nav2_item}>
                    <Link to="/home/photoediting" onClick={scrollToTop}>
                      <div>
                        <div className={style.nav2_item_1}>Real Estate</div>
                        <div className={style.nav2_item_2}>Photo editing</div>
                      </div>
                    </Link>
                  </li>
                ) : (
                  <li className={style.nav2_item_hover}>
                    <Link to="/home/photoediting" onClick={scrollToTop}>
                      <div>
                        <div className={style.nav2_item_1}>Real Estate</div>
                        <div className={style.nav2_item_2}>Photo editing</div>
                      </div>
                    </Link>
                  </li>
                )}
                {props?.title2 == "daytotwilight" ? (
                  <li className={style.nav2_item}>
                    <Link to="/home/day_to_twilight" onClick={scrollToTop}>
                      <div>
                        <div className={style.nav2_item_1}>Convert</div>
                        <div className={style.nav2_item_2}>Day to Twilight</div>
                      </div>
                    </Link>
                  </li>
                ) : (
                  <li className={style.nav2_item_hover}>
                    <Link to="/home/day_to_twilight" onClick={scrollToTop}>
                      <div>
                        <div className={style.nav2_item_1}>Convert</div>
                        <div className={style.nav2_item_2}>Day to Twilight</div>
                      </div>
                    </Link>
                  </li>
                )}
                {props?.title2 == "retouching" ? (
                  <li className={style.nav2_item}>
                    <Link to="/home/retouching" onClick={scrollToTop}>
                      <div>
                        <div className={style.nav2_item_1}>Product</div>
                        <div className={style.nav2_item_2}>Retouching</div>
                      </div>
                    </Link>
                  </li>
                ) : (
                  <li className={style.nav2_item_hover}>
                    <Link to="/home/retouching" onClick={scrollToTop}>
                      <div>
                        <div className={style.nav2_item_1}>Product</div>
                        <div className={style.nav2_item_2}>Retouching</div>
                      </div>
                    </Link>
                  </li>
                )}
                {props?.title2 == "virtual_staging" ? (
                  <li className={style.nav2_item}>
                    <Link to="/home/virtual_staging" onClick={scrollToTop}>
                      <div>
                        <div className={style.nav2_item_1}>Virtual</div>
                        <div className={style.nav2_item_2}>Staging</div>
                      </div>
                    </Link>
                  </li>
                ) : (
                  <li className={style.nav2_item_hover}>
                    <Link to="/home/virtual_staging" onClick={scrollToTop}>
                      <div>
                        <div className={style.nav2_item_1}>Virtual</div>
                        <div className={style.nav2_item_2}>Staging</div>
                      </div>
                    </Link>
                  </li>
                )}
                {props?.title2 == "clipping_path" ? (
                  <li className={style.nav2_item}>
                    <Link to="/home/clipping_path" onClick={scrollToTop}>
                      <div>
                        <div className={style.nav2_item_1}>Clipping</div>
                        <div className={style.nav2_item_2}>Path</div>
                      </div>
                    </Link>
                  </li>
                ) : (
                  <li className={style.nav2_item_hover}>
                    <Link to="/home/clipping_path" onClick={scrollToTop}>
                      <div>
                        <div className={style.nav2_item_1}>Clipping</div>
                        <div className={style.nav2_item_2}>Path</div>
                      </div>
                    </Link>
                  </li>
                )}
                {props?.title2 == "720_panarama" ? (
                  <li className={style.nav2_item}>
                    <Link to="/home/720_panarama" onClick={scrollToTop}>
                      <div>
                        <div className={style.nav2_item_1}>360</div>
                        <div className={style.nav2_item_2}>panarama</div>
                      </div>
                    </Link>
                  </li>
                ) : (
                  <li className={style.nav2_item_hover}>
                    <Link to="/home/720_panarama" onClick={scrollToTop}>
                      <div>
                        <div className={style.nav2_item_1}>360</div>
                        <div className={style.nav2_item_2}>panarama</div>
                      </div>
                    </Link>
                  </li>
                )}
                {props?.title2 == "video_editing" ? (
                  <li className={style.nav2_item}>
                    <Link to="/home/video_editing" onClick={scrollToTop}>
                      <div>
                        <div className={style.nav2_item_1}>Video</div>
                        <div className={style.nav2_item_2}>editing</div>
                      </div>
                    </Link>
                  </li>
                ) : (
                  <li className={style.nav2_item_hover}>
                    <Link to="/home/video_editing" onClick={scrollToTop}>
                      <div>
                        <div className={style.nav2_item_1}>Video</div>
                        <div className={style.nav2_item_2}>editing</div>
                      </div>
                    </Link>
                  </li>
                )}
              </ul>
            )}
            {props.title == "RENDERS" && (
              <ul className={style.list_nav2_item}>
                <li className={style.nav2_item_hover}>
                  <Link to="/servives" onClick={scrollToTop}>
                    <p className="mt-2">EXTERIOR RENDERS</p>
                  </Link>
                </li>
                <li className={style.nav2_item_hover}>
                  <Link to="/servives" onClick={scrollToTop}>
                    <p className="mt-2">INTERIOR RENDERS</p>
                  </Link>
                </li>
                <li className={style.nav2_item_hover}>
                  <Link to="/servives" onClick={scrollToTop}>
                    <p className="mt-2">360° RENDERS </p>
                  </Link>
                </li>
                <li className={style.nav2_item_hover}>
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
