// 3rd Party Components / Dependencies
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Local Components
import { tenCodes } from "./CardSliderData";
// Styles
import "./CardSlider.css";

const MultipleItems = () => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,

    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          dots: true,
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const codes = tenCodes.map((code) => {
    return (
      <div className="card--card" key={code.id}>
        <h3>{code.code}</h3>
        <p>{code.codeDesc}</p>
      </div>
    );
  });

  return (
    <div className="card--container">
      <Slider {...settings}>{codes}</Slider>
    </div>
  );
};

export default MultipleItems;
