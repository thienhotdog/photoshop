import { Link, useParams } from "react-router-dom";
import LayoutHeader from "../../layouts/Layout.header";
import LayoutFooter from "../../layouts/Layout.footer";
import Style from "./../css/blog.module.css";
const data = [
  {
    id: 1,
    date: "March 23,2023",
    title: { rendered: "Announcement of New Office Establishment" },

    content: {
      rendered: [
        "Dear valued customers",
        "We are delighted to announce that we have opened a new office to meet the growing demand for our services. Our new office is located at 131A Highland St, Worcester, MA, 01609.",
        "The new office will provide full consulting and customer support services like our main office. It will be a point of feedback reception from our customers to help us improve our services.",
        "We hope that this new office will allow us to reach more customers and provide the best experience for them. For any inquiries or appointments, please contact us at 774-641-2965 or email Jason Nguyen at jasonnguyen@fotosolution.com",
        "We sincerely thank our customers for their support and partnership with us.",
        "Sincerely, Management team."
      ]
    },

    author_name: "Pham Van An"
  },
  {
    id: 2,
    date: "January 11,2023",
    title: {
      rendered:
        "FOTOSOLUTION SALES ! SPECIAL PRICE OFFER DURING THE FIRST MONTH OF 2023"
    },

    content: {
      rendered: [
        "To welcome 2023, Fotosolution has special programs for all new clients as your regulars.",
        "“Special price offer for new customers who register during low season especial to welcome New Year! Contact me: sales@fotosolution.com now and get 3 standard Image Enhancements OR 1 Day to Dusk edit free”",
        "Visit Fotosolution, we will provide some real estate editing photo services including:"
      ]
    },
    data: [
      {
        text: ["HDR Photos"],
        img: [
          "https://fotosolution.com/_next/image?url=https%3A%2F%2Fadmin.fotosolution.com%2Fwp-content%2Fuploads%2F2023%2F01%2F154.jpeg&w=2048&q=75"
        ]
      },
      {
        text: ["Virtual stagging"],
        img: [
          "https://fotosolution.com/_next/image?url=https%3A%2F%2Fadmin.fotosolution.com%2Fwp-content%2Fuploads%2F2023%2F01%2FB-1024x683.jpeg&w=640&q=75",
          "https://fotosolution.com/_next/image?url=https%3A%2F%2Fadmin.fotosolution.com%2Fwp-content%2Fuploads%2F2023%2F01%2FB1-1024x683.jpeg&w=640&q=75"
        ]
      },
      {
        text: ["Day to night ( Twilight photo)"],
        img: [
          "https://fotosolution.com/_next/image?url=https%3A%2F%2Fadmin.fotosolution.com%2Fwp-content%2Fuploads%2F2023%2F01%2F11-1024x580.jpeg&w=640&q=75"
        ]
      },
      {
        text: ["Real estate video editing", "Floor Plan"],
        img: [
          "https://fotosolution.com/_next/image?url=https%3A%2F%2Fadmin.fotosolution.com%2Fwp-content%2Fuploads%2F2022%2F10%2F3d-floor-1024x683.jpg&w=640&q=75"
        ]
      }
    ],
    author_name: "Foto Solution"
  },
  {
    id: 3,
    date: "January 04,2023",
    title: { rendered: "Top Real Estate Photography Trends for 2023" },

    content: {
      rendered: [
        "It’s important for photography companies and photographers, in general,to be up to date with the newest developments as real estate marketing continuously changes in response to emerging trends and technologies.",
        "Check out these top real estate photography trends for 2023 to maintain your services competitive and your media appealing to brokers and house purchasers. Many effects will affect your photographic business.",
        "Visit Fotosolution, we will provide some real estate editing photo services including:"
      ]
    },
    data: [
      {
        title: "Natural – Looking Style",
        text: "A necessary trend for real estate photography in 2023 is a shift towards more natural-looking real estate photography. Basically, it involves adjusting white balance, color temperature, and even adding back certain color casts to make the property image appear more realistic rather than precisely retouched.",
        img: [
          "https://fotosolution.com/_next/image?url=https%3A%2F%2Fadmin.fotosolution.com%2Fwp-content%2Fuploads%2F2023%2F01%2F154.jpeg&w=2048&q=75"
        ],
        textDesc:
          "As a result, real estate photography in 2023 will accurately represent to viewers what they will encounter while visiting the property. The goal of a real estate photographer is to maintain authenticity while still making the property look appealing so that potential home buyers will want to see more."
      },
      {
        title: "Natural – Looking Style",
        text: "A necessary trend for real estate photography in 2023 is a shift towards more natural-looking real estate photography. Basically, it involves adjusting white balance, color temperature, and even adding back certain color casts to make the property image appear more realistic rather than precisely retouched.",
        img: "https://fotosolution.com/_next/image?url=https%3A%2F%2Fadmin.fotosolution.com%2Fwp-content%2Fuploads%2F2023%2F01%2F154.jpeg&w=2048&q=75",
        textDesc:
          "As a result, real estate photography in 2023 will accurately represent to viewers what they will encounter while visiting the property. The goal of a real estate photographer is to maintain authenticity while still making the property look appealing so that potential home buyers will want to see more."
      },
      {
        title: "Natural – Looking Style",
        text: "A necessary trend for real estate photography in 2023 is a shift towards more natural-looking real estate photography. Basically, it involves adjusting white balance, color temperature, and even adding back certain color casts to make the property image appear more realistic rather than precisely retouched.",
        img: "https://fotosolution.com/_next/image?url=https%3A%2F%2Fadmin.fotosolution.com%2Fwp-content%2Fuploads%2F2023%2F01%2F154.jpeg&w=2048&q=75",
        textDesc:
          "As a result, real estate photography in 2023 will accurately represent to viewers what they will encounter while visiting the property. The goal of a real estate photographer is to maintain authenticity while still making the property look appealing so that potential home buyers will want to see more."
      },
      {
        title: "Natural – Looking Style",
        text: "A necessary trend for real estate photography in 2023 is a shift towards more natural-looking real estate photography. Basically, it involves adjusting white balance, color temperature, and even adding back certain color casts to make the property image appear more realistic rather than precisely retouched.",
        img: "https://fotosolution.com/_next/image?url=https%3A%2F%2Fadmin.fotosolution.com%2Fwp-content%2Fuploads%2F2023%2F01%2F154.jpeg&w=2048&q=75",
        textDesc:
          "As a result, real estate photography in 2023 will accurately represent to viewers what they will encounter while visiting the property. The goal of a real estate photographer is to maintain authenticity while still making the property look appealing so that potential home buyers will want to see more."
      }
    ],
    author_name: "Foto Solution"
  },
  {
    id: 4,
    date: "March 23,2023",
    title: { rendered: "Announcement of New Office Establishment" },

    content: {
      rendered: [
        "Dear valued customers",
        "We are delighted to announce that we have opened a new office to meet the growing demand for our services. Our new office is located at 131A Highland St, Worcester, MA, 01609.",
        "The new office will provide full consulting and customer support services like our main office. It will be a point of feedback reception from our customers to help us improve our services.",
        "We hope that this new office will allow us to reach more customers and provide the best experience for them. For any inquiries or appointments, please contact us at 774-641-2965 or email Jason Nguyen at jasonnguyen@fotosolution.com",
        "We sincerely thank our customers for their support and partnership with us.",
        "Sincerely, Management team."
      ]
    },

    author_name: "Pham Van An"
  },
  {
    id: 5,
    date: "January 04,2023",
    title: { rendered: "Announcement of New Office Establishment" },

    content: {
      rendered: [
        "Dear valued customers",
        "We are delighted to announce that we have opened a new office to meet the growing demand for our services. Our new office is located at 131A Highland St, Worcester, MA, 01609.",
        "The new office will provide full consulting and customer support services like our main office. It will be a point of feedback reception from our customers to help us improve our services.",
        "We hope that this new office will allow us to reach more customers and provide the best experience for them. For any inquiries or appointments, please contact us at 774-641-2965 or email Jason Nguyen at jasonnguyen@fotosolution.com",
        "We sincerely thank our customers for their support and partnership with us.",
        "Sincerely, Management team."
      ]
    },

    author_name: "Pham Van An"
  },
  {
    id: 6,
    date: "March 23,2023",
    title: { rendered: "Announcement of New Office Establishment" },

    content: {
      rendered: [
        "Dear valued customers",
        "We are delighted to announce that we have opened a new office to meet the growing demand for our services. Our new office is located at 131A Highland St, Worcester, MA, 01609.",
        "The new office will provide full consulting and customer support services like our main office. It will be a point of feedback reception from our customers to help us improve our services.",
        "We hope that this new office will allow us to reach more customers and provide the best experience for them. For any inquiries or appointments, please contact us at 774-641-2965 or email Jason Nguyen at jasonnguyen@fotosolution.com",
        "We sincerely thank our customers for their support and partnership with us.",
        "Sincerely, Management team."
      ]
    },

    author_name: "Pham Van An"
  }
];
const BlogDetail = () => {
  const { id } = useParams();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // for smoothly scrolling
    });
  };
  return (
    <>
      <LayoutHeader title="AUTOMOTIVE" />
      <div className={Style.banner_hero_content}>
        <img
          src="https://www.w3schools.com/css/img_5terre_wide.jpg"
          alt=""
          className={Style.banner_hero_image}
        />
        {/* <div className={Style.banner_hero_inner}>
          <h1 className={Style.banner_hero_title}>Blogs</h1>
        </div> */}
      </div>
      <div>
        <div className="pt-[60px] flex justify-center">
          <div className="pl-[15px] pr-[15px]">
            {data?.map(
              (item: any) =>
                item.id == id && (
                  <div className="max-w-[900px]">
                    <h1 className={Style.text_date}> {item.date}</h1>
                    <h3 className={Style.text_titles}>{item.title.rendered}</h3>
                    {item.content.rendered.map((items: any) => (
                      <p className={Style.text_desc_blog}>{items}</p>
                    ))}
                    {item?.data?.map((data: any) => {
                      console.log(data, "data");
                      if (!data.title) {
                        return (
                          <>
                            <ul className={Style.ul}>
                              {data.text.map((text: any) => (
                                <li className={Style.li}>{text}</li>
                              ))}
                            </ul>
                            <div className="w-full overflow-hidden">
                              {data.img.map((img: any) => {
                                console.log(img, "img");
                                return (
                                  <img
                                    src={img}
                                    className="w-full rounded-[20px] pt-[10px] pb-[10px]"
                                  />
                                );
                              })}
                            </div>
                          </>
                        );
                      } else {
                        return (
                          <div>
                            <h1 className={Style.li}>{data.title}</h1>
                            <p className={Style.text_desc_blog}>{data.text}</p>
                            <div className="w-full overflow-hidden">
                              <img
                                src={data.img}
                                className="w-full rounded-[20px] pt-[10px] pb-[10px]"
                              />
                            </div>
                            <p className={Style.text_desc_blog}>
                              {data.textDesc}
                            </p>
                          </div>
                        );
                      }
                    })}
                    <p className={Style.text_by_desc}>
                      {item.author_name} | {item.date}
                    </p>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
      <div className="my-[40px] ">
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
            <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5  ">
              <div className="bg-[#f7f7f7] rounded-[20px]  overflow-hidden  	">
                <div className="transition duration-1000  hover:scale-110 cursor-pointer aspect-[355/270] w-full 	 ">
                  <Link to={`/blogs/1`} onClick={scrollToTop}>
                    <img
                      src="https://fotosolution.com/_next/image?url=https%3A%2F%2Fadmin.fotosolution.com%2Fwp-content%2Fuploads%2F2023%2F03%2Fgeorgie-cobbs-bKjHgo_Lbpo-unsplash-scaled.jpg&w=384&q=75"
                      alt=""
                      className="h-full w-full object-cover	"
                    />
                  </Link>
                </div>
                <div className="p-[25px]">
                  <h1 className={Style.blog_item_date}> March 23,2023</h1>
                  <h3 className={Style.blog_item_link}>
                    Announcement of New Office Establishment
                  </h3>
                  <p className={Style.blog_item_experct}>
                    Dear valued customers, We are delighted to announce that we
                    have opened a new office to meet the growing demand for our
                    services. Our new office is located at 131A Highland St,
                    Worcester, MA, 01609. The new office will provide full
                    consulting and customer support services like our main
                    office. It will be a point […]
                  </p>
                  <Link to={""} className={Style.link}>
                    Read more
                  </Link>
                </div>
              </div>

              <div className="bg-[#f7f7f7] rounded-[20px]  overflow-hidden  	">
                <div className="transition duration-1000  hover:scale-110 cursor-pointer aspect-[355/270] w-full 	 ">
                  <Link to={`/blogs/2`} onClick={scrollToTop}>
                    <img
                      src="https://fotosolution.com/_next/image?url=https%3A%2F%2Fadmin.fotosolution.com%2Fwp-content%2Fuploads%2F2023%2F01%2F311.jpeg&w=384&q=75"
                      alt=""
                      className="h-full w-full object-cover	"
                    />
                  </Link>
                </div>
                <div className="p-[25px]">
                  <h1 className={Style.blog_item_date}> March 23,2023</h1>
                  <h3 className={Style.blog_item_link}>
                    Announcement of New Office Establishment
                  </h3>
                  <p className={Style.blog_item_experct}>
                    Dear valued customers, We are delighted to announce that we
                    have opened a new office to meet the growing demand for our
                    services. Our new office is located at 131A Highland St,
                    Worcester, MA, 01609. The new office will provide full
                    consulting and customer support services like our main
                    office. It will be a point […]
                  </p>
                  <Link to={""} className={Style.link}>
                    Read more
                  </Link>
                </div>
              </div>
              <div className="bg-[#f7f7f7] rounded-[20px]  overflow-hidden  	">
                <div className="transition duration-1000  hover:scale-110 cursor-pointer aspect-[355/270] w-full 	 ">
                  <Link to={`/blogs/3`} onClick={scrollToTop}>
                    <img
                      src="https://fotosolution.com/_next/image?url=https%3A%2F%2Fadmin.fotosolution.com%2Fwp-content%2Fuploads%2F2023%2F01%2F315.jpeg&w=384&q=75"
                      alt=""
                      className="h-full w-full object-cover	"
                    />
                  </Link>
                </div>
                <div className="p-[25px]">
                  <h1 className={Style.blog_item_date}> March 23,2023</h1>
                  <h3 className={Style.blog_item_link}>
                    Announcement of New Office Establishment
                  </h3>
                  <p className={Style.blog_item_experct}>
                    Dear valued customers, We are delighted to announce that we
                    have opened a new office to meet the growing demand for our
                    services. Our new office is located at 131A Highland St,
                    Worcester, MA, 01609. The new office will provide full
                    consulting and customer support services like our main
                    office. It will be a point […]
                  </p>
                  <Link to={""} className={Style.link}>
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center pb-10  cursor-pointer">
        <Link to={"/blogs"} className={Style.banner_load} onClick={scrollToTop}>
          See All
        </Link>
      </div>

      <LayoutFooter />
    </>
  );
};

export default BlogDetail;
