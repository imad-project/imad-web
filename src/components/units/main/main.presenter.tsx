import * as S from "./main.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import LayoutBanner from "../../commons/layout/banner/LayoutBanner.container";
import SimpleSlider from "../../commons/slider/slider";
import { useEffect } from "react";
import Image from "next/image";

const mainBannerItems = [
  {
    name: "1",
    src: "/img/banner/main/1.webp",
  },
  {
    name: "2",
    src: "/img/banner/main/2.jpg",
  },
  {
    name: "3",
    src: "/img/banner/main/3.jpg",
  },
  {
    name: "4",
    src: "/img/banner/main/4.jpg",
  },
  {
    name: "5",
    src: "/img/banner/main/5.jpg",
  },
];

export default function MainPageUI(): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const subSettings = {
    lazyLoad: true,
    initialSlide: 2,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <S.Wrapper>
      <S.MainBannerWrapper>
        <Slider {...settings}>
          {mainBannerItems.map((el) => (
            <S.MainSliderItem key={el.name} src={el.src} />
          ))}

          {/* <div>
            <S.testItem>dddd</S.testItem>
          </div>
          <div>
            <h1>2</h1>
          </div>
          <div>
            <h1>3</h1>
          </div>
          <div>
            <h1>4</h1>
          </div> */}
        </Slider>
      </S.MainBannerWrapper>
      <div>==========================</div>
    </S.Wrapper>
  );
}
