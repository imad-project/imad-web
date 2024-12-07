import { IProfileProps } from "./profile_types";
import * as S from "./profile_styles";
import Profile_Modal from "../../../../src/commons/profile_image/profile_modal";
import { useState } from "react";
import { useRouter } from "next/router";

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
    name: "액션/모험",
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
    name: "아동",
  },
  {
    id: 9648,
    name: "미스터리",
  },
  {
    id: 10763,
    name: "뉴스",
  },
  {
    id: 10764,
    name: "리얼리티",
  },
  {
    id: 10765,
    name: "SF/판타지",
  },
  {
    id: 10766,
    name: "소프 오페라",
  },
  {
    id: 10767,
    name: "토크",
  },
  {
    id: 10768,
    name: "전쟁/정치",
  },
  {
    id: 37,
    name: "서부",
  },
];

export default function Profile_UI(props: IProfileProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

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

  const DropdownMenu = ({
    onEdit,
    onDelete,
    onReport,
  }: {
    onEdit?: () => void;
    onDelete?: () => void;
    onReport?: () => void;
  }) => (
    <S.DropdownMenu>
      <>
        <S.MenuItem onClick={onEdit} color="#00aaff">
          회원정보 수정
        </S.MenuItem>
        <S.MenuItem onClick={onDelete} color="#00aaff">
          비밀번호 변경
        </S.MenuItem>
        <S.MenuItem onClick={onDelete} color="#f34336">
          회원탈퇴
        </S.MenuItem>
      </>
    </S.DropdownMenu>
  );

  const handleIconClick = () => {
    setIsMenuOpen((prev) => !prev); // 메뉴 열림/닫힘 토글
  };

  const handleEdit = () => {
    router.push(`/profile/edit`);
    setIsMenuOpen(false);
  };

  const handlePasswordEdit = () => {
    setIsMenuOpen(false);
  };

  const handleDelete = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <S.Wrapper>
        <S.IconBox onClick={handleIconClick}>
          <S.Icon src="/img/icon/icons/gearshape.fill.png" />
        </S.IconBox>
        {isMenuOpen && (
          <DropdownMenu
            onEdit={handleEdit}
            onDelete={handlePasswordEdit}
            onReport={handleDelete}
          />
        )}
        <S.RowWrapper>
          <S.ImgBox onClick={props.openModal}>
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
            isModalOpen={props.isModalOpen}
            openModal={props.openModal}
            closeModal={props.closeModal}
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
