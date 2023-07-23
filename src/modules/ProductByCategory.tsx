import { Col, Grid, Row } from "antd";
import style from "./css/ProductByCategory.module.css";
const ProductByCategory = () => {
  const { useBreakpoint } = Grid;
  const lg = useBreakpoint().lg;
  console.log(lg);
  return (
    <div>
      <Row justify="space-between">
        <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 12 }}>
          <div>
            <img
              src="https://d1dbtne32ilur4.cloudfront.net/img/tiles/imageEnhancementTile01.jpg"
              alt=""
              className={style.img}
            />
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
            <p className={style.p2}>INCLUDED</p>
          </div>
        </Col>
        {lg == true ? (
          <>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 12 }}>
              <div className={style.div}>
                <h2 className={style.h2}>WHITE BALANCING</h2>
                <p className={style.p}>
                  Balancing allows objects that are white in person to be
                  rendered white in the photo so the property can be shown in
                  the best light. We also remove yellow or off-white
                  discoloration to create a bright, crisp image.
                </p>
                <p className={style.p2}>INCLUDED</p>
              </div>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 12 }}>
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
              className="mt-10"
            >
              <div>
                <img
                  src="https://d1dbtne32ilur4.cloudfront.net/img/tiles/imageEnhancementTile01.jpg"
                  alt=""
                  className={style.img}
                />
              </div>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 24 }} lg={{ span: 12 }}>
              <div className={style.div}>
                <h2 className={style.h2}>WHITE BALANCING</h2>
                <p className={style.p}>
                  Balancing allows objects that are white in person to be
                  rendered white in the photo so the property can be shown in
                  the best light. We also remove yellow or off-white
                  discoloration to create a bright, crisp image.
                </p>
                <p className={style.p2}>INCLUDED</p>
              </div>
            </Col>
          </>
        )}
      </Row>
    </div>
  );
};
export default ProductByCategory;
