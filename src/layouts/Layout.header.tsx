import { Link, useNavigate } from "react-router-dom";
import style from "./Layout.css.module.css";
import logo from "./../assets/anh mau/lo go/Lo go An Binh.png";
import { useEffect, useState } from "react";
import menu from "./../assets/menu.png";
import right from "./../assets/right_1.png";
import left from "./../assets/left_1.png";

type Props = {
  title: string;
  title2?: string;
};

const LayoutHeader = (props: Props) => {
  const [showMenuServices, setShowMenuServices] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // for smoothly scrolling
    });
  };
  const show = () => {
    setShowMenuServices(!showMenuServices);
  };
  const showMenus = () => {
    setShowMenu(!showMenu);
    setShowMenuServices(false);
  };
  return (
    <header className={style.header}>
      {/* header width <1200 */}
      {showMenu == true && (
        <div className={style.header_response}>
          <div className={style.header_content}>
            {showMenuServices == false ? (
              <nav className={style.animation}>
                <h3 className={style.h3_menu}>Menu</h3>

                <ul>
                  <li className={style.menu_item} onClick={scrollToTop}>
                    <Link to="/">Home</Link>
                  </li>
                  <li className={style.menu_items}>
                    <div className={style.div_menu}>
                      <span className={style.span} onClick={scrollToTop}>
                        <Link to="/servives">Services</Link>
                      </span>
                      <div className={style.div_icon}>
                        <img
                          src={right}
                          className={style.img_icon}
                          onClick={show}
                        />
                      </div>
                    </div>
                  </li>
                  <li className={style.menu_item} onClick={scrollToTop}>
                    <Link to="/renders">How it works</Link>
                  </li>
                  <li className={style.menu_item} onClick={scrollToTop}>
                    <Link to="/faq">Faq</Link>
                  </li>
                  <li className={style.menu_item} onClick={scrollToTop}>
                    <Link to="/blogs">Blogs</Link>
                  </li>
                  <li className={style.menu_item} onClick={scrollToTop}>
                    <Link to="/about-us">About us</Link>
                  </li>
                  <li className={style.menu_item} onClick={scrollToTop}>
                    <Link to="">Contact us</Link>
                  </li>
                </ul>
              </nav>
            ) : (
              <nav className={style.animations}>
                <div className={style.nav}>
                  <img
                    src={left}
                    alt=""
                    className={style.img_icon}
                    onClick={show}
                  />
                  <div className={style.flex}>
                    <Link to="/servives">Services</Link>
                  </div>
                </div>
                <ul>
                  <li className={style.menu_item}>
                    <Link to="/home/photoediting">Photo Editing</Link>
                  </li>
                  <li className={style.menu_item}>
                    <Link to="/home/retouching">Retouching</Link>
                  </li>
                  <li className={style.menu_item}>
                    <Link to="/home/video_editing">Video Editing</Link>
                  </li>
                  <li className={style.menu_item}>
                    <Link to="/home/virtual_staging">Staging</Link>
                  </li>
                  <li className={style.menu_item}>
                    <Link to="/home/day_to_twilight">Day to twilight</Link>
                  </li>
                  <li className={style.menu_item}>
                    <Link to="home/720_panarama">360 Panarama</Link>
                  </li>
                  <li className={style.menu_item}>
                    <Link to="/home/video_editing">Video Editing</Link>
                  </li>
                </ul>
              </nav>
            )}
          </div>
          <div className={style.header_contents} onClick={showMenus} />
        </div>
      )}

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

              {props.title == "FAQ" ? (
                <li className={style.nav_item}>
                  <Link to="/FAQ" onClick={scrollToTop}>
                    <p>FAQ</p>
                  </Link>
                </li>
              ) : (
                <li className={style.nav_item_hover}>
                  <Link to="/faq" onClick={scrollToTop}>
                    <p>FAQ</p>
                  </Link>
                </li>
              )}
              {props.title == "AUTOMOTIVE" ? (
                <li className={style.nav_item}>
                  <Link to="/blogs" onClick={scrollToTop}>
                    <p>BLOGS</p>
                  </Link>
                </li>
              ) : (
                <li className={style.nav_item_hover}>
                  <Link to="/blogs" onClick={scrollToTop}>
                    <p>BLOGS</p>
                  </Link>
                </li>
              )}
              {props.title == "ABOUTUS" ? (
                <li className={style.nav_item}>
                  <Link to="/about-us" onClick={scrollToTop}>
                    <p>ABOUT US</p>
                  </Link>
                </li>
              ) : (
                <li className={style.nav_item_hover}>
                  <Link to="/about-us" onClick={scrollToTop}>
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
            <div className="flex items-center">
              <img
                src={menu}
                alt=""
                className={style.imgs}
                onClick={showMenus}
              />
            </div>
          </div>
        </div>
      </div>
      {/* header2 */}

      {(props.title == "" || !props.title) && (
        <div className={style.header_2}>
          <div className={style.header_2_nav}>
            <div className={style.header_2_nav_div}>
              <ul className={style.list_nav2_item}>
                {props?.title2 == "photoediting" ? (
                  <li className={style.nav2_item}>
                    <Link to="/home/photoediting" onClick={scrollToTop}>
                      <div>
                        <div className={style.nav2_item_1}>Real Estate</div>
                        <div className={style.nav2_item_2}>Photo Editing</div>
                      </div>
                    </Link>
                  </li>
                ) : (
                  <li className={style.nav2_item_hover}>
                    <Link to="/home/photoediting" onClick={scrollToTop}>
                      <div>
                        <div className={style.nav2_item_1}>Real Estate</div>
                        <div className={style.nav2_item_2}>Photo Editing</div>
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
                        <div className={style.nav2_item_2}>Panarama</div>
                      </div>
                    </Link>
                  </li>
                ) : (
                  <li className={style.nav2_item_hover}>
                    <Link to="/home/720_panarama" onClick={scrollToTop}>
                      <div>
                        <div className={style.nav2_item_1}>360</div>
                        <div className={style.nav2_item_2}>Panarama</div>
                      </div>
                    </Link>
                  </li>
                )}
                {props?.title2 == "video_editing" ? (
                  <li className={style.nav2_item}>
                    <Link to="/home/video_editing" onClick={scrollToTop}>
                      <div>
                        <div className={style.nav2_item_1}>Video</div>
                        <div className={style.nav2_item_2}>Editing</div>
                      </div>
                    </Link>
                  </li>
                ) : (
                  <li className={style.nav2_item_hover}>
                    <Link to="/home/video_editing" onClick={scrollToTop}>
                      <div>
                        <div className={style.nav2_item_1}>Video</div>
                        <div className={style.nav2_item_2}>Editing</div>
                      </div>
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      )}
      {props.title == "COMMERCIAL" && (
        <div className={style.header_2}>
          <div className={style.header_2_nav}>
            <div className={style.header_2_nav_div}>
              <ul className={style.list_nav2_item}>
                {props?.title2 == "photoediting" ? (
                  <li className={style.nav2_item}>
                    <Link to="/home/photoediting" onClick={scrollToTop}>
                      <div>
                        <div className={style.nav2_item_1}>Real Estate</div>
                        <div className={style.nav2_item_2}>Photo Editing</div>
                      </div>
                    </Link>
                  </li>
                ) : (
                  <li className={style.nav2_item_hover}>
                    <Link to="/home/photoediting" onClick={scrollToTop}>
                      <div>
                        <div className={style.nav2_item_1}>Real Estate</div>
                        <div className={style.nav2_item_2}>Photo Editing</div>
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
                        <div className={style.nav2_item_2}>Panarama</div>
                      </div>
                    </Link>
                  </li>
                ) : (
                  <li className={style.nav2_item_hover}>
                    <Link to="/home/720_panarama" onClick={scrollToTop}>
                      <div>
                        <div className={style.nav2_item_1}>360</div>
                        <div className={style.nav2_item_2}>Panarama</div>
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
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default LayoutHeader;
