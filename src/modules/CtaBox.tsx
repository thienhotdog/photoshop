import { Link } from "react-router-dom";
import Style from "./../pages/css/faq.module.css";
const CtaBox = () => {
  return (
    <div className={Style.banner_hero_content}>
      <img
        src="https://fotosolution.com/_next/static/media/contact-cta-bg.91e5f46f.svg"
        alt=""
        className={Style.banner_hero_imagess}
      />
      <div className={Style.banner_hero_inners}>
        <div className={Style.contact_cta_box}>
          <div className={Style.contact_cta_boxs}>
            <p className={Style.contact_cta_slogan}>
              Ready To Place First Order?
            </p>
            <Link to="/" className={Style.btn}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaBox;
