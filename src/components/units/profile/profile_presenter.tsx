import { IProfileProps } from "./profile_types";
import * as S from "./profile_styles";
import Profile_Modal from "../../../../src/commons/profile_image/profile_modal";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import ReactModal from "react-modal";
import revoke from "../../../../src/commons/revoke/revoke";

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

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // 768px 이하를 모바일로 간주
    };

    handleResize(); // 초기 화면 크기 체크
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize); // 이벤트 제거
    };
  }, []);

  // 커스텀 버튼 스타일
  const CustomButton = styled.button`
    background-color: #008cba;
    color: white;
    padding: 12px 24px;
    font-size: 16px;
    border: none;
    border-radius: 4px;
    position: absolute;

    right: 10px;
    top: 10px;
    cursor: pointer;
    &:hover {
      background-color: #007bb5;
    }
  `;

  // 모달 스타일 (react-modal의 인라인 스타일링)
  const customModalStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",

      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      width: isMobile ? "95%" : "80%", // 모바일: 95%, 데스크톱: 80%
      height: isMobile ? "80%" : "70%", // 모바일: 60%, 데스크톱: 70%
      padding: "20px",
      borderRadius: "10px",
      boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.2)",
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      zIndex: 10, // z-index 추가
    },
  };

  const Row_box = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 50px;
  `;

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
    onPasswordEdit,
    isImad,
  }: {
    onEdit?: () => void;
    onDelete?: () => void;
    onPasswordEdit?: () => void;
    isImad: string;
  }) => (
    <S.DropdownMenu>
      {isImad == "IMAD" ? (
        <>
          <S.MenuItem onClick={onEdit} color="#00aaff">
            회원정보 수정
          </S.MenuItem>
          <S.MenuItem onClick={onPasswordEdit} color="#00aaff">
            비밀번호 변경
          </S.MenuItem>
          <S.MenuItem onClick={onDelete} color="#f34336">
            회원탈퇴
          </S.MenuItem>
        </>
      ) : (
        <>
          <S.MenuItem onClick={onEdit} color="#00aaff">
            회원정보 수정
          </S.MenuItem>

          <S.MenuItem onClick={onDelete} color="#f34336">
            회원탈퇴
          </S.MenuItem>
        </>
      )}
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
    setIsMenuOpen(false); // 상태를 닫기

    setTimeout(() => {
      props.openModal2(); // 모달 열기
    }, 20); // 상태 업데이트 후 모달 열기
  };

  const handleDelete = async () => {
    try {
      await revoke(props.data2?.auth_provider ? props.data2.auth_provider : "");

      setIsMenuOpen(false);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <S.Wrapper>
        <S.IconBox onClick={handleIconClick}>
          <S.Icon src="/img/icon/icons/gearshape.fill.png" />
          {isMenuOpen && (
            <DropdownMenu
              onEdit={handleEdit}
              onPasswordEdit={handlePasswordEdit}
              onDelete={handleDelete}
              isImad={
                props.data2?.auth_provider ? props.data2?.auth_provider : ""
              }
            />
          )}
        </S.IconBox>

        <ReactModal
          isOpen={props.isModalOpen2}
          onRequestClose={props.closeModal2}
          style={customModalStyles}
          contentLabel="Image Upload Modal"
        >
          <S.ModalWrapper>
            <CustomButton onClick={props.closeModal2}>닫기</CustomButton>
            <Row_box>
              <h2>비밀번호 변경</h2>
            </Row_box>
            <S.InputBox>
              <S.SubTitle>기존 비밀번호</S.SubTitle>
              <S.Input
                type="password"
                onChange={props.onChangeOriginPassWord}
              />
              <S.SubTitle>새 비밀번호</S.SubTitle>
              <S.Input2 type="password" onChange={props.onChangePassWord} />

              {props.passwordIsChecked ? (
                <S.AlertSpan2 color="green">
                  공백 미포함 영문 숫자 조합 8자리 이상
                </S.AlertSpan2>
              ) : (
                <S.AlertSpan2 color="gray">
                  공백 미포함 영문 숫자 조합 8자리 이상
                </S.AlertSpan2>
              )}

              <S.SubTitle>새 비밀번호 확인</S.SubTitle>
              <S.Input type="password" onChange={props.onChangePassWord2} />

              <S.LoginBtn onClick={props.CHANGE_PASSWORD}>
                비밀번호 변경
              </S.LoginBtn>
            </S.InputBox>
          </S.ModalWrapper>
        </ReactModal>
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
                      onClick={() => props.onClickPoster(el.contents_id)}
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
