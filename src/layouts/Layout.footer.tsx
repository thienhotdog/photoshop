import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import style from "./LayoutFooter.module.css";
const LayoutFooter = () => {
  return (
    <footer className="mt-[20px]">
      {/* <div className="bg-black py-10">
        <div className="flex justify-center	">
          <img
            src="https://d1dbtne32ilur4.cloudfront.net/img/logoSecondary2018.svg"
            alt=""
            width={87}
            height={100}
          />
        </div>
        <div className="flex justify-center	">
          <ul className="flex">
            <li className="cursor-pointer py-5 px-3 ">
              <a href="https://www.facebook.com/">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.52623 19.1667L7.49996 10.8334H4.16663V7.50004H7.49996V5.41671C7.49996 2.32387 9.41523 0.833374 12.1742 0.833374C13.4958 0.833374 14.6317 0.931766 14.9627 0.975749V4.20794L13.0492 4.20881C11.5487 4.20881 11.2581 4.92182 11.2581 5.96813V7.50004H15.625L13.9583 10.8334H11.2581V19.1667H7.52623Z"
                    fill="white"
                  ></path>
                </svg>
              </a>
            </li>

            <li className="cursor-pointer py-5 px-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 2.48504C12.4475 2.48504 12.7375 2.49421 13.7042 2.53837C14.2854 2.54514 14.861 2.65198 15.4059 2.85421C15.8042 3.00096 16.1645 3.23535 16.46 3.54004C16.7647 3.83562 16.9991 4.19588 17.1459 4.59421C17.3481 5.13908 17.4549 5.71472 17.4617 6.29587C17.5059 7.26254 17.515 7.55254 17.515 10C17.515 12.4475 17.5059 12.7375 17.4617 13.7042C17.4549 14.2854 17.3481 14.861 17.1459 15.4059C16.9933 15.8013 16.7597 16.1603 16.46 16.46C16.1603 16.7597 15.8013 16.9933 15.4059 17.1459C14.861 17.3481 14.2854 17.4549 13.7042 17.4617C12.7375 17.5059 12.4475 17.515 10 17.515C7.55254 17.515 7.26254 17.5059 6.29587 17.4617C5.71472 17.4549 5.13908 17.3481 4.59421 17.1459C4.19588 16.9991 3.83562 16.7647 3.54004 16.46C3.23535 16.1645 3.00096 15.8042 2.85421 15.4059C2.65198 14.861 2.54514 14.2854 2.53837 13.7042C2.49421 12.7375 2.48504 12.4475 2.48504 10C2.48504 7.55254 2.49421 7.26254 2.53837 6.29587C2.54514 5.71472 2.65198 5.13908 2.85421 4.59421C3.00096 4.19588 3.23535 3.83562 3.54004 3.54004C3.83562 3.23535 4.19588 3.00096 4.59421 2.85421C5.13908 2.65198 5.71472 2.54514 6.29587 2.53837C7.26254 2.49421 7.55254 2.48504 10 2.48504ZM10 0.833374C7.51087 0.833374 7.19837 0.844207 6.22087 0.888374C5.46053 0.904087 4.70829 1.04806 3.99587 1.31421C3.38633 1.55018 2.83287 1.91103 2.37105 2.37357C1.90922 2.83612 1.54924 3.39013 1.31421 4.00004C1.04806 4.71246 0.904087 5.46469 0.888374 6.22504C0.844207 7.19837 0.833374 7.51087 0.833374 10C0.833374 12.4892 0.844207 12.8017 0.888374 13.7792C0.904087 14.5396 1.04806 15.2918 1.31421 16.0042C1.55018 16.6137 1.91103 17.1672 2.37357 17.629C2.83612 18.0909 3.39013 18.4508 4.00004 18.6859C4.71246 18.952 5.46469 19.096 6.22504 19.1117C7.19837 19.1559 7.51087 19.1667 10 19.1667C12.4892 19.1667 12.8017 19.1559 13.7792 19.1117C14.5396 19.096 15.2918 18.952 16.0042 18.6859C16.6137 18.4499 17.1672 18.0891 17.629 17.6265C18.0909 17.164 18.4508 16.6099 18.6859 16C18.952 15.2876 19.096 14.5354 19.1117 13.775C19.1559 12.8017 19.1667 12.4892 19.1667 10C19.1667 7.51087 19.1559 7.19837 19.1117 6.22087C19.096 5.46053 18.952 4.70829 18.6859 3.99587C18.4499 3.38633 18.0891 2.83287 17.6265 2.37105C17.164 1.90922 16.6099 1.54924 16 1.31421C15.2876 1.04806 14.5354 0.904087 13.775 0.888374C12.8017 0.844207 12.4892 0.833374 10 0.833374Z"
                  fill="white"
                ></path>
                <path
                  d="M9.99998 5.29248C9.06893 5.29248 8.15878 5.56857 7.38464 6.08584C6.61049 6.6031 6.00712 7.33832 5.65082 8.1985C5.29452 9.05868 5.2013 10.0052 5.38294 10.9184C5.56458 11.8315 6.01292 12.6703 6.67128 13.3287C7.32963 13.987 8.16843 14.4354 9.08159 14.617C9.99476 14.7987 10.9413 14.7054 11.8015 14.3491C12.6616 13.9928 13.3969 13.3895 13.9141 12.6153C14.4314 11.8412 14.7075 10.931 14.7075 9.99998C14.7075 8.75147 14.2115 7.5541 13.3287 6.67128C12.4459 5.78845 11.2485 5.29248 9.99998 5.29248ZM9.99998 13.0558C9.3956 13.0558 8.80478 12.8766 8.30225 12.5408C7.79972 12.205 7.40805 11.7278 7.17676 11.1694C6.94547 10.611 6.88496 9.99659 7.00287 9.40382C7.12078 8.81104 7.41182 8.26655 7.83918 7.83918C8.26655 7.41181 8.81105 7.12077 9.40382 7.00286C9.99659 6.88495 10.611 6.94547 11.1694 7.17676C11.7278 7.40805 12.205 7.79972 12.5408 8.30225C12.8766 8.80478 13.0558 9.39559 13.0558 9.99998C13.0558 10.8104 12.7339 11.5877 12.1608 12.1608C11.5877 12.7339 10.8104 13.0558 9.99998 13.0558Z"
                  fill="white"
                ></path>
                <path
                  d="M14.8933 6.20671C15.5008 6.20671 15.9933 5.71423 15.9933 5.10671C15.9933 4.4992 15.5008 4.00671 14.8933 4.00671C14.2858 4.00671 13.7933 4.4992 13.7933 5.10671C13.7933 5.71423 14.2858 6.20671 14.8933 6.20671Z"
                  fill="white"
                ></path>
              </svg>
            </li>
            <li className="cursor-pointer py-5 px-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.8333 6C19.8333 6 19.6667 4.58333 19 4C18.25 3.16667 17.4167 3.16667 17 3.16667C14.1667 3 10 3 10 3C10 3 5.83333 3 3 3.16667C2.58333 3.25 1.75 3.25 1 4C0.416667 4.58333 0.166667 6 0.166667 6C0.166667 6 0 7.58333 0 9.25V10.75C0 12.3333 0.166667 14 0.166667 14C0.166667 14 0.333333 15.4167 1 16C1.75 16.8333 2.75 16.75 3.16667 16.8333C4.75 17 10 17 10 17C10 17 14.1667 17 17 16.75C17.4167 16.6667 18.25 16.6667 19 15.9167C19.5833 15.3333 19.8333 13.9167 19.8333 13.9167C19.8333 13.9167 20 12.3333 20 10.6667V9.16667C20 7.58333 19.8333 6 19.8333 6ZM7.91667 12.5833V7L13.3333 9.83333L7.91667 12.5833Z"
                  fill="white"
                ></path>
              </svg>
            </li>
            <li className="cursor-pointer py-5 px-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 3.83317C19.25 4.1665 18.5 4.4165 17.6667 4.49984C18.5 3.99984 19.1667 3.1665 19.5 2.24984C18.6667 2.74984 17.8333 3.08317 16.9167 3.24984C16.1667 2.4165 15.0833 1.9165 13.9167 1.9165C11.6667 1.9165 9.83333 3.74984 9.83333 5.99984C9.83333 6.33317 9.83333 6.6665 9.91667 6.9165C6.41667 6.74984 3.41667 5.08317 1.41667 2.58317C1 3.24984 0.833333 3.9165 0.833333 4.6665C0.833333 6.08317 1.58333 7.33317 2.66667 8.08317C2 8.08317 1.33333 7.9165 0.833333 7.58317C0.833333 7.58317 0.833333 7.58317 0.833333 7.6665C0.833333 9.6665 2.25 11.3332 4.08333 11.6665C3.75 11.7498 3.41667 11.8332 3 11.8332C2.75 11.8332 2.5 11.8332 2.25 11.7498C2.75 13.4165 4.25 14.5832 6.08333 14.5832C4.66667 15.6665 2.91667 16.3332 1 16.3332C0.666667 16.3332 0.333333 16.3332 0 16.2498C1.83333 17.4165 4 18.0832 6.25 18.0832C13.8333 18.0832 17.9167 11.8332 17.9167 6.4165C17.9167 6.24984 17.9167 6.08317 17.9167 5.9165C18.75 5.33317 19.4167 4.58317 20 3.83317Z"
                  fill="white"
                ></path>
              </svg>
            </li>
            <li className="cursor-pointer py-5 px-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.88907 1.01562C1.51418 1.01562 0.615242 1.91845 0.615242 3.10509C0.615242 4.26552 1.4874 5.19409 2.83631 5.19409H2.8624C4.26419 5.19409 5.13657 4.26552 5.13657 3.10509C5.11037 1.91845 4.26419 1.01562 2.88907 1.01562Z"
                  fill="white"
                ></path>
                <path
                  d="M0.852806 6.84521H4.8722V18.9377H0.852806V6.84521Z"
                  fill="white"
                ></path>
                <path
                  d="M14.7379 6.56128C12.5696 6.56128 11.1157 8.59879 11.1157 8.59879V6.84509H7.09614V18.9376H11.1154V12.1847C11.1154 11.8232 11.1416 11.4622 11.2478 11.2037C11.5384 10.4818 12.1996 9.73392 13.3101 9.73392C14.7645 9.73392 15.3462 10.8429 15.3462 12.4685V18.9376H19.3653V12.004C19.3653 8.28968 17.3822 6.56128 14.7379 6.56128Z"
                  fill="white"
                ></path>
              </svg>
            </li>
          </ul>
        </div>
        <div className="flex justify-center mt-5 	">
          <ul className="flex text-white box-border	box-border	">
            <li className="cursor-pointer  px-3 hover:text-red-500 ">About</li>
            <li className="cursor-pointer  px-3 hover:text-red-500">
              Contact Us
            </li>
            <li className="cursor-pointer  px-3 hover:text-red-500">Blog</li>
            <li className="cursor-pointer  px-3 hover:text-red-500">GALLERY</li>
            <li className="cursor-pointer  px-3 hover:text-red-500">Pricing</li>
            <li className="cursor-pointer  px-3 hover:text-red-500">
              RESOURCES
            </li>
            <li className="cursor-pointer  px-3 hover:text-red-500">
              Press Kit
            </li>
            <li className="cursor-pointer  px-3 hover:text-red-500">Log In</li>
            <li className="cursor-pointer  px-3 hover:text-red-500">Careers</li>
            <li className="cursor-pointer px-3 hover:text-red-500">
              SnapSnapSnap
            </li>
          </ul>
        </div>
      </div> */}

      <div className={style.container}>
        <div className={style.row}>
          <div className={style.col_1}>
            <div className={style.footer_col}>
              <h3 className={style.footer_info_title}>Our main Office</h3>
              <div className={style.footer_info_item}>
                <div className={style.footer_info_icon}>
                  <img
                    src="https://fotosolution.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpin-icon.1e3d3881.png&w=32&q=75"
                    alt=""
                  />
                </div>
                <div>
                  <div className={style.footer_info_desc}>
                    <p>
                      8th Floor, Song Da 9 Buiding, No.2 Nguyen Hoang Str, My
                      Dinh,
                    </p>
                    <p>Tu Liem District, Ha Noi, Viet Nam</p>
                  </div>
                </div>
              </div>

              <div className={style.footer_info_item}>
                <div className={style.footer_info_icon}>
                  <img
                    src="https://fotosolution.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fskype-icon.c90f0f5b.png&w=32&q=75"
                    alt=""
                  />
                </div>
                <div>
                  <div className={style.footer_info_desc}>
                    <p>Skype: fotosolution</p>
                  </div>
                </div>
              </div>
              <div className={style.footer_info_item}>
                <div className={style.footer_info_icon}>
                  <img
                    src="https://fotosolution.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Femail-icon.e759b174.png&w=32&q=75"
                    alt=""
                  />
                </div>
                <div>
                  <div className={style.footer_info_desc}>
                    <p>contact@fotosolution.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={style.col_2}>
            <div className={style.footer_col}>
              <div className={style.footer_info_item}>
                <div>
                  <h3 className={style.footer_info_title}>Quick Links</h3>
                  <ul className={style.quick_link_list}>
                    <li className={style.quick_link_item}>
                      <Link to="/" className={style.quick_link}>
                        Home
                      </Link>
                    </li>
                    <li className={style.quick_link_item}>
                      <Link to="/" className={style.quick_link}>
                        About Us
                      </Link>
                    </li>
                    <li className={style.quick_link_item}>
                      <Link to="/" className={style.quick_link}>
                        Services
                      </Link>
                    </li>
                    <li className={style.quick_link_item}>
                      <Link to="/" className={style.quick_link}>
                        How it works
                      </Link>
                    </li>
                    <li className={style.quick_link_item}>
                      <Link to="/" className={style.quick_link}>
                        Our Blogs
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={style.col_3}>
            <div className="pl-[20px]">
              <h3 className={style.footer_info_title}>Connect With Us</h3>
            </div>

            <div className={style.footer_col}>
              <div className={style.footer_info_item}>
                <div className={style.footer_info_icon}>
                  <img
                    src="https://fotosolution.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpin-icon.1e3d3881.png&w=32&q=75"
                    alt=""
                  />
                </div>
                <div>
                  <div className={style.footer_info_desc}>
                    <p>fb.com/PhotoSolutionsDigital</p>
                  </div>
                </div>
              </div>
              <div className={style.footer_info_item}>
                <div className={style.footer_info_icon}>
                  <img
                    src="https://fotosolution.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpin-icon.1e3d3881.png&w=32&q=75"
                    alt=""
                  />
                </div>
                <div>
                  <div className={style.footer_info_desc}>
                    <p>twitter.com/fotosolution</p>
                  </div>
                </div>
              </div>
              <div className={style.footer_info_item}>
                <div className={style.footer_info_icon}>
                  <img
                    src="https://fotosolution.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpin-icon.1e3d3881.png&w=32&q=75"
                    alt=""
                  />
                </div>
                <div>
                  <div className={style.footer_info_desc}>
                    <p>Photo solutiond digital.Ltd</p>
                  </div>
                </div>
              </div>
              <div className={style.footer_info_item}>
                <div className={style.footer_info_icon}>
                  <img
                    src="https://fotosolution.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpin-icon.1e3d3881.png&w=32&q=75"
                    alt=""
                  />
                </div>
                <div>
                  <div className={style.footer_info_desc}>
                    <p>linkedin.com/in/fotosolution/</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="bg-black text-white border-t-[1px] border-b-indigo-500 ">
        <div className={style.row}>
          <div className={style.col_4}>
            <p>Copyright 2022 FOTOSOLUTION | All rights reserved</p>
          </div>

          <div className={style.col_4}>
            <ul className={style.list_coppy_right_link}>
              <li className={style.coppy_right_link}>Privacy Policy</li>
              <li className={style.coppy_right_link}>Term Of Service</li>
            </ul>
          </div>
        </div>
      </div> */}
      <div className="bg-black text-white border-t-[1px] border-b-indigo-500">
        <div className={style.containers}>
          <div className={style.rows}>
            <div className={style.col_4}>
              <div className={style.footer_col}>
                <p>Copyright 2022 FOTOSOLUTION | All rights reserved</p>
              </div>
            </div>
            <div className={style.col_4}>
              <div className={style.footer_col}>
                <ul className={style.list_coppy_right_link}>
                  <li>
                    <Link to="" className={style.coppy_right_link}>
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    {" "}
                    <Link to="" className={style.coppy_right_link}>
                      Term Of Service
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LayoutFooter;
