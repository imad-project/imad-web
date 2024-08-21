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

export default function Board_Page_UI(props: IBoardProps) {
  const [showCategory, setShowCategory] = useState(false);

  return (
    <S.MainWrapper>
      <S.title_span>내 게시물</S.title_span>
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
                  <h1>{el.user_nickname}</h1>
                </S.RowWrapper>
                <S.WriteBox>
                  <S.reviewContentsWrapper>
                    <S.Poster_title>{el.contents_title}</S.Poster_title>
                    <S.Write_title
                      onClick={() => props.onClickWrite(el.posting_id)}
                    >
                      {el.title} [{el.comment_cnt}]
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
