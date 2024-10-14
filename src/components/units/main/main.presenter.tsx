import * as S from "./main.styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "@emotion/styled";
import CircularProgressChart from "@/src/commons/rate_view/rate_view";

import Modal, { contextType } from "react-modal";
import { useEffect, useState } from "react";

import { IMainProps } from "./main.types";
import { findGenreNames } from "../../../../src/commons/gerne_finder/gerne_finder";

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
  width: 5%;
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

const ContentsType = [
  {
    id: "TV",
    name: "시리즈",
  },
  {
    id: "MOVIE",
    name: "영화",
  },
  {
    id: "ANIMATION",
    name: "애니메이션",
  },
];

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
  const [chart, setChart] = useState<"alltime" | "monthly" | "weekly">(
    "alltime"
  );
  const [category, setCategory] = useState<"movie" | "tv">("movie");
  const toptenTvBanner =
    props.Recommend?.trend_recommendation_tv?.results?.slice(0, 20);
  const toptenMovieBanner =
    props.Recommend?.trend_recommendation_movie?.results?.slice(0, 20);

  const topChart = props.Ranking?.details_list.slice(0, 9);
  const topUserTv =
    props.Recommend?.user_activity_recommendation_tv?.results?.slice(0, 4);
  const topUserMovie =
    props.Recommend?.user_activity_recommendation_movie?.results?.slice(0, 4);
  const topUserAnimationTv =
    props.Recommend?.user_activity_recommendation_tv_animation?.results?.slice(
      0,
      4
    );
  const topUserMovieAnimation =
    props.Recommend?.user_activity_recommendation_movie_animation?.results?.slice(
      0,
      4
    );

  const toptenBanner =
    category === "movie" ? toptenMovieBanner : toptenTvBanner;

  const [sliderPage, setSliderPage] = useState(1); // 슬라이더 페이지 상태 추가

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

  const onClickClose = () => {
    setIsOpen(false);
  };

  const onClickOpen = () => {
    setIsOpen(true);
  };

  const [isOpen, setIsOpen] = useState(false);

  const TypeConvert = (type: string) => {
    return ContentsType.filter((ContentsType) =>
      type.includes(ContentsType.id)
    ).map((ContentsType) => ContentsType.name);
  };

  return (
    <S.Wrapper>
      <S.RowBox2>
        <S.title>인기 작품</S.title>
        <S.subtitle2
          onClick={() => {
            setCategory("movie");
            setSliderPage(1);
          }}
          active={category === "movie"}
        >
          영화
        </S.subtitle2>
        <S.subtitle>|</S.subtitle>
        <S.subtitle2
          onClick={() => {
            setCategory("tv");
            setSliderPage(1);
          }}
          active={category === "tv"}
        >
          시리즈
        </S.subtitle2>
      </S.RowBox2>

      <S.MainBannerWrapper>
        <StyledSlider {...settings} initialSlide={sliderPage - 1}>
          {toptenBanner?.map((el) => (
            <div key={"title" in el ? el.title : el.name}>
              <BackgroundImageWrapper
                backgroundUrl={`https://image.tmdb.org/t/p/original/${el.backdrop_path}`}
              />
              <BannerContent>
                <BannerBox>
                  <S.ImgBox
                    key={"title" in el ? el.title : el.name}
                    url={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
                  >
                    <S.MainSliderItem
                      src={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
                    />
                  </S.ImgBox>
                  <S.MainBannerTitle>
                    {"title" in el ? el.title : el.name}
                  </S.MainBannerTitle>
                  <S.MainBannerSubTitle>
                    {findGenreNames(category, el.genre_ids).join(", ")}
                  </S.MainBannerSubTitle>
                </BannerBox>
              </BannerContent>
            </div>
          ))}
        </StyledSlider>
      </S.MainBannerWrapper>

      <S.RowBox>
        <S.WriteBox>
          <S.TopRatedWrite
            backgroundUrl={`https://image.tmdb.org/t/p/original/${props.TopReview?.contents_poster_path}`}
          />
          <S.SubItemsTitle>오늘의 리뷰🏅</S.SubItemsTitle>
          <S.SubItemsSubTitle>{props.TopReview?.title}</S.SubItemsSubTitle>
          <S.RowBox2>
            <S.RowBox3>
              <S.TinyPoster
                src={`https://image.tmdb.org/t/p/original/${props.TopReview?.contents_poster_path}`}
              />
              <S.SubItemsGrayTitle>
                {props.TopReview?.contents_title}
              </S.SubItemsGrayTitle>
            </S.RowBox3>
            <S.RowBox3>
              <S.Profile_image
                src={`https://imad-image-s3.s3.ap-northeast-2.amazonaws.com/profile/${props.TopReview?.user_profile_image}`}
              />
              <S.SubItemsSubTitle>
                {props.TopReview?.user_nickname}
              </S.SubItemsSubTitle>
            </S.RowBox3>
          </S.RowBox2>
        </S.WriteBox>
        <S.WriteBox>
          <S.TopRatedWrite
            backgroundUrl={`https://image.tmdb.org/t/p/original/${props.TopWrite?.contents_backdrop_path}`}
          />
          <S.SubItemsTitle>오늘의 게시물🏅</S.SubItemsTitle>
          <S.SubItemsSubTitle>{props.TopWrite?.title}</S.SubItemsSubTitle>
          <S.RowBox2>
            <S.RowBox3>
              <S.TinyPoster
                src={`https://image.tmdb.org/t/p/original/${props.TopWrite?.contents_poster_path}`}
              />
              <S.SubItemsGrayTitle>
                {props.TopWrite?.contents_title}
              </S.SubItemsGrayTitle>
            </S.RowBox3>
            <S.RowBox3>
              <S.Profile_image
                src={`https://imad-image-s3.s3.ap-northeast-2.amazonaws.com/profile/${props.TopWrite?.user_profile_image}`}
              />
              <S.SubItemsSubTitle>
                {props.TopWrite?.user_nickname}
              </S.SubItemsSubTitle>
            </S.RowBox3>
          </S.RowBox2>
        </S.WriteBox>
      </S.RowBox>
      <S.RowBox4>
        <S.RowBox2>
          <S.title>아이매드 차트</S.title>
          <S.subtitle2
            onClick={() => {
              setChart("alltime");
              props.allTimeRanking();
            }}
            active={chart === "alltime"}
          >
            전체
          </S.subtitle2>
          <S.subtitle>|</S.subtitle>
          <S.subtitle2
            onClick={() => {
              setChart("monthly");
              props.monthlyRanking();
            }}
            active={chart === "monthly"}
          >
            월간
          </S.subtitle2>
          <S.subtitle>|</S.subtitle>
          <S.subtitle2
            onClick={() => {
              setChart("weekly");
              props.weeklyRanking();
            }}
            active={chart === "weekly"}
          >
            주간
          </S.subtitle2>
        </S.RowBox2>
        <S.subtitle3
          onClick={() => {
            props.mergeRanking();
            onClickOpen();
          }}
        >
          전체보기
        </S.subtitle3>
        <Modal
          isOpen={isOpen}
          onRequestClose={() => onClickClose()}
          style={S.customModalStyles}
          ariaHideApp={false}
          contentLabel="Pop up Message"
          shouldCloseOnOverlayClick={true}
        >
          <S.ModalWrapper>
            <S.RowBox4>
              <S.RowBox2>
                <S.title>아이매드 차트 전체보기</S.title>
                <S.subtitle2
                  onClick={() => {
                    props.setTimes("alltime");
                  }}
                  active={props.times === "alltime"}
                >
                  전체
                </S.subtitle2>
                <S.subtitle>|</S.subtitle>
                <S.subtitle2
                  onClick={() => {
                    props.setTimes("monthly");
                  }}
                  active={props.times === "monthly"}
                >
                  월간
                </S.subtitle2>
                <S.subtitle>|</S.subtitle>
                <S.subtitle2
                  onClick={() => {
                    props.setTimes("weekly");
                  }}
                  active={props.times === "weekly"}
                >
                  주간
                </S.subtitle2>
              </S.RowBox2>
              <S.ModalCancel
                src="/img/icon/cancel.png"
                onClick={onClickClose}
              />
            </S.RowBox4>

            <S.LeftMarginBox>
              <S.RowBox2>
                <S.SubBtn
                  onClick={() => {
                    props.setContentsType("all");
                  }}
                  active={props.contentsType === "all"}
                >
                  전체
                </S.SubBtn>
                <S.SubBtn
                  onClick={() => {
                    props.setContentsType("tv");
                  }}
                  active={props.contentsType === "tv"}
                >
                  시리즈
                </S.SubBtn>
                <S.SubBtn
                  onClick={() => {
                    props.setContentsType("movie");
                  }}
                  active={props.contentsType === "movie"}
                >
                  영화
                </S.SubBtn>
                <S.SubBtn
                  onClick={() => {
                    props.setContentsType("animation");
                  }}
                  active={props.contentsType === "animation"}
                >
                  애니메이션
                </S.SubBtn>
              </S.RowBox2>
            </S.LeftMarginBox>

            <S.MergedChartWrapper>
              {props.mergedChart?.map((el) => (
                <S.RankingBox2 key={el.contents_id}>
                  <S.RankingPoster
                    src={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
                  />
                  <S.ColumnBox>
                    <S.RowBox>
                      <S.RankingNumbers>{el.ranking}</S.RankingNumbers>
                      <S.RankingTitle isTitleLong={el.title.length > 10}>
                        {el.title}
                      </S.RankingTitle>
                    </S.RowBox>
                    <S.SubItemsGrayTitle>
                      {el.ranking_changed === 0 ||
                      el.ranking_changed === null ? (
                        <>-</> // 수치가 0 또는 null일 경우 "-" 출력
                      ) : (
                        <span
                          style={{
                            color:
                              el.ranking_changed > 0 ? "#3fe87f" : "#f05650", // 양수면 초록색, 음수면 빨간색
                            fontSize: "16px",
                          }}
                        >
                          {el.ranking_changed > 0
                            ? `▲${el.ranking_changed}`
                            : `▼${-el.ranking_changed}`}
                        </span>
                      )}{" "}
                      {TypeConvert(el.contents_type)}
                    </S.SubItemsGrayTitle>
                  </S.ColumnBox>
                  <S.RateBox>
                    <CircularProgressChart value={el.imad_score} />
                  </S.RateBox>
                </S.RankingBox2>
              ))}
            </S.MergedChartWrapper>
          </S.ModalWrapper>
        </Modal>
      </S.RowBox4>

      <S.GridBox>
        {topChart?.map((el) => (
          <S.RankingBox key={el.contents_id}>
            <S.RankingPoster
              src={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
            />
            <S.ColumnBox>
              <S.RowBox>
                <S.RankingNumbers>{el.ranking}</S.RankingNumbers>
                <S.RankingTitle isTitleLong={el.title.length > 10}>
                  {el.title}
                </S.RankingTitle>
              </S.RowBox>
              <S.SubItemsGrayTitle>
                {el.ranking_changed === 0 || el.ranking_changed === null ? (
                  <>-</> // 수치가 0 또는 null일 경우 "-" 출력
                ) : (
                  <span
                    style={{
                      color: el.ranking_changed > 0 ? "#3fe87f" : "#f05650", // 양수면 초록색, 음수면 빨간색
                      fontSize: "16px",
                    }}
                  >
                    {el.ranking_changed > 0
                      ? `▲${el.ranking_changed}`
                      : `▼${-el.ranking_changed}`}
                  </span>
                )}{" "}
                {TypeConvert(el.contents_type)}
              </S.SubItemsGrayTitle>
            </S.ColumnBox>
            <S.RateBox>
              <CircularProgressChart value={el.imad_score} />
            </S.RateBox>
          </S.RankingBox>
        ))}
      </S.GridBox>

      {props.Recommend?.user_activity_recommendation_tv ? (
        <>
          <S.title>내 작품 골라보기</S.title>
          <S.Recommend_Box>
            <S.Gradation_Box1>
              <S.RowBox>
                <S.Recommend_MainTitle>
                  {props.loginData?.nickname} 님을 위한
                  <br />
                  시리즈
                </S.Recommend_MainTitle>
                <S.Recommend_SubTitleBtn>전체보기</S.Recommend_SubTitleBtn>
              </S.RowBox>

              {topUserTv?.map((el) => (
                <S.Recommend_Item key={el.name}>
                  <S.TinyPoster
                    src={
                      el.poster_path
                        ? `https://image.tmdb.org/t/p/original/${el.poster_path}`
                        : "/img/icon/profile/blue.png" // 대체 이미지 경로
                    }
                  />
                  <S.ColumnBox>
                    <S.Recommend_Title>{el.name}</S.Recommend_Title>
                    <S.Recommend_SubTitle>
                      {findGenreNames("tv", el.genre_ids).join(", ")}
                    </S.Recommend_SubTitle>
                  </S.ColumnBox>
                </S.Recommend_Item>
              ))}
            </S.Gradation_Box1>
            <S.Gradation_Box2>
              <S.RowBox>
                <S.Recommend_MainTitle>
                  {props.loginData?.nickname} 님을 위한
                  <br />
                  영화
                </S.Recommend_MainTitle>
                <S.Recommend_SubTitleBtn>전체보기</S.Recommend_SubTitleBtn>
              </S.RowBox>

              {topUserMovie?.map((el) => (
                <S.Recommend_Item key={el.title}>
                  <S.TinyPoster
                    src={
                      el.poster_path
                        ? `https://image.tmdb.org/t/p/original/${el.poster_path}`
                        : "/img/icon/profile/blue.png" // 대체 이미지 경로
                    }
                  />
                  <S.ColumnBox>
                    <S.Recommend_Title>{el.title}</S.Recommend_Title>
                    <S.Recommend_SubTitle>
                      {findGenreNames("tv", el.genre_ids).join(", ")}
                    </S.Recommend_SubTitle>
                  </S.ColumnBox>
                </S.Recommend_Item>
              ))}
            </S.Gradation_Box2>
            <S.Gradation_Box3>
              <S.RowBox>
                <S.Recommend_MainTitle>
                  {props.loginData?.nickname} 님을 위한
                  <br />
                  애니메이션 시리즈
                </S.Recommend_MainTitle>
                <S.Recommend_SubTitleBtn>전체보기</S.Recommend_SubTitleBtn>
              </S.RowBox>

              {topUserAnimationTv?.map((el) => (
                <S.Recommend_Item key={el.name}>
                  <S.TinyPoster
                    src={
                      el.poster_path
                        ? `https://image.tmdb.org/t/p/original/${el.poster_path}`
                        : "/img/icon/profile/blue.png" // 대체 이미지 경로
                    }
                  />
                  <S.ColumnBox>
                    <S.Recommend_Title>{el.name}</S.Recommend_Title>
                    <S.Recommend_SubTitle>
                      {findGenreNames("tv", el.genre_ids).join(", ")}
                    </S.Recommend_SubTitle>
                  </S.ColumnBox>
                </S.Recommend_Item>
              ))}
            </S.Gradation_Box3>
          </S.Recommend_Box>
        </>
      ) : (
        <></>
      )}

      <S.title>월간 작품 랭킹</S.title>
      {/* <S.SubBannerWrapper>
        <StyledSlider {...subsettings}>
          {props?.Ranking?.details_list?.map((el: any, index: any) => (
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
      </S.SubBannerWrapper> */}
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
