import { Fragment } from "react";
import * as S from "./navigation.styles";
import { INavigationUIProps } from "./navigation.types";
import { getCookie } from "../../cookies/cookie";
import { useRouter } from "next/router";
const NAVIGATION_MENUS = [
  { name: "게시판", page: "/board" },
  { name: "작품 검색", page: "/search" },
  { name: "캘린더", page: "/calendar" },
];
export default function NavigationUI(props: INavigationUIProps): JSX.Element {
  const router = useRouter(); // useRouter 사용

  const handleLoginClick = () => {
    const currentUrl = router.asPath; // 현재 URL 경로 가져오기
    router.push(`/login?redirect=${encodeURIComponent(currentUrl)}`);
  };

  return (
    <S.Wrapper>
      <S.Logo
        src={props.isMobile ? "/img/mobile_logo.png" : "/img/logo.png"}
        id="/"
        onClick={props.onClickMenu}
      />

      <S.ItemBox>
        {NAVIGATION_MENUS.map((el) => (
          <Fragment key={el.page}>
            <S.MenuItem id={el.page} onClick={props.onClickMenu}>
              {el.name}
            </S.MenuItem>
          </Fragment>
        ))}
      </S.ItemBox>
      {getCookie("Authorization") ? (
        <S.Nickname
          id="/profile"
          isLong={
            props.userData?.nickname
              ? props.userData?.nickname?.length >= 5
              : false
          }
          onClick={props.onClickMenu}
        >
          {props.userData?.nickname}
        </S.Nickname>
      ) : null}

      {getCookie("Authorization") ? (
        <S.MenuItem id="/" onClick={props.onClickLogout}>
          로그아웃
        </S.MenuItem>
      ) : (
        <S.MenuItem id="/login" onClick={handleLoginClick}>
          로그인
        </S.MenuItem>
      )}
    </S.Wrapper>
  );
}
