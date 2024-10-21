import { Fragment } from "react";
import * as S from "./navigation.styles";
import { INavigationUIProps } from "./navigation.types";
import { getCookie } from "../../cookies/cookie";
const NAVIGATION_MENUS = [
  { name: "게시판", page: "/board" },
  { name: "작품 검색", page: "/search" },
  { name: "캘린더", page: "/calendar" },
];
export default function NavigationUI(props: INavigationUIProps): JSX.Element {
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
        <S.MenuItem id="/profile" onClick={props.onClickMenu}>
          {props.userData?.nickname}
        </S.MenuItem>
      ) : null}

      {getCookie("Authorization") ? (
        <S.MenuItem id="/" onClick={props.onClickLogout}>
          로그아웃
        </S.MenuItem>
      ) : (
        <S.MenuItem id="/login" onClick={props.onClickMenu}>
          로그인
        </S.MenuItem>
      )}
    </S.Wrapper>
  );
}
