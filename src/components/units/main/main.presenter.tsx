import * as S from "./main.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";

import Modal from "react-modal";
import { useEffect, useState } from "react";
import axios from "axios";
import { delay } from "framer-motion";
import { IMainProps } from "./main.types";

const movie_genres = [
  {
    id: 28,
    name: "액션",
  },
  {
    id: 12,
    name: "모험",
  },
  {
    id: 16,
    name: "애니메이션",
  },
  {
    id: 35,
    name: "코미디",
  },
  {
    id: 80,
    name: "범죄",
  },
  {
    id: 99,
    name: "다큐멘터리",
  },
  {
    id: 18,
    name: "드라마",
  },
  {
    id: 10751,
    name: "가족",
  },
  {
    id: 14,
    name: "판타지",
  },
  {
    id: 36,
    name: "역사",
  },
  {
    id: 27,
    name: "공포",
  },
  {
    id: 10402,
    name: "음악",
  },
  {
    id: 9648,
    name: "미스터리",
  },
  {
    id: 10749,
    name: "로맨스",
  },
  {
    id: 878,
    name: "SF",
  },
  {
    id: 10770,
    name: "TV 영화",
  },
  {
    id: 53,
    name: "스릴러",
  },
  {
    id: 10752,
    name: "전쟁",
  },
  {
    id: 37,
    name: "서부",
  },
];

const tv_genres = [
  {
    id: 10759,
    name: "Action & Adventure",
  },
  {
    id: 16,
    name: "애니메이션",
  },
  {
    id: 35,
    name: "코미디",
  },
  {
    id: 80,
    name: "범죄",
  },
  {
    id: 99,
    name: "다큐멘터리",
  },
  {
    id: 18,
    name: "드라마",
  },
  {
    id: 10751,
    name: "가족",
  },
  {
    id: 10762,
    name: "Kids",
  },
  {
    id: 9648,
    name: "미스터리",
  },
  {
    id: 10763,
    name: "News",
  },
  {
    id: 10764,
    name: "Reality",
  },
  {
    id: 10765,
    name: "Sci-Fi & Fantasy",
  },
  {
    id: 10766,
    name: "Soap",
  },
  {
    id: 10767,
    name: "Talk",
  },
  {
    id: 10768,
    name: "War & Politics",
  },
  {
    id: 37,
    name: "서부",
  },
];

const StyledSlider = styled(Slider)`
  position: relative;
  .slick-prev::before,
  .slick-next::before {
    opacity: 0;
    display: none;
  }
`;

const BackgroundImageWrapper = styled.div<{ backgroundUrl: string }>`
  position: absolute;
  width: 10%;
  height: 600px;
  background-image: url(${(props) => props.backgroundUrl});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;

  filter: blur(30px); /* 블러 처리 */

  z-index: 1; /* 다른 요소보다 뒤에 배치 */
`;

const BannerContent = styled.div`
  position: relative;

  z-index: 2; /* 이미지가 배경보다 위에 배치되도록 설정 */
`;

const BannerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

export default function MainPageUI(props: IMainProps): JSX.Element {
  const toptenBanner =
    props.Recommend?.trend_recommendation_movie?.results?.slice(0, 10);

  const settings = {
    dots: true,
    infinite: false,
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
    slidesToShow: 2,
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
          {toptenBanner?.map((el) => (
            <div key={el.title}>
              <BackgroundImageWrapper
                backgroundUrl={`https://image.tmdb.org/t/p/original/${el.backdrop_path}`}
              />
              <BannerContent>
                <BannerBox>
                  <S.ImgBox
                    key={el.title}
                    url={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
                  >
                    <S.MainSliderItem
                      src={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
                    />
                  </S.ImgBox>
                  <S.MainBannerTitle>{el.title}</S.MainBannerTitle>
                </BannerBox>
              </BannerContent>
            </div>
          ))}
        </StyledSlider>
      </S.MainBannerWrapper>
      <S.title>월간 작품 랭킹</S.title>
      <S.SubBannerWrapper>
        <StyledSlider {...subsettings}>
          {props?.month?.details_list?.map((el: any, index: any) => (
            <>
              <S.ImgBox2 key={el.title} onClick={() => onClickImg(index)}>
                <S.SubSliderItem
                  src={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
                />
              </S.ImgBox2>
              <Modal
                isOpen={isOpenList[index]}
                onRequestClose={() => onClickCancel(index)}
                style={S.customModalStyles}
                ariaHideApp={false}
                contentLabel="Pop up Message"
                shouldCloseOnOverlayClick={false}
              >
                <S.ModalWrapper>
                  <S.ModalImg
                    src={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
                  />

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
            <S.ImgBox2 key={el.name}>
              <S.SubSliderItem src={el.poster_path} />
            </S.ImgBox2>
          ))}
        </StyledSlider>
      </S.SubBannerWrapper>
      <S.title>애니메이션</S.title>
      <S.SubBannerWrapper>
        <StyledSlider {...subsettings}>
          {subBannerItems.map((el) => (
            <S.ImgBox2 key={el.name}>
              <S.SubSliderItem src={el.poster_path} />
            </S.ImgBox2>
          ))}
        </StyledSlider>
      </S.SubBannerWrapper>
    </S.Wrapper>
  );
}
