type Data = {
  textTitle: string;
  text: string;
};

type Props = {
  title: string;
  data: Data[];
};
import { date } from "yup";
import style from "./css/Product.module.css";
const ProductPortfolio = ({ title, data }: Props) => {
  return (
    <div className={style.setion}>
      <h3 className={style.h2}>{title}</h3>
      <ul className={style.ul}>
        {data?.map((item: Data) => {
          return (
            <li key={item.text}>
              <h3 className={style.h3}>{item.textTitle}</h3>
              <p className={style.p}>{item.text}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductPortfolio;
