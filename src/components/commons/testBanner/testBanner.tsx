import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class LazyLoad extends Component {
  render() {
    const settings = {
      dots: true,
      lazyLoad: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 2,
    };
    return (
      <div>
        <h2> Lazy Load</h2>
        <Slider {...settings}>
          <div>
            <img src="/img/banner/main/1/webp" />
          </div>
          <div>
            <img src="/img/banner/main/1/webp" />
          </div>
          <div>
            <img src="/img/banner/main/1/webp" />
          </div>
          <div>
            <img src="/img/banner/main/1/webp" />
          </div>
        </Slider>
      </div>
    );
  }
}
