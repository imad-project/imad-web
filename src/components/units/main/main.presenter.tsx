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

  @media (max-width: 480px) {
    .slick-dots {
      position: absolute;

      bottom: -40px;
    }
  }
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
      <S.NextTo>
        <S.Arrow src="/img/icon/next.png" />
      </S.NextTo>
    ),
    prevArrow: (
      <S.Pre>
        <S.Arrow src="/img/icon/prev.png" />
      </S.Pre>
    ),
  };

  const subsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    swipeToSlide: true,
    rows: 2,

    nextArrow: (
      <S.NextTo1>
        <S.Arrow src="/img/icon/next.png" />
      </S.NextTo1>
    ),
    prevArrow: (
      <S.Pre1>
        <S.Arrow src="/img/icon/prev.png" />
      </S.Pre1>
    ),
  };

  const onClickClose = () => {
    setIsOpen(false);
  };

  const onClickOpen = () => {
    setIsOpen(true);
  };

  const [isOpen, setIsOpen] = useState(false);

  const [isOpen1, setIsOpen1] = useState(false);

  const [isOpen2, setIsOpen2] = useState(false);

  const [isOpen3, setIsOpen3] = useState(false);

  const onClickOpen1 = () => {
    setIsOpen1(true);
  };

  const onClickClose1 = () => {
    setIsOpen1(false);
  };

  const onClickOpen2 = () => {
    setIsOpen2(true);
  };

  const onClickClose2 = () => {
    setIsOpen2(false);
  };

  const onClickOpen3 = () => {
    setIsOpen3(true);
  };

  const onClickClose3 = () => {
    setIsOpen3(false);
  };

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
            <S.MainBannerBox key={"title" in el ? el.title : el.name}>
              <S.BackgroundImageWrapper
                backgroundUrl={`https://image.tmdb.org/t/p/original/${el.backdrop_path}`}
              />
              <S.BannerContent>
                <S.BannerBox>
                  <S.ImgBox
                    key={"title" in el ? el.title : el.name}
                    url={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
                  >
                    <S.MainSliderItem
                      src={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
                    />
                  </S.ImgBox>
                  <S.MainBannerTitle
                    isTitleLong={
                      "title" in el ? el.title.length > 10 : el.name.length > 10
                    }
                  >
                    {"title" in el ? el.title : el.name}
                  </S.MainBannerTitle>
                  <S.MainBannerSubTitle>
                    {findGenreNames(category, el.genre_ids).join(", ")}
                  </S.MainBannerSubTitle>
                </S.BannerBox>
              </S.BannerContent>
            </S.MainBannerBox>
          ))}
        </StyledSlider>
      </S.MainBannerWrapper>

      <S.RowBox>
        {props.TopReview ? (
          <>
            <S.WriteBox
              onClick={() => {
                props.onClickReview(props.TopReview?.review_id ?? 0);
              }}
            >
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
                  <S.SubItemsSubTitle2>
                    {props.TopReview?.user_nickname}
                  </S.SubItemsSubTitle2>
                </S.RowBox3>
              </S.RowBox2>
            </S.WriteBox>
          </>
        ) : (
          <></>
        )}

        {props.TopWrite ? (
          <>
            <S.WriteBox
              onClick={() => {
                props.onClickWrite(props.TopWrite?.posting_id ?? 0);
              }}
            >
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
                  <S.SubItemsSubTitle2>
                    {props.TopWrite?.user_nickname}
                  </S.SubItemsSubTitle2>
                </S.RowBox3>
              </S.RowBox2>
            </S.WriteBox>
          </>
        ) : (
          <></>
        )}
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
                <S.RankingBox2
                  key={el.contents_id}
                  onClick={() => {
                    props.onClickContentsId(el.contents_id);
                  }}
                >
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
          <S.RankingBox
            key={el.contents_id}
            onClick={() => {
              props.onClickContentsId(el.contents_id);
            }}
          >
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
                <S.Recommend_SubTitleBtn onClick={onClickOpen1}>
                  전체보기
                </S.Recommend_SubTitleBtn>
                <Modal
                  isOpen={isOpen1}
                  onRequestClose={() => onClickClose1()}
                  style={S.customModalStyles}
                  ariaHideApp={false}
                  contentLabel="Pop up Message"
                  shouldCloseOnOverlayClick={true}
                >
                  <S.ModalWrapper>
                    <S.RowBox4>
                      <S.title>내가 좋아할 작품들</S.title>
                      <S.ModalCancel
                        src="/img/icon/cancel.png"
                        onClick={onClickClose1}
                      />
                    </S.RowBox4>
                    {props.Recommend?.user_activity_recommendation_tv?.results.map(
                      (el) => (
                        <S.DetailBox
                          onClick={() => props.onClickTvContents(el.id)}
                        >
                          <S.Recommend_Detail_Item
                            key={el.name}
                            backgroundUrl={
                              el.backdrop_path
                                ? `https://image.tmdb.org/t/p/original/${el.backdrop_path}`
                                : "/img/icon/profile/blue.png" // 대체 이미지 경로
                            }
                          ></S.Recommend_Detail_Item>
                          <S.Middle_Poster
                            src={
                              el.poster_path
                                ? `https://image.tmdb.org/t/p/original/${el.poster_path}`
                                : "/img/icon/profile/blue.png" // 대체 이미지 경로
                            }
                          />
                          <S.ColumnBox>
                            <S.Recommend_Title
                              isTitleLong={el.name?.length > 10}
                            >
                              {el.name}
                            </S.Recommend_Title>
                            <S.Recommend_SubTitle>
                              {findGenreNames("tv", el.genre_ids).join(", ")}
                            </S.Recommend_SubTitle>
                          </S.ColumnBox>
                        </S.DetailBox>
                      )
                    )}
                  </S.ModalWrapper>
                </Modal>
              </S.RowBox>

              {topUserTv?.map((el) => (
                <S.Recommend_Item
                  key={el.name}
                  onClick={() => props.onClickTvContents(el.id)}
                >
                  <S.TinyPoster
                    src={
                      el.poster_path
                        ? `https://image.tmdb.org/t/p/original/${el.poster_path}`
                        : "/img/icon/profile/blue.png" // 대체 이미지 경로
                    }
                  />
                  <S.ColumnBox>
                    <S.Recommend_Title isTitleLong={el.name?.length > 10}>
                      {el.name}
                    </S.Recommend_Title>
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
                <S.Recommend_SubTitleBtn onClick={onClickOpen2}>
                  전체보기
                </S.Recommend_SubTitleBtn>
                <Modal
                  isOpen={isOpen2}
                  onRequestClose={() => onClickClose2()}
                  style={S.customModalStyles}
                  ariaHideApp={false}
                  contentLabel="Pop up Message"
                  shouldCloseOnOverlayClick={true}
                >
                  <S.ModalWrapper>
                    <S.RowBox4>
                      <S.title>내가 좋아할 작품들</S.title>
                      <S.ModalCancel
                        src="/img/icon/cancel.png"
                        onClick={onClickClose2}
                      />
                    </S.RowBox4>
                    {props.Recommend?.user_activity_recommendation_movie?.results.map(
                      (el) => (
                        <S.DetailBox
                          onClick={() => props.onClickMovieContents(el.id)}
                        >
                          <S.Recommend_Detail_Item
                            key={el.title}
                            backgroundUrl={
                              el.backdrop_path
                                ? `https://image.tmdb.org/t/p/original/${el.backdrop_path}`
                                : "/img/icon/profile/blue.png" // 대체 이미지 경로
                            }
                          ></S.Recommend_Detail_Item>
                          <S.Middle_Poster
                            src={
                              el.poster_path
                                ? `https://image.tmdb.org/t/p/original/${el.poster_path}`
                                : "/img/icon/profile/blue.png" // 대체 이미지 경로
                            }
                          />
                          <S.ColumnBox>
                            <S.Recommend_Title
                              isTitleLong={el.title?.length > 10}
                            >
                              {el.title}
                            </S.Recommend_Title>
                            <S.Recommend_SubTitle>
                              {findGenreNames("movie", el.genre_ids).join(", ")}
                            </S.Recommend_SubTitle>
                          </S.ColumnBox>
                        </S.DetailBox>
                      )
                    )}
                  </S.ModalWrapper>
                </Modal>
              </S.RowBox>

              {topUserMovie?.map((el) => (
                <S.Recommend_Item
                  key={el.title}
                  onClick={() => props.onClickMovieContents(el.id)}
                >
                  <S.TinyPoster
                    src={
                      el.poster_path
                        ? `https://image.tmdb.org/t/p/original/${el.poster_path}`
                        : "/img/icon/profile/blue.png" // 대체 이미지 경로
                    }
                  />
                  <S.ColumnBox>
                    <S.Recommend_Title isTitleLong={el.title?.length > 10}>
                      {el.title}
                    </S.Recommend_Title>
                    <S.Recommend_SubTitle>
                      {findGenreNames("movie", el.genre_ids).join(", ")}
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
                <S.Recommend_SubTitleBtn onClick={onClickOpen3}>
                  전체보기
                </S.Recommend_SubTitleBtn>
                <Modal
                  isOpen={isOpen3}
                  onRequestClose={() => onClickClose3()}
                  style={S.customModalStyles}
                  ariaHideApp={false}
                  contentLabel="Pop up Message"
                  shouldCloseOnOverlayClick={true}
                >
                  <S.ModalWrapper>
                    <S.RowBox4>
                      <S.title>내가 좋아할 작품들</S.title>
                      <S.ModalCancel
                        src="/img/icon/cancel.png"
                        onClick={onClickClose3}
                      />
                    </S.RowBox4>
                    {props.Recommend?.user_activity_recommendation_tv_animation?.results.map(
                      (el) => (
                        <S.DetailBox
                          onClick={() => props.onClickTvContents(el.id)}
                        >
                          <S.Recommend_Detail_Item
                            key={el.name}
                            backgroundUrl={
                              el.backdrop_path
                                ? `https://image.tmdb.org/t/p/original/${el.backdrop_path}`
                                : "/img/icon/profile/blue.png" // 대체 이미지 경로
                            }
                          ></S.Recommend_Detail_Item>
                          <S.Middle_Poster
                            src={
                              el.poster_path
                                ? `https://image.tmdb.org/t/p/original/${el.poster_path}`
                                : "/img/icon/profile/blue.png" // 대체 이미지 경로
                            }
                          />
                          <S.ColumnBox>
                            <S.Recommend_Title
                              isTitleLong={el.name?.length > 10}
                            >
                              {el.name}
                            </S.Recommend_Title>
                            <S.Recommend_SubTitle>
                              {findGenreNames("tv", el.genre_ids).join(", ")}
                            </S.Recommend_SubTitle>
                          </S.ColumnBox>
                        </S.DetailBox>
                      )
                    )}
                  </S.ModalWrapper>
                </Modal>
              </S.RowBox>

              {topUserAnimationTv?.map((el) => (
                <S.Recommend_Item
                  key={el.name}
                  onClick={() => props.onClickTvContents(el.id)}
                >
                  <S.TinyPoster
                    src={
                      el.poster_path
                        ? `https://image.tmdb.org/t/p/original/${el.poster_path}`
                        : "/img/icon/profile/blue.png" // 대체 이미지 경로
                    }
                  />
                  <S.ColumnBox>
                    <S.Recommend_Title isTitleLong={el.name?.length > 10}>
                      {el.name}
                    </S.Recommend_Title>
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

      {props.Recommend?.preferred_genre_recommendation_movie ? (
        <>
          <S.title>이런 장르 영화 어떠세요?</S.title>
          <S.SubBannerWrapper>
            <StyledSlider {...subsettings}>
              {props?.Recommend?.preferred_genre_recommendation_movie?.results.map(
                (el) => (
                  <S.BannerContent1
                    onClick={() => props.onClickMovieContents(el.id)}
                  >
                    <S.BannerBox>
                      <S.ImgBox2 key={el.title}>
                        <S.SubSliderItem
                          src={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
                        />
                      </S.ImgBox2>
                      <S.SubSliderTextBox>
                        <S.RankingTitle isTitleLong={el.title?.length > 10}>
                          {el.title}
                        </S.RankingTitle>
                        <S.SubItemsGrayTitle>
                          {findGenreNames(category, el.genre_ids).join(", ")}
                        </S.SubItemsGrayTitle>
                      </S.SubSliderTextBox>
                    </S.BannerBox>
                  </S.BannerContent1>
                )
              )}
            </StyledSlider>
          </S.SubBannerWrapper>
        </>
      ) : (
        <></>
      )}

      {props.Recommend?.preferred_genre_recommendation_tv ? (
        <>
          <S.title>{props.loginData?.nickname}님을 위한 시리즈</S.title>
          <S.SubBannerWrapper>
            <StyledSlider {...subsettings}>
              {props?.Recommend?.preferred_genre_recommendation_tv?.results.map(
                (el) => (
                  <S.BannerContent1
                    onClick={() => props.onClickTvContents(el.id)}
                  >
                    <S.BannerBox>
                      <S.ImgBox2 key={el.name}>
                        <S.SubSliderItem
                          src={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
                        />
                      </S.ImgBox2>
                      <S.SubSliderTextBox>
                        <S.RankingTitle isTitleLong={el.name?.length > 10}>
                          {el.name}
                        </S.RankingTitle>
                        <S.SubItemsGrayTitle>
                          {findGenreNames(category, el.genre_ids).join(", ")}
                        </S.SubItemsGrayTitle>
                      </S.SubSliderTextBox>
                    </S.BannerBox>
                  </S.BannerContent1>
                )
              )}
            </StyledSlider>
          </S.SubBannerWrapper>
        </>
      ) : (
        <></>
      )}

      <S.title>아이매드 엄선 영화</S.title>
      <S.SubBannerWrapper>
        <StyledSlider {...subsettings}>
          {props?.Recommend?.popular_recommendation_movie?.results.map((el) => (
            <S.BannerContent1 onClick={() => props.onClickMovieContents(el.id)}>
              <S.BannerBox>
                <S.ImgBox2 key={el.title}>
                  <S.SubSliderItem
                    src={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
                  />
                </S.ImgBox2>
                <S.SubSliderTextBox>
                  <S.RankingTitle isTitleLong={el.title?.length > 10}>
                    {el.title}
                  </S.RankingTitle>
                  <S.SubItemsGrayTitle>
                    {findGenreNames(category, el.genre_ids).join(", ")}
                  </S.SubItemsGrayTitle>
                </S.SubSliderTextBox>
              </S.BannerBox>
            </S.BannerContent1>
          ))}
        </StyledSlider>
      </S.SubBannerWrapper>

      <S.title>전 세계 사람들이 선택한 시리즈</S.title>
      <S.SubBannerWrapper>
        <StyledSlider {...subsettings}>
          {props?.Recommend?.trend_recommendation_tv?.results.map((el) => (
            <S.BannerContent1 onClick={() => props.onClickTvContents(el.id)}>
              <S.BannerBox>
                <S.ImgBox2 key={el.name}>
                  <S.SubSliderItem
                    src={`https://image.tmdb.org/t/p/original/${el.poster_path}`}
                  />
                </S.ImgBox2>
                <S.SubSliderTextBox>
                  <S.RankingTitle isTitleLong={el.name?.length > 10}>
                    {el.name}
                  </S.RankingTitle>
                  <S.SubItemsGrayTitle>
                    {findGenreNames(category, el.genre_ids).join(", ")}
                  </S.SubItemsGrayTitle>
                </S.SubSliderTextBox>
              </S.BannerBox>
            </S.BannerContent1>
          ))}
        </StyledSlider>
      </S.SubBannerWrapper>
    </S.Wrapper>
  );
}
