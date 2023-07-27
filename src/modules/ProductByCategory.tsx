import { Col, Grid, Row } from "antd";
import before_vr03 from "./../assets/VirtualStaging/Virtual Staging/Virtual Staging 03.jpg";
import after_vr03 from "./../assets/VirtualStaging/Virtual Staging/Virtual Staging 04.jpg";
import style from "./css/ProductByCategory.module.css";
const ProductByCategory = () => {
  const { useBreakpoint } = Grid;
  const lg = useBreakpoint().lg;
  console.log(lg);
  return (
    <div>
      <Row justify="space-between">
        <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 12 }}>
          <div className="w-full overflow-hidden">
            <div className="flex justify-between  transition duration-1000  hover:scale-110 ">
              <div className="max-w-[49.85%] max-h-[500px]">
                <img src={before_vr03} alt="" />
              </div>
              <div className="max-w-[49.85%] ">
                <img src={after_vr03} alt="" />
              </div>
            </div>
          </div>

          <div className="w-full">
            <div className="flex justify-between">
              <div className="w-[49.85%]">
                <div className="w-full  bg-[#008000] place-items-center flex p-2 text-white font-bold">
                  <p className="w-[15px] h-[15px] bg-red-500 mr-2" />
                  <p>BEFORE</p>
                </div>
              </div>
              <div className="w-[49.85%] ">
                <div className="bg-[#008000] text-white flex justify-end w-full p-2 px-5 ">
                  <div className="flex items-center font-bold">
                    <p>AFTER</p>
                    <p className="w-[15px] h-[15px] bg-red-500 ml-2" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Col>
        <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 12 }}>
          <div className={style.div}>
            <h2 className={style.h2}>WHITE BALANCING</h2>
            <p className={style.p}>
              Balancing allows objects that are white in person to be rendered
              white in the photo so the property can be shown in the best light.
              We also remove yellow or off-white discoloration to create a
              bright, crisp image.
            </p>

            <button className={style.button}>INCLUDED</button>
          </div>
        </Col>
        {lg == true ? (
          <>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              lg={{ span: 12 }}
              className="py-3"
            >
              <div className={style.div}>
                <h2 className={style.h2}>WHITE BALANCING</h2>
                <p className={style.p}>
                  Balancing allows objects that are white in person to be
                  rendered white in the photo so the property can be shown in
                  the best light. We also remove yellow or off-white
                  discoloration to create a bright, crisp image.
                </p>

                <button className={style.button}>INCLUDED</button>
              </div>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              lg={{ span: 12 }}
              className="py-3"
            >
              <div>
                <img
                  src="https://d1dbtne32ilur4.cloudfront.net/img/tiles/imageEnhancementTile01.jpg"
                  alt=""
                  className={style.img}
                />
              </div>
            </Col>
          </>
        ) : (
          <>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              lg={{ span: 12 }}
              className="py-3"
            >
              <div>
                <img
                  src="https://d1dbtne32ilur4.cloudfront.net/img/tiles/imageEnhancementTile01.jpg"
                  alt=""
                  className={style.img}
                />
              </div>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              lg={{ span: 12 }}
              className="py-3"
            >
              <div className={style.div}>
                <h2 className={style.h2}>WHITE BALANCING</h2>
                <p className={style.p}>
                  Balancing allows objects that are white in person to be
                  rendered white in the photo so the property can be shown in
                  the best light. We also remove yellow or off-white
                  discoloration to create a bright, crisp image.
                </p>
                <button className={style.button}>INCLUDED</button>
              </div>
            </Col>
          </>
        )}
      </Row>
    </div>
  );
};
export default ProductByCategory;
