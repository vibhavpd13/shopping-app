import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const SliderBanner = ()=> {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
    className: "myCustomCarousel"
  };
  return (
    <Slider {...settings}>
      <div>
        <h3>order1</h3>
      </div>
      <div>
        <h3>order2</h3>
      </div>
      <div>
        <h3>order3</h3>
      </div>
      <div>
        <h3>order4</h3>
      </div>
      <div>
        <h3>order5</h3>
      </div>
    </Slider>
  );
}
export default SliderBanner