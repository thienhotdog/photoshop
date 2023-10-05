import { Link } from "react-router-dom";
import LayoutHeader from "../layouts/Layout.header";
import Style from "./css/blog.module.css";
import style from "./css/renders.module.css";
import LayoutFooter from "../layouts/Layout.footer";
import { Col, Row } from "antd";

const data = [
  {
    date: "January 04,2023",
    id: 1,
    textTite: "Top Real Estate Photography Trends for 2023",
    describe:
      "Dear valued customers, We are delighted to announce that we have opened a new office to meet the growing demand for our services. Our new office is located at 131A Highland St, Worcester, MA, 01609. The new office will provide full consulting and customer support services like our main office. It will be a point",
    img: "https://fotosolution.com/_next/image?url=https%3A%2F%2Fadmin.fotosolution.com%2Fwp-content%2Fuploads%2F2023%2F03%2Fgeorgie-cobbs-bKjHgo_Lbpo-unsplash-scaled.jpg&w=384&q=75"
  },
  {
    date: "March 23,2023",
    id: 2,
    textTite: "Announcement of New Office Establishment",
    describe:
      "To welcome 2023, Fotosolution has special programs for all new clients as your regulars.",
    img: "https://fotosolution.com/_next/image?url=https%3A%2F%2Fadmin.fotosolution.com%2Fwp-content%2Fuploads%2F2023%2F01%2F311.jpeg&w=384&q=75"
  },
  {
    date: "January 04,2023",
    id: 3,
    textTite: "Top Real Estate Photography Trends for 2023",
    describe:
      "It’s important for photography companies and photographers, in general,to be up to date",
    img: "https://fotosolution.com/_next/image?url=https%3A%2F%2Fadmin.fotosolution.com%2Fwp-content%2Fuploads%2F2023%2F01%2F315.jpeg&w=384&q=75"
  },
  {
    date: "January 04,2023",
    id: 4,
    textTite: "Top Real Estate Photography Trends for 2023",
    describe:
      "With all good wishes for a brilliant and happy Christmas season. Hope things are going all",
    img: "https://fotosolution.com/_next/image?url=https%3A%2F%2Fadmin.fotosolution.com%2Fwp-content%2Fuploads%2F2022%2F12%2F5971605-scaled.jpg&w=384&q=75"
  },
  {
    date: "January 04,2023",
    id: 5,
    textTite: "Top Real Estate Photography Trends for 2023",
    describe:
      "HOW TO ADD FIRE FOR REAL ESTATE IMAGES ?” is one of the most basic requests",
    img: "https://fotosolution.com/_next/image?url=https%3A%2F%2Fadmin.fotosolution.com%2Fwp-content%2Fuploads%2F2022%2F12%2F211.jpeg&w=384&q=75"
  },
  {
    date: "January 04,2023",
    id: 6,
    textTite: "Top Real Estate Photography Trends for 2023",
    describe:
      "TV screen replacement in real estate photos is one of the popular requests Fotosolution – w",
    img: "https://fotosolution.com/_next/image?url=https%3A%2F%2Fadmin.fotosolution.com%2Fwp-content%2Fuploads%2F2022%2F12%2F253.jpeg&w=384&q=75"
  }
];

const Blog = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // for smoothly scrolling
    });
  };
  return (
    <>
      <LayoutHeader title="AUTOMOTIVE" />
      <div className={style.banner_hero_content}>
        <img
          src="https://www.w3schools.com/css/img_5terre_wide.jpg"
          alt=""
          className={style.banner_hero_image}
        />
        <div className={style.banner_hero_inner}>
          <h1 className={style.banner_hero_title}>Blogs</h1>
        </div>
      </div>
      <div>
        <div className="pt-[100px] flex justify-center">
          <div className="flex justify-between bg-[#f7f7f7]  rounded-[20px]  max-w-[1344px]">
            <div className="w-[50%]  rounded-[20px] overflow-hidden">
              <img
                src="https://fotosolution.com/_next/image?url=https%3A%2F%2Fadmin.fotosolution.com%2Fwp-content%2Fuploads%2F2022%2F10%2Fpost-video-img.png&w=828&q=75"
                alt=""
              />
            </div>
            <div className="w-[50%] pt-[32px] pl-[12px] pr-[12px]">
              <h1 className={Style.text_date}> March 23,2023</h1>
              <h3 className={Style.text_title}>
                Announcement of New Office Establishment
              </h3>
              <p className={Style.text_desc}>
                Dear valued customers, We are delighted to announce that we have
                opened a new office to meet the growing demand for our services.
                Our new office is located at 131A Highland St, Worcester, MA,
                01609. The new office will provide full consulting and customer
                support services like our main office. It will be a point […]
              </p>
              <Link
                to={"/blogs/1"}
                className={Style.banner_hero_btn}
                onClick={scrollToTop}
              >
                READ MORE
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="my-10 ">
        <div className="text-center text-[28px]  ">
          <h1 className="text-[40px] font-bold">Recent Blog</h1>
          <div className="flex justify-center py-3">
            <div className="h-[5px] w-[20px] bg-green-500" />
            <div className="h-[5px] w-[20px] bg-green-500 ml-2 mr-2" />
            <div className="h-[5px] w-[20px] bg-green-500" />
          </div>
          <p>Amazing information page provides and updates documents</p>
          <p>useful lessons related to real estate editing services</p>
          <p>and photo editing</p>
        </div>
      </div>
      <div>
        <div className="pb-10 flex justify-center">
          <div className="max-w-[1344px] pl-[50px] pr-[50px]">
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5">
              {data.map((item: any) => {
                console.log(item, "item");
                return (
                  <div className="bg-[#f7f7f7] rounded-[20px]  overflow-hidden  	">
                    <div className="transition duration-1000  hover:scale-110 cursor-pointer aspect-[355/270] w-full 	 ">
                      <Link to={`/blogs/${item.id}`} onClick={scrollToTop}>
                        <img
                          src={item.img}
                          alt=""
                          className="h-full w-full object-cover	"
                        />
                      </Link>
                    </div>
                    <div className="p-[25px]">
                      <h1 className={Style.blog_item_date}>{item.date}</h1>
                      <Link to={`/blogs/${item.id}`} onClick={scrollToTop}>
                        <h3 className={Style.blog_item_link}>
                          {item.textTite}
                        </h3>
                      </Link>
                      <p className={Style.blog_item_experct}>{item.describe}</p>
                      <Link
                        to={`/blogs/${item.id}`}
                        className={Style.link}
                        onClick={scrollToTop}
                      >
                        Read more
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center pb-10  cursor-pointer">
        <div className={Style.banner_load}>Load more</div>
      </div>

      <LayoutFooter />
    </>
  );
};

export default Blog;
