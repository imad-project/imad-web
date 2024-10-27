import { IDetailUIProps } from "./search_detail_types";
import * as S from "./search_detail_styles";
import { ChangeEvent, useState } from "react";
import ReactStars from "react-stars";
import { getCookie } from "../../../commons/cookies/cookie";
import axios from "axios";
import { useRouter } from "next/router";
import { getCountryNames } from "@/src/commons/countrycode/countrycode";
import { AgeComponent } from "@/src/commons/agefinder/agefinder";
import { findGenreNames } from "@/src/commons/gerne_finder/gerne_finder";
import CircularProgressWhiteChart from "@/src/commons/rate_view/rate_view_white";

export default function SearchDetailUI(props: IDetailUIProps): JSX.Element {
  const MAX_TITLE_BYTES = 50; // 리뷰 제목 최대 바이트 수
  const MAX_CONTENT_BYTES = 1000; // 리뷰 본문 최대 바이트 수

  const [titleInputCount, setTitleInputCount] = useState<number>(0);
  const [contentInputCount, setContentInputCount] = useState<number>(0);
  const [showTitleWarning, setShowTitleWarning] = useState<boolean>(false); // 리뷰 제목 경고 표시 여부 상태 추가
  const [showContentWarning, setShowContentWarning] = useState<boolean>(false); // 리뷰 본문 경고 표시 여부 상태 추가
  const [rating, setRating] = useState<number>(0);
  const [selectedRating, setSelectdRating] = useState<number>(0);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  const onInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    // 입력된 문자열을 UTF-8로 인코딩하여 바이트 수 계산
    const byteLength = new TextEncoder().encode(e.target.value).length;
    setTitleInputCount(byteLength); // 리뷰 제목의 바이트 수를 표시
    setTitle(e.target.value);

    // 최대 바이트 수를 초과할 경우 경고 표시
    if (byteLength > MAX_TITLE_BYTES) {
      setShowTitleWarning(true);
    } else {
      setShowTitleWarning(false);
    }
  };

  const onTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    // 입력된 문자열을 UTF-8로 인코딩하여 바이트 수 계산
    const byteLength = new TextEncoder().encode(e.target.value).length;
    setContentInputCount(byteLength); // 리뷰 본문의 바이트 수를 표시
    setContent(e.target.value);
    // 최대 바이트 수를 초과할 경우 경고 표시
    if (byteLength > MAX_CONTENT_BYTES) {
      setShowContentWarning(true);
    } else {
      setShowContentWarning(false);
    }
  };

  const ratingChanged = (newRating: number) => {
    console.log(newRating * 2);
    setSelectdRating(newRating);
    setRating(newRating * 2);
    console.log(rating);
  };

  const onClickReviewSubmit = async () => {
    if (!title && !content) {
      alert("리뷰 제목과 본문은 비어있을 수 없습니다.");
    }
    if (showTitleWarning || showContentWarning) {
      // 제목이나 본문의 글자 수 제한을 초과한 경우
      alert("리뷰 제목과 본문은 각각 최대 글자 수를 초과할 수 없습니다.");
      return; // 통신을 수행하지 않고 함수 종료
    }

    if (!getCookie("Authorization")) {
      alert("리뷰등록은 회원만 가능합니다.");
    }

    if (
      title &&
      content &&
      !showTitleWarning &&
      !showContentWarning &&
      getCookie("Authorization") !== undefined
    ) {
      try {
        const PostReview = await axios.post(
          `https://api.iimad.com/api/review`,
          {
            contents_id: props?.data?.contents_id,
            title: title,
            content: content,
            score: rating,
            is_spoiler: false,
          },
          {
            headers: {
              Authorization: `Bearer ${getCookie("Authorization")}`,
            },
          }
        );
        if (PostReview.data.status === 409) {
          alert(PostReview.data.message);
        }
        if (PostReview.status === 200) {
          props.setLike(!props.like);
        }
      } catch (error: any) {
        alert(error?.response?.data?.message);
        console.error("Error occurred posting review:", error);
      }
    } else {
      alert("형식이 올바르지 않습니다");
    }
  };

  const writePush = () => {
    const { category, id } = router.query;
    router.push(`/search/${category}/${id}/write`);
  };

  const [activeSeason, setActiveSeason] = useState<number | null>(null); // 열려있는 시즌의 index 관리

  const handleToggle = (index: number) => {
    setActiveSeason((prev) => (prev === index ? null : index)); // 클릭 시 해당 index가 열리고, 열려 있으면 닫음
  };

  if (!props.data) {
    return <div>Loading...</div>; // 데이터가 로드되지 않은 상태 처리
  }

  return (
    <>
      <S.Wrapper>
        <S.posterWrapper>
          <S.BackdropWrapper
            backgroundUrl={
              props.data?.backdrop_path
                ? `https://image.tmdb.org/t/p/original/${props?.data?.backdrop_path}`
                : null
            }
          />
          <S.titleWrapper>
            <S.RowBox>
              <S.subtitleBox>
                <S.mediaType>{props?.data?.contents_type}</S.mediaType>
                <S.subtitle>최초공개일</S.subtitle>
                <S.FilterSubtitle>
                  {props?.data?.release_date || props.data?.first_air_date}
                </S.FilterSubtitle>
              </S.subtitleBox>
              <S.RateBox>
                <CircularProgressWhiteChart value={props.data?.imad_score} />
              </S.RateBox>
            </S.RowBox>
            <S.TopMarginBox>
              <S.subtitleBox>
                <S.MainTitle>
                  {props?.data?.name || props?.data?.title}
                </S.MainTitle>
                <S.MainSubTitle>
                  {props?.data?.original_title || props.data?.original_name}
                </S.MainSubTitle>
              </S.subtitleBox>
            </S.TopMarginBox>
          </S.titleWrapper>
          <S.ImgWrapper>
            <S.ImgBox
              src={`https://image.tmdb.org/t/p/original/${props?.data?.poster_path}`}
              alt="Poster"
            />
          </S.ImgWrapper>
        </S.posterWrapper>

        <S.Line />
        <S.subWrapper>
          <S.title>원재</S.title>
          <S.subtitle>
            {props.data?.name || props.data?.title}(
            {props.data?.original_name || props.data?.original_title})
          </S.subtitle>
          <S.RowBox>
            <div>
              <S.title>국가</S.title>
              <S.subtitle>
                {props.data?.production_countries
                  ? getCountryNames(props.data?.production_countries)
                  : null}
              </S.subtitle>
            </div>

            <S.LeftMarginBox>
              <S.title>연령등급</S.title>
              <AgeComponent
                id={
                  props.data?.certification ? props.data?.certification : "NONE"
                }
              />
            </S.LeftMarginBox>
          </S.RowBox>
          <S.title>장르</S.title>
          <S.subtitle>
            {props.data
              ? findGenreNames(
                  (props.data?.tmdb_type || "TV").toLowerCase(),
                  props.data?.genres
                ).join(", ")
              : null}
          </S.subtitle>

          {props.data?.runtime ? (
            <>
              <S.title>상영시간</S.title>
              <S.subtitle>{props.data?.runtime}분</S.subtitle>
            </>
          ) : (
            <></>
          )}

          {props.data?.seasons ? (
            <>
              <S.title>시즌</S.title>
              <S.subtitle>
                {props.data?.number_of_seasons}부작 -{" "}
                {props.data?.number_of_episodes}개의 에피소드
              </S.subtitle>
            </>
          ) : (
            <></>
          )}
          <S.title>방송사</S.title>
          {props.data?.networks ? (
            <>
              {props.data.networks.map((el) => (
                <S.broadImg
                  src={`https://image.tmdb.org/t/p/original/${el.logo_path}`}
                />
              ))}
            </>
          ) : (
            <S.subtitle>없음</S.subtitle>
          )}
          <S.title>개요</S.title>
          <S.subtitle>{props?.data?.overview || "없음"}</S.subtitle>
          {props.data?.seasons ? (
            <>
              <S.title>시즌정보</S.title>
              <S.SeasonDataBox>
                {props.data?.seasons.map((el, index: number) => (
                  <S.SeasonDataItem
                    key={el.season_number}
                    isVisible={activeSeason === index}
                  >
                    <S.SeasonDataPosterBox onClick={() => handleToggle(index)}>
                      <S.SeasonDataPoster
                        src={
                          el.poster_path
                            ? `https://image.tmdb.org/t/p/original/${el.poster_path}`
                            : `https://image.tmdb.org/t/p/original/${props.data?.poster_path}`
                        }
                      />
                      <S.TopMarginLittleBox>
                        <S.subtitle>{el.name}</S.subtitle>
                      </S.TopMarginLittleBox>
                    </S.SeasonDataPosterBox>

                    {activeSeason === index && (
                      <S.SeasonDataWriteBox>
                        <S.SubWhiteTitle>시즌명</S.SubWhiteTitle>
                        <S.SubGrayTitle>{el.name}</S.SubGrayTitle>
                        <S.SubWhiteTitle>시즌넘버</S.SubWhiteTitle>
                        <S.SubGrayTitle>{el.season_number}</S.SubGrayTitle>
                        <S.SubWhiteTitle>최초 공개일</S.SubWhiteTitle>
                        <S.SubGrayTitle>{el.air_date || "미정"}</S.SubGrayTitle>
                        <S.SubWhiteTitle>에피소드</S.SubWhiteTitle>
                        <S.SubGrayTitle>{el.episode_count}부작</S.SubGrayTitle>
                      </S.SeasonDataWriteBox>
                    )}
                  </S.SeasonDataItem>
                ))}
              </S.SeasonDataBox>
            </>
          ) : (
            <></>
          )}
        </S.subWrapper>

        <S.Line />
        <S.reviewWrapper>
          <S.RowWrapper>
            <h1>이 작품 어떠셨나요?</h1>
          </S.RowWrapper>
          <S.reviewBox>
            <S.reviewContentsWrapper>
              <S.reviewInput
                onChange={onInputHandler}
                placeholder="리뷰 제목을 입력해주세요"
              />
              <p>
                <span>{titleInputCount} /50 bytes</span>
              </p>
              {showTitleWarning && (
                <p style={{ color: "red" }}>
                  리뷰 제목은 최대 50바이트를 초과할 수 없습니다.
                </p>
              )}

              <S.reviewTextArea
                onChange={onTextareaHandler}
                placeholder="리뷰 본문을 입력해주세요 리뷰작성은 회원만 가능합니다 로그인후 시도해주세요!"
              />
              <p>
                <span>{contentInputCount}/1000 bytes</span>
              </p>
              {showContentWarning && (
                <p style={{ color: "red" }}>
                  리뷰 본문은 최대 1000바이트를 초과할 수 없습니다.
                </p>
              )}
              <span>평점: {rating}/10</span>
              <ReactStars
                count={5}
                value={selectedRating}
                size={24}
                onChange={ratingChanged}
                half={true}
              />
            </S.reviewContentsWrapper>
          </S.reviewBox>

          <S.Line />
          <S.buttonBox>
            <S.reviewSubmitButton onClick={onClickReviewSubmit}>
              리뷰 등록
            </S.reviewSubmitButton>
          </S.buttonBox>
        </S.reviewWrapper>
        <S.Line />

        {props.review?.details_list.map((el) => (
          <div key={el.review_id}>
            <S.reviewWrapper>
              <S.RowWrapper>
                <S.avatar src="/img/icon/avatar.png" />
                <h1>{el.user_nickname}</h1>
              </S.RowWrapper>
              <S.reviewBox>
                <S.reviewContentsWrapper>
                  <h2>{el.title}</h2>

                  <h2>{el.content}</h2>
                  <h3>평점: {el.score}</h3>
                  <ReactStars
                    count={5}
                    value={el.score / 2}
                    size={24}
                    edit={false}
                    half={true}
                  />
                </S.reviewContentsWrapper>
                <S.likeCntBox>
                  좋아요:{el.like_cnt}
                  싫어요:{el.dislike_cnt}
                </S.likeCntBox>
              </S.reviewBox>

              <S.Line />
              <S.likeWrapper>
                <S.likeButton onClick={() => props.onClickLike(el.review_id)}>
                  좋아요
                </S.likeButton>
                <S.likeButton
                  onClick={() => props.onClickDisLike(el.review_id)}
                >
                  싫어요
                </S.likeButton>
              </S.likeWrapper>
            </S.reviewWrapper>
          </div>
        ))}
        <S.reviewWrapper>
          <S.buttonBox>
            <S.reviewSubmitButton onClick={props.onClickWrite}>
              게시물 작성
            </S.reviewSubmitButton>
          </S.buttonBox>
        </S.reviewWrapper>
      </S.Wrapper>
    </>
  );
}
