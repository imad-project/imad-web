import { SliderItem, Wrapper } from "./LayoutBanner.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from "../../slider/slider";
export default function LayoutBannerUI(): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Wrapper>
      <Slider {...settings}>
        <div>
          <SliderItem src="/img/banner/main/1.webp" />
        </div>
        <div>
          <SliderItem src="/img/banner/main/2.jpg" />
        </div>
        <div>
          <SliderItem src="/img/banner/main/3.jpg" />
        </div>
        <div>
          <SliderItem src="/img/banner/main/4.jpg" />
        </div>
        <div>
          <SliderItem src="/img/banner/main/5.jpg" />
        </div>
      </Slider>
    </Wrapper>
  );
}
