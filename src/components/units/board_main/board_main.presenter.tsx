import { IBoardProps } from "./board_main.types";
import * as S from "./board_main.styles";
import { elapsedTime } from "@/src/commons/date/date";
import { useState } from "react";

const categoryList = [
  {
    id: 0,
    class: "전체",
  },
  {
    id: 1,
    class: "자유글",
  },
  {
    id: 2,
    class: "질문글",
  },
  {
    id: 3,
    class: "토론글",
  },
];
const orderList = [
  {
    id: 1,
    class: "내림차순",
  },
  {
    id: 0,
    class: "오름차순",
  },
];
const sortList = [
  {
    id: 0,
    class: "createdDate",
    name: "최신순",
  },
  {
    id: 1,
    class: "likeCnt",
    name: "좋아요순",
  },
  {
    id: 2,
    class: "dislikeCnt",
    name: "싫어요순",
  },
];

export default function Board_Page_UI(props: IBoardProps) {
  const [showCategory, setShowCategory] = useState(false);
  const [showOrder, setShowOrder] = useState(false);
  const [showSort, setShowSort] = useState(false);

  return (
    <S.MainWrapper>
      <S.title_span>게시판</S.title_span>

      <S.SplitRowBox>
        <S.RowBox1>
          {/* 카테고리 변경선택박스 */}
          <S.SelectBox onClick={() => setShowCategory((prev) => !prev)}>
            <S.Label>{props.currentCategory}</S.Label>
            <div>
              {showCategory && (
                <S.SelectOptions>
                  {categoryList.map((el) => (
                    <S.Option
                      key={el.id}
                      data-value={el.class}
                      data-id={el.id}
                      onClick={props.onChangeCategory}
                    >
                      {el.class}
                    </S.Option>
                  ))}
                </S.SelectOptions>
              )}
            </div>
          </S.SelectBox>
          {/* 정렬순 변경 선택박스 (오름차순,내림차순) */}
          <S.SelectBox onClick={() => setShowOrder((prev) => !prev)}>
            <S.Label>{props.currentOrder}</S.Label>
            <div>
              {showOrder && (
                <S.SelectOptions>
                  {orderList.map((el) => (
                    <S.Option
                      key={el.id}
                      data-value={el.class}
                      data-id={el.id}
                      onClick={props.onChangeOrder}
                    >
                      {el.class}
                    </S.Option>
                  ))}
                </S.SelectOptions>
              )}
            </div>
          </S.SelectBox>
          {/* 정렬 분류 변경 선택박스 (최신순,좋아요순) */}
          <S.SelectBox onClick={() => setShowSort((prev) => !prev)}>
            <S.Label>{props.currentSort}</S.Label>
            <div>
              {showSort && (
                <S.SelectOptions>
                  {sortList.map((el) => (
                    <S.Option
                      key={el.id}
                      data-value={el.name}
                      data-id={el.class}
                      onClick={props.onChangeSort}
                    >
                      {el.name}
                    </S.Option>
                  ))}
                </S.SelectOptions>
              )}
            </div>
          </S.SelectBox>
        </S.RowBox1>

        <S.RowBox2>
          <S.SearchInput
            type="text"
            placeholder="검색어를 입력해주세요!"
            value={props.query}
            onChange={props.onChangeQuery}
          />

          <S.SearchButton onClick={props.onClickSearch}>검색</S.SearchButton>
        </S.RowBox2>
      </S.SplitRowBox>

      {props.writeData?.details_list.map((el) => (
        <div key={el.posting_id}>
          <S.writeWrapper>
            <S.RowWrapper>
              <S.PosterBox onClick={() => props.onClickPoster(el.contents_id)}>
                <S.Poster_img
                  id={el.contents_id.toString()}
                  src={`https://image.tmdb.org/t/p/original/${el.contents_poster_path}`}
                />
              </S.PosterBox>
              <S.ColumnBox>
                <S.RowWrapper>
                  <S.avatar
                    src={`https://imad-image-s3.s3.ap-northeast-2.amazonaws.com/profile/${el.user_profile_image}`}
                  />
                  <S.UserName>{el.user_nickname}</S.UserName>
                </S.RowWrapper>
                <S.WriteBox>
                  <S.reviewContentsWrapper>
                    <S.Poster_title>{el.contents_title}</S.Poster_title>
                    <S.Write_title
                      onClick={() => props.onClickWrite(el.posting_id)}
                    >
                      {el.reported
                        ? "신고된 게시물 입니다."
                        : el.spoiler
                        ? "스포일러가 포함된 게시물 입니다."
                        : el.title}{" "}
                      [{el.comment_cnt}]
                    </S.Write_title>
                    <S.DividedLine />
                    <S.RowWrapper>
                      <S.View_cnt_span>조회수 {el.view_cnt}회</S.View_cnt_span>
                      <S.likeDiv>
                        <S.LittleIcon src="/img/icon/icons/arrowshape.up.png" />
                        {el.like_cnt}
                      </S.likeDiv>
                      <S.likeDiv>
                        <S.LittleIcon src="/img/icon/icons/arrowshape.down.png" />
                        {el.dislike_cnt}
                      </S.likeDiv>
                      <S.Date_span>{elapsedTime(el.created_at)}</S.Date_span>
                    </S.RowWrapper>
                  </S.reviewContentsWrapper>
                </S.WriteBox>
              </S.ColumnBox>
            </S.RowWrapper>
          </S.writeWrapper>
        </div>
      ))}
    </S.MainWrapper>
  );
}
