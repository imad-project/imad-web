import { IProfileProps } from "./profile_types";
import * as S from "./profile_styles";
import Profile_Modal from "../../../../src/commons/profile_image/profile_modal";
import { useState } from "react";

const AuthArray = [
  { key: "IMAD", label: "아이매드 회원" },
  { key: "KAKAO", label: "카카오 회원" },
  { key: "NAVER", label: "네이버 회원" },
  { key: "APPLE", label: "애플 회원" },
];

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

export default function Profile_UI(props: IProfileProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const authProvider = AuthArray.find(
    (auth) => auth.key === props?.data2?.auth_provider
  );
  const authLabel = authProvider?.label;

  const preferredTVGenres = props?.data2?.preferred_tv_genres.map(
    (id) => tv_genres.find((genre) => genre.id === id)?.name
  );
  const preferredMovieGenres = props?.data2?.preferred_movie_genres.map(
    (id) => movie_genres.find((genre) => genre.id === id)?.name
  );

  return (
    <>
      <S.Wrapper>
        <S.RowWrapper>
          <S.ImgBox onClick={openModal}>
            <S.Profile_image
              src={`https://imad-image-s3.s3.ap-northeast-2.amazonaws.com/profile/${props?.data?.user_profile_image}`}
              className="profile_img"
            />

            <S.ImgSpan className="profile_span">이미지변경</S.ImgSpan>
            <S.Camera_icon
              src="/img/icon/icons/camera.png"
              className="camera_icon"
            />
          </S.ImgBox>
          <Profile_Modal
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
            openModal={openModal}
            closeModal={closeModal}
          />

          <S.ColumnWrapper>
            <S.Icon_box>
              <S.Title>{props?.data?.user_nickname}</S.Title>
              <S.BigIcon src={`/img/icon/icons/${props.data2?.gender}.png`} />
            </S.Icon_box>

            <S.GrayLabel>{authLabel}</S.GrayLabel>
            <S.SubTitle>{props?.data2?.birth_year}년생</S.SubTitle>
          </S.ColumnWrapper>
        </S.RowWrapper>
        <S.Box_wrapper>
          <S.Box onClick={props.onClickMyReview}>
            <S.Span_box>내 리뷰</S.Span_box>
            <S.Span_box>{props?.data?.my_review_cnt}</S.Span_box>
          </S.Box>
          <S.Box onClick={props.onClickMyWrite}>
            <S.Span_box>내 게시물</S.Span_box>
            <S.Span_box>{props?.data?.my_posting_cnt}</S.Span_box>
          </S.Box>
          <S.Box onClick={props.onClickMyScrap}>
            <S.Span_box>내 스크랩</S.Span_box>
            <S.Span_box>{props?.data?.my_scrap_cnt}</S.Span_box>
          </S.Box>
        </S.Box_wrapper>
        <S.GenresBox>
          <S.GenreTitle>내 영화 장르</S.GenreTitle>

          {preferredMovieGenres?.map((genre, index) => (
            <>
              <S.DividedLine />
              <S.GenreItem key={index}>{genre}</S.GenreItem>
            </>
          ))}
        </S.GenresBox>
        <S.GenresBox>
          <S.GenreTitle>내 TV 장르</S.GenreTitle>

          {preferredTVGenres?.map((genre, index) => (
            <>
              <S.DividedLine />
              <S.GenreItem key={index}>{genre}</S.GenreItem>
            </>
          ))}
        </S.GenresBox>
        <S.BookMark_box>
          <S.BookMark_title>내가 찜한 작품</S.BookMark_title>

          {props?.data?.bookmark_list_response?.details_list ? (
            props.data.bookmark_list_response.details_list.length > 0 ? (
              props.data.bookmark_list_response.details_list.map(
                (el, index) => (
                  <S.Movie_box key={el.bookmark_id}>
                    <S.Movie_poster
                      src={`https://image.tmdb.org/t/p/original/${el.contents_poster_path}`}
                    />
                    <S.Movie_title>{el.contents_title}</S.Movie_title>
                  </S.Movie_box>
                )
              )
            ) : (
              <S.NoBookmarks>현재 북마크한 작품이 없습니다.</S.NoBookmarks>
            )
          ) : (
            <S.NoBookmarks>북마크 데이터를 불러오는 중입니다.</S.NoBookmarks>
          )}
        </S.BookMark_box>
      </S.Wrapper>
    </>
  );
}
