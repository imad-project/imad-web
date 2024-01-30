import * as S from "./main.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

const StyledSlider = styled(Slider)`
  position: relative;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
`;

const Arrow = styled.img`
  width: 100%;
  height: 100%;
`;

const Pre = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  left: 3%;
  z-index: 3;
`;

const NextTo = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  right: 3%;
  z-index: 3;
`;

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

const subBannerItems = [
  {
    name: "1",
    src: "/img/banner/sub/데스노트.jpg",
  },
  {
    name: "2",
    src: "/img/banner/sub/목소리의형태.png",
  },
  {
    name: "3",
    src: "/img/banner/sub/소아온.jpg",
  },
  {
    name: "4",
    src: "/img/banner/sub/스즈메.jpg",
  },
  {
    name: "5",
    src: "/img/banner/sub/오빠는끝.webp",
  },
  {
    name: "6",
    src: "/img/banner/sub/주술회전.png",
  },
  {
    name: "7",
    src: "/img/banner/sub/푸르름.jpg",
  },
];

export default function MainPageUI(): JSX.Element {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <NextTo>
        <Arrow src="/img/icon/next.png" />
      </NextTo>
    ),
    prevArrow: (
      <Pre>
        <Arrow src="/img/icon/prev.png" />
      </Pre>
    ),
  };

  const subsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    swipeToSlide: true,
    nextArrow: (
      <NextTo>
        <Arrow src="/img/icon/next.png" />
      </NextTo>
    ),
    prevArrow: (
      <Pre>
        <Arrow src="/img/icon/prev.png" />
      </Pre>
    ),
  };

  return (
    <S.Wrapper>
      <S.MainBannerWrapper>
        <StyledSlider {...settings}>
          {mainBannerItems.map((el) => (
            <S.ImgBox key={el.name}>
              <S.MainSliderItem src={el.src} />
            </S.ImgBox>
          ))}
        </StyledSlider>
      </S.MainBannerWrapper>
      <S.title>액션</S.title>
      <S.SubBannerWrapper>
        <StyledSlider {...subsettings}>
          {subBannerItems.map((el) => (
            <S.ImgBox key={el.name}>
              <S.SubSliderItem src={el.src} />
            </S.ImgBox>
          ))}
        </StyledSlider>
      </S.SubBannerWrapper>
      <S.title>로맨스</S.title>
      <S.SubBannerWrapper>
        <StyledSlider {...subsettings}>
          {subBannerItems.map((el) => (
            <S.ImgBox key={el.name}>
              <S.SubSliderItem src={el.src} />
            </S.ImgBox>
          ))}
        </StyledSlider>
      </S.SubBannerWrapper>
      <S.title>애니메이션</S.title>
      <S.SubBannerWrapper>
        <StyledSlider {...subsettings}>
          {subBannerItems.map((el) => (
            <S.ImgBox key={el.name}>
              <S.SubSliderItem src={el.src} />
            </S.ImgBox>
          ))}
        </StyledSlider>
      </S.SubBannerWrapper>
    </S.Wrapper>
  );
}
