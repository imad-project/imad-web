import * as S from "./main.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

import Modal from "react-modal";
import { useState } from "react";

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
    name: "데스노트",
    poster_path: "/img/banner/sub/데스노트.jpg",
    contents_type: "애니메이션",
    overview:
      "데스노트를 주운소년이 어쩌구저쩌구 인생피나싶엇는데 어쩌구 개망하고 잡혀가고 ㅅㄱ",
  },
  {
    name: "목소리의형태",
    poster_path: "/img/banner/sub/목소리의형태.png",
    contents_type: "애니메이션",
    overview:
      "목소리의형태목소리의형태목소리의형태목소리의형태목소리의형태목소리의형태목소리의형태목소리의형태목소리의형태목소리의형태목소리의형태",
  },
  {
    name: "소드아트온라인",
    poster_path: "/img/banner/sub/소아온.jpg",
    contents_type: "애니메이션",
    overview:
      "소드아트온라인소드아트온라인소드아트온라인소드아트온라인소드아트온라인소드아트온라인소드아트온라인소드아트온라인소드아트온라인소드아트온라인",
  },
  {
    name: "스즈메의문단속",
    poster_path: "/img/banner/sub/스즈메.jpg",
    contents_type: "애니메이션",
    overview:
      "스즈메의문단속스즈메의문단속스즈메의문단속스즈메의문단속스즈메의문단속스즈메의문단속스즈메의문단속스즈메의문단속스즈메의문단속스즈메의문단속스즈메의문단속",
  },
  {
    name: "오빠는끝!",
    poster_path: "/img/banner/sub/오빠는끝.webp",
    contents_type: "애니메이션",
    overview:
      "오빠는끝오빠는끝오빠는끝오빠는끝오빠는끝오빠는끝오빠는끝오빠는끝오빠는끝오빠는끝오빠는끝오빠는끝오빠는끝오빠는끝오빠는끝오빠는끝오빠는끝오빠는끝오빠는끝ㅍ",
  },
  {
    name: "주술회전",
    poster_path: "/img/banner/sub/주술회전.png",
    contents_type: "애니메이션",
    overview:
      "주술회전주술회전주술회전주술회전주술회전주술회전주술회전주술회전주술회전주술회전주술회전주술회전주술회전주술회전주술회전",
  },
  {
    name: "하늘의 푸르름을 아는사람이여",
    poster_path: "/img/banner/sub/푸르름.jpg",
    contents_type: "애니메이션",
    overview:
      "푸르름푸르름푸르름푸르름푸르름푸르름푸르름푸르름푸르름푸르름푸르름푸르름푸르름푸르름푸르름푸르름푸르름푸르름푸르름푸르름푸르름푸르름",
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

  const [isOpenList, setIsOpenList] = useState(
    Array(subBannerItems.length).fill(false)
  );

  const onClickImg = (index: number) => {
    const updatedIsOpenList = [...isOpenList];
    updatedIsOpenList[index] = true;
    setIsOpenList(updatedIsOpenList);
  };
  const onClickCancel = (index: number) => {
    const updatedIsOpenList = [...isOpenList];
    updatedIsOpenList[index] = false;
    setIsOpenList(updatedIsOpenList);
  };

  const [isOpen, setIsOpen] = useState(false);

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
          {subBannerItems.map((el, index) => (
            <>
              <S.ImgBox key={el.name} onClick={() => onClickImg(index)}>
                <S.SubSliderItem src={el.poster_path} />
              </S.ImgBox>
              <Modal
                isOpen={isOpenList[index]}
                onRequestClose={() => onClickCancel(index)}
                style={S.customModalStyles}
                ariaHideApp={false}
                contentLabel="Pop up Message"
                shouldCloseOnOverlayClick={false}
              >
                <S.ModalWrapper>
                  <S.ModalImg src={el.poster_path} />

                  <S.ModalCancel
                    src="/img/icon/cancel.png"
                    onClick={() => onClickCancel(index)}
                  />
                  <h2>{el.overview}</h2>
                </S.ModalWrapper>
              </Modal>
            </>
          ))}
        </StyledSlider>
      </S.SubBannerWrapper>
      <S.title>로맨스</S.title>
      <S.SubBannerWrapper>
        <StyledSlider {...subsettings}>
          {subBannerItems.map((el) => (
            <S.ImgBox key={el.name}>
              <S.SubSliderItem src={el.poster_path} />
            </S.ImgBox>
          ))}
        </StyledSlider>
      </S.SubBannerWrapper>
      <S.title>애니메이션</S.title>
      <S.SubBannerWrapper>
        <StyledSlider {...subsettings}>
          {subBannerItems.map((el) => (
            <S.ImgBox key={el.name}>
              <S.SubSliderItem src={el.poster_path} />
            </S.ImgBox>
          ))}
        </StyledSlider>
      </S.SubBannerWrapper>
    </S.Wrapper>
  );
}
