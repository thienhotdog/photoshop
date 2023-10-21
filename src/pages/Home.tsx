import { Carousel, Col, Row } from "antd";
import { DotPosition } from "antd/es/carousel";
import { useState } from "react";
import time from "./../assets/icon-2.png";
import no from "./../assets/icon-3.png";
import change from "./../assets/icon-1.png";
import real from "./../assets/icon-4.png";
import copy from "./../assets/icon-5.png";
import free from "./../assets/icon-6.png";
import Style from "./../layouts/Layout.css.module.css";
import LayoutFooter from "../layouts/Layout.footer";
import LayoutHeader from "../layouts/Layout.header";
import Carousels from "../modules/Carousel";
import ThisWhatWeDo from "../modules/ThisWhatWeDo";
import about from "./../assets/344165734_2693164097508508_5567145660358150876_n.jpg";
import Investors from "../modules/Investors";
import upload from "./../assets/upload.png";
import edit from "./../assets/edit.jpg";
import review from "./../assets/review.jpg";
import dowload from "./../assets/dowload.png";
import vp from "./../assets/vp.jpg";
import album from "./../assets/chuan.mp4";
import Autocomplete from "react-google-autocomplete";
const Home = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <>
      <Autocomplete
        style={{ width: "500px" }}
        apiKey={"AIzaSyABX4LTqTLQGg_b3jFOH8Z6_H5CDqn8tbc"}
        onPlaceSelected={(place) => {
          console.log(place);
        }}
        types={["address"]}
        language="vn"
        componentRestrictions={{ country: "VN" }}
      />
    </>
  );
};

export default Home;
