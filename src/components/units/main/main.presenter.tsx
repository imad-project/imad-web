import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import * as S from "./main.styles";

const mainBannerItems = [
  {
    name: 1,
    src: "/img/banner/main/1.webp",
  },
  {
    name: 2,
    src: "/img/banner/main/2.jpg",
  },
  {
    name: 3,
    src: "/img/banner/main/3.jpg",
  },
  {
    name: 4,
    src: "/img/banner/main/4.jpg",
  },
  {
    name: 5,
    src: "/img/banner/main/5.jpg",
  },
];

export default function MainPageUI(): JSX.Element {
  const mainSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const subSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
  };

  return (
    <S.Wrapper>
      <S.MainBannerWrapper>
        <Slider {...mainSettings}>
          {/* {mainBannerItems.map((el) => (
            <div key={el.name}>
              <S.MainSliderItem id={el.src} src={el.src} />
            </div>
          ))} */}

          <div>
            <S.MainSliderItem src="/img/banner/main/1.webp" />
          </div>
          <div>
            <S.MainSliderItem src="/img/banner/main/2.jpg" />
          </div>
          <div>
            <S.MainSliderItem src="/img/banner/main/3.jpg" />
          </div>
          <div>
            <S.MainSliderItem src="/img/banner/main/4.jpg" />
          </div>
          <div>
            <S.MainSliderItem src="/img/banner/main/5.jpg" />
          </div>
        </Slider>
      </S.MainBannerWrapper>
    </S.Wrapper>
  );
}
