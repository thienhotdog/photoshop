import { Link } from "react-router-dom";
import LayoutHeader from "../layouts/Layout.header";
import Style from "./css/faq.module.css";
import style from "./css/renders.module.css";
import { CSSProperties } from "react";
import { Collapse, CollapseProps, theme } from "antd";
import { CaretRightOutlined } from "@ant-design/icons";
import cong from "./../assets/cong.jpg";
import tru from "./../assets/ttru.png";
import LayoutFooter from "../layouts/Layout.footer";
import CtaBox from "../modules/CtaBox";
const getItem1: (panelStyle: CSSProperties) => CollapseProps["items"] = (
  panelStyle
) => [
  {
    key: "1",
    label: "What services do you offer?",
    children: (
      <p className={Style.text_collapse}>
        We offer real estate images editing service and focus on HDR editing,
        day to evening conversion, visual stagging.
      </p>
    ),
    style: panelStyle
  },
  {
    key: "2",
    label: "Is my images processed automatically?",
    children: (
      <p className={Style.text_collapse}>
        No, Your images are processed manually by hand with Photoshop skilled
        staffs.
      </p>
    ),
    style: panelStyle
  },
  {
    key: "3",
    label: "When can I receive my images?",
    children: (
      <p className={Style.text_collapse}>
        About 24 hours, our default delivery time is 24 hours, that mean you
        will received your edited photos after 24 hours after confirm your
        order.
      </p>
    ),
    style: panelStyle
  }
];
const getItem2: (panelStyle: CSSProperties) => CollapseProps["items"] = (
  panelStyle
) => [
  {
    key: "1",
    label: "How do I send/upload files to fotosolution?",
    children: (
      <p className={Style.text_collapse}>
        We offer upload your file to Dropbox, Google, Wetranfer… or request
        private FTP account
      </p>
    ),
    style: panelStyle
  },
  {
    key: "2",
    label: "Do you send an alert when my images is ready?",
    children: (
      <p className={Style.text_collapse}>
        Of course, You will recived an e-mail which let you know that your
        images is ready to download. You can also check your order status by
        logging in to your account too.
      </p>
    ),
    style: panelStyle
  },
  {
    key: "3",
    label: "Which file’s types do you support?",
    children: (
      <p className={Style.text_collapse}>
        We support most of image file’s types like : PNG, JPG, PSD, TIF…. Also,
        you can use archive file (ZIP, RAR, 7z…) to upload your files.
      </p>
    ),
    style: panelStyle
  }
];
const getItem3: (panelStyle: CSSProperties) => CollapseProps["items"] = (
  panelStyle
) => [
  {
    key: "1",
    label: "How do I get a discount?",
    children: (
      <p className={Style.text_collapse}>
        We offer volume discount on the order with over 500 images per month.
        You can get custom quotation by contact us
      </p>
    ),
    style: panelStyle
  },
  {
    key: "2",
    label: "Do you offer trial for your services?",
    children: (
      <p className={Style.text_collapse}>
        Absolutely, you can get free test for every services. Let try and get
        your experience on our system and services now.
      </p>
    ),
    style: panelStyle
  },
  {
    key: "3",
    label: "Which payment methods can i use?",
    children: (
      <p className={Style.text_collapse}>
        We accept most major credit cards, and paypal and wire transfer.
      </p>
    ),
    style: panelStyle
  }
];
const getItem4: (panelStyle: CSSProperties) => CollapseProps["items"] = (
  panelStyle
) => [
  {
    key: "1",
    label: "Where is Fotosolution located?",
    children: (
      <p className={Style.text_collapse}>
        We are graphic outsourcing company and we currently operate in Hanoi,
        Vietnam.
      </p>
    ),
    style: panelStyle
  },
  {
    key: "2",
    label: "How long have you been?",
    children: (
      <p className={Style.text_collapse}>
        Start in 2010, we have more than 4 years experience in Photo editing and
        graphic services.
      </p>
    ),
    style: panelStyle
  },
  {
    key: "3",
    label: "Is my data sercure?",
    children: (
      <p className={Style.text_collapse}>
        Yes, your photos and derivative edited images will NOT be published or
        accessible to any third party without your permission.
      </p>
    ),
    style: panelStyle
  }
];
const IconYouWant = () => {
  return <img src={cong} alt="" className={Style.icon} />;
};
const IconYouWanF = () => {
  return <img src={tru} alt="" className={Style.icon} />;
};
const Faq = () => {
  const { token } = theme.useToken();

  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none"
  };

  return (
    <>
      <LayoutHeader title="FAQ" />
      <div className={style.banner_hero_content}>
        <img
          src="https://www.w3schools.com/css/img_5terre_wide.jpg"
          alt=""
          className={style.banner_hero_image}
        />
        <div className={style.banner_hero_inner}>
          <h1 className={style.banner_hero_title}>Support</h1>
          <div className={style.banner_hero_desc}>
            <p>We’re happy to have you here. Please spend a few minutes</p>
            <p>going through this guide to learn some basic.</p>
          </div>
        </div>
      </div>
      <div className="md:px-[80px] px-[10px]">
        <div className={Style.container}>
          <div className="mb-[41px]">
            <div className={Style.faq_title}>FAQ</div>
            <div className={Style.faq_desc}>
              <p>Please take a look on FAQ if it could help you</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10">
            <div>
              <h1 className={Style.list_question_col_title}>Photo Services</h1>
              <Collapse
                bordered={false}
                defaultActiveKey={[""]}
                expandIcon={({ isActive }) =>
                  isActive ? <IconYouWanF /> : <IconYouWant />
                }
                style={{ background: token.colorBgContainer }}
                items={getItem1(panelStyle)}
              />
            </div>
            <div>
              <h1 className={Style.list_question_col_title}>
                Uploading and Receiving Images
              </h1>
              <Collapse
                bordered={false}
                defaultActiveKey={[""]}
                expandIcon={({ isActive }) =>
                  isActive ? <IconYouWanF /> : <IconYouWant />
                }
                style={{ background: token.colorBgContainer }}
                items={getItem2(panelStyle)}
              />
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-10">
            <div>
              <h1 className={Style.list_question_col_title}>
                Pricing & Payment
              </h1>
              <Collapse
                bordered={false}
                defaultActiveKey={[""]}
                expandIcon={({ isActive }) =>
                  isActive ? <IconYouWanF /> : <IconYouWant />
                }
                style={{ background: token.colorBgContainer }}
                items={getItem3(panelStyle)}
              />
            </div>
            <div>
              <h1 className={Style.list_question_col_title}>
                About Fotosolution.com
              </h1>
              <Collapse
                bordered={false}
                defaultActiveKey={[""]}
                expandIcon={({ isActive }) =>
                  isActive ? <IconYouWanF /> : <IconYouWant />
                }
                style={{ background: token.colorBgContainer }}
                items={getItem4(panelStyle)}
              />
            </div>
          </div>
        </div>
      </div>
      <CtaBox />
      <LayoutFooter />
    </>
  );
};

export default Faq;
