import { IProfileProps } from "./other_profile_types";
import * as S from "./other_profile_styles";
import Profile_Modal from "../../../commons/profile_image/profile_modal";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import ReactModal from "react-modal";
import revoke from "../../../commons/revoke/revoke";

export default function Profile_UI(props: IProfileProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <S.Wrapper>
        <S.RowWrapper>
          <S.ImgBox onClick={props.openModal}>
            <S.Profile_image
              src={`https://imad-image-s3.s3.ap-northeast-2.amazonaws.com/profile/${props?.data?.user_profile_image}`}
              className="profile_img"
            />
          </S.ImgBox>

          <S.ColumnWrapper>
            <S.Icon_box>
              <S.Title>{props?.data?.user_nickname}</S.Title>
            </S.Icon_box>
          </S.ColumnWrapper>
        </S.RowWrapper>
        <S.subBtn2 onClick={props.onClickBack}>← 이전으로</S.subBtn2>
        <S.subBtn onClick={props.onClickReport}>신고 및 차단</S.subBtn>
        <S.Box_wrapper>
          <S.Box>
            <S.Span_box>리뷰</S.Span_box>
            <S.Span_box>{props?.data?.my_review_cnt}</S.Span_box>
          </S.Box>
          <S.Box>
            <S.Span_box>게시물</S.Span_box>
            <S.Span_box>{props?.data?.my_posting_cnt}</S.Span_box>
          </S.Box>
          <S.Box>
            <S.Span_box>스크랩</S.Span_box>
            <S.Span_box>{props?.data?.my_scrap_cnt}</S.Span_box>
          </S.Box>
        </S.Box_wrapper>

        <S.BookMark_box>
          <S.BookMark_title>
            {props?.data?.user_nickname}님이 찜한 작품
          </S.BookMark_title>

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
