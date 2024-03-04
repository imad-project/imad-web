import { Fragment } from "react";
import * as S from "./navigation.styles";
import { INavigationUIProps } from "./navigation.types";
const NAVIGATION_MENUS = [
  { name: "장르추천", page: "/genre" },
  { name: "리뷰", page: "/review" },
  { name: "검색", page: "/search" },
];
export default function NavigationUI(props: INavigationUIProps): JSX.Element {
  return (
    <S.Wrapper>
      <S.Logo src="/img/logo.png" id="/" onClick={props.onClickMenu} />

      <S.ItemBox>
        {NAVIGATION_MENUS.map((el) => (
          <Fragment key={el.page}>
            <S.MenuItem id={el.page} onClick={props.onClickMenu}>
              {el.name}
            </S.MenuItem>
          </Fragment>
        ))}
      </S.ItemBox>
      <S.MenuItem id="/login" onClick={props.onClickMenu}>
        로그인
      </S.MenuItem>
    </S.Wrapper>
  );
}
