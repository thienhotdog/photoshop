import { Col, Row } from "antd";
import Style from "./../layouts/Layout.css.module.css";

const Investors = () => {
  return (
    <div className="py-5  text-[36px] bg-[#f6f6f6]">
      <Row justify="space-between" className="px-[6%] ">
        <Col lg={{ span: 12 }} span={24} className="py-5">
          <div className={Style.media2}>
            <h2 className="text-[#ec1c38] text-[18px] leading-none">
              TRUSTED CLIENTS
            </h2>
            <p className="text-[#000000] text-[40px] font-bold">
              BoxBrownie.com is trusted & relied on by leading companies
              worldwide.
            </p>
          </div>
        </Col>
        <Col lg={{ span: 12 }} span={24} className="py-5">
          <ul className="flex flex-wrap list-none	max-w-[1070px] mx-auto items-center	p-0 	">
            <li className="w-[33.3%] max-h-[72px] px-[40px] my-[10px]">
              <img
                src="https://d1dbtne32ilur4.cloudfront.net/img/trusted/drhorton.png"
                alt=""
              />
            </li>
            <li className="w-[33.3%] max-h-[72px] px-[40px] my-[10px]">
              <img
                src="https://d1dbtne32ilur4.cloudfront.net/img/trusted/remax.png"
                alt=""
              />
            </li>
            <li className="w-[33.3%] max-h-[72px] px-[40px] my-[10px]">
              <img
                src="https://d1dbtne32ilur4.cloudfront.net/img/trusted/kellerWilliams.png"
                alt=""
              />
            </li>
            <li className="w-[33.3%] max-h-[72px] px-[40px]">
              <img
                src="https://d1dbtne32ilur4.cloudfront.net/img/trusted/century21.png"
                alt=""
              />
            </li>
            <li className="w-[33.3%] max-h-[72px] px-[40px] my-[10px]">
              <img
                src="https://d1dbtne32ilur4.cloudfront.net/img/trusted/caldwellBanker.png"
                alt=""
              />
            </li>
            <li className="w-[33.3%] max-h-[72px] px-[40px] my-[10px]">
              <img
                src="https://d1dbtne32ilur4.cloudfront.net/img/trusted/ERA.png"
                alt=""
              />
            </li>
            <li className="w-[33.3%] max-h-[72px] px-[40px] my-[10px]">
              <img
                src="https://d1dbtne32ilur4.cloudfront.net/img/trusted/realtyOneGroup.png"
                alt=""
              />
            </li>
            <li className="w-[33.3%] max-h-[72px] px-[40px] my-[10px]">
              <img
                src="https://d1dbtne32ilur4.cloudfront.net/img/trusted/sothebysInternationalRealty.png"
                alt=""
              />
            </li>
            <li className="w-[33.3%] max-h-[72px] px-[40px] my-[10px]">
              <img
                src="https://d1dbtne32ilur4.cloudfront.net/img/trusted/leadingRealEstate.png"
                alt=""
              />
            </li>
            <li className="w-[33.3%] max-h-[72px] px-[40px] my-[10px]">
              <img
                src="https://d1dbtne32ilur4.cloudfront.net/img/trusted/cbre.png"
                alt=""
              />
            </li>
            <li className="w-[33.3%] max-h-[72px] px-[40px] my-[10px]">
              <img
                src="https://d1dbtne32ilur4.cloudfront.net/img/trusted/exp.png"
                alt=""
              />
            </li>
            <li className="w-[33.3%] max-h-[72px] px-[40px] my-[10px]">
              <img
                src="https://d1dbtne32ilur4.cloudfront.net/img/trusted/eandv2023.png"
                alt=""
              />
            </li>
          </ul>
        </Col>
      </Row>
    </div>
  );
};

export default Investors;
